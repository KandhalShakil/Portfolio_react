const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const portfolioData = require('./portfolioData');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const GROQ_API_KEY = process.env.GROQ_API_KEY || process.env.REACT_APP_GROQ_API_KEY;
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'chatbot-backend' });
});

const formatReadableReply = (text) => {
  if (!text || typeof text !== 'string') return '';

  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/^\s*[-*]\s+/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    if (!GROQ_API_KEY) {
      return res.status(500).json({ error: 'Server is missing GROQ_API_KEY.' });
    }

    const formattedHistory = Array.isArray(history)
      ? history
          .filter((item) => item && typeof item.content === 'string' && (item.role === 'user' || item.role === 'assistant'))
          .slice(-10)
      : [];

    const systemPrompt = `You are a helpful AI assistant for ${portfolioData.personal.name}'s developer portfolio. Here's the portfolio information:

NAME: ${portfolioData.personal.name}
TITLE: ${portfolioData.personal.title}
ABOUT: ${portfolioData.personal.about}
EMAIL: ${portfolioData.personal.email}
WEBSITE: ${portfolioData.personal.website}

SKILLS:
- Frontend: ${portfolioData.skills.frontend.join(', ')}
- Backend: ${portfolioData.skills.backend.join(', ')}
- Databases: ${portfolioData.skills.databases.join(', ')}
- Cloud: ${portfolioData.skills.cloud.join(', ')}
- Tools: ${portfolioData.skills.tools.join(', ')}

PROJECTS (${portfolioData.projects.length} total):
${portfolioData.projects.map((p, i) => `${i + 1}. ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

EDUCATION:
${portfolioData.education.map(e => `- ${e.degree} at ${e.school} (${e.duration})`).join('\n')}

CERTIFICATIONS (${portfolioData.certifications.length} total):
${portfolioData.certifications.map(c => `- ${c.name} from ${c.issuer}`).join('\n')}

CONTACT LINKS:
- GitHub: ${portfolioData.personal.github}
- LinkedIn: ${portfolioData.personal.linkedin}
- Twitter: ${portfolioData.personal.twitter}
- Email: ${portfolioData.personal.email}

Guidelines:
- Respond naturally and conversationally, using proper line breaks and spacing for readability.
- Structure your response clearly with short paragraphs.
- When discussing multiple items (skills, projects, certificates), list each item on a separate line.
- Keep answers readable and well-formatted in plain text.
- Do not use markdown formatting symbols such as *, **, #, _, or backticks.
- For project-related questions, use this plain-text format:
  Here are the projects I'm proud to showcase:

  Project 1: Project Name
  One-line description
  (Tech: stack)

  Project 2: Project Name
  One-line description
  (Tech: stack)

  Continue for all available projects, then end with:
  Which one would you like to know more about?
- For certification-related questions, always follow this format exactly:
  Kandhal Shakil has completed multiple certifications to strengthen his skills in computer science and web development. These include:

  Introduction to Java - Coursera
  Inheritance and Data Structures in Java - Coursera
  Introduction to HTML, CSS, & JavaScript - Coursera
  Exploratory Data Analysis for Machine Learning - Coursera
  Developing Front-End Applications with React - Coursera
  Back-End Development with .NET - Coursera
  Prompt Engineering: The Skill of Asking AI Right - Wayspire

  These certifications reflect his continuous learning approach and focus on building strong fundamentals in programming, web development, and machine learning.
- Do not invent certificates. Use only the certifications listed above.
- If asked for contact, provide relevant links on separate lines.
- If question is outside portfolio scope, politely redirect to portfolio topics.
- Always be helpful and represent the developer positively.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...formattedHistory,
          { role: 'user', content: message.trim() }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const apiErrorText = await response.text();
      return res.status(502).json({ error: 'Upstream AI request failed.', details: apiErrorText });
    }

    const data = await response.json();
    const rawReply = data?.choices?.[0]?.message?.content?.trim();
    const reply = formatReadableReply(rawReply);

    if (!reply) {
      return res.status(502).json({ error: 'AI returned an empty response.' });
    }

    return res.json({ reply });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error.', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot backend running on http://localhost:${PORT}`);
});

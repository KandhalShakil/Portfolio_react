// server.js (Express backend)
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/validate-email", async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
   const response = await fetch(
  `https://app.emailverify.io/api/v1/validate?key=${process.env.EMAIL_VERIFY_API_KEY}&email=${encodeURIComponent(email)}`
);

    if (!response.ok) {
      throw new Error(`Email API failed: ${response.status}`);
    }

    const data = await response.json();

    // Standardize response for frontend
    res.json({ status: data.status || "invalid", raw: data });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Proxy server running on port ${PORT}`));

export default function handler(req, res) {
  res.status(200).json({
    nodeVersion: process.version,
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL ? "EXISTS" : "MISSING",
    googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY.substring(0, 30) + "..."
      : "MISSING",
  });
}

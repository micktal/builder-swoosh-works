import type { RequestHandler } from "express";

export const handleContact: RequestHandler = (req, res) => {
  const { name, company, email, phone, subject, message } = req.body ?? {};
  // In a real app, forward to CRM/email service. For now, acknowledge receipt.
  if (!name || !email || !subject) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }
  res.json({ ok: true, received: { name, company, email, phone, subject, message } });
};

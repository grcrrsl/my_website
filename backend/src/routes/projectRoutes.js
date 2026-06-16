import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "My Portfolio Website"
    }
  ]);
});

export default router;
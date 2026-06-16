import Visitor from "../models/Visitor.js";

export const incrementVisitor = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = await Visitor.create({
        count: 0,
      });
    }

    visitor.count += 1;
    await visitor.save();

    res.json({
      count: visitor.count,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getVisitorCount = async (req, res) => {
  try {
    const visitor = await Visitor.findOne();

    res.json({
      count: visitor?.count || 0,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
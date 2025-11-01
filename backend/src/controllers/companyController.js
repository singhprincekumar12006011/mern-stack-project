import Company from "../models/companyModel.js";



export const create = async (req, res) => {
  try {
    const {
      date,
      items, // expecting an array of items
      description,
      category,
      BuyerName,
      totalPrice,
      paidBy,
      remarks,
    } = req.body;

    // Validation
    if (!date || !items || !Array.isArray(items) || items.length === 0 || !category || !BuyerName || !totalPrice || !paidBy) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields and add at least one item.",
      });
    }

    // Validate each item in the array
    for (const item of items) {
      if (!item.itemName || !item.price) {
        return res.status(400).json({
          success: false,
          message: "Each item must include 'itemName' and 'price'.",
        });
      }
    }

    const newCompany = new Company({
      date,
      item: items,
      description,
      category,
      BuyerName,
      totalPrice,
      paidBy,
      remarks,
    });

    await newCompany.save();

    res.status(201).json({
      success: true,
      message: "Company inventory record created successfully.",
      data: newCompany,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message,
    });
  }
};

// ======================= GET ALL =========================
export const getAll = async (req, res) => {
  try {
    const data = await Company.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message,
    });
  }
};

// ======================= DELETE =========================
export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Company.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Record not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Record deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message,
    });
  }
};

// ======================= UPDATE =========================
export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;

    // Optional: validation for updated items array
    if (req.body.item && (!Array.isArray(req.body.item) || req.body.item.length === 0)) {
      return res.status(400).json({
        success: false,
        message: "Item field must be a non-empty array.",
      });
    }

    const updated = await Company.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Record not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Record updated successfully.",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message,
    });
  }
};

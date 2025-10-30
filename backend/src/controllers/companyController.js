import Company from "../models/companyModel.js";

export const create = async (req, res) => {
  try {
    const {
      date,
      itemName,
      itemNumber,
      description,
      category,
      price,
      BuyerName,
      remarks,
    } = req.body;

    // validation
    if (!date || !itemName || !category || !price || !BuyerName) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    const newCompany = new Company({
      date,
      itemName,
      itemNumber,
      description,
      category,
      price,
      BuyerName,
      remarks,
    });

    await newCompany.save();
    res.status(201).json({
      message: "Company inventory record created successfully",
      data: newCompany,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await Company.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Company.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Company.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({
      message: "Record updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


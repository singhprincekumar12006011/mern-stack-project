import mongoose from "mongoose";

const companySecham = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemNumber: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    BuyerName: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySecham);
export default Company;

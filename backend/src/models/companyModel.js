import mongoose from "mongoose";

const companySecham = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    item: [
      {
        itemName: {
          type: String,
          required: true,
        },
        itemNumber: {
          type: String,
        },
        price: {
          type: String,
          required: true,
        },
      },
    ],
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    BuyerName: {
      type: String,
      required: true,
    },
    totalPrice: {
      type : String,
      required : true
    },
    paidBy : {
      type : String,
      required : true
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySecham);
export default Company;

import UserDetail from "../models/userDetailModel.js";

export const getUserDetail = async (req,res) => {
    try {
        // find the user based on user id
        const userDetails = await UserDetail.findOne({user : req.user.id});

        if(!userDetails){
            return res.json({
                success : false,
                message : "Please update your profile"
            })
        }
        res.json(userDetails)
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })       
    }
}


export const createUserDetails = async (req, res) => {
  try {
    const {
      user, // comes from frontend for now
      address,
      phone,
      countryCode,
      age,
      gender,
      height,
      weight,
      plan,
      expireOn,
      joiningDate
    } = req.body;

    const existUserDetails = await UserDetail.findOne({ user });

    if (existUserDetails) {
      return res.json({ success: false, message: "User exists! Please update your profile" });
    }

    const details = new UserDetail({
      user,
      address,
      phone,
      countryCode,
      age,
      gender,
      height,
      weight,
      plan,
      expireOn,
      joiningDate
    });

    await details.save();
    res.status(201).json({ success: true, details });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateUserDetails = async (req, res) => {
    try {
        const update = await userDetail.findOneAndUpdate({user: req.user.id}, { $set :req.body}, {new: true});
        if(!update){
            return res.status(404).json({success: false, message: "User doesn't exist!"})
        }
        res.status(200).json({success: true, update})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message})
    }
}



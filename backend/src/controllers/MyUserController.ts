import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const exsistingUser = await User.findOne({ auth0Id });

    if (exsistingUser) {
      return res.status(200).json({message:"User already exsists"})
    }

    const newUser = new User(req.body);
    await newUser.save();

    
    

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating the user" });
  }
};

export default {
  createCurrentUser,
};

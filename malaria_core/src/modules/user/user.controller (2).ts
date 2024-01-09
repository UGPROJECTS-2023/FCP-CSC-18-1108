import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { User, UserModel } from './user.model';
import { RegisterUserBody } from './user.schema';
import { createUser, findUserById } from './user.service';

export async function registerUserHandler(req: Request, res: Response) {
  const { first_name, last_name, email, password } = req.body;

  try {
    if (!first_name || !last_name || !email || !password) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'All fields are required',
      });
      return;
    }

    const user = await createUser({ ...req.body });
     const alreadyExists = await UserModel.findOne({ email: user.email });
   
    return res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: 'User created successfully' });
  } catch (e: any) {
    console.log(e);
    if (e.code === 11000 && e.keyValue.email) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ success: false, message: 'User already exists and under verification' });
    }
    
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: e.message });
  }
}

export async function getCurrentUserHandler(req: Request, res: Response) {
  const user_id = res.locals.user._id;

  try {

    const user = await findUserById(user_id);

    if (!user) {
      return res
        .status(500)
        .json({ status: "success", message: "unauthorized request" });
    }

    return res.status(200).json({
      status: "success",
      message: "user data",
      data: { user },
    });
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ status: "failed", message: error.message });
  }
}
export async function getUnverifiedUserHandler(req: Request, res: Response) {

try {
    const User = await UserModel.find({ verified: false});
    return res
      .status(200)
      .json({ status: 'success', message: 'Symptoms List', data: User });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}
export async function getVerifiedUserHandler(req: Request, res: Response) {
try {
    const User = await UserModel.find({ verified: true});
    return res
      .status(200)
      .json({ status: 'success', message: 'Symptoms List', data: User });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}
export async function VerifyUserHandler(req: Request, res: Response) {
 
  const _id = req.body.verify;

  console.log(_id)
try {
    const User = await UserModel.findOneAndUpdate({ _id: _id }, { verified: true });
    return res
      .status(200)
      .json({ status: 'success', message: 'Symptoms List', data: User });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}
export async function unVerifyUserHandler(req: Request, res: Response) {
 
  const _id = req.body.verify;

  console.log(_id)
try {
    const User = await UserModel.findOneAndUpdate({ _id: _id }, { verified: false });
    return res
      .status(200)
      .json({ status: 'success', message: 'Symptoms List', data: User });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}

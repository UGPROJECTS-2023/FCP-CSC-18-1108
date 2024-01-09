import busboy from 'busboy';
import fs from 'fs';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Symptom, SymptomModel } from './symptom.model';
import { createSymptom, findSymptom } from './symptom.service';
import { UserModel } from '../user/user.model';
import { updateSymptomBody, updateSymptomParams } from './symptom.schema';

export async function createSymptomHandler(
  req: Request,
  res: Response
) {
  // const { _id: userId } = res.locals.user;

  try {
 
    const existingSymptom = await SymptomModel.findOne({ name: req.body.name })
    if (existingSymptom) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ success: false, message: 'Symptom already exists' });
    }
    const Symptom = await createSymptom({ ...req.body});
    
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Symptom created successfully!',
      data: Symptom,
    });
  } catch (err: any) {
    console.log(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}
export async function hasMalariaHandler(
  req: Request,
  res: Response
) {
  // const { _id: userId } = res.locals.user;

  try {
    const userSymptoms = req.body.newSymptoms;
    SymptomModel.find({ required: true }).then((symptoms) => {
      let hasMalaria = false;
      symptoms.map((symptom) => {
        if (userSymptoms.length > 3) {
          if (userSymptoms.includes(symptom.name)) {
            hasMalaria = true;
          }
        };
      });
      // if (userSymptoms.length < 4) {
      //   hasMalaria = false;
      //    res.status(200).json({ message: 'Please We need more symptoms', hasMalaria: hasMalaria });
      // }

       if (hasMalaria) {
                res.status(200).json({ message: 'User has malaria', hasMalaria: hasMalaria });
            } else {
                res.status(200).json({ message: 'User does not have malaria', hasMalaria: hasMalaria });
            }
        }
    );


   

   
  
  // if (symptoms.includes('Fever') &&  symptoms.includes('Headache') ) {
  //   return res.json({ diagnosis: 'Possible malaria', hasMalaria: true });
  // } else {
  //   return res.json({ diagnosis: 'Not likely malaria', hasMalaria: false });
  // }
  } catch (err: any) {
    console.log(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message });
  }
}

export async function getSingleSymptomHandler(req: Request, res: Response) {
  const symptom_Id = req.params.symptom_Id;

  try {
    const Symptom = await SymptomModel.findOne({ symptom_Id }).populate(
      'owner',
      'first_name last_name email address'
    );

    if (!Symptom) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Symptom not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Basket found',
      data: {
        Symptom,
      },
    });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}

export async function getAllSymptomHandler(req: Request, res: Response) {

  try {
    const Symptom = await SymptomModel.find({});
    return res
      .status(200)
      .json({ status: 'success', message: 'Symptoms List', data: Symptom });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}

export async function deleteSymptomHandler(req: Request, res: Response) {
  const symptom_Id = req.params.symptom_Id;

  try {
    const Symptom = await SymptomModel.findOneAndDelete({ symptom_Id });

    if (!Symptom) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Symptom not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Symptom Deleted',
    });
  } catch (error: any) {
    return res.status(409).json({ status: 'failed', message: error.message });
  }
}

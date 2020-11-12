import { NextFunction, Request, Response } from "express";
const { body, validationResult }  =require( 'ajv');

export const deneme = (req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({
        name:'Burak'
    })
}

export const postDeneme = (req:Request,res:Response)=>{
    console.time("Result Time: ");
    const errors = validationResult(req);
    console.timeEnd("Result Time: ");
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    res.status(200).json({
        Post:'API Succesful..'
    })
}


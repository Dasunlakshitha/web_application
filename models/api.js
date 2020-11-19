const db =require('../config/db');
const express = require('express');


exports.submit=async(req,res)=>{
    try{
        const body=req.body;
        if(!body.firstName){
            return res.status(200).send({error:"First anme required"});
        }
        if(!body.lastName){
            return res.status(200).send({error:"last anme required"});
        }
        if(!body.address){
            return res.status(200).send({error:"Address required"});

        }
        if(!body.gender){
            return res.status(200).send({error:"gender required"});
        }
        if(!body.dateOfBirth){
            return res.status(200).send({error:"Date of birth required"});
        }
        

        const user = await db.query(`INSERT INTO users(first_name,last_name,address,gender,birthday) VALUES(?,?,?,?,?)`,
        [body.firstName,body.lastName,body.address,body.gender,body.dateOfBirth]
        );
        return res.status(200).send({done:true,message:"successfully added"});


    }catch(error){
        return res.status(500).send({done:false,message:"error"});

    }
}
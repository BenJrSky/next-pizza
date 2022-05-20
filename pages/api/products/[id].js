
import dbConnect from '../../../utilities/mongo.js';
import Product from '../../../models/Product.js';


export default async function handler(req,res){

    const { method, query:{id} } = req;

    dbConnect();

    if(method == "GET"){

        try{

            const product = await Product.findById(id).select({title:true, img:true, desc:true, prices:true, extraOptions:true});
            res.status(200).json({product});

        }catch(err){
            res.status(500).write(err);
        }

    }

    if(method == "POST"){

        try{
            const product = await Product.create(req.body);
            res.status(201).json({product});
        }catch(err){
            res.status(500).write(err);
        }
    }

    if(method == "PUT"){

        try{
            const product = await Product.findByIdAndUpdate(id,req.body)
            res.status(201).json({product});
        }catch(err){
            res.status(500).write(err);
        }
    }

    if(method == "DELETE"){

        try{
            const product = await Product.findByIdAndDelete(id);
            res.status(200).json({product});
        }catch(err){
            res.status(500).write(err);
        }
    }





}
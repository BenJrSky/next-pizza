
import dbConnect from '../../../utilities/mongo.js';
import Product from '../../../models/Product.js';


export default async function handler(req,res){

    const { method } = req;

    dbConnect();

    if(method == "GET"){

        try{

            const products = await Product.find({}).select({title:true, img:true, desc:true, prices:true, extraOptions:true});
            res.status(200).json({products});

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




}
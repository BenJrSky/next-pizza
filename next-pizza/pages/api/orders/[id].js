import dbConnect from '../../../utilities/mongo.js';
import Order from '../../../models/Order.js';


export default async function handler(req,res){

    const { method, query:{id } } = req;

    await dbConnect();

    if(method == 'GET'){
        try{
            const order = await Order.findById(id);
            res.status(200).json(order);
        }catch(err){
            res.status(500).json(err);
        }
    }

    if(method == 'PUT'){
        
    }


    if(method == 'DELETE'){
        
    }

     


}
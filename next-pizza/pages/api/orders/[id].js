import dbConnect from '../../../utilities/mongo.js';
import Product from '../../../models/Product.js';


export default async function handler(req,res){

    const { method, query:{id } } = req;

    dbConnect();

    if(method == 'GET'){

    }

    if(method == 'PUT'){
        
    }


    if(method == 'DELETE'){
        
    }


}
import cookie from 'cookie';

const handler = (req, res)=>{

    const { method } = req;

    if(method=='POST'){
        const { username, password } = req.body;
        
        if(username == process.env.USERNAME && password == process.env.PASSWORD){
            res.setHeader("Set-Cookie", cookie.serialize('token',process.env.TOKEN,{
                maxAge: 60*3,
                sameSite: 'strict',
                path:'/'
            }));
            res.status(200).json("Succesfull");
        }else{
            res.status(400).json("Wrong credential");
        }
    }

}


export default handler;



const checkCookies = (ctx) =>{

    const myCookie = ctx.req?.cookies ||  "";

    if(myCookie.token !== process.env.TOKEN){
        return{
            redirect:{
                destination:'/login',
                permanent:false
            }
        }
    }else{
        return
    }

}

const isCorrect = (ctx) =>{

    const myCookie = ctx.req?.cookies ||  "";

    if(myCookie.token !== process.env.TOKEN){
        return false
    }else{
        return true
    }

}


export {checkCookies, isCorrect}
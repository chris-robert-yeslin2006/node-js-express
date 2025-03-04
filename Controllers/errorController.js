const devError = (err, res) => {    
    res.status(500).json({
        status: err.statusCode,
        message: err.message,
        stackTrace:err,
        error: err,
    });
}
const prodError = (err, res) => {
    if(err.isOperational){
        res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
        });
       
    }else{
        res.status(500).json({
            status: 'error',
            message: "Something went wrong",
            
        });
    }
    
}

const handleExpiredJWT=(message)=>{
    return new customError('jwt expired,please login again',401);
}
module.exports = (error, req, res, next) => {
    if(process.env.NODE_ENV==='development'){
        devError(error, res);
    }else if(process.env.NODE_ENV==='production'){
        
        prodError(error, res);
        if(error.name==='TokenExpiredError') error=handleExpiredJWT('Token expired');

    }
    
};
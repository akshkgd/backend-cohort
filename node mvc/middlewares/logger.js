

function logger(req, res, next){
    console.log(`requested url: ${req.originalUrl} by ${req.ip}` );
    next();
}


module.exports = logger;
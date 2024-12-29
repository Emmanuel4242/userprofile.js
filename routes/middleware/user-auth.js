const validAPIKey = '12345'

const userAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key']
    if(!apiKey){
        res.status(501).json({message: 'Access denied'})
    }
    
    if(apiKey !== validAPIKey){
        res.status(501).json({message: 'Invalid API Key'})
    }

    next();
}

module.exports = userAuth
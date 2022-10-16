const mongoose=require('mongoose')


module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try {
        mongoose.connect(process.env.DB,connectionParams)
            console.log('CONNECTED TO DATABASE');
    } catch (error) {
        console.log('CANNOT CONNECT TO DATABASE');
    }
}
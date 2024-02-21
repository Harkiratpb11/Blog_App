const mongoose=require("mongoose");

require("dotenv").config();

// const connectWithDb=()=>{
//     // mongoose.connect(process.env.DATABASE_URL,{
//     //     useNewUrlParser:true,
//     //     useUnifiedTopology:true,
//     // })
//     .then(console.log("DB connected successfully"))
//     .catch((error)=>{
//         console.log("Db facing connection issuess");
//         console.log(error);
//         process.exit(1);
//     })
// };

// module.exports=connectWithDb;

const connectWithDb=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL,{

        });
        console.log("DB connected successfully");
    }catch(error){
        console.log("Db dacing connection issues");
        console.error(error);
        process.exit(1);
    }
};
module.exports=connectWithDb;
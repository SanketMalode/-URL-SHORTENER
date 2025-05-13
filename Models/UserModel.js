const mongoose=require('mongoose')

const ModelSchema=new mongoose.Schema({
    ShortID:{
        type:String,
        required:true,
        unique:true
    },
    RedirectURL:{
        type:String,
        required:true,
      
    },
    VisitHistory:
    [{
        timestamp:{type: Number}
    }],

    Createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
    },
    {
        timestamps:true,
    }
)


const URL=mongoose.model('URL',ModelSchema);

module.exports={
    URL
}








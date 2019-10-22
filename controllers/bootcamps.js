


//@desc Get all bootcamps 
//@route GET /api/v1/bootcamps 
//@access Public 

exports.getBootcamps =(req,res,next)=>{
    console.log("===getBootcamps===")
    res.status(200).json({success:true,msg:'Show all bootcamps'})
}


//@desc Get Single bootcamps 
//@route GET /api/v1/bootcamps/:id 
//@access Public 

exports.getBootcamp =(req,res,next)=>{
    res.status(200).json({success:true,msg:'Get Single bootcamp'})
}


//@desc Create bootcamp
//@route POST /api/v1/bootcamps 
//@access Public 

exports.postBootcamp =(req,res,next)=>{
    res.status(200).json({success:true,msg:'Creat new bootcamp'})
}



//@desc Update bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Private 

exports.updateBootcamp =(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update bootcamp ${req.params.id}`})
}


//@desc Delete  bootcamp 
//@route GET /api/v1/bootcamp
//@access Private 

exports.deleteBootcamp =(req,res,next)=>{
    res.status(200).json({success:true,msg:`Delete bootcamp ${req.params.id}`})
}
const Bootcamp = require('../models/Bootcamps');

//@desc Get all bootcamps 
//@route GET /api/v1/bootcamps 
//@access Public 

exports.getBootcamps = async(req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps })
    } catch (err) {
       // res.status(400).json({ success: false })
       next(error)
    }
}

//@desc Get Single bootcamps 
//@route GET /api/v1/bootcamps/:id 
//@access Public 

exports.getBootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
        res.status(400).json({ succes: false })
    }

}


//@desc Create bootcamp
//@route POST /api/v1/bootcamps 
//@access Public 

exports.postBootcamp = async(req, res, next) => {
    // console.log('===req.body===',req.body)
    // res.status(200).json({success:true,msg:'Creat new bootcamp'})

    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({ success: true, data: bootcamp })

        if (!bootcamp) { res.status(400).json({ success: false }) }



    } catch (error) {
        res.status(400).json({ succes: false })
    }
}



//@desc Update bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Private 

exports.updateBootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ succes: true, data: bootcamp })
    } catch (error) {
        return res.status(400).json({ success: false })

    }

}


//@desc Delete  bootcamp 
//@route GET /api/v1/bootcamp
//@access Private 

exports.deleteBootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({ succes: false });
        }

        res.status(200).json({ success: true, data: {} });

    } catch (err) {
        res.status(400).json({ success: false })
    }

}
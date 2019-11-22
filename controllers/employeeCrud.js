const empDetails =require('../models/dbconfig.js');

exports.create = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Details could not be empty"
        });
    }

    //console.log(req);
    const emp = new empDetails({
        id        : req.body.id,
        fullName  : req.body.fullName,
        email     : req.body.email,
        mobile    : req.body.mobile,
        department: req.body.department,
        role      : req.body.role,
        salary    : req.body.salary
    });

    emp.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "values are Not inserted"
        })
    })
}

exports.findAll = (req, res) => {

    empDetails.find()
    .then(emp => {
        res.send(emp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Details are not retrived"
        })
    })

}

exports.update = (req, res) => {
    if(!req.body.content){
        return res.status(400).send({
            message: "Give the details to update!"
        });
    }

    empDetails.findByIdAndUpdate(req.params.id, {
        id        : req.body.id,
        fullName  : req.body.fullName,
    })
}

exports.delete = (req, res) => {

};

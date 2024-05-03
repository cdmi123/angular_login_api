var user = require('../model/registermodel');

exports.register = async (req,res) => {
    try {
        var data = await user.create(req.body);

        res.status(200).json(
            data
        )
    } catch (error) {
        res.status(200).json(
            error
        )
    }
}

exports.login = async (req,res) => {
    try {

        var data = await user.find({"email":req.body.email});

        if(data.length==1){

            if(data[0].password==req.body.password){
                res.status(200).json({
                    data,
                    status:"Login Success"
                 } )
            }else{
                res.status(200).json({
                    status:"check your email and password"
                })
            }
        }else{
            res.status(200).json({
                status:"check your email and password"
            })
        }

    } catch (error) {
        res.status(200).json(
            error
        )
    }
}
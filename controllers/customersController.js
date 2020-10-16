const model = require("../models/index");

exports.index = function(req, res, next) {
    res.send('customers');
  }

  exports.show = async (req, res, next) => {

    const data = await model.customers.findAll()

    res.status(200).json({
      data: data
    })

  }

  exports.insert = async (req, res, next)=>{

    const {c_name, c_lastname, c_mail, c_tel, c_num, c_mu,
       c_tanon, c_soi, c_tumbon, c_amphor, c_junngwan, c_sex } = req.body;

    const check =  await model.students.create({
      c_name, c_lastname, c_mail, c_tel, c_num, c_mu, c_tanon, c_soi, c_tumbon, c_amphor, c_junngwan, c_sex
    })

    res.status(200).json({
      massage: check
    });

  }
  exports.destroy = async (req, res, next)=>{
    const { id } = req.params;
    const check =  await model.students.destroy({
        where:{
          id: id
        }
    })

    res.status(200).json({
      message: check
    });

  }
  exports.update = async (req, res, next)=>{

    const { id, s_name, s_lastname, s_tel } = req.body;

    const check =  await model.students.update({
      s_name: s_name, 
      s_lastname: s_lastname,
      s_tel: s_tel
    },{
      where :{
        id: id
      }
    })

    res.status(200).json({
      massage: check
    });

  }
  
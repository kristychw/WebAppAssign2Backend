const Contact = require('../models/contact.models')

exports.create = (req, res)=>{
    console.log(req.body);
    if(!req.body.name){
        return res.status(400).send({
            'message': "Contact name can not be empty"
        })
    } 
    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
      });

      contact.save()
        .then(data => res.send(data))
        .catch(err =>{
            res.status(500).send({
                'message':"Something went wrong while inserting data!",
                'error': err
            })

        });
}

exports.update = (req, res) =>{
    const id = req.params.id;

    if(!req.body.name){
        return res.status(400).send({
            'message': "Contact name can not be empty"
        })
    } 



    Contact.findByIdAndUpdate(id, {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email
    }, {new: true}).then(contacts =>{
        res.send(contacts)
    }).catch(
        err => {
            res.status(500).send({
                'message' : 'Something went wrong',
                'error' : err
            })
        }
    )

}

exports.findAll = (req, res) => {
  Contact.find().then(contacts => {
            res.send(contacts)
        }
    ).catch(
        err => {
            res.status(500).send({
                'message' : 'Something went wrong in find all',
                'error' : err
            })
        }
    ) 
}

exports.findOne = (req, res) => {
  const id = req.params.id;
  Contact.findById(id)
    .then(contact => {
      if (!contact) {
        return res.status(404).json({
          message: 'Contact information does not exist!'
        });
      }
      res.json(contact);
    })
    .catch(err => {
      console.error('Error occurred while finding contact:', err);
      res.status(500).json({
        message: 'Something went wrong in find one',
        error: err
      });
    });
};


exports.delete = (req, res) =>{
    const id = req.params.id
    Contact.findByIdAndRemove(id).then( contacts =>{ 
        res.send({
            'message':'The contact information is removed!'
        })
    }).catch(err =>{
        res.status(500).send({
            'message' : 'Something went wrong',
            'error' : err
        })
    })
}

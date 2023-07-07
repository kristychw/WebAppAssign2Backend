const User = require('../models/user.models')

exports.create = (req, res)=>{
    console.log(req.body);
    if(!req.body.username){
        return res.status(400).send({
            'message': "Username can not be empty"
        })
    } else if (!req.body.password){
        return res.status(400).send({
            'message': "Password can not be empty"
        })
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
      });

    user.save()
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

    if(!req.body.username){
        return res.status(400).send({
            'message': "Username can not be empty"
        })
    } else if (!req.body.password){
        return res.status(400).send({
            'message': "Password can not be empty"
        })
    }



    User.findByIdAndUpdate(id, {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
    }, {new: true}).then(users =>{
        res.send(users)
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
  User.find().then(users => {
            res.send(users)
        }
    ).catch(
        err => {
            res.status(500).send({
                'message' : 'Something went wrong',
                'error' : err
            })
        }
    )
}

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username, password: password })
  if (user) {
    // User exists, return a success response
    res.status(200).json({ success: true });
  } else {
    // User does not exist, return an error response
    res.status(401).json({ error: 'Invalid credentials' });
  }


  //User.findOne({ username: username, password: password }, (err, user) => {



    // if (err) {
    //   console.error(err);
    //   res.status(500).json({ error: 'Internal Server Error' });
    // } else {
    //   if (user) {
    //     // User exists, return a success response
    //     res.status(200).json({ success: true });
    //   } else {
    //     // User does not exist, return an error response
    //     res.status(401).json({ error: 'Invalid credentials' });
    //   }
    // }
 // });
};


exports.delete = (req, res) =>{
    const id = req.params.id
    User.findByIdAndRemove(id).then( users =>{
        res.send({
            'message':'The user information is removed!'
        })
    }).catch(err =>{
        res.status(500).send({
            'message' : 'Something went wrong',
            'error' : err
        })
    })
}

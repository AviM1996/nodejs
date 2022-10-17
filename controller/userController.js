const user = require("../model/User");

//get all product
const user_all = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

//get single product
const user_details = async (req, res) => {
    try {
      const user = await user.findById(req.params.userId);
      res.json(user);
    } catch (err) {
      res.json({ message: err });
    };
};

//Add new Product
const user_create = async (req, res) => {
    const user = new user({
        name:req.body.name,
        email: req.body.email,
        phone:req.body.Phone,
        city: req.body.city
})
try {
    const saveUser = await user.save();
    res.send(saveUser);
  } catch (err) {
    res.status(400).send(err);
  };

};

//update product
const user_update = async (req, res) => {
    const user = new user({
        name:req.body.name,
        email: req.body.email,
        phone:req.body.Phone,
        city: req.body.city
})
try {
    const updateUser = await user.findByIdAndUpdate({_id:req.params.userId },
        user);
    res.json(updateUser);
  } catch (err) {
    res.json({massage:err});
  };

};

//delete product
const user_delete = async (req, res) => {
    try {
        const removeUser = await user.findByIdAndDelete(req.params.userId);
        res.json(removeUser);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
  user_all,
  user_details,
  user_create,
  user_update,
  user_delete
};

const user = require("../restAPI/models/model");
const Message = require("../restAPI/models/message");

class userController {
  constructor() {

  }

  async getAll(req, res) {
    try {
      const getAll = await user.find();
      if (!user) return res.status(404).json(new Message(`user id ${id} is not found`, 404));
      return res.status(200).json(getAll);
    }
    catch (err) {
      return res.status(500).json(new Message(err.message, 500));
    }

  }

   async getById(req, res) {
    try {
      const id = req.params.id;
      const getById = await user.findById(id);
      if (!user) return res.status(404).json(new Message(`user id ${id} is not found`, 404));
      return res.status(200).json(getById);
    }
    catch (err) {
      return res.status(500).json(new Message(err.message, 500));
    }
  }

    async Create(req, res) {
    try {
      const {Id, Name, Email, Password, Contact } = req.body;
      if (!Id) return res.status(400).json(new Message(`invalid data json is required fields`, 400));
      const Created = await user.create({Id, Name, Email, Password, Contact });
      res.header("Location", `${req.originalUrl}/${Created._id}`);
      return res.status(200).json(Created);
    }
    catch (err) {
      return res.status(500).json(new Message(err.message,500));
    }
  }

  
  async Update(req, res) {
    try {
      const id = req.params.id;
      const Updated = await user.findByIdAndUpdate(id, {new: true });
      if (!Updated) return res.status(404).json(new Message(`user id${id} is not found`, 404));
      return res.status(200).json(Updated);
    }
    catch (err) {
      return res.status(500).json(new Message(err.message, 500));
    }
  }

   async Delete(req, res) {
    try {
      const id = req.params.id;
      const Deleted = await user.findByIdAndDelete(id);
      if (!Deleted) return res.status(404).json(new Message(`user id ${id} is not found`, 404));
      return res.status(200).json(Deleted);


    }
    catch (err) {
      return res.status(500).json(new Message(err.message, 500));
    }
  }
}

const usersController = new userController
module.exports = usersController
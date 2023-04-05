// Enter http://localhost:2000/api/mongo to see the objects in MongoDB
const {DataObject} = require('../../models/data-object')

const get = async(req, res) => {
    try{
        //using Mongoose DataObject model to retrieve mongoDB DataObjects
        const dataobjects = await DataObject.find({});
        res.status(200).json(dataobjects)
    } catch (error) {
        res.status(500);
    }
  }
  
  module.exports = {
    get
  }
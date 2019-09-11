const mongoose = require('mongoose');
const Schema = mongoose.Schema;


  //create GeoLocation Schema
  const GeoSchema = new Schema({
  	type: {
  		type: String,
  		default:"Point"
  	},
  	coordinates:{
  		type: [Number],
  		index: "2dsphere"
  	}
  })

//create ninnja Schema
const NinjaSchema = new Schema({
	name:{

		type: String,
		required: [true, 'name is required']
	},
	rank:{
		type:String
	},
	available:{
		type: Boolean,
		default: false
	},
	geometry: GeoSchema

	//add in geo Location
});


const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
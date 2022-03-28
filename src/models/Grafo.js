import { Schema, model } from "mongoose";

const grafoSchema = new Schema({
	userId:{
		type: String,
		required: [true, ''],
	},
	object: {
		type: [Object],
		required: [true, ''],
	}},
	{
		timestamps: false,
		versionKey: false
	}
);

export default model('Grafos', grafoSchema);
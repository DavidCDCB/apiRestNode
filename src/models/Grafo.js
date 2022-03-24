import { Schema, model } from "mongoose";

const grafoSchema = new Schema({
	userId:{
		type: String,
		required: [true, ''],
	},
	nodes: {
		type: [Object],
		required: [true, ''],
	},
	edges: {
		type: [Object],
		required: [true, ''],
	},
	adjacencies: {
		type: [Object],
		required: [true, ''],
	},
	},
	{
		timestamps: false,
		versionKey: false
	}
);

export default model('Grafos', grafoSchema);
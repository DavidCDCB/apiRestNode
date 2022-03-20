import { Schema, model } from "mongoose";

const grafoSchema = new Schema({
	nodos: {
		type: [Object],
		required: [true, ''],
	},
	aristas: {
		type: [Object],
		required: [true, ''],
	},
	adyacencias: {
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
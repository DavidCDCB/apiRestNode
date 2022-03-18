import { Schema, model } from "mongoose";

const timeSchema = new Schema({
	tiempo: {
		type: Number,
		required: [true, ''],
	}
	},
	{
		timestamps: false,
		versionKey: false
	}
);

export default model('Times', timeSchema);
import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: [true, 'El nombre es necesario'],
	},
	apellido: {
		type: String,
		required: false
	},
	email: {
		type: String,
		unique: true,
		required: [true, "El correo es necesario"],
	},
	},
	{
		timestamps: true,
		versionKey: false
	}
);

export default model('Usuario', usuarioSchema);
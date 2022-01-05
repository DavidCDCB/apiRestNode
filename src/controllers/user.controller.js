import User from "../models/User";

const responseBody = (estado,res,mensaje)=>{
	return {
		estatus:estado,
		info:mensaje,
		data:res
	}
}

export default {
	getUsers: async (req, res) => {
		try{
			await User.find().then((datos,error)=>{
				if(datos==null || datos.length == 0 || error){
					return res.status(404).json(responseBody(false,datos,"Sin resultados"));
				}else{
					return res.status(200).json(responseBody(true,datos,"Datos Consultados"));
				}
			});
		}catch(e){
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	},
	getUser: async (req, res) => {
		try{
			await User.findById(req.params.id).then((datos,error)=>{
				if(datos==null || datos.length == 0 || error){
					return res.status(404).json(responseBody(false,datos,"Sin resultados"));
				}else{
					return res.status(200).json(responseBody(true,datos,"Datos Consultados"));
				}
			});
		}catch(e){
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	},
	saveUser: async (req, res) => {
		const user = new User(req.body);
		try{
			await user.save((err,usuarioDB) => {
				if(err){
					return res.status(400).json(responseBody(false,err,"Registro Fallido"));
				}else{
					return res.status(200).json(responseBody(true,usuarioDB,"Registro Exitoso"));
				}
			});
		}catch(e){
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	},
	updateUser: async (req, res) => {
		try{
			await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((datos)=>{
				if(datos == null){
					return res.status(404).json(responseBody(false,datos,"Registro no Actualizado"));
				}else
					return res.status(200).json(responseBody(true,datos,"Registro Actualizado"));
			}); 
		}catch(e){
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	},
	deleteUser: async (req, res) => {
		try{
			await User.findByIdAndDelete(req.params.id).then((datos)=>{
				if(datos == null){
					return res.status(404).json(responseBody(false,datos,"Registro no Eliminado"));
				}else
					return res.status(200).json(responseBody(true,datos,"Registro Eliminado"));
			}); 
		}catch(e){Registro
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	},
}

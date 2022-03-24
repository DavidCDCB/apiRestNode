import Grafo from "../models/Grafo";

const users = [
	"8ee60a2e00c90d7e00d5069188dc115b",
	"0f759dd1ea6c4c76cedc299039ca4f23"
];

const responseBody = (estado,res,mensaje)=>{
	return {
		estatus:estado,
		info:mensaje,
		data:res
	}
}

export default {
	getGrafos: async (req, res) => {
		try{
			await Grafo.find({ 'userId':req.params.id }).then((datos,error)=>{
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
	saveGrafo: async (req, res) => {
		const grafo = new Grafo(req.body);
		try{
			await grafo.save((err,dato) => {
				if(err || users.includes(dato.userId) == false){
					return res.status(400).json(responseBody(false,err,"Hamburgger not found"));
				}else{
					return res.status(200).json(responseBody(true,dato,"Registro Exitoso"));
				}
			});
		}catch(e){
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	},
	updateGrafo: async (req, res) => {
		try{
			await Grafo.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((datos)=>{
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
	deleteGrafo: async (req, res) => {
		try{
			await Grafo.findByIdAndDelete(req.params.id).then((datos)=>{
				if(datos == null){
					return res.status(404).json(responseBody(false,datos,"Registro no Eliminado"));
				}else
					return res.status(200).json(responseBody(true,datos,"Registro Eliminado"));
			}); 
		}catch(e){Registro
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	}
}
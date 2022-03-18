import Time from "../models/Time";

export default {
	getTime: async (req, res) => {
		try{
			await Time.findById(req.params.id).then((datos,error)=>{
				if(datos==null || datos.length == 0 || error){
					return res.status(404).json(datos);
				}else{
					return res.status(200).json(datos);
				}
			});
		}catch(e){
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	},
	updateTime: async (req, res) => {
		try{
			await Time.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((datos)=>{
				if(datos == null){
					return res.status(404).json(datos);
				}else
					return res.status(200).json(datos);
			}); 
		}catch(e){
			console.log(e);
			return res.status(500).json({alerta:'Error en servidor'});
		}
	}
}
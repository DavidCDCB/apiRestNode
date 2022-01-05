import "./config";
import app from './app';
import "./database";


app.listen(process.env.PORT,process.env.IP,()=>{
	console.log(`Server running on ${process.env.IP}:${process.env.PORT}`);
});

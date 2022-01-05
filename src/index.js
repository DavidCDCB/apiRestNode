import "./config";
import app from './app';
import "./database";

app.listen(process.env.PORT || 3000,()=>{
	console.log(`Server running on ${process.env.IP || "localhost"}:${process.env.PORT || 3000}`);
});

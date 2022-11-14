const  express  = require("express");
const dotenv=require('dotenv')
const cors = require ('cors')
dotenv.config(); 

const dbConnect=require('./config/db/dbconnection');
const productRoutes = require("./route/productRoutes/Product");
const categoryRoutes = require("./route/categoryRoutes/category");
const subcategoryRoutes = require("./route/subcategoryRoutes/subcategoryRoutes");
const app=express();

dbConnect()

app.use(express.json());
app.use(cors());

app.use('/api/product',productRoutes);
app.use('/api/category',categoryRoutes);
app.use('/api/subcategory',subcategoryRoutes);

 

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is running at ${PORT}`));  
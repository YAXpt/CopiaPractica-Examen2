import express from 'express';
import { usersRouter } from './Users/users.routes.js';
import { productsRouter } from './Products/items.routes.js';
import { pikminsRouter } from './Pikmins/pikmins.routes.js';
// import populateDatabaseP from './Pikmins/pikmins.data.js';  // Importamos la función de carga de datos
// import populateDatabaseI from './Products/items.data.js';  // Importamos la función de carga de datos
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

await mongoose.connect('mongodb://localhost:27017/myapp') 

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());

app.use('/Uploads/itemImages', express.static(path.resolve('Uploads', 'itemImages')));
app.use('/Uploads/pikminImages', express.static(path.resolve('Uploads', 'pikminImages')));

app.use('/users', usersRouter); // /users
app.use('/items', productsRouter); // /items
app.use('/pikmins', pikminsRouter); // /pikmins

// async function loadInitialData() {
//     try {
//         // Cargar datos iniciales para Pikmins, Products, Users, etc.
//         await populateDatabaseP();  // Esta función debe poblar la base de datos de Pikmin
//         await populateDatabaseI();  // Esta función debe poblar la base de datos de Products
//         console.log('Datos iniciales cargados exitosamente');
//     } catch (error) {
//         console.error('Error al cargar los datos iniciales:', error);
//     }
// }

// // Cargar los datos iniciales después de la conexión a la base de datos
// loadInitialData();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
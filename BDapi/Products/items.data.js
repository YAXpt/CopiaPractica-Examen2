import { itemModel } from "./items.model.js";

const itemImage = "/Uploads/itemImages/";

const itemsData = [{
    name: "Bola de cristal: recolector",
    price: 15,
    image: `${itemImage}1.png`,
    stock: 5
},
{
    name: "Bola de cristal: mandarina",
    price: 15,
    image: `${itemImage}2.png`,
    stock: 2
},
{
    name: "Bola de cristal: agüita",
    price: 15,
    image: `${itemImage}3.png`,
    stock: 1
},
{
    name: "Bola de cristal: fuego",
    price: 15,
    image: `${itemImage}4.png`,
    stock: 5
},
{
    name: "Bola de cristal: bombillita",
    price: 15,
    image: `${itemImage}5.png`,
    stock: 5
},
{
    name: "Bola de cristal: sobrevivir",
    price: 15,
    image: `${itemImage}6.png`,
    stock: 3
}];

async function populateDatabaseI() {
    try {
        // await mongoose.connect("mongodb://localhost:27017/myapp");

        // Limpiar la colección antes de poblarla
        await itemModel.deleteMany();

        // Insertar los datos iniciales
        await itemModel.insertMany(itemsData);

        console.log("Base de datos poblada con éxito.");
    } catch (error) {
        console.error("Error al poblar la base de datos:", error);
    }
}

export default populateDatabaseI;
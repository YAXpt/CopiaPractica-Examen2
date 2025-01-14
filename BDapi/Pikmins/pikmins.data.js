import { pikminModel } from './pikmins.model.js';

const pikminImage = "/Uploads/pikminImages/";

const pikminsData = [{
    name: 'Pikmin Rojo',
    type: 'fuego',
    color: 'rojo',
    description: 'Tienen una nariz en forma de espina, son inmunes al fuego y poseen un mayor poder ofensivo en combate.',
    image: `${pikminImage}1.jpg`
},
{
    name: 'Pikmin Amarillo',
    type: 'electricidad',
    color: 'amarillo',
    description: 'Tienen grandes orejas, son inmunes a la electricidad y, al ser lanzados, alcanzan mayores alturas.',
    image: `${pikminImage}2.jpg`
},
{
    name: 'Pikmin Azul',
    type: 'agua',
    color: 'azul',
    description: 'Tienen branquias, pueden sobrevivir tanto en tierra como en agua, siendo los únicos Pikmin anfibios.',
    image: `${pikminImage}3.jpg`
},
{
    name: 'Pikmin Blanco',
    type: 'veneno',
    color: 'blanco',
    description: 'Más pequeños y con ojos rojos, son inmunes al veneno y pueden detectar y desenterrar objetos enterrados. Además, si son ingeridos por enemigos, estos sufren daño debido a su toxicidad.',
    image: `${pikminImage}4.jpg`
},
{
    name: 'Pikmin Morado',
    type: 'fuerza',
    color: 'morado',
    description: 'Más grandes y robustos, poseen una fuerza equivalente a la de diez Pikmin normales y pueden aturdir a los enemigos al ser lanzados debido a su peso.',
    image: `${pikminImage}5.jpg`
},
{
    name: 'Pikmin Alado',
    type: 'vuelo',
    color: 'rosa',
    description: 'Tienen alas, pueden volar, lo que les permite sortear obstáculos y atacar a enemigos aéreos.',
    image: `${pikminImage}6.jpg`
},
{
    name: 'Pikmin Pétreo',
    type: 'roca',
    color: 'gris',
    description: 'Tienen apariencia de roca, son resistentes y pueden romper cristales y estructuras de vidrio al ser lanzados.',
    image: `${pikminImage}7.jpg`
},
{
    name: 'Pikmin Gélido',
    type: 'hielo',
    color: 'cian',
    description: 'Tienen la capacidad de congelar el agua, creando superficies sólidas para que otros Pikmin las atraviesen.',
    image: `${pikminImage}8.jpg`
},
{
    name: 'Pikmin Luminoso',
    type: 'nocturno',
    color: 'verde',
    description: 'Emiten luz en la oscuridad, siendo esenciales para explorar áreas nocturnas y ahuyentar a ciertas criaturas.',
    image: `${pikminImage}9.jpg`
},
{
    name: 'Bulbikmin',
    type: 'bulbo',
    color: 'multicolor',
    description: 'Son una especie de pikmin que ha colonizado un bulbo , unicamente se encuentran en las cuevas y no pueden salir al exterior.',
    image: `${pikminImage}10.jpg`
}];

async function populateDatabaseP() {
    try {
        // await mongoose.connect("mongodb://localhost:27017/BDapi");

        // Limpiar la colección antes de poblarla
        await pikminModel.deleteMany();

        // Insertar los datos iniciales
        await pikminModel.insertMany(pikminsData);

    } catch (error) {
        console.error("Error al poblar la base de datos", error);
    }
}

export default populateDatabaseP;
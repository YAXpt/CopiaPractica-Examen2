import { Schema, model} from 'mongoose';

const ItemsSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    stock: Number
}, {  //por defecto crea un id, no hace falta ponerlo, se llama _id
    timestamps: false
});

export const itemModel = model('Item', ItemsSchema);
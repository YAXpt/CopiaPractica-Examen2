import {Schema, model} from 'mongoose';

const PikminsSchema = new Schema({
    name: String,
    type: String,
    color: String,
    description: String,
    image: String
}, {  //por defecto crea un id, no hace falta ponerlo, se llama _id
    timestamps: false
});

export const pikminModel = model('Pikmin', PikminsSchema);
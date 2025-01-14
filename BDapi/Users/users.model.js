import { Schema, model} from 'mongoose';

const UserSchema = new Schema({
    username: String,
    email: String,
    buyed: [String]
}, {  //por defecto crea un id, no hace falta ponerlo, se llama _id
    timestamps: true
});


export const userModel = model('User', UserSchema);
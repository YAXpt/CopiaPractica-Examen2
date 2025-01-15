import { Schema, model} from 'mongoose';

const EstadisticsSchema = new Schema({
    sessionId: String,
    userId: String,
    llocEvent: String,
    tipusEvent: String
}, {  //por defecto crea un id, no hace falta ponerlo, se llama _id
    timestamps: true //createdAt
});


export const estadisticsModel = model('Estadistics', EstadisticsSchema);
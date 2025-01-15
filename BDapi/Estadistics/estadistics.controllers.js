/* Cada evento es una nueva estadistica, cada estadistica/evento viene de un user y de una session,
 no siempre el mismo user tendrá una misma session, cada evento tiene unas caracteristicas */


import { estadisticsModel } from './estadistics.model.js';

export async function createEstadistics(req, res) { //POST 
    const { sessionId, userId, llocEvent, tipusEvent } = req.body;
    
    const newEstadistics = new estadisticsModel({
        sessionId: sessionId,
        userId: userId,
        llocEvent: llocEvent,
        tipusEvent: tipusEvent
    });

    await newEstadistics.save();
    res.json(newEstadistics);
}



export async function handleEstadistics(req, res) { //GET
    const { sessionId } = req.body;
     const estadistics = await estadisticsModel.find({sessionId});
        res.json({ results: estadistics });

    res.status(200).json(foundSession);
}

export async function handleLastEstadistics(req, res) { //GET
    const { sessionId } = req.body;
    const foundSession = await estadisticsModel.findOne({sessionId});
    if (!foundSession) {
        return res.status(404).json({ message: "This session hasn't been created" });
    }


    
}
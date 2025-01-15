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

// pagina especial para ver el numero de clics y visitas y poder aplicar filtros 
// enseña los de su sesion o los de todos en total ?
export async function handleNumberOfEstadistics(req, res) { //GET
    const { sessionId } = req.body;
    const initialEstadistics = await estadisticsModel.find({ sessionId });

    const { llocEvent, tipusEvent, dataInici } = req.query;

    let filter = { sessionId };

    if (llocEvent) {
        filter.llocEvent = llocEvent;
    }
    if (tipusEvent) {
        filter.tipusEvent = tipusEvent;
    }
    if (dataInici) {
        filter.timestamp = { $gte: new Date(dataInici) };
    }

    const estadistics = initialEstadistics.filter(filter);

    const clickCount = estadistics.filter(e => e.tipusEvent === 'click').length;
    const visitaCount = estadistics.filter(e => e.tipusEvent === 'visita').length;

    res.json({
        clickCount: clickCount,
        visitaCount: visitaCount
    });
}


// una pagina especial que permita ver las ultimas estadisticas (de la sesion o de todos?)
export async function handleLastEstadistics(req, res) { //GET
    const { sessionId } = req.body;

    const lastFiveEstadistics = await estadisticsModel.find({ sessionId })
        .sort({ timestamp: -1 })
        .limit(5);

    res.json({ results: lastFiveEstadistics });

}
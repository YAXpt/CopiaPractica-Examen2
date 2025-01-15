import { estadisticsModel } from './estadistics.model.js';

export async function createEstadistics(req, res) { //POST 
    const { sessionId, userId, llocEvent, tipusEvent } = req.body;
    const existingSessionId = await estadisticsModel.findOne({ sessionId: sessionId });
    if (existingSessionId) {
        return res.status(400).json({ message: "Already generated this sessionId" });
    }

    const newEstadistics = new estadisticsModel({
        sessionId: String,
        userId: String,
        llocEvent: String,
        tipusEvent: String
    });

    await newEstadistics.save();
    res.json(newEstadistics);
}

export async function handleGetEstadistics(req, res) { //GET
    const { sessionId } = req.body;
    const foundUser = await userModel.findOne({ email });
}
import { pikminModel } from "./pikmins.model.js";

export async function handleGetPikmins(req, res) {
    const pikmins = await pikminModel.find({});
    res.json({ results: pikmins });
}

export async function handleGetPikmin(req, res) { //obtener usuario por id, a través de mongoose, get
    const id = req.params.id;
    const foundPikmin = await pikminModel.findById(id);
    if (!foundPikmin) {
        return res.status(404).json({ message: "Pikmin no encontrado." });
    }
    res.json( foundPikmin );
}
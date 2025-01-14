import { itemModel } from "./items.model.js";

export async function handleGetProducts(req, res) {
    const items = await itemModel.find({});
    res.json({results: items});
}

export async function handleGetProduct(req, res) { //obtener usuario por id, a través de mongoose, get
    const id = req.params.id;
        const item = await itemModel.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item no encontrado." });
        }
        res.json(item);
}

export async function updateItemStock(req, res) {
    const id = req.params.id;
    const item = await itemModel.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item no encontrado." });
        }

        if (item.stock > 0) {
            item.stock -= 1;
            await item.save();
            res.json({ message: "Stock actualizado.", item });
        } else {
            res.status(400).json({ message: "No hay stock disponible." });
        }
    
    
}
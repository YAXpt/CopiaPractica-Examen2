import path from 'path';

const getDirname = (url) => {
    const pathName = new URL(url).pathname;
    return path.dirname(pathName);
};

const imageController = {
    async imageController(req, res) {
        const type = req.params.type;
        const image = req.params.image;
        const dirPath = getDirname(import.meta.url);
        const imagePath = path.join(dirPath, 'Uploads', type, image);
        res.sendFile(imagePath);
    }
};

export { imageController };
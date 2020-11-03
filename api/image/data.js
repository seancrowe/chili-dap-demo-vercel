const fs = require("fs");
const {join} = require('path');

module.exports = (req, res) => {
    const {
        query: { path, name },
    } = req

    try {
        const image = fs.readFileSync(join(__dirname, 'images', `/${path}/${name}.jpg`));

        res.setHeader("Content-Type", "image/jpeg");
        res.send(image);
    }
    catch (e) {
        const image = fs.readFileSync(join(__dirname, 'images', `/404.jpg`));

        res.setHeader("Content-Type", "image/jpeg");
        res.send(image);
    }
}
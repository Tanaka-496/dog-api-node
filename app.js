// app.js
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
    try {
        // Node.js v18 以降は fetch が標準で使える
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        const imageUrl = data.message;

        res.send(`
            <h1>Random Dog Image</h1>
            <img src="${imageUrl}" style="max-width:600px;">
            <p><a href="/">Refresh</a></p>
        `);
    } catch (error) {
        res.send("Error: " + error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


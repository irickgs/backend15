const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send("Grupo 15 - Comisión");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


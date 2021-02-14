const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
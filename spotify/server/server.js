const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const client_id = "f7b8a84fb7fc4f3cb51d9c751484f760";
const redirect_uri = "http://localhost:5173";

app.get("/spotiauth", function (req, res) {
  const scope =
    "user-top-read user-read-currently-playing user-modify-playback-state streaming";

  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`
  );
});
app.listen(3000);

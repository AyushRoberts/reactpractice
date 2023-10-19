import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tt, setTt] = useState();
  const hash = window.location.hash;
  const accesstoken = hash.substring(hash.indexOf("=") + 1, hash.indexOf("&"));

  async function spotiFetch(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
  }
  const spotiPlayer = () => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new Spotify.Player({
        name: "SpotIt",
        getOAuthToken: (cb) => {
          cb(accesstoken);
        },
        volume: 0.5,
      });

      // Ready
      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      // Not Ready
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });

      document.getElementById("togglePlay").onclick = function () {
        player.togglePlay();
      };

      player.connect();
    };
  };
  const getTopTracks = () => {
    spotiFetch("v1/me/top/tracks?time_range=short_term&limit=5", "GET").then(
      (res) => {
        setTt(res.items);
      }
    );
  };

  useEffect(() => {
    spotiPlayer();
  }, []);

  return (
    <>
      <a href="http://localhost:3000/spotiauth">LOGIN</a>
      <h1>Spotit</h1>
      <button id="togglePlay">Toggle Play</button>
    </>
  );
}

export default App;

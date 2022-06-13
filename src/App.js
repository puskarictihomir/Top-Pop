import React, { useState, useEffect } from "react";

import SongInfoModal from "./components/SongInfoModal";
import TopList from "./components/TopList";

function App() {
  const [songList, setSongList] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/api.deezer.com/chart")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSongList(result.tracks?.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("error", error.message);
        }
      );
  }, []);

  const handleSortChange = (e) => {
    const listCopy = [...songList];
    if (e.target.value === "ascending") {
      listCopy.sort((a, b) => {
        return a.duration - b.duration;
      });
    } else if (e.target.value === "descending") {
      listCopy.sort((a, b) => {
        return b.duration - a.duration;
      });
    } else if (e.target.value === "position") {
      listCopy.sort((a, b) => {
        return a.position - b.position;
      });
    }

    setSongList(listCopy);
  };

  const handleShowModal = (i) => {
    setSelectedSong(songList[i]);
    setShowModal(true);
  };

  return (
    <div className="App">
      <header>Top Pop</header>
      <TopList
        songList={songList}
        isLoaded={isLoaded}
        error={error}
        handleSortChange={handleSortChange}
        handleShowModal={handleShowModal}
      />
      {showModal && <SongInfoModal onClose={() => setShowModal(false)} song={selectedSong} />}
    </div>
  );
}

export default App;

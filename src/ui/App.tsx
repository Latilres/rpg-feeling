import { useEffect, useState } from "react";
import "./App.css";
import { cleanString } from "./util";
import ScenePage from "./pages/scene/scene-page";

function App() {
  const [genre, setGenre] = useState<rpgScenes>();
  const [title, setTitle] = useState<string | null>();
  const [scenes, setScenes] = useState<scene[] | null>();

  useEffect(() => {
    getScenes();
  }, []);

  const getScenes = async () => {
    const response = await window.electron.woop();
    setGenre(response);
    setTitle(cleanString(response?.genre.name));
    setScenes(response?.genre.scenes);
  };

  return (
    <>
      <h1 className="title">{title}</h1>
      <div>
        <ScenePage scenes={scenes ? scenes : []} />
      </div>
    </>
  );
}

export default App;

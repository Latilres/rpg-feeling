import { useEffect, useState } from "react";
import "./App.css";
import { cleanString } from "./util";
import ScenePage from "./pages/scene/scene-page";
import CreateFileDialog from "./dialogs/create-file-dialog";

function App() {
  const [genre, setGenre] = useState<rpgScenes>();
  const [title, setTitle] = useState<string | null>();
  const [scenes, setScenes] = useState<scene[] | null>();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const assignValues = (values: rpgScenes) => {
    setGenre(values);
    setTitle(cleanString(values?.genre.name));
    setScenes(values?.genre.scenes);
  };

  useEffect(() => {
    getScenes();
  }, []);

  const getScenes = async () => {
    assignValues(await window.electron.getScenes());
  };

  const createScene = async (newScene: string) => {
    assignValues(await window.electron.createScene(newScene));
  };

  return (
    <>
      <h1 className="title">{title}</h1>
      <div>
        <ScenePage
          scenes={scenes ? scenes : []}
          createScene={() => setIsCreateDialogOpen(true)}
        />
        {isCreateDialogOpen && (
          <CreateFileDialog
            onClose={() => setIsCreateDialogOpen(false)}
            createScene={createScene}
          />
        )}
      </div>
    </>
  );
}

export default App;

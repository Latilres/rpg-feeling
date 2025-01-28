import { useState } from "react";
import "./dialog.css";

type Props = {
  onClose: () => void;
  createScene: (newScene: string) => void;
};

const CreateFileDialog = ({ onClose, createScene }: Props) => {
  const [sceneName, setSceneName] = useState("");
  const handleSubmit = () => {
    createScene(sceneName);
    onClose();
  };

  return (
    <div className="create-file-modal">
      <div className="dialog-window">
        <h2>Name new scene</h2>
        <input
          value={sceneName}
          onChange={(e) => setSceneName(e.target.value)}
          placeholder="Input new scene"
        />
        <button onClick={handleSubmit}>Create</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CreateFileDialog;

import SceneButton from "./scene-button";

type Props = {
  scenes: scene[];
};

const ScenePage = ({ scenes }: Props) => {
  const getScenes = () => {
    return scenes.map((scene: scene, index: number) => (
      <SceneButton key={index + 1} buttonText={scene.name} />
    ));
  };

  getScenes();

  return (
    <div>
      <SceneButton key="0" buttonText="Create" />
      {getScenes()}
    </div>
  );
};

export default ScenePage;

import SceneButton from "./scene-button";

type Props = {
  scenes: scene[];
  createScene: () => void;
};

const ScenePage = ({ scenes, createScene }: Props) => {
  const getScenes = () => {
    return scenes.map((scene: scene, index: number) => (
      <SceneButton key={index + 1} buttonText={scene.name} />
    ));
  };

  return (
    <div>
      <SceneButton key="0" buttonText="Create" createScene={createScene} />
      {getScenes()}
    </div>
  );
};

export default ScenePage;

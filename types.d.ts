type rpgScenes = {
  genre: {
    name: string;
    scenes: scene[];
  };
};

type scene = {
  name: string;
};

interface Window {
  electron: {
    getScenes: () => Promise<rpgScenes>;
    createScene: (newScene: string) => Promise<rpgScenes>;
  };
}

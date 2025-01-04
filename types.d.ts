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
    woop: () => Promise<rpgScenes>;
    getStaticData: () => string;
  };
}

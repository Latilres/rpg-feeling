const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => callback({}),
  getScenes: () => ipcRenderer.invoke("getScenes"),
  createScene: (newScene: string) =>
    ipcRenderer.invoke("createScene", newScene),
});

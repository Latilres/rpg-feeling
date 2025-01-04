const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => callback({}),
  getStaticData: () => electron.ipcRenderer.invoke("getStaticData"),
  woop: () => electron.ipcRenderer.invoke("woop"),
});

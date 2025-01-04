import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import fs from "fs";
import { getPreloadPath } from "./pathResolver.js";

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http:localhost:5123");

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
  }

  ipcMain.handle("woop", () => {
    const filePath = path.join(app.getAppPath() + "/assets/rpg-scenes.json");
    const woopie = fs.readFileSync(filePath, "utf-8");
    // console.log(woopie);
    // console.log(JSON.parse(woopie));
    return JSON.parse(woopie);
  });

  ipcMain.handle("getStaticData", () => {
    return "data from electron to FE";
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  app.quit();
});

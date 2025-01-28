import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import fs from "fs";
import { getPreloadPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http:localhost:3000");

    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
  }

  ipcMain.handle("createScene", (_, newScene) => {
    const filePath = path.join(app.getAppPath() + "/assets/rpg-scenes.json");
    const scenes = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    scenes.genre.scenes.push({ name: newScene });
    fs.writeFile(filePath, JSON.stringify(scenes), (err) => {
      if (err) throw err;
    });
    return scenes;
  });
});

ipcMain.handle("getScenes", () => {
  const filePath = path.join(app.getAppPath() + "/assets/rpg-scenes.json");
  const scenes = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(scenes);
});

app.on("window-all-closed", () => {
  app.quit();
});

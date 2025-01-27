import { app, BrowserWindow, dialog, ipcMain } from "electron";
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
    mainWindow.loadURL("http:localhost:3000");

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
  }

  const newSceneDialog = new BrowserWindow({
    parent: mainWindow,
    modal: true,
    show: false,
  });

  ipcMain.handle("createScene", (_, newScene) => {
    const filePath = path.join(app.getAppPath() + "/assets/rpg-scenes.json");
    const scenes = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    console.log(app.getAppPath());

    // scenes.genre.scenes.push({ name: newScene });
    // fs.writeFile(filePath, JSON.stringify(scenes), (err) => {
    //   if (err) throw err;
    //   console.log("The file has been saved!");
    // });
    // return scenes;
    // console.log(scenes);
    // console.log(scenes.genre.scenes[3]);
    // scenes.genre.scenes[]
  });
});

ipcMain.handle("getScenes", () => {
  const filePath = path.join(app.getAppPath() + "/assets/rpg-scenes.json");
  const scenes = fs.readFileSync(filePath, "utf-8");
  // console.log("getting scenes");
  return JSON.parse(scenes);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  app.quit();
});

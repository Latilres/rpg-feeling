import * as React from "react";
import { createRoot } from "react-dom/client";
import CategoryPage from "./pages/category/category-page";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<CategoryPage />);

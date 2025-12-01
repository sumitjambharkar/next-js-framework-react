import "module-alias/register.js";
import express from "express";
import path, { resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";
import cors from "cors";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",  // frontend ka URL jahan se requests aayengi
  credentials: true,                 // agar cookies/session bhejni hai to
}));

// API BASE
const apiBase = path.resolve(__dirname, "../app/api");
console.log("API Base:", apiBase);

// ----------------------------------------
// RECURSIVE API LOADER
// ----------------------------------------
async function loadApiRoutes(baseDir, baseUrl = "/api") {
  const items = fs.readdirSync(baseDir);

  for (const item of items) {
    const fullPath = path.join(baseDir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively go deep
      await loadApiRoutes(fullPath, `${baseUrl}/${item}`);
    } else if (item === "route.js") {
      const fileUrl = pathToFileURL(fullPath).href;
      const apiModule = await import(fileUrl);

      console.log(`✔ Loaded: ${baseUrl}`);

      app.all(baseUrl, (req, res) => {
        if (req.method === "GET" && apiModule.GET) return apiModule.GET(req, res);
        if (req.method === "POST" && apiModule.POST) return apiModule.POST(req, res);
        if (req.method === "PUT" && apiModule.PUT) return apiModule.PUT(req, res);
        if (req.method === "DELETE" && apiModule.DELETE) return apiModule.DELETE(req, res);

        res.status(405).json({ error: "Method Not Allowed" });
      });
    }
  }
}

await loadApiRoutes(apiBase); // Start recursive loading

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(3000, () => console.log("🚀 Server running on 3000"));
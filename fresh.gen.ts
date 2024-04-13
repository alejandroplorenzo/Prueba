// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_name_ from "./routes/[name].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $acceder from "./routes/acceder.tsx";
import * as $comentar from "./routes/comentar.tsx";
import * as $index from "./routes/index.tsx";
import * as $menu from "./routes/menu.tsx";
import * as $registro from "./routes/registro.tsx";
import * as $AccederManager from "./islands/AccederManager.tsx";
import * as $RegistroManager from "./islands/RegistroManager.tsx";
import * as $comentar_1 from "./islands/comentar.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[name].tsx": $_name_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/acceder.tsx": $acceder,
    "./routes/comentar.tsx": $comentar,
    "./routes/index.tsx": $index,
    "./routes/menu.tsx": $menu,
    "./routes/registro.tsx": $registro,
  },
  islands: {
    "./islands/AccederManager.tsx": $AccederManager,
    "./islands/RegistroManager.tsx": $RegistroManager,
    "./islands/comentar.tsx": $comentar_1,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

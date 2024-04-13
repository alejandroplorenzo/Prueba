// import { FunctionComponent } from "preact";
// import { User } from "../types.ts";
// import { useState } from "preact/hooks";

// const AccederManager: FunctionComponent = () => {
//   return (
//     <>
//     <form class="AccederManager" action="/menu" method="get">
//       <input type="text" name="usuario" placeholder="Usuario" />
//       <input type="text" name="password" placeholder="Password" />
//       <button type="submit">Acceder</button>  
//      </form>

//     </>
//   );
// };

// export default AccederManager;

import { FunctionComponent } from "preact";
import { User } from "../types.ts";
import { useState } from "preact/hooks";

const AccederManager: FunctionComponent = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const response = await fetch('https://lovers.deno.dev/login', {
        method: 'POST',
        mode: 'no-cors', // Añade el modo 'no-cors'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: usuario,
            password: password
        })
    });

    window.location.href = "/menu";
  };

  return (
    <>
      <form class="AccederManager" onSubmit={handleSubmit}>
        <input type="text" name="usuario" placeholder="Usuario" value={usuario} onInput={(e: any) => setUsuario(e.target.value)} />
        <input type="text" name="password" placeholder="Password" value={password} onInput={(e: any) => setPassword(e.target.value)} />
        <button type="submit">Acceder</button>  
      </form>
    </>
  );
};

export default AccederManager;


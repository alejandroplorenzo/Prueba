import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import Axios from "npm:axios"
import User from "../components/User.tsx";
import { useState } from "preact/hooks";
import Comentar from "../islands/comentar.tsx";

type User = {
    name: string;
    age: number;
    sex: string;
    description: string;
    hobbies: string;
    photo: string;
    comments: comment[];
};

type comment = {
  user: string;
  message: string;
}

export const handler: Handlers = { 
    GET: async (_req: Request, ctx: FreshContext<unknown, User>)=>{
        try{
            const { name } = ctx.params; 
            const usuario = await Axios.get<User>(
                `https://lovers.deno.dev/${name}`,
            );

            if(usuario.status !== 200){
                throw new Error("Error")
            }

            return ctx.render(usuario.data);
        }catch(e){
            console.error(e);
            throw new Error("Ha habido un error");
        }
    },
};

const Page = (props: PageProps<User>) => {
    const user = props.data;
    
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{marginRight: '20px'}}>
                <h2>{user.name}</h2>
                <p>Edad: {user.age}</p>
                <p>Sexo: {user.sex}</p>
                <p>Descripción: {user.description}</p>
                <p>Hobbies: {user.hobbies}</p>
                <h3>Comentarios:</h3>
                {user.comments.map((comment, i) => (
                    <div key={i}>
                        <p>Usuario: {comment.user}</p>
                        <p>Mensaje: {comment.message}</p>
                    </div>
                ))}
            </div>
            <img src={user.photo} alt={user.name} style={{width: '25%', height: '0%'}} />

            <button class = "botonname" style={{marginTop: '500px'}}>
                <a href="/menu">
                VOLVER AL MENU
                </a>        
            </button>
        </div>
    );
};

export default Page;
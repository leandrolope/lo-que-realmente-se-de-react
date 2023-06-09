import React from "react";
import { Link, Outlet, } from "react-router-dom";
import { infoData } from "./InfoData";

function Info(){
    return(
      <>
        <h1>Iformacion del sitio</h1>
        
        <Outlet />{/* el Hook Oulet sirve para  */}
        <ul>
            {infoData.map(post => (
                <InfoPage key={post.slug} post={post} />
            ))}
        </ul>
       </>
    );
}

function InfoPage({ post }) {
    return(
        <li>
            <Link to={`/info/${post.slug}`}>{post.title}</Link>
        </li>
    );// no encuentro la forma de hacer estas comillas `` en el teclado  
}


export {Info };
import React from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 2000);

    return (
        <>
        <div>Pagina no encontrada</div>
        <small>Te estamos redirigiendo a la homepage</small>
        </>
    )
}

export default Page404
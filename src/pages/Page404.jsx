import React from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 2000);

    return (
        <>
        <div className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div>Pagina no encontrada 404</div>
                    <small>Te estamos redirigiendo a la homepage</small>
                </div>
        </div>
        </>
    )
}

export default Page404
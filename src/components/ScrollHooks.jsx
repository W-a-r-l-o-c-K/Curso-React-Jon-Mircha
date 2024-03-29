import React, {useState, useEffect} from "react";

export default function ScroolHooks() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        //console.log("Moviendo el scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll)
        };
    }, [scrollY]);

    useEffect(() => {
        //console.log("Fase de Actualización");
    },[]);

    useEffect(() => {
        return () => {
            //console.log("Fase de Desmontaje");
        }
    });

    return (
        <>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY} px</p>
        </>
    );
}
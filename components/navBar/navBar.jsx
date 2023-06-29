"use client"
import React, { useState } from "react";
import styles from "@/components/navBar/navBar.module.css"
import { getDisplayName } from "next/dist/shared/lib/utils";
export default function NavBar() {
    const [state, setState] = useState(false);
    function openNB() {
        setState(!state);
    }
    let styleD;
    state == false ? styleD = "" : styleD = "flex"
    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.title}>
                    <p>Edie</p>
                </div>
                <ul style={{ display: `${styleD}` }}>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Our Works</li>
                    <li>Clients</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.btn_d} onClick={openNB}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </div>

            </nav>
        </>


    )
}

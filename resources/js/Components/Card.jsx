import { useRef, useEffect, useState } from "react";
export default function Card({ cardName, refCard }) {
    return (
        <div className="bubble" ref={refCard}>
            <div className="card m-2 pt-2">
                <div className="py-1">
                    <div className="fs-5 mt-2">{cardName}</div>
                </div>
            </div>
        </div>
    );
}

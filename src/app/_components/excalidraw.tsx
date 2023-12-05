"use client"

import { Excalidraw } from "@excalidraw/excalidraw";

export default function ExcalidrawBoard() {
    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            <Excalidraw />
        </div>
    )
}
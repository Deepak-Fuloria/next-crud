"use client"
import { useParams } from "next/navigation"

function singleUser() {

    const id = useParams('id');

    return (
        <>
            <h1>home</h1>
            <h1>id</h1>
        </>
    )
}

export default singleUser
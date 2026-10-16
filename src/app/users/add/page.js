"use client"
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/api";

function addUser() {
    const router = useRouter();
    const [data, setData] = useState({
        name: "",
        email: "",
        image: "",
    })

    function handleChange(e) {
        if (e.target.name == "image") {
            const name = e.target.name
            const value = e.target.files[0]
            setData({ ...data, [name]: value });
            return
        }
        const name = e.target.name
        const value = e.target.value
        setData({ ...data, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("image", data.image);

        const res = await axios.post(`${API_BASE_URL}/api/users`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log("Backend Response:", res.data);
        router.push("/users");

    }

    return (
        <>
            <h3>add user</h3>

            <form onSubmit={handleSubmit} method="POST">
                <input type="text" value={data.name} name="name" placeholder="name" onChange={handleChange} />
                <input type="text" value={data.email} name="email" placeholder="email" onChange={handleChange} />
                <input type="file" name="image" placeholder="image" onChange={handleChange} />
                <button >submit</button>
            </form>

        </>
    )
}

export default addUser
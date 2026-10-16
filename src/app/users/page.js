"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/api";

function Home() {

    const [users, setUsers] = useState([])

    async function getUser() {
        const response = await axios.get(`${API_BASE_URL}/api/users`)
        const data = response.data.users;
        setUsers([...data])
    }

    async function handleDelete(id) {
        const res = await axios.delete(`${API_BASE_URL}/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
    }

    useEffect(() => {
        getUser()
    }, [])



    return (
        <>

            <button style={{ width: "100px" }}>
                <Link href="/users/add" >add User</Link>
            </button>
            <h1>home</h1>
            <table border={1} width={500}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>image</th>
                        <th>action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users && users.map((data) => {
                            return (
                                < tr key={data.id} >
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td> <img src={`${API_BASE_URL}/uploads/${data.image}`} alt={data.name} width={50} height={50} /></td>
                                    <td>
                                        <Link href={`/users/edit/${data.id}`}><button>edit</button></Link>
                                        <button onClick={() => handleDelete(data.id)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table >
        </>
    )
}

export default Home
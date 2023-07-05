import React, { useEffect, useState } from 'react'
import { ApiService } from '../service/ApiService'
import { useParams } from 'react-router-dom'

export default function Artist() {
    const [userData, setUserData] = useState()
    const { id } = useParams()

    useEffect(() => {
        const getUserData = async () => {
            const dataUser = await ApiService.fetching(`/artists/?part=id&id=${id}&playlistLimit=10&artistLimit=10`)
           setUserData(dataUser.artists[0])

        }
        getUserData()
    }, [id])
    console.log(userData);


    return (
        <>

        </>
    )
}

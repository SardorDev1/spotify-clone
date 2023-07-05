import React, { useEffect, useState } from 'react'
import { ApiService } from '../service/ApiService'
import { Avatar, Stack, Typography, Box, Paper, IconButton, Card, CardContent } from "@mui/material"

import '../../App.css'
import { Link } from 'react-router-dom';
export default function Main() {
    const [data, setData] = useState([])


    useEffect(() => {
        const GetData = async () => {
            const datas = await ApiService.fetching(`/search/?part=snippet&q=Xxxtentacion`)
            setData(datas.artists.items);
        }
        GetData()
    }, [])
    console.log(data);


    return (
        <>



            <Stack m={"auto"} mt={5} borderRadius={"20px"} className='tranding' bgcolor={"#141414"} width={"95%"} height={"100%"} >
                <CardContent className='CardTrandingContent' sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }} >
                    {data.map((item, index) => (

                        <>
                            <Link to={`/artist/${item?.data?.uri.replace("spotify:artist:", "")}`}>
                                <CardContent className='CardTranding' key={index} sx={{ width: "300px", display: "flex", borderRadius: "20px", backgroundColor: "#1e1e1e" }} >
                                    <Avatar sx={{ width: "50px", height: "50px" }} src={item?.data?.visuals?.avatarImage?.sources?.[0]?.url} />
                                    <Typography alignItems={"center"} display={"flex"} ml={1} variant='p' >{item?.data?.profile?.name}</Typography>
                                </CardContent></Link>

                        </>
                    ))}
                </CardContent>
            </Stack>







        </>
    )
}

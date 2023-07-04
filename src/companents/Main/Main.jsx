import React, { useEffect, useState } from 'react'
import { ApiService } from '../service/ApiService'
import { Avatar, Stack, Typography, Box, Paper, IconButton } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import '../../App.css'
export default function Main() {
    const [data, setData] = useState([])


    // useEffect(() => {
    //     const GetData = async () => {
    //         const datas = await ApiService.fetching(`/search/?part=snippet&q=Xxxtentacion`)
    //         setData(datas.artists.items);
    //     }
    //     GetData()
    // }, [])
    // console.log(data);


    return (
        <>
            <Stack width={"95%"} boxShadow={"0px 0px 50px #141414"} margin={"auto"} mt={2} height={"100px"} borderRadius={"20px"} bgcolor={"#141414"} sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}  >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar className='Logo' src='https://youtube-clone-3v.netlify.app/assets/Logo-416ccd0d.jpg' />
                    <Typography ml={2} mt={1} color={"white"} variant='h5' >Spoti<span style={{color:"#08a008"}}>f</span>y</Typography>
                </Box>
                <Box>

                </Box>
                <Box>
                    <Paper component={"form"} sx={{ width: "300px", borderRadius: "20px", height: "50px", backgroundColor: "#1e1e1e", display: "flex", justifyContent: "space-between", marginTop: "20px" }} >

                        <input style={{ border: "none", outline: "none", fontSize: "16px", borderRadius: "20px", paddingLeft: "20px", background: "#1e1e1e", color: "white" }} width={"100%"} type="text" placeholder='Search...' />
                        <IconButton type='submit' >
                            <SearchIcon sx={{ color: "white" }} />
                        </IconButton>

                    </Paper>
                </Box>
            </Stack>








            {/* {data.map((item, index) => (
                <div key={index}>
                    <Avatar src={item?.data?.visuals?.avatarImage?.sources?.[0]?.url} />
                    <Typography variant='p' >{item?.data?.profile?.name}</Typography>
                </div>
            ))} */}

        </>
    )
}

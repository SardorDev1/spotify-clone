import React, { useEffect, useState } from 'react'
import { ApiService } from '../service/ApiService'
import { Avatar, Stack, Typography, Box } from "@mui/material"

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
            <Stack width={"95%"} boxShadow={"0px 0px 50px #141414"} margin={"auto"} mt={2} height={"100px"} borderRadius={"20px"} bgcolor={"#141414"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-beetwen"}  >
                <Box>
                    <Avatar className='Logo' src='https://youtube-clone-3v.netlify.app/assets/Logo-416ccd0d.jpg' />
                </Box>
                <Box>


                </Box>
                <Box>

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

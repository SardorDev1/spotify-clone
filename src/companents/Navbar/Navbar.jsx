import React from 'react'
import { Avatar, Stack, Typography, Paper, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function Navar() {
    return (
        <Stack className='NavBar' width={"95%"} boxShadow={"0px 0px 50px #141414"} margin={"auto"} mt={2} height={"100px"} borderRadius={"20px"} bgcolor={"#141414"} sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}  >
            <div className='left'>

                <Avatar className='Logo' src='https://youtube-clone-3v.netlify.app/assets/Logo-416ccd0d.jpg' />
                <Typography className='BrandName' ml={2} mt={1} color={"white"} variant='h5' >Spoti<span style={{ color: "#08a008" }}>f</span>y</Typography>

            </div>

            <div className='right'>

                <Paper component={"form"} sx={{ width: "300px", borderRadius: "20px", height: "50px", backgroundColor: "#1e1e1e", display: "flex", justifyContent: "space-between", marginTop: "20px" }} >

                    <input style={{ border: "none", outline: "none", fontSize: "16px", borderRadius: "20px", paddingLeft: "20px", background: "#1e1e1e", color: "white" }} width={"100%"} type="text" placeholder='Search...' />
                    <IconButton type='submit' >
                        <SearchIcon sx={{ color: "white" }} />
                    </IconButton>

                </Paper>

            </div>
        </Stack>
    )
}

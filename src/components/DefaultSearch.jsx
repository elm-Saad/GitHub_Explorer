import React from "react"
import Container from '@mui/material/Container'
import GitHub from "../assets/git.webp"
export default function Defaultsearch(){
    return (
        <>
          <Container
            maxWidth="sm"
            sx={{
                textAlign: 'center',
                py: 4,
                paddingTop:0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >   
                <img
                    className="rounded-full overflow-hidden w-96 h-64 " 
                    src={GitHub} alt="GitHub image"
                />
            </Container>
        </>
    )
}

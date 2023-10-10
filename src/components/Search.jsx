import React from "react"
import { Stack ,Typography,Box,TextField,Button} from "@mui/material"

export default function Search({setGithubData,setError,setLoading}){

    const [search,setSearch]=React.useState('')

    const handleChange = async () => {
        if (search) {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`https://api.github.com/users/${search}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setSearch('')
                setGithubData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
    
        
    }
    return(
        <>
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography 
                className="text-gray-900 text-center"
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb='1rem'
                fontWeight={700}
            >
                GitHub Profile Search
            </Typography>
            <Box position="relative" mb="4rem">
                <TextField
                    height="4rem"
                    className="bg-white"
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '6px' }, width: { lg: '1170px', xs: '350px' }  }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Profile on GitHub"
                    type="text"
                />
                
                <Button
                    style={{
                        backgroundColor: '#1E90FF',
                        color: '#fff',
                        textTransform: 'none',
                        width: '120px',
                        height: '56px',
                        position: 'absolute',
                        right: '0px',
                        fontSize: '1rem',
                    }}
                    className="rounded-md"
                    onClick={handleChange}
                >
                    Search
                </Button>
            </Box>
        </Stack>
        </>
    )
}
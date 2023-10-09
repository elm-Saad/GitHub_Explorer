import React from 'react'
import Search from '../components/Search'
import { Stack } from '@mui/material'
import Result from '../components/Result'
export default function Home(){

    const [githubData, setGithubData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    return (
        <Stack>
            <Search  
                setGithubData={setGithubData}
                setLoading={setLoading}
                setError={setError}
            />
            <Result 
                githubData={githubData}
                loading={loading}
                error={error}
            />
        </Stack>

    )
}
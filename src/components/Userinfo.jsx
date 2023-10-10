import React from 'react';
import { Stack, Grid,Button, Avatar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import Pagination from '@mui/material/Pagination'
import CustomCard from './CustomCard'

export default  function Userinfo({githubData}) {
    const [repoData, setRepoData] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1)
    const repoPerPage = 6

    const fetchData = async () => {
        try {
          const response = await fetch(githubData.repos_url)
          const result = await response.json()
          setRepoData(result)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }
    React.useEffect(() => {
        fetchData();
    }, []);

    // Pagination
    const indexOfLastRepo = currentPage * repoPerPage;
    const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
    const currentRepos = repoData.slice(indexOfFirstRepo, indexOfLastRepo);

    const paginate = (e, value) => {
        setCurrentPage(value);
    }

    console.log(githubData)
  return (
    <div className="w-full flex justify-center">
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={2}
        alignItems="center"
        className="w-full lg:w-4/5"
        sx={{marginBottom: '2rem'}}
      >
        {/* Left */}
        <Stack
            direction="column"
            alignItems="center"
            spacing={2}
            sx={{
                flex: '0 0 20%', 
                maxWidth: '80%', 
                '@media (max-width: 600px)': {
                    flex: '0 0 35%', 
                    maxWidth: '80%', 
                },
                '@media (min-width: 1280px)': {
                    flex: '0 0 20%', 
                    maxWidth: '20%',
                },
            }}
        >
            <Avatar alt={githubData.name} src={githubData.avatar_url} sx={{ width: '100%', height: 'auto', border:'3px solid white ' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, alignSelf: 'flex-start' }}>
                {githubData.name}
            </Typography>
            <a
                href={githubData.html_url}
                target='_blank'
                style={{ textDecoration: 'none', width: '100%',}}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                        borderColor: 'gray',
                    },
                    }}
                >
                    View Profile
                </Button>
            </a>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton size="small" sx={{ color: 'gray' }}>
                    <PersonIcon fontSize="small" />
                </IconButton>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                    {githubData.followers} followers · {githubData.following} following
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton size="small" sx={{ color: 'gray' }}>
                    <CodeIcon fontSize="small" />
                </IconButton>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                    {githubData.public_repos} public repos
                </Typography>
            </Stack>
        </Stack>

        {/* Right */}
        <Stack
            direction="column"
            spacing={2}
            sx={{ flex: '0 0 80%', maxWidth: '80%' }}
        >
            <Grid container spacing={2}>
                {currentRepos.map((repo, idx) => (
                    <Grid key={idx} item lg={6} md={6} sm={12} xs={12}>
                        <CustomCard repo={repo} />
                    </Grid>
                ))}
            </Grid>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {repoData.length > repoPerPage && (
                <Pagination
                    color="primary"
                    shape="rounded"
                    defaultPage={1}
                    count={Math.ceil(repoData.length / repoPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                />
                )}
            </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

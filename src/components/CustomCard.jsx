import React from 'react'
import { Card, CardContent, Typography ,IconButton,Grid} from '@mui/material'
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined'
import Languages from './Languages'
function CustomCard({repo}) {
  // => fetch to get all Languages used foreach repo
  // const [lang,setLangData] = React.useState({})
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(repo.languages_url)
  //     const result = await response.json()
  //     setLangData(result)
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //   }
  // }
  // React.useEffect(() => {
  //     fetchData()
  // }, [])
  return (
    <Card
        className='bg-white border-gray-300 border'
      sx={{
        borderRadius: '6px',
        minWidth: 275,
        backgroundColor: 'white',
        margin: '16px',
      }}
    >
      <CardContent>
        <div className="flex items-center space-x-2">
        <IconButton size="small">
            <BookmarksOutlinedIcon />
        </IconButton>
        <a
            href={repo.svn_url}
            target='_blank'
            style={{ textDecoration: 'none', color: '#0969da' }}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
            <Typography
                variant="h6"
                sx={{ color: '#0969da', textTransform: 'capitalize' }}
            >
                {repo.name}
            </Typography>
        </a>
          {/* Badge */}
          <div className="bg-white border-gray-300 border rounded-full py-1 px-3">
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {repo.visibility}
            </Typography>
          </div>
        </div>
        <Typography 
            variant="body2"
            sx={{
                margin: '8px',
                color: 'gray',
                whiteSpace: 'nowrap', 
                overflow: 'hidden', 
                textOverflow: 'ellipsis',
            }}
        >
          {repo.description}
        </Typography>
        <Grid container spacing={1}>
            {/* {Object.keys(lang).map((language, index) => ( */}
                <Grid item  >
                    <Languages text={repo.language} />
                </Grid>
            {/* ))} */}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CustomCard;

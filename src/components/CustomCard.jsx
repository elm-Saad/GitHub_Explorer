import React from 'react';
import { Card, CardContent, Typography ,IconButton,Grid} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Languages from './Languages';
function CustomCard() {
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
          {/* Bookmarked Icon */}
        <IconButton size="small">
            <BookmarkIcon />
        </IconButton>
          {/* Light Blue Uppercase Title */}
        <a
            href="#" // Replace with your actual link URL
            style={{ textDecoration: 'none', color: '#0969da' }}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
            <Typography
                variant="h6"
                sx={{ color: '#0969da', textTransform: 'capitalize' }}
            >
                Title
            </Typography>
        </a>
          {/* Badge */}
          <div className="bg-white border-gray-300 border rounded-full py-1 px-3">
            <Typography variant="body2" sx={{ color: 'gray' }}>
              Badge
            </Typography>
          </div>
        </div>
        <Typography 
            variant="body2"
            sx={{
                margin: '8px',
                color:'gray'
            }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          libero at urna euismod tincidunt.
        </Typography>
        <Grid container spacing={1}>
            {/* {languages.map((language, index) => (    // item key={index}*/}
                <Grid item > 
                    <Languages text={'JavaScript'} />
                </Grid>
            {/* ))} */}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CustomCard;

import React from 'react';
import { Stack, Card, CardContent, Avatar, Typography } from '@mui/material';

export default  function Userinfo() {
  return (
    <div className="w-full flex justify-center">
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={2}
        alignItems="center"
        className="w-full lg:w-4/5"
      >
        {/* Left Stack */}
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ flex: '0 0 40%', maxWidth: '40%' }}
        >
          <Avatar
            alt="User Avatar"
            src="URL_TO_USER_AVATAR_IMAGE"
            sx={{ width: '100px', height: '100px' }}
          />
          <Typography variant="h6">Username</Typography>
          <Typography variant="body1">Other Data</Typography>
        </Stack>

        {/* Right Stack */}
        <Stack
          direction="column"
          spacing={2}
          sx={{ flex: '0 0 60%', maxWidth: '60%' }}
        >
          {/* Repo Cards */}
          <Card>
            <CardContent>
              <Typography variant="h6">Note_App</Typography>
              <Typography variant="body1">
                Public note app using JS and firebase
              </Typography>
              <Typography variant="body2">JavaScript</Typography>
            </CardContent>
          </Card>
          
          {/* Add more repo cards as needed */}
        </Stack>
      </Stack>
    </div>
  );
}

import React from 'react';
import { Stack, Card, CardContent, Avatar, Typography } from '@mui/material';
import CustomCard from './CustomCard'
/**
 * {
    "login": "elm-Saad",
    "id": 128216930,
    "node_id": "U_kgDOB6RvYg",
    "avatar_url": "https://avatars.githubusercontent.com/u/128216930?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/elm-Saad",
    "html_url": "https://github.com/elm-Saad",
    "followers_url": "https://api.github.com/users/elm-Saad/followers",
    "following_url": "https://api.github.com/users/elm-Saad/following{/other_user}",
    "gists_url": "https://api.github.com/users/elm-Saad/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/elm-Saad/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/elm-Saad/subscriptions",
    "organizations_url": "https://api.github.com/users/elm-Saad/orgs",
    "repos_url": "https://api.github.com/users/elm-Saad/repos",
    "events_url": "https://api.github.com/users/elm-Saad/events{/privacy}",
    "received_events_url": "https://api.github.com/users/elm-Saad/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Saad",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "elm_saad",
    "public_repos": 28,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-03-18T08:25:11Z",
    "updated_at": "2023-10-05T20:58:20Z"
}
 * 
 * 
 */
export default  function Userinfo({githubData}) {
    console.log(githubData)
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
          sx={{ flex: '0 0 20%', maxWidth: '20%' }}
        >
          <Avatar
            alt="User Avatar"
            src={githubData.avatar_url}
            sx={{ width: '200px', height: '200px' }}
          />
          <Typography variant="h6">Username</Typography>
          <Typography variant="body1">Other Data</Typography>
        </Stack>

        {/* Right Stack */}
        <Stack
          direction="column"
          spacing={2}
          sx={{ flex: '0 0 80%', maxWidth: '80%' }}
        >
          {/* Repo Cards */}
          <CustomCard />
          
          {/* Add more repo cards as needed */}
        </Stack>
      </Stack>
    </div>
  );
}

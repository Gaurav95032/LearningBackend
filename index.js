const express = require('express')
const app = express()
const port = 3000

const github = {
  "login": "Gaurav95032",
  "id": 177189740,
  "node_id": "U_kgDOCo-zbA",
  "avatar_url": "https://avatars.githubusercontent.com/u/177189740?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Gaurav95032",
  "html_url": "https://github.com/Gaurav95032",
  "followers_url": "https://api.github.com/users/Gaurav95032/followers",
  "following_url": "https://api.github.com/users/Gaurav95032/following{/other_user}",
  "gists_url": "https://api.github.com/users/Gaurav95032/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Gaurav95032/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Gaurav95032/subscriptions",
  "organizations_url": "https://api.github.com/users/Gaurav95032/orgs",
  "repos_url": "https://api.github.com/users/Gaurav95032/repos",
  "events_url": "https://api.github.com/users/Gaurav95032/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Gaurav95032/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Gaurav Waghmare",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-08-01T05:25:06Z",
  "updated_at": "2025-01-16T16:38:23Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
  res.json(github)
})

app.get('/instagram', (req, res) => {
  res.send('this is Gaurav Waghmare')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
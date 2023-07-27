import express from 'express';
import cors from 'cors';
import {
  ArticleThemeTags,
  addGraphItems,
  allWidgets,
  articles,
  dashboardData,
  keywords,
  notificationSettings,
  notifications,
  searchFilterData,
} from './src/const.js';
import { canvasData } from './src/mock-data/canvas-data.js';
import { contents, recent_searches } from './src/mock-data/saved-search.js';
import { articleFilter, getPagedResult } from './src/utils.js';
import { profiles } from './src/mock-data/profiles.js';
import { profilesFilter } from './src/utils.js';
import { profile } from './src/mock-data/profile-data.js';
import { tabCount } from './src/mock-data/tabs-count.js';
import { alerts } from './src/mock-data/alerts.js';
import { usersData } from './src/mock-data/settings-data.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/articles', (req, res) => {
  const { limit, page, tab } = req.query;
  const online = articleFilter(articles, 'online').length;
  const print = articleFilter(articles, 'print').length;
  const broadcast = articleFilter(articles, 'broadcast').length;
  const blogs = articleFilter(articles, 'blogs').length;
  const finalData = getPagedResult(
    tab !== 'totalArticles' ? articleFilter(articles, tab) : articles,
    limit,
    page
  );

  const tabs = [
    {
      label: 'All Media',
      value: 'totalArticles',
      count: articles.length,
    },
    {
      label: 'Online',
      value: 'online',
      count: online,
    },
    {
      label: 'Print',
      value: 'print',
      count: print,
    },
    {
      label: 'Broadcast',
      value: 'broadcast',
      count: broadcast,
    },
    {
      label: 'Blogs',
      value: 'blogs',
      count: blogs,
    },
  ];
  res.status(200).send({
    data: finalData,
    tabs,
  });
});

app.get('/article-theme', (req, res) => {
  res.status(200).send({
    data: ArticleThemeTags,
  });
});

app.post('/auth/login', (req, res) => {
  const { username } = req.body;
  res.status(200).send({
    id: 15,
    username: username,
    email: 'kminchelle@qq.com',
    firstName: 'Jeanne',
    lastName: 'Halvorson',
    gender: 'female',
    role: 'admin',
    image: 'https://robohash.org/autquiaut.png',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY4Nzc3MDE5MywiZXhwIjoxNjg3NzczNzkzfQ.3aVJkuhEPgFpMIRv6u1THwalY6tMAVPgk-07_4pxsIk',
  });
});

let searchPayload = {};

app.post('/api/search', (req, res) => {
  const { query, filter } = req.body;
  searchPayload = {
    query,
    filter,
  };
  res.status(200).send({
    msg: 'Success',
    searchId: new Date().getTime(),
  });
});

app.put('/api/search', (req, res) => {
  const { searchId } = req.query;
  console.log(searchId, 'searchId');
  const { query, filter } = req.body;
  searchPayload = {
    query,
    filter,
  };
  res.status(201).send({
    msg: 'Search updated successfully',
  });
});

console.log(searchPayload, 'search payload');

app.get('/searchData', (req, res) => {
  const { searchId } = req.query;
  if (searchId) {
    res.status(200).send({
      query: 'Testing post req',
      filter: {
        locations: [
          {
            label: 'India',
            value: 'india',
          },
        ],
      },
    });
  } else {
    res.status(500).send({
      msg: 'search id not found',
    });
  }
});

app.get('/canvas-data', (req, res) => {
  res.status(200).send({ data: canvasData });
});

app.get('/profiles', (req, res) => {
  res.status(200).send({ data: profiles });
});

app.get('/recent-search', (req, res) => {
  res.status(200).send({ data: recent_searches });
});

app.get('/add-graph-option', (req, res) => {
  res.status(200).send({ data: addGraphItems });
});
app.get('/profiles/:id', (req, res) => {
  const { id } = req.params;
  const data = profilesFilter(profile, id);
  res.status(200).send({ data: data });
});

app.get('/saved-search', (req, res) => {
  const { limit, page = 1, fiterType } = req.query;
  const items = JSON.parse(JSON.stringify(contents));
  if (fiterType) {
    items.sort((a, b) =>
      (a[fiterType] + '')
        .toUpperCase()
        .localeCompare((b[fiterType] + '').toUpperCase(), undefined, {
          sensitivity: 'base',
        })
    );
    console.log(fiterType);
  }
  res.status(200).send({
    data: items.slice((page - 1) * limit, page * limit),
    total: items.length,
  });
});

app.get('/tabs-count', (req, res) => {
  res.status(200).send({ data: tabCount });
});

app.get('/search-filter', (req, res) => {
  res.status(200).send({ data: searchFilterData });
});

app.get('/dashboard-data', (req, res) => {
  const { dashboardType } = req.query;
  const keywordsData = keywords[dashboardType];
  let finalData = dashboardData;
  if (keywordsData) {
    finalData = { keywords: keywordsData, ...finalData };
  }
  res.status(200).send({ data: finalData });
});

app.get('/alerts', (req, res) => {
  res.status(200).send({ data: alerts });
});

app.get('/all-widgets', (req, res) => {
  res.status(200).send({ data: allWidgets });
});

app.get('/users', (req, res) => {
  const { limit, page = 1, fiterType } = req.query;
  const { tableHeaders, tableData } = usersData.data;
  const items = JSON.parse(JSON.stringify(tableData));
  if (fiterType) {
    items.sort((a, b) =>
      (a[fiterType] + '')
        .toUpperCase()
        .localeCompare((b[fiterType] + '').toUpperCase(), undefined, {
          sensitivity: 'base',
        })
    );
    console.log(fiterType);
  }
  const pageData = items.slice((page - 1) * limit, page * limit);
  res.status(200).send({
    data: {
      tableHeaders,
      tableData: pageData,
    },
    total: items.length,
  });
});

app.post('/add-user', (req, res) => {
  console.log(req.body);
  res.status(200).send({
    msg: 'New user successfully added',
  });
});

app.get('/notifications', (req, res) => {
  res.status(200).send({
    data: notifications,
  });
});

app.get('/notification-settings', (req, res) => {
  res.status(200).send({
    data: notificationSettings,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

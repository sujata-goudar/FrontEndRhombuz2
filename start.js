import { writeJsonFile } from 'write-json-file';
import { canvasData } from './src/mock-data/canvas-data.js';

await writeJsonFile('db.json', {
  login: {
    id: 15,
    username: 'test',
    email: 'kminchelle@qq.com',
    firstName: 'Jeanne',
    lastName: 'Halvorson',
    gender: 'female',
    role: 'admin',
    image: 'https://robohash.org/autquiaut.png',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY4Nzc3MDE5MywiZXhwIjoxNjg3NzczNzkzfQ.3aVJkuhEPgFpMIRv6u1THwalY6tMAVPgk-07_4pxsIk',
  },
  'canvas-data': canvasData,
});

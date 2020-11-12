import express from 'express'
import bodyparser from 'body-parser'
import routers1 from './routers/user.router'

const app =express();

app.use(bodyparser.json());


app.use('/api',routers1);
app.listen(5500);
console.log("Port Started");
console.log("AJV Validator");



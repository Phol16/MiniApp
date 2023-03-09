import app from './index.js'

const port = process.env.PORT || 3000 ;

app.listen(port, ():void =>{
  console.log(`Application is listening to port:${port}`)
})

const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' :{
        'age': 29,
        'birthName' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
    },
    'emminem' :{
        'age': 50,
        'birthName' : 'Marshall Bruce Mathers III',
        'birthLocation' : 'St. Joseph, Missouri, U.S'
    },
    'dylan' :{
        'age': 29,
        'birthName' : 'Dylan',
        'birthLocation' : 'Dylan'
    },
}
app.get('/', (request, response)=>{
    //you hear the request---so then you respond w/ a file
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
  
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
import axios from 'axios';
import * as http from 'http'


const PORT=3002;
const server= http.createServer();
const serverinfo={
    server,
    PORT,
}

server.on('request',async (req,res)=>{
    console.log(req.url)
    const Items=req.url.split('/')
    console.log(Items)

    if(req.url==='/')
    {
        res.writeHead(200,{"Content-Type":"text/html"})

        await axios.get('http://www.google.com').then((re)=>{
            res.write(re.data,()=>{
                // console.log(`data written ${re.data}`)
            })
            res.on('event',(data)=>{
                console.log(data)
            })

            res.end()

        })
        // res.end('<h1>Hello world</h1>')
    }
    else if(Items[1]==='server')
    {
        res.setHeader('Content-Type','application/json')
        if(Items[2]==='info')
        {
            res.write(JSON.stringify(serverinfo.server.address()))
        }
        else
        res.write(JSON.stringify(serverinfo))
        res.end()
        
    }
    else{
        req.pipe(res)
    }
    



})

server.listen(PORT,'localhost')
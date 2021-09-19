const parse=require('csv-parse')
const fs= require('fs')

const results=[]
fs.createReadStream('kepler_data.csv').pipe(parse({
    comment:"#",
    columns:true 
})).
on('data',(data)=>{
    results.push(data)
})
.on('error',(err)=>{
    console.log(err)
})
.on('close',()=>{
    console.log(results.find(d=>d.kepid==2713049))
  
})
import $ from "../core";


$.prototype.get=async function(url,dataReading='json'){
   let result=await fetch(url);

   if(!result.ok){
    throw new Error(`this ${url} have some problem,status ${result.status}`)
   }
   switch(dataReading){
    case'json':
    return await result.json();
    case"text":
    return await result.text();
    case 'blob':
        return await result.blob()
   }

}

$.prototype.post=async function(url,dataReading='text'){
    let result=await fetch(url,{
        method:'POST'
    });

    if(!result.ok){
     throw new Error(`this ${url} have some problem,status ${result.status}`)
    }
    switch(dataReading){
        case'json':
        return  await  result.json();
        case"text":
        return await  result.text();
        case 'blob':
            return  await result.blob()
       }
}
$().get('https://jsonplaceholder.typicode.com/users')
       .then(res=>console.log(res))
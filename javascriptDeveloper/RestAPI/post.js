async function getJokeData() {
    const jokeData = await(fetch('https://gorest.co.in/public/v1/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 6a5016cfa3b650e848f54a4d7b8a47b8267b8b05b224ec55166a4795eb600542'
        },
        mode:'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify({
        "name":"Karthi",
        "email":"karthi@gmail.com",
        "gender":"male",
        "status":"inactive"
        })
    })
    .then((res)=>{
        return res.json();
    })
    .then(data=>{
        return {success: true, data}
    }).catch(err=>{
        console.log(err);
        return {success: false, data: err}
    }));
    console.log('POST',jokeData.success ? 'success' : 'error', jokeData.data);
}       // fetch/async returns promise in default

getJokeData();

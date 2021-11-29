async function getJokeData() {
    const jokeData = await(fetch('https://gorest.co.in/public/v1/users/2559',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 6a5016cfa3b650e848f54a4d7b8a47b8267b8b05b224ec55166a4795eb600542'
        },
        mode:'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify({
            "status":"active"
        })
    })
    .then((res)=>{
        return res.json();
    })
    .then(data=>{
        return {success: true, data}
    }).catch(err=>{
        console.log(err);
        return {success: false, data:err}
    }));
    console.log('PUT',jokeData.success ? 'success' : 'error', jokeData.data);
}       // fetch/async returns promise in default

getJokeData();

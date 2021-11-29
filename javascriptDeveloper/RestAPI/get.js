async function getJokeData() {
    const jokeData = await(fetch('https://gorest.co.in/public/v1/users')
    .then((res)=>{
        return res.json();
    })
    .then(data=>{
        return {success: true, data}
    }).catch(err=>{
        console.log(err);
        return {success: false, data: err}
    }));
    console.log('GET',jokeData.success ? 'success' : 'error', jokeData.data);
}       // fetch/async returns promise in default

getJokeData();

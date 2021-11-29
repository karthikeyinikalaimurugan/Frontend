async function getJokeData() {
    const jokeData = await(fetch('https://gorest.co.in/public/v1/users/2559',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 6a5016cfa3b650e848f54a4d7b8a47b8267b8b05b224ec55166a4795eb600542'
        },
    })
    .then((res)=>{
        return res.status===204 ? {success: true, data} : {success:false, data:'Unable to Delete!'}
    })
    .catch(err=>{
        console.log(err);
        return {success: false, data: err}
    }));
    console.log('DELETE',!jokeData.success ? `Error: ${jokeData.data}` : 'Successfully Deleted!');
}       // fetch/async returns promise in default

getJokeData();

async function getGenresOfMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2&language=en-US`
    );    
      return await response.json();
      
  } catch (error) {
    console.log(error);
  }
}

const receiveGenresOfMovies = async() => {
    try {
        const genres = await getGenresOfMovies()
        console.log(genres)
    } catch (err) {
        console.log(err)
    }
}

receiveGenresOfMovies()
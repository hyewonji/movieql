import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";

const getMovies = (limit, rating) =>
    fetch(`${API_URL}`)
        .then((res) => res.json())
        .then((json) => json.data.movies);

export { getMovies };

// export default getMovies : TypeError: (0 , _driveApis2.default) is not a function 발생

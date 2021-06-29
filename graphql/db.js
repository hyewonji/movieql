// 서버를 껐다가 키면 추가, 삭제 됐던 데이터들이 복원된다.
// 데이터가 db.js에 저장되어 있기 때문이다.
// -> graphql에서는 어떤 DB를 사용해도 문제 없다.
let movies = [
    {
        id: 1,
        name: "hyewon",
        score: 88,
    },
    {
        id: 2,
        name: "hyewon",
        score: 88,
    },
    {
        id: 3,
        name: "hyewon",
        score: 88,
    },
    {
        id: 4,
        name: "hyewon",
        score: 88,
    },
    {
        id: 5,
        name: "hyewon",
        score: 88,
    },
    {
        id: 6,
        name: "hyewon",
        score: 88,
    },
];

export const getMovies = () => movies;

export const getById = (id) => {
    const filteredPeople = movies.filter((person) => person.id === id);
    return filteredPeople[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter((movie) => movie.id !== id);
    console.log(cleanedMovies, movies);
    console.log(cleanedMovies.length);

    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie;
};

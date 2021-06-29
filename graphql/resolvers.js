// query를 resolve한다.
import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(), // 사용자가 name Query를 보내면 Nicolas를 반환한다.
        movie: (_, { id }) => getById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id),
    },
};

export default resolvers;

// 입력
// query{
//   person(id:1){
//     name
//   }
// }

// 출력
// {
//     "data": {
//       "person": {
//         "name": "hyewon"
//       }
//     }
// }

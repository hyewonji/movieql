// query를 resolve한다.
import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people, // 사용자가 name Query를 보내면 Nicolas를 반환한다.
        person: (_, { id }) => getById(id),
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

// query를 resolve한다.

const resolvers = {
    Query: {
        name: () => "nicolas", // 사용자가 name Query를 보내면 Nicolas를 반환한다.
    },
};

export default resolvers;

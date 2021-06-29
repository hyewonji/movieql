export const people = [
    {
        id: "1",
        name: "hyewon",
        age: 26,
        gender: "female",
    },
    {
        id: "2",
        name: "hyewon",
        age: 26,
        gender: "female",
    },
    {
        id: "3",
        name: "hyewon",
        age: 26,
        gender: "female",
    },
    {
        id: "4",
        name: "hyewon",
        age: 26,
        gender: "female",
    },
    {
        id: "5",
        name: "hyewon",
        age: 26,
        gender: "female",
    },
    {
        id: "6",
        name: "hyewon",
        age: 26,
        gender: "female",
    },
];

export const getById = (id) => {
    const filteredPeople = people.filter((person) => person.id === String(id));
    return filteredPeople[0];
};

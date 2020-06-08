
type post = {
    author: string,
    text: string
}

const arrayOfPosts : post[] = [
    {
        author: "Astrodev",
        text: "Eu sou um texto qualquer."
    },
    {
        author: "Ana",
        text: "A quinta feira está cinza"
    },
    {
        author: "Astrodev",
        text: "Cada dia é um dia."
    },
    {
        author: "Astrodev",
        text: "Obras na quarentena deveriam ser proibidas. "
    },
    {
        author: "Ana",
        text: "Lembrei de molhar as violetas e salvei uma planta hoje!"
    }
];

console.log("Array de posts: ", arrayOfPosts);

const findThisAuthor: string = "Astrodev";

const listByAuthor = arrayOfPosts.filter((post:any, index:number,array:any) => post.author === findThisAuthor);
console.log("Lista por autor: ", listByAuthor);


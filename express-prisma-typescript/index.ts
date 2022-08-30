console.log("coucou");

function AddTwoNumbers(a: number, b: number): number {
    return a + b;
}

interface User {  // Définit un type custom
    name: string;
    age: number;
    isSingle: boolean;
}

type Administrator = { // Définit un type custom (même chose)
    name: string;
    age: number;
    isSingle: boolean;
}

const user1: User = {
    name: "Jm",
    age: 33,
    isSingle: false
}

function Presentation(user: User): void {
    const {name, age, isSingle} = user;
    console.log(`Bienvenue ${name}, vous avez ${age} ans et vous êtes ${!isSingle ? "en couple" : "célibataire"}`);
}

console.log(AddTwoNumbers(1, 2))
Presentation(user1);
interface User{
    id: number;
    name: string;
    email?: string;
    isAdmin: boolean;
}

interface Admin extends User{
    permissions: string[];
}
const user1:User={
    id: 1,
    name: "Alaa",
    email: "email@gmail.com",
    isAdmin: true,
}
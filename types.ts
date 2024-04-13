export type User = {
    name: string;
    age: string;
    sex: string;
    description: string;
    hobbies: [string];
    photo: string;
    comments: comment[];
};

export type comment = {
    user: string;
    message: string;
}

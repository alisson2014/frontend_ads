const account = {
    name: "alisson",
    email: "alm20@gmail.com",
    password: "12345678",
    id: 1,
};

Object.freeze(account);

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account)
    }, 3000);
});
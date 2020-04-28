class HttpError extends Error {
    constructor(response) {
        super();
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);

    if (200 === response.status) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function getUser() {
    while (true) {
        let name = prompt('Введите логин', 'fczs');

        try {
            return await loadJson(`https://api.github.com/users/${name}`);
        } catch (err) {
            if (err instanceof HttpError && 404 === err.response.status) {
                console.log('Такого пользователя не существует, пожалуйста, повторите ввод.');
            } else {
                throw err;
            }
        }
    }
}

getUser().then(async user => {
    console.log(await Promise.resolve(user));
});
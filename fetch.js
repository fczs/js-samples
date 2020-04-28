const getUsers = async names => names.map(el => fetch('https://api.github.com/users/' + el).then(response => response.json()));

getUsers(['fczs', 'evildrops'])
    .then(async users => {
        try {
            console.log(await Promise.all(users));
        } catch (err) {
            console.log('error');
        }
    }
);

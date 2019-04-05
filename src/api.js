"use strict";
const getLocalMed = async (id) => {
    let url = 'https://jsonplaceholder.typicode.com/users/'+id;
    return await fetch(url)
        .then(response => response.json())
        .catch(err => {
            return err;
        })
};
export {
    getLocalMed
};

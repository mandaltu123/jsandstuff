/**
 * -----------                          -----------------------
 * | pending |  -----event happens ---> | settled/resolved    |
 * -----------                          -----------------------
 *                                                  /\
 *                                                 /  \
 *                                                /    \
 *                                  ---------------   ------------
 *                                  |   fulfilled |   | rejected |
 *                                  ---------------   ------------
 *
 *
 * */

// This promise will simulate fake ajax call to server which will get list of recipe ids
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([100, 20, 203, 400, 299]);
        // reject('500: Internal server error'); comment resolve and uncomment this line, promise will execute .catch()
    }, 1500);
});


/**
 * Now simulate recipe id and recipe call simulation
 **/

const getRecipe = (recId) => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {title: 'Pepperoni Pizza', publisher: 'papa jones'};
            resolve(`${ID} : ${recipe.title}`);
        }, 1500, recId);
    });
};

getIds
    .then((Ids) => {
        console.log(`success : ${Ids}`);
        return getRecipe(Ids[2]);
    })
    .then((recipe) => {
        console.log(recipe);
    })
    .catch((error) => {
    console.log(`error: ${error}`);
});
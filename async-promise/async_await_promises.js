// First let's define couple of promises.
// This is promise 1
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([100, 20, 203, 400, 299]);
    }, 1500);
});

// This is promise 2
const getRecipe = (recId) => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {title: 'Pepperoni Pizza', publisher: 'papa jones'};
            resolve(`${ID} : ${recipe.title}`);
        }, 1500, recId);
    });
};

// Now let's consume our promises here
// await keyword will only work inside async functions
async function getRecipesAW() {
    // consume first promise
    const IDs = await getIds;
    console.log(IDs);
    // consume second promise
    const recipe = await getRecipe(IDs[0]);
    console.log(recipe);
    // Now let's say we want to return something from this function and later want to use it
    return recipe;
}

getRecipesAW().then((result) => {
   console.log('got the result, and consumed here : ' + result);
});
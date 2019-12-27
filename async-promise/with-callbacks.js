/**
 * This is a simulation of how in real javascript ajax calls work and fetches data behind the scenes.
 * We have simulated that first ajax call gets the list of recipes and then there is another ajax call
 * simulation that fetches the result of a particular recipe.
 * But in real life this nesting of asynchronous calls can get really messy if we have to nest too any
 * asynchronous nested calls.
 * To avoid this, we have promises()
 */
const getRecipe = () => {
    setTimeout(() => { // simulate one ajax call, which goes to server and get recipe ids
        const recipeID = [100, 20, 203, 400, 299];
        console.log(recipeID);
        setTimeout((id) => { // simulating another ajax call to get data for each recipe
            const recipe = {
                title: 'pepperoni pizza',
                price: 500
            };
            console.log(`${id}: ${recipe.title}`);
        }, 1000, recipeID[2]);
    }, 2000);
};

getRecipe();
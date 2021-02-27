/* eslint-disable no-undef */
// Wait for DOM to completely load before we run our JS
$(function () {
  console.log('DOM loaded!');

  const detailsSection = $('#details-section');

  // variable to hold out recipes
  let recipes;

  const getRecipes = (user) => {
    userId = user || '';
    if (userId) {
      userId = `/?user_id=${userId}`;
    }

    fetch(`/api/recipes${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        recipes = data;
        console.log('Success:', data);
        if (!data || !data.length) {
          displayEmpty(user);
        } else {
          initializeRecipes();
        }
      })
      .catch((err) => console.error('Error', err));
  };

  // Get a recipe from a specific user
  const url = window.location.search;
  let userId;
  if (url.indexOf('?User_id=') !== -1) {
    userId = url.split('=')[1];
    getRecipes(userId);
  } else {
    getRecipes();
  }

  // Front end call to DELETE a post
  const deleteRecipe = (id) => {
    fetch(`/api/recipes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(getRecipes());
  };

  // Create HTML rows for the recipe container
  const initializeRecipes = () => {
    detailsSection.html('');
    const recipesToAdd = [];

    recipes.forEach((recipe) => recipesToAdd.push(createNewRecipe(recipe)));
    recipesToAdd.forEach((recipe) =>
      detailsSection.append.detailsSection(recipe)
    );
  };

  const createNewRecipe = (recipe) => {
    console.log('createNewRecipe' + recipe);

    const newRecipeCard = $('<div>').attr('class', 'card');

    const newRecipeCardHeading = $('<div>').attr('class', 'card-header');

    // Delete button
    const deleteButton = $('<button>').attr('class', 'delete').text('DELETE');
    deleteButton.on('click', handleRecipeDelete);

    // Edit button
    const editButton = $('<button>').attr('class', 'edit').text('EDIT');
    editButton.on('click', handleRecipeEdit);

    const newRecipeName = $('h2');

    const newRecipeCardBody = $('<div>').attr('class', 'card-body');

    const newRecipeBody = $('p');
    newRecipeName.text(`${recipe.name}`);
    newRecipeBody.text(`${recipe.body}`);
    newRecipeCardHeading.append(deleteButton);
    newRecipeCardHeading.append(editButton);
    newRecipeCardHeading.append(newRecipeName);
    newRecipeCardBody.append(newRecipeBody);
    newRecipeCard.append(newRecipeCardHeading);
    newRecipeCard.append(newRecipeCardBody);
    newRecipeCard.attr('data-post', JSON.stringify(recipes));

    console.log('createNewRecipe -> newRecipeCard', newRecipeCard);
    return newRecipeCard;
  };

  // Helper function to display something when there are no recipes
  const displayEmpty = (id) => {
    const query = window.location.search;
    let partial = '';
    if (id) {
      partial = ` for recipe #${id}`;
    }

    detailsSection.text(' ');
    const styles = {
      textAlign: 'center',
      marginTop: '50px'
    };
    const messageH2 = $('<h2>')
      .css(styles)
      .text(
        `No recipes yes${partial}, navigate <a href='/recipes${query}'>here</a> in order to get started.`
      );
    detailsSection.append(messageH2);
  };

  // Handle when we click the edit recipe button
  const handleRecipeDelete = (e) => {
    const currentRecipe = JSON.parse(
      e.target.parentElement.parentElement.dataset.recipe
    );

    deleteRecipe(currentRecipe.id);
  };

  // Handle when we click the edit recipe button
  const handleRecipeEdit = (e) => {
    const currentRecipe = JSON.parse(
      e.target.parentElement.parentElement.dataset.recipe
    );

    window.location.href = `/recipes?recipe_id=${currentRecipe.id}`;
  };
});

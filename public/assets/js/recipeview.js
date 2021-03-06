/* eslint-disable no-undef */
// Wait for DOM to completely load before we run our JS
$(function () {
  console.log('DOM loaded!');

  const recipeNames = $('#details-section');
  const recipeDetails = $('#recipedetails-section');

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

  // Front end call to DELETE a recipe
  const deleteRecipe = (id) => {
    fetch(`/api/recipes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(getRecipes());
  };

  // Front end call to VIEW a recipe
  const viewRecipe = (id) => {
    fetch(`/api/recipes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const TYPED_ARRAY = new Uint8Array(data.Images[0].data.data);
        // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
        // const base64String = btoa(STRING_CHAR);
        // var b64encoded = btoa(String.fromCharCode.apply(null, data.Images[0].data.data));
        // console.log(b64encoded);
        // const imageString = data.Images[0].data.data.toString('base64');
        // const finalImage = decodeURI(imageString);
        // console.log(imageString);
        // console.log(finalImage);
        function generatePreview (recipe) {
          const recipeName = $('<h2>')
            .addClass('preview-title')
            .text(`${recipe.name}`);
          const detailsDiv = $('<div>').addClass('col-lg-10 details');
          const imageDiv = $('<div>').addClass('col-lg-2 image');
          detailsDiv.html(`
          <p> Ingredients: ${recipe.ingredients} </p>
          <p> Directions: ${recipe.directions} </p>
          <p> URL: <a href='https://${recipe.URL}' target='_blank'>${recipe.URL}</a> </p>
          <p> Vegetarian?: ${recipe.vegetarian} </p>
          <p> Vegan?: ${recipe.vegan} </p>
          <p> Gluten_Free?: ${recipe.gluten_free} </p>
          <p> Favorite Recipe?: ${recipe.favorite_recipe} </p>
          <p> Add To Shopping List?: ${recipe.add_to_shopping_list}
          `);
          recipeDetails.append(recipeName, detailsDiv, imageDiv);
          // const image = $('<img>').attr('src', 'data:image/*;base64, ' + base64String)
          // const image = new Image();
          // image.src = URL.createObjectURL(base64String)
          // const imageSRC = image.prop('src');
          // console.log(imageSRC);
          // imageDiv.append(image);
          return recipeDetails + imageDiv;
        }
        generatePreview(data);
      });
  };

  // Create HTML rows for the recipe container
  const initializeRecipes = () => {
    recipeNames.html('');
    const recipesToAdd = [];
    recipes.forEach((recipe) => recipesToAdd.push(createNewRecipe(recipe)));
    recipesToAdd.forEach((recipe) => recipeNames.append(recipe));
  };

  const createNewRecipe = (recipe) => {
    console.log('createNewRecipe', recipe.name);

    // New recipe card
    const newRecipeCard = $('<div>').addClass('card');
    const newRecipeCardHeading = $('<div>').addClass('card-header');
    // const newRecipeCardBody = $('<div>').attr('class', 'card-body');

    // Delete button
    const deleteButton = $('<button>')
      .addClass('delete btn btn-outline-secondary')
      .attr('value', recipe.id)
      .text('DELETE');
    deleteButton.on('click', handleRecipeDelete);

    // Edit button
    const editButton = $('<button>')
      .addClass('edit btn btn-outline-secondary')
      .attr('value', recipe.id)
      .text('EDIT');
    editButton.on('click', handleRecipeEdit);

    // View button
    const viewButton = $('<button>')
      .addClass('view btn btn-outline-secondary')
      .attr('value', recipe.id)
      .text('VIEW');
    viewButton.on('click', handleRecipeView);

    const newRecipeName = $('<h2>');
    // const newRecipeBody = $('<p>');

    newRecipeName.text(`${recipe.name}`);

    // newRecipeBody.text(`${recipe.body}`);

    // Append recipe information to new recipe card
    newRecipeCardHeading.append(newRecipeName);
    newRecipeCardHeading.append(viewButton);
    newRecipeCardHeading.append(editButton);
    newRecipeCardHeading.append(deleteButton);
    // newRecipeCardBody.append(newRecipeBody);
    newRecipeCard.append(newRecipeCardHeading);
    // newRecipeCard.append(newRecipeCardBody);
    newRecipeCard.attr('data-post', JSON.stringify(recipe));

    return newRecipeCard;
  };

  // Helper function to display something when there are no recipes
  const displayEmpty = (id) => {
    const query = window.location.search;

    recipeNames.text(' ');
    const styles = {
      textAlign: 'center',
      marginTop: '50px'
    };
    const messageH2 = $('<h2>')
      .css(styles)
      .html(
        `No recipes yet navigate <a href='/add${query}'>here</a> in order to get started.`
      );
    recipeNames.append(messageH2);
  };

  // Handle when we click the edit recipe button
  function handleRecipeDelete () {
    recipeDetails.empty();
    console.log('handle delete recipe function was invoked');
    console.log(`current recipe: ${this.value}`);
    deleteRecipe(this.value);
  }

  // Handle when we click the edit recipe button
  function handleRecipeEdit () {
    console.log('handle edit recipe function was invoked');
    window.location.href = `/add?recipe_id=${this.value}`;
  }

  // Handle when we click the view recipe button
  function handleRecipeView () {
    recipeDetails.empty();
    console.log('handle view recipe function was invoked');
    console.log(`current recipe: ${this.value}`);
    viewRecipe(this.value);
  }

  // Front end call to VIEW an image
  // const imageRender = async (req, res) => {
  //   try {
  //     const recipes = await Recipe.findAll({
  //       include: [
  //         {
  //           model: Recipe,
  //           as: 'Images'
  //         }
  //       ]
  //     })
  //       .then(recipes => {
  //         recipes.map(recipe => {
  //           const recipeImage = recipe.imageData.toString('base64')
  //           recipe['data'] = recipeImage
  //         });
  //         return recipes;
  //       })
  //       .then(recipes => {
  //         return res.status(200).json({ recipes: recipes });
  //       });
  //   } catch (error) {
  //     return res.status(500).send(error.message);
  //   }
  // };
});

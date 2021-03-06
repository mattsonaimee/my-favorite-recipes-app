/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

// Wait for the DOM to completely load before we run our JS
$(function () {
  console.log('DOM loaded!');

  // Get references to the recipe items
  const recipeNameInput = $('#recipe-name');
  const ingredientsInput = $('#ingredients');
  const directionsInput = $('#directions');
  const urlInput = $('#url');
  const vegetarianInput = $('#vegetarian');
  const veganInput = $('#vegan');
  const glutenInput = $('#gluten-free');
  const favoriteRecipeInput = $('#favorite-recipe');
  const shoppingListInput = $('#shopping-list');
  const image = $('#input-files');

  // // global variables for image object
  // let fileData;

  // Get query parameter
  const url = window.location.search;
  let recipeId;
  function getUserId () {
    return $.get('/api/users').then((data) => {
      const userLoggedInId = data.id;
      console.log('here is the id of the user logged in ', userLoggedInId);
      return userLoggedInId;
    });
  }

  function getRecipeId () {
    return $.get('/api/recipes').then((data) => {
      const currentRecipeId = data.id;
      console.log('here is the id of the user logged in ', currentRecipeId);
      return currentRecipeId;
    });
  }

  let updating = false;

  // Get recipe data for editing/adding
  const getRecipeData = (id) => {
    const queryUrl = `/api/recipes/${id}`;
    fetch(queryUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log('Success in getting post: ', data);

          // Populate the form for editing
          recipeNameInput.val(data.name);
          ingredientsInput.val(data.ingredients);
          directionsInput.val(data.directions);
          urlInput.val(data.URL);
          vegetarianInput.prop('checked', data.vegetarian);
          veganInput.prop('checked', data.vegan);
          glutenInput.prop('checked', data.gluten_free);
          favoriteRecipeInput.prop('checked', data.favorite_recipe);
          shoppingListInput.prop('checked', data.add_to_shopping_list);

          // We are updating
          updating = true;
        }
      })
      .catch((err) => console.error(err));
  };

  // If recipe exists, grab the content of the recipe
  if (url.indexOf('?recipe_id=') !== -1) {
    recipeId = url.split('=')[1];
    getRecipeData(recipeId);
  }

  // Event handler for when the post for is submitted

  const handleFormSubmit = async function (e) {
    e.preventDefault();

    if (
      !recipeNameInput.val() ||
      !ingredientsInput.val() ||
      !directionsInput.val()
    ) {
      alert(
        "You must enter a value for 'Name', 'Ingredients', 'Directions', and 'URL'!"
      );
    }

    // Object that will be sent to the db
    const newRecipe = {
      name: recipeNameInput.val().trim(),
      ingredients: ingredientsInput.val().trim(),
      directions: directionsInput.val().trim(),
      URL: urlInput.val().trim(),
      vegetarian: vegetarianInput.prop('checked'),
      vegan: veganInput.prop('checked'),
      gluten_free: glutenInput.prop('checked'),
      favorite_recipe: favoriteRecipeInput.prop('checked'),
      add_to_shopping_list: shoppingListInput.prop('checked'),
      UserId: await getUserId(),
      recipeId: await getRecipeId()
    };

    // Update a post if flag is true, otherwise submit a new one
    if (updating) {
      newRecipe.id = recipeId;
      updateRecipe(newRecipe);
    } else {
      const data = $('#uploadedImage').attr('src');
      const name = $('#uploadedImage').attr('data-name');
      const type = $('#uploadedImage').attr('data-type');
      const imageObject = {
        data,
        name,
        type
      };
      submitRecipe(newRecipe, imageObject);
    }
  };

  // Attach an event listener to the form on submit; will trigger handleFormSubmit
  $('#add-recipe').on('submit', handleFormSubmit);

  // // Attach an event listener to the image on change; will save file to global variable
  // $('#input-files').on('change', function () {
  //   fileData = this.files[0];
  // })

  // Submits new recipe then redirects to view recipes
  const submitRecipe = (recipe, image) => {
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipe, image })
    })
      .then(() => {
        window.location.href = '/view';
      })
      .catch((err) => console.error(err));
  };

  // Update a recipe then redirect to view recipes
  const updateRecipe = (recipe) => {
    fetch('/api/recipes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
      .then(() => {
        window.location.href = '/view';
      })
      .catch((err) => console.error(err));
  };

  const imagesPreview = function (input, placeToInsertImagePreview) {
    if (input.files) {
      console.log(input.files);
      const filesAmount = input.files.length;
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-unmodified-loop-condition
      for (i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = function (event) {
          console.log(event.target.result);
          $($.parseHTML('<img>'))
            .attr('src', event.target.result)
            .attr('data-name', input.files[0].name)
            .attr('data-type', input.files[0].type)
            .attr('id', 'uploadedImage')
            .appendTo(placeToInsertImagePreview);
        };
        reader.readAsDataURL(input.files[i]);
      }
    }
  };

  $(function () {
    image.change(function () {
      console.log('clicked');
      imagesPreview(this, 'div.preview-images');
      $('#upload').submit();
    });
  });
});
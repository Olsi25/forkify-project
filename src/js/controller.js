import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import '/node_modules/core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);

if (module.hot) {
  module.hot.accept();
}
//const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//console.log('test');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    //0) Update results view to mark selected search result

    resultsView.update(model.getSearchResultsPage());

    //1) updating bookmars view
    bookmarksView.update(model.state.bookmarks);

    //recipeView.renderSpinner();
    // 2) Loading recipe
    await model.loadRecipe(id);
    //const { recipe } = model.state.recipe;

    // 3) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2. load search results
    await model.loadSearchResults(query);

    //3. render results
    //console.log(model.state.search.results);
    //resultsView.render(model.state.search.results);
    //console.log(model.getSearchResultsPage(1));
    resultsView.render(model.getSearchResultsPage(2));

    // 4. Render  initial pagination button

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //1. render new results

  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2. Render new pagination button

  paginationView.render(model.state.search);
};
const controlServings = function (newServings) {
  // Update the recipe serving ( in state)

  model.updateServings(newServings);

  // Update the recipe view
  //recipeView.render(model.state.recipe);

  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1. Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmarks(model.state.recipe);
  //console.log(model.state.recipe.bookmarked);
  console.log(model.state.recipe);

  // 2. u[date recipe view]
  recipeView.update(model.state.recipe);

  // 3. render bookmars
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner

    addRecipeView.renderSpinner();
    // upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    //render recipe
    recipeView.render(model.state.recipe);

    //success message
    addRecipeView.renderMessage();

    //render bookmarkvew

    bookmarksView.render(model.state.bookmarks);

    // change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // close form window

    setTimeout(function () {
      //  addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('emoji', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHanlderUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

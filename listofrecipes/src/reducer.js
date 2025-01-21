function myReducer(state, action) {

    switch (action.type) {
      
      case 'CHANGE_FAVORITE':
        return {
          ...state,
          recipes: state.recipes.map((recipe) => {
            // Toggle the favorite status of the clicked recipe
            if (recipe.id === action.item.id) {
              return { ...recipe, isFavourite: !recipe.isFavourite };
            } else if (recipe.title === action.item.title && recipe.description === action.item.description && recipe.isFavourite) {
              // If it's a duplicate, set it to not favorite
              return { ...recipe, isFavourite: false };
            }
            return recipe; // Return other recipes unchanged
          }),
        };
  
      case 'SET_SEARCH':
        return {
          ...state,
          search: action.search,
        };
  
      case 'ADD_RECIPE':  // Handle adding new recipe
        return {
          ...state,
          recipes: [...state.recipes, action.recipe],
        };
  
      case 'DELETE_RECIPE':  // Handle deletion of a specific recipe
        return {
          ...state,
          recipes: state.recipes.filter((recipe) => recipe.id !== action.recipe.id),  // Remove only the clicked recipe
        };
  
      default:
        return state;
    }
  }
  
  export default myReducer;
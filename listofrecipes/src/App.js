import './App.css';
import { useReducer, useState } from 'react';
import Search from './components/search';
import myReducer from './reducer';

function App() {
  const recipeList = [
    { id: 1, title: 'Zupa pomidorowa', description: 'Zupa pomidorowa, także pomidorówka – zupa przygotowywana na bazie wywaru drobiowego lub np. warzywnego. ', isFavourite: false },
    { id: 2, title: 'Pierogi ruskie', description: 'Pierogi ruskie – popularny w Polsce i na Rusi rodzaj pierogów, których nazwa wywodzi się od Rusi Czerwonej. Na Ukrainie pierogi te bywają zwane „polskimi”. Ciasto przygotowuje się z mąki, wody i soli, a farsz z masy twarogowo-ziemniaczanej z dodatkiem soli, pieprzu i podsmażonej cebuli', isFavourite: true },
    { id: 3, title: 'Schabowy', description: 'Kotlet schabowy – kotlet panierowany ze schabu przypominający sznycel wiedeński.', isFavourite: false }
  ];

  const [state, dispatch] = useReducer(myReducer, { recipes: recipeList, search: "" });
  const [newRecipe, setNewRecipe] = useState({ title: '', description: '' });
  const [showFavorites, setShowFavorites] = useState(false);

  function createID() {
    return Math.floor(Math.random() * 1000);
  }

  function handleSearchChange(event) {
    dispatch({ type: 'SET_SEARCH', search: event.target.value });
  }

  function isFavourite(item) {
    dispatch({ type: 'CHANGE_FAVORITE', item });
  }


  function handleAddRecipe() {
    if (newRecipe.title && newRecipe.description) {
      const recipeWithId = { ...newRecipe, id: createID() };

      dispatch({ type: 'ADD_RECIPE', recipe: recipeWithId });

      setNewRecipe({ title: '', description: '' });

      closeForm();
    }
  }

  function handleDeleteRecipe(recipe) {
    dispatch({ type: 'DELETE_RECIPE', recipe });
  }

  function closeForm() {
    document.getElementById("form").style.display = "none";
    document.getElementById("contentContainer").style.filter = "none";
  }

  return (
    <>

      <div id="form" align="center">
        <input className="title" placeholder="Title" value={newRecipe.title} onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}/>

        <textarea type="text" className="desc" placeholder="Description" value={newRecipe.description} onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}/>
        
        <br/>

        <button className="addRecipe" onClick={handleAddRecipe}>ADD</button>
        <button className="exit" onClick={closeForm}>Exit</button>
      </div>



      <div id="contentContainer">

        <div className='nav-buttons'>
          <div>
            <input className="search" placeholder="search" value={state.search} onChange={handleSearchChange} />

            <button id="add" onClick={(event) => {
              event.preventDefault();
              document.getElementById("form").style.display = "block";
              document.getElementById("contentContainer").style.filter = "blur(4px)";
            }}>
              ADD
            </button>

            <button 
              id="favouriteOnly" 
              onClick={() => setShowFavorites((prev) => !prev)}>
              {showFavorites ? "SHOW ALL" : "FAVOURITE ONLY"}
            </button>
            
          </div>
        </div>

        <main>
          <Search 
            recipe={state.recipes.filter(item => !showFavorites || item.isFavourite)} 
            search={state.search} 
            changeIsFavourite={isFavourite} 
            handleDeleteRecipe={handleDeleteRecipe} 
          />
        </main>

      </div>

    </>
  );
}

export default App;
import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import '../App.css'

function Search({ recipe, search, changeIsFavourite, handleDeleteRecipe }) {
  return (
    <>

      <div id="recipeContainer">

        { recipe

          .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))

          .map((item, index) => (

            <div className="recipe" key={index}>

              <button id="favToggle" onClick={() => changeIsFavourite(item)}>
                { item.isFavourite ? (
                  <FaStar id="star" style={{ color: "gold" }} />
                ) : (
                  <FaRegStar id="star" style={{ color: "gray" }} />
                )}
              </button>

              <p>{item.title}</p>

              <button id="delButton" onClick={() => handleDeleteRecipe(item)}>
                <FaTrash id="trash" />
              </button>
              <div className="ogranicznik"><p>{item.description}</p></div>

            </div>

          ))}

      </div>

    </>
  );
}

export default Search;
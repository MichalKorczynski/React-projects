import '../App.css';
import { useState } from 'react';

function Search({ todo, setTodo }) {

  const [search, setSearch] = useState("");

  return (
    <>
        <input id="wyszukiwanie" placeholder='search'
            onChange={
              (event) => setSearch(event.target.value)
            }
        />
        <div class="Scroll">
          {
            todo
            .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
              <div>
                {/*usuwanie*/}
                <button id="removeB"
                onClick={
                  (event) => {
                    event.preventDefault();
                    setTodo((products) => products.filter((item, index2) => index2 !== index));
                  }
                }
                ><i class="fa fa-close"></i></button>
                <li id="lista" key={index}>{item}</li>
              </div>
            ))
          }
        </div>
    </>
  );
}

export default Search;
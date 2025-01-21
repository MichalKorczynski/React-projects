import '../App.css';
function Add({ setTodo, todo }) {
return (
<>
    <form>
        <input id="addI" placeholder='add' />
        <button id="addB" class="fa fa-plus"
            onClick={
                (event) => {
                    event.preventDefault();
                    setTodo([...todo,event.target.previousElementSibling.value])
                }
            }
        />
        </form>
</>
);}
export default Add;
const Task = (props) => {
    return (
        <div>
            <h1 style={{color: props.completed ? "green" : "black"}}>{props.taskName}</h1>
            <button onClick={() => { props.completeTask(props.id) }}>Done</button><button onClick={() => { props.deleteTask(props.id) }}>X</button>
        </div>
    )
}

export default Task;

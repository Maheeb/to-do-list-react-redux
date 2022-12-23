import {useDispatch, useSelector} from "react-redux";
import {isDoneToDo, removeToDo, storeToDoList} from "./store/create";
import {useState} from "react";
import List from "./List";

const Main = () => {

    const toDos = useSelector(state => state.create.toDos);
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        // console.log(value);
        addTodo(value);
        setValue("");
    };
    const addTodo = (v) => {
        dispatch(storeToDoList(v));
    }
    const addDone = (value) =>
    {
        if (!value) return;
       dispatch(isDoneToDo(value));
    }
    const removeItem = (value) =>
    {

        if (!value) return;
        dispatch(removeToDo(value));
    }

    // console.log(toDos);
    return (
        <>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h4 className="card-title">Awesome Todo list</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="add-items d-flex">
                                            <input type="text"
                                                   className="form-control todo-list-input"
                                                   name="todo"
                                                   value={value}
                                                   onChange={handleChange}
                                                   placeholder="What do you need to do today?"></input>
                                            <button
                                                className="add btn btn-primary font-weight-bold todo-list-add-btn">Add
                                            </button>
                                        </div>
                                    </form>
                                    <List lists={toDos}  isCompleted={addDone} isRemoved={removeItem}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main;
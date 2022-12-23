import {useEffect, useState} from "react";

const List = (props) => {
    let toDos = props.lists;
    const [selected, setSelected] = useState([]);
    const handleChange = (event) => {
        const value = event.target.value;
        setSelected( [value]);
    };


    useEffect(()=>{
        props.isCompleted(selected);
    },[selected])

    // if(toDos.length > 0) {
    //     console.log(toDos[0].isDone);
    // }
    return(
      <>
          <div className="list-wrapper">
              <ul className="d-flex flex-column-reverse todo-list">
                  {toDos.length>0 && toDos.map((value, index) => (
                      <li className={value.isDone ? 'completed':''} key={index}>
                          <div className="form-check"><label className="form-check-label">
                              <input
                                  key={index}
                                  onChange={handleChange}
                                  value={index}
                                  name={value.text}
                                  className="checkbox"
                                  checked={value.isDone}
                                  type="checkbox"
                              />
                              {value.text}
                              <i
                                  className="input-helper"></i></label></div>
                          <i className="remove mdi mdi-close-circle-outline"></i>
                      </li>
                  ))}
              </ul>
          </div>
      </>
  )
}

export default List;
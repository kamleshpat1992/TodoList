
import './App.css';
import React,{useState} from "react"
import Todo from "./Todo.js"

const App =()=>{
  const[inputList,setInputList]=useState("")
  const[Items,setItems]=useState([])

  const itemList=(event)=>{
    setInputList(event.target.value)
  };
  const Listofitem =()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    })
    setInputList("")

  }; 
  const deleteItems=(id)=>{
    console.log("deletItems")
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id
      })
    })
  }
  return(
    <>
    <div className='main_div'>
      <div className='center_div'>
        <h1>Todo List Programme created By Kamlesh</h1>
        <br/>
        <input type="text" placeholder='Add Item' onChange={itemList} value={inputList}/>
        <button onClick={Listofitem}>+</button>
        <br/>
        <ol>
         {
          Items.map((itemval,index)=>{
             return <Todo key={index} id={index} onSelect={deleteItems}text={itemval}/>
          })
         }
        </ol>

      </div>

    </div>
    </>
  )
}
export default App;
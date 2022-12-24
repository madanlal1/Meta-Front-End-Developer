import {useState, useRef, createContext, useEffect, useReducer} from 'react';
import Practice from './Practice';

let icons = [
  {
    "src": "favicon.ico",
    "sizes": "64x64 32x32 24x24 16x16",
    "type": "image/x-icon"
  },
  {
    "src": "logo192.png",
    "type": "image/png",
    "sizes": "192x192"
  },
  {
    "src": "logo512.png",
    "type": "image/png",
    "sizes": "512x512"
  }
]


// context
const Name = createContext();

function App() {
  
  {/* ///////////////////////////// render data in unordered list */}
  let myData = icons.map(itm => {
    let data = `src = ${itm.src} || type = ${itm.type}`
    return <li>{data}</li>
  })
  

  // use ref
  const name = useRef("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
  }
  
  const update = () => {
    companyName == "Lemon" ? setCompanyName("Little Lemon") : setCompanyName("Lemon");
  }

  const [data, setData] = useState({name: "", email : ""});
  const [data2, setData2] = useState({name: "", email : ""});
  const todo = (e) => {
    // setTask(...Task, )
    e.preventDefault();
    // setTask({name: e.target.value});
    setData2({name : e.target.name.value, email : e.target.email.value})
    console.log(data);
    // setData({name: "", email : ""});
  }
  
  
  
  const [companyName, setCompanyName] = useState("Lemon");
  const [Task, setTask] = useState([]);
  const ToDo = (e) => {
    e.preventDefault();
    setTask([...Task, e.target.Task.value]);
  }

  
  
  // fetch API Data
  const [Resp, setResponse] = useState({});
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setResponse(data))
            .catch(err => console.log(err));
  }, [])  


  {/* using useEffect to increase counter */}
  const [count, setCount] = useState(0);
  
  
  useEffect(() => {
    if(count != 810) {
      setCount(count+1);
    }
  },[count]);

  // use Reducer 
  const reducer = (state, action) => {
    if(action.type === 'increment') return {counter : state.counter+1}
    if(action.type === 'decrement') return {counter : state.counter-1}
    if(action.type === 'reset') return {counter : 0}
  }

  const initialState = {counter : 0};
  const [state, dispatch] = useReducer(reducer, initialState);




  // useRef stores a mutable value that does not cause a re-render when updated.
  const count1 = useRef(0);

  useEffect(() => {
    count1.current = count1.current + 1;
  });
  console.log("count1 : ==> ",count1);
  // -----------------------------------------------------------------------------------------------
  return ( 
    <>


    {/* ///////////////////////////// use state */}
    <h1>{state.counter}</h1>
    <button onClick={() => dispatch({type : 'increment'})}>Counter ++</button>
    <button onClick={() => dispatch({type : 'decrement'})}>Counter - -</button>
    <button onClick={() => dispatch({type : 'reset'})}>Reset</button>


    {/* using useEffect to increase counter */}
    <div className='row'>
      <div className='col'>
        <div className='counter'>
          <h1>{count}</h1>
        </div>
      </div>
      <div className='col'>
        <div className='counter'>
          <h1>{count}</h1>
        </div>
      </div>
      <div className='col'>
        <div className='counter'>
          <h1>{count}</h1>
        </div>
      </div>
      <div className='col'>
        <div className='counter'>
          <h1>{count}</h1>
        </div>
      </div>
    </div>
 


    {/* use state complex TODO Simple App */}
      <h1>ToDo List</h1>
    <form onSubmit={ToDo}>
      <input type="text" name="Task"/>
      <button type='submit'>Submit</button> 
    </form>
      <ul>
        {Task.map(val => {
            return <li>{val}</li>
        })}
      </ul>

<br/><br/>
    {/* form using useState */}
    <form onSubmit={todo}>
      <label>Name : </label>
      <input type="text" name='name' value={data.name} onChange={e => setData({...data, name : e.target.value})}/>
      <label>Email : </label>
      <input type="email" name='email' value={data.email} onChange={e => setData({...data, email : e.target.value})}/>
      <input type='submit' value='submit'/> 
    </form>
    <h1>{data2.name}  {data2.email}</h1>
    <br/>


    {/* ////////////////////////////// map method */}
    {icons.map(item => {
      return item.src;
    })}

    {/* ///////////////////////////// render data in unordered list */}
    <ul>
      {myData}
    </ul>


    <br/><br/>

    {/* ///////////////////////////// use ref */}
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Enter Your Name: </label>
      <input type="text" id='name' ref={name} />
      <button>Submit</button>  
      <h2>{`Your Name is ${name.current.value}`}</h2>
    </form> 

    {/* ///////////////////////////// context hook */}
    <Name.Provider value={"madan"}>
      <Practice/>
    </Name.Provider>

    <br/><br/>

    <h1>{companyName}</h1>
    <button onClick={update}>Update Name</button>

    {/* fetch API Data */}
    <h2>Fetch API Data : </h2>
    <ul>
      {
        Resp && Resp.length > 0 && Resp.map(
          itm => {
            return <li>{itm.name}</li>
          }
        )
      }
    </ul>

    </>
  );
}

export default App;
export {Name};

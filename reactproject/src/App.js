import {useState, useRef, createContext} from 'react';
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
  
  // use state initialization
  const [counter, setCounter] = useState(0);
  const [companyName, setCompanyName] = useState("Lemon");
  // use ref
  const name = useRef("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
  }
  
  const update = () => {
    companyName == "Lemon" ? setCompanyName("Little Lemon") : setCompanyName("Lemon");
  }
  return (
    <>
    {/* ////////////////////////////// map method */}
    {icons.map(item => {
      return item.src;
    })}

    {/* ///////////////////////////// render data in unordered list */}
    <ul>
      {myData}
    </ul>

    {/* ///////////////////////////// use state */}
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter+1)}>Counter ++</button> <br/><br/>
    <button onClick={() => setCounter(counter-1)}>Counter - -</button>

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


    </>
  );
}

export default App;
export {Name};

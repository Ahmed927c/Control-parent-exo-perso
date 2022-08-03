import {useState} from "react";

const Callback =({ getColor }) => {
    const [activeColor, setActiveColor] = useState(null);

       const handlechange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    }
  return (
    <input type="text" id="input" aria-label="input" placeholder="Write a color" onChange={handlechange} value={activeColor}/>
  )
}

export default Callback
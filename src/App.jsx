import {useState} from "react";
import './styles.css';
import Callback from "./Callback";
// parent component
export default function App() {
    const [UiColor, setUiColor] = useState(null);
// callback function to pass to child component
const getColor = (color) => {
  setUiColor(color);
};
return (
    <div className="App">
        <div className="App_color_container" style={{ background: `${UiColor}` }}></div>
        <Callback getColor={getColor} />
    </div>
);
}


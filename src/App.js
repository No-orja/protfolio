import './App.css';
import Section1 from "./Component/Section1"
import Section2 from "./Component/Section2"
import Section3 from "./Component/Section3"
import Section5 from "./Component/Section5"
import Section4 from "./Component/Section4"
import { ThemeProvider } from './Cotext/ThemeContext';

function App() {
  return (
    <div className="App">
       <ThemeProvider>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
       </ThemeProvider>
    </div>
  );
}

export default App;

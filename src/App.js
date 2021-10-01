
import React, {useState, useRef} from 'react';
import {useOnClickOutside} from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import{ Burger, Menu } from './Components';
function App() {

  const[open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, ()=>setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen}/>
        </div>
        <div>
          <h1>Hello. This is Hamburger menu.</h1>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
          <small>Icon made by Freepik from www.flaticon.com</small>
          <small>Project Tutuorial <a href="https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/"> <b>HERE</b></a></small>
          <small><b>Thanks ~Daksh Lakhotiya</b></small>
        </div>
      </>
    </ThemeProvider>
  );
}


export default App;

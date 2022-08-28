import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"
import Cursor from '../assets/headcursor1.png'
import Hand from '../assets/headfront1.png'




const GlobalStyles = createGlobalStyle`

${'' /* 
*{
    outline: 1px solid red !important;
} */}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    // font-family: 'Sora', sans-serif;
    overflow-x: hidden;
    cursor: url('${Cursor}') , auto;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
li:hover , button:hover , a:hover{
    cursor: url('${Hand}'), auto;
}
`

export default GlobalStyles;
import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    box-sizing:  border-box;
}
 
body {
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');  
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }

`;

// import { createGlobalStyle } from "styled-components";

// // Importe a fonte que deseja usar
// import montserrat from "https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap";

// // Defina o estilo global
// export default createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Nunito', sans-serif;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: 'Montserrat', sans-serif;
//     margin: 0;
//     padding: 0;
//   }

//   input, button, textarea, h1, h2, h3, h4, h5, h6 {
//     font-family: 'Nunito', sans-serif;
//   }

//   /* Use a fonte importada */
//   @font-face {
//     font-family: 'Montserrat';
//     src: url(${montserrat}) format('woff2');
//     font-weight: 400;
//     font-style: normal;
//   }
// `;

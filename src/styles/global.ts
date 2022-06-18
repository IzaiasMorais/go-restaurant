import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #39b100;
    --dark-green: #41c900;
    --orange: #ffb84d;
    --red: #c72828;
    --grey: #f0f0f5;
    --dark-grey: #e4e4eb;
    --text-color: #3d3d4d;
    --white: #fff;
    --placeholder-color: #b7b7cc;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {    
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins';
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  img {
    max-width: 100%;
  }

  .green-btn {
      background: var(--green);
      color: var(--white);
      font-size: 1rem;
      padding-left: 1.5rem;
      border: 0;
      font-weight: 500;
      border-radius: .25rem;

      display: flex;
      align-items: center;
      gap: 1rem;
      transition: filter .2s;

      &:hover {
        filter: brightness(0.9);
      }
      strong {
        padding: 0.8rem 0.7rem .4rem .7rem; 
        background: var(--dark-green);
        border-radius: 0 .25rem .25rem 0;
      }
    }

    input {
      padding: .9rem;
      border: 0;
      border-radius: .5rem;

      ::placeholder {
        color: var(--placeholder-color);
      }
    }
 
  }
`;

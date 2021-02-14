import styled, { keyframes, css, createGlobalStyle } from 'styled-components';

const theme = {
  primaryColor: {
    header: 'white',
    headerBackground: '#3e3e3e',
    text: '#3c372b',
    border: '#3c372b',
    boxShadow: '#3c372b',
    noteBackground: '#fcffb0',
    creationNoteBackground: '#b0c4de',
    background: '#b0c4de',
  },
  fontSize: {
    header: '3rem',
    noNotes: '2.5rem',
    note: '1.2rem',
    button: '1rem',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.primaryColor.background}
  }
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.primaryColor.headerBackground};
  z-index: 2;

  h1 {
    font-size: ${theme.fontSize.header};
    color: ${theme.primaryColor.header};
  }
`;

export const Main = styled.main`
  height: 90vh;
  padding: 4rem;
`;

export const Button = styled.button`
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  border: 1px solid ${theme.primaryColor.border};
  border-radius: 0.1rem;
  box-shadow: 1px 1px 2px ${theme.primaryColor.boxShadow};
`;

export const CreateButton = styled(Button)`
  display: block;
  margin: 0 auto 3rem auto;
`;

const enableNoteCreation = keyframes`
  from {
    top: 20%;
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const NoteCreationStyle = styled.div`
  position: fixed;
  left: 50%;
  z-index: 2;
  width: 80%;
  background-color: ${theme.primaryColor.creationNoteBackground};
  padding: 0.75rem;
  border-radius: 0.5rem;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  ${(props) =>
    props.creatingNote
      ? css`
          visibility: visible;
          pointer-events: auto;
          animation-name: ${enableNoteCreation};
        `
      : css`
          visibility: hidden;
          pointer-events: none;
        `}

  textarea {
    resize: none;
    padding: 0.2rem 0.4rem;
    width: 100%;
    height: 250px;
    margin-bottom: 0.5rem;
    font-size: ${theme.fontSize.note};
    color: ${theme.primaryColor.text};
    background-color: ${theme.primaryColor.noteBackground};
    outline: none;
    border-color: ${theme.primaryColor.border};
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const NoteListStyle = styled.div`
  padding: 0 2rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;

    li {
      margin: 0rem 2rem 3rem 2rem;
      position: relative;
      box-shadow: 2px 2px 5px ${theme.primaryColor.boxShadow};
      align-self: center;

      div {
        display: flex;
        width: 100%;
        position: absolute;
        bottom: calc(-height);
      }
    }
  }

  > p {
    font-size: ${theme.fontSize.noNotes};
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const NoteText = styled.p`
  border: 1px dashed ${theme.primaryColor.border};
  padding: 0.1rem 0.2rem;
  word-wrap: break-word;
  overflow: hidden;
  background-color: ${theme.primaryColor.noteBackground};
  min-width: 10rem;
  max-width: 15rem;
  min-height: 5rem;
  max-height: 15rem;
  font-size: ${theme.fontSize.note};
`;

export const NoteTextSelected = styled(NoteText)`
  border-width: 2px;
  border-style: solid;
`;

export const NoteSettingsButton = styled.button`
  flex: 1;
  font-size: ${theme.fontSize.button};
  font-weight: bold;
  border-width: 0 2px 2px 2px;
  border-color: ${theme.primaryColor.border};
  border-style: solid;
  box-shadow: 2px 2px 5px ${theme.primaryColor.border};
`;

export const NoteEditButton = styled(NoteSettingsButton)`
  background-color: #ffff97;
`;

export const NoteDeleteButton = styled(NoteSettingsButton)`
  background-color: #ff7b7b;
  border-width: 0 2px 2px 0;
`;

const toggleBlockScreen = keyframes`
  from{
    background-color: rgba(0, 0, 0, 0);
    left: 0%;
  }to{
    background-color: rgba(0, 0, 0, 0.4);
    left: 0%;
  }
`;

export const BlockScreenStyle = styled.div`
  position: fixed;
  top: 0;
  left: 100%;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  animation-name: ${(props) => (props.creatingNote ? toggleBlockScreen : null)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

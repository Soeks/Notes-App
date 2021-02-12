import styled from 'styled-components';

export const AppStyle = styled.div`
  width: 100vw;

  header {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(100, 100, 100);

    h1 {
      font-size: 3rem;
      color: white;
    }
  }

  main {
    height: 90vh;
  }
`;

export const NoteCreationStyle = styled.div`
  padding: 4rem 2rem 2rem 2rem;
  height: fit-content;

  textarea {
    display: block;
    margin: auto;
    resize: none;
    font-size: 1.2rem;
    width: 80%;
    height: 500px;
    margin-bottom: 2rem;
    background-color: rgb(255, 240, 240);
  }

  div {
    width: fit-content;
    margin: auto;
  }

  div > button {
    margin: 0 1.5rem;
  }

  > button {
    display: block;
    margin: auto;
  }
`;

export const NoteListStyle = styled.div`
  width: 100%;
  padding: 2rem 2rem 0 2rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: center;
    list-style-type: none;
  }

  > p {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const BlockScreenStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 10vh;
  width: 100%;
  height: 90vh;
  z-index: 1;
`;

export const CustomButtonStyle = styled.button`
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  border: 0.125rem solid rgb(50, 50, 50);
  border-radius: 0.1rem;
`;

export const NoteStyle = styled.li`
  margin: 0rem 2rem 2rem 2rem;
  position: relative;

  div {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: calc(-height);
  }
`;

export const NoteSettingsButton = styled.button`
  flex: 1;
  font-size: 1rem;
  font-weight: bold;
  border-width: 0 2px 2px 2px;
  border-color: rgb(50, 50, 50);
  border-style: solid;
`;

export const NoteEditButton = styled(NoteSettingsButton)`
  background-color: #ffff97;
`;

export const NoteDeleteButton = styled(NoteSettingsButton)`
  background-color: #ff7b7b;
  border-width: 0 2px 2px 0;
`;

export const NoteText = styled.p`
  border: 1px dashed rgb(150, 150, 150);
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow: hidden;
  background-color: rgb(255, 240, 240);
  min-width: 10rem;
  max-width: 15rem;
  min-height: 5rem;
  max-height: 14.4rem;
  font-size: 1.2rem;
`;

export const NoteTextSelected = styled(NoteText)`
  border: 2px solid rgb(50, 50, 50);
`;

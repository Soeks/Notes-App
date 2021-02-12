import styled from 'styled-components';

export const AppStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: max-content;
  background-color: rgb(232, 242, 255);

  header {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(100, 100, 100);

    h1 {
      font-size: 3rem;
      color: rgb(255, 255, 255);
    }
  }
`;

export const MainScreenStyle = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 0 2rem 0;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    margin-bottom: 2rem;
    justify-content: center;
    list-style-type: none;
  }

  > p {
    font-size: 2.5rem;
    margin: 3rem;
    text-align: center;
  }
`;

export const NoteScreenStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 90vh;
  margin: auto;
  padding: 2rem;

  textarea {
    width: 700px;
    height: 100%;
    border: 2px solid black;
    overflow: auto;
    margin-bottom: 2rem;
    background-color: rgb(255, 240, 240);
    font-size: 1.2rem;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 700px;
  }

  @media (max-width: 1000px) {
    textarea {
      width: 90%;
    }
    div {
      width: 90%;
    }
  }

  @media (max-width: 500px) {
    div > button {
      font-size: 1rem;
    }
  }
`;

export const CustomButtonStyle = styled.button`
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  align-self: center;
  border: 0.15rem solid black;
  border-radius: 5rem;
`;

export const NoteStyle = styled.li`
  margin: 2rem 2rem 0 2rem;

  div {
    display: flex;
  }
`;

export const NoteSettingsButton = styled.button`
  flex: 1;
  font-size: 1rem;
  font-weight: bold;
`;

export const NoteEditButton = styled(NoteSettingsButton)`
  background-color: #ffff97;
`;

export const NoteDeleteButton = styled(NoteSettingsButton)`
  background-color: #ff7b7b;
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

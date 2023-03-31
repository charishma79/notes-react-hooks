// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  width: 100vw;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-weight: bold;
  font-size: 30px;
  color: #4c63b6;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`

export const NotesContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #cbd5e1;
  min-height: 40vh;
  width: 95%;
  padding: 15px;
  @media screen and (max-width: 767px) {
    min-height: 30vh;
    padding: 5px;
    box-shadow: 0px 4px 21px 0px #cbd5e1;
  }
`

export const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 38px;
  padding: 10px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
  padding: 10px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const Button = styled.button`
  background-color: #4c63b6;
  height: 40px;
  width: 90px;
  align-self: flex-end;
  padding: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`

export const NotesList = styled.ul`
  list-style-type: none;
  margin-top: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    margin-top: 35px;
    width: 100%;
    padding-left: 0px;
  }
`
export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
`

export const EmptyImage = styled.img`
  height: 150px;
  @media screen and (max-width: 767px) {
    height: 100px;
  }
`

export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: #475569;
  margin-top: 15px;
`

export const EmptyText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #334155;
  margin-top: 2px;
`

// Style your elements here
import styled from 'styled-components'

export const NotesItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid #aab8c8;
  width: 280px;
  height: 20vh;
  overflow-y: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const TitleHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 0px;
`
export const TextParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  font-weight: 400;
  margin-bottom: 5px;
  width: 100%;
  margin-top: 10px;
`

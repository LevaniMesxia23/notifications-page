import { useState } from 'react'
import './App.css'
import { GlobalStyles } from './Globals'
import styled from 'styled-components'


function App() {

  return (
    <>
      <GlobalStyles />
      <Main>
        <div className='header'>
          <div className='notification-header'>
            <h2>Notifications</h2>
            <span className='notification-num'>3</span>
          </div>
          <span className='mark'>Mark all as read</span>
        </div>
      </Main>
      <Boxes />
    </>
  )
}

const Main = styled.main`
  width: 730px;
  height: 839px;
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0px 20px 60px 0px rgba(73, 97, 168, 0.05);
  padding: 3.3rem 3.0rem 1.8rem 3.0rem;
  border-radius: 15px;

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .notification-header{
    display: flex;  
    justify-content: center;
    align-items: center;
    gap: 1.1rem;

    h2{
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .notification-num{
      width: 32px;
      height: 25px;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--1---Blue, #0A327B);
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .mark{
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: var(--4---Dark-Grey-Blue, #5E6778);
    }
`


export default App

import { useState } from "react";
import "./App.css";
import { GlobalStyles } from "./Globals";
import styled from "styled-components";
import data from "./data.json";
import Boxes from "./components/Boxes";

function App() {
  const [count, setCount] = useState(3);
  // const [color, setColor] = useState(null)
  const [dataNotification, setDataNotification] = useState(data.notifications)
  const [unRead, setUnred] = useState(data.notifications.filter(item => item.isUnread).length)
  function markAsRead(index){
    newMessages = [...data.notifications]
    if(newMessages[index].unRead){
      newMessages[index].unRead == false
      setDataNotification(newMessages)
      setUnred(unRead - index)
    }
  }
  console.log(unRead)
  // function checkRead(id){
  //   setDataNotification(prev => prev.filter(item => item.id == id))
  // }

  return (
    <>
      <GlobalStyles />
      <Main>
        <div className="header">
          <div className="notification-header">
            <h2>Notifications</h2>
            <span className="notification-num">{unRead}</span>
          </div>
          <span className="mark">Mark all as read</span>
        </div>
        {dataNotification.map((item,index) => {
          return (
            <Boxes
              key={item.id}
              markAsRead={() => markAsRead(index)}
              {...item}
              isDifferent={item.action.includes("private")}
              isUnread={item.isUnread}
              oval={item.oval}
              setCount={setCount}
              count={count}
              
            />
          );
        })}
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 730px;
  height: auto;
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0px 20px 60px 0px rgba(73, 97, 168, 0.05);
  padding: 3.3rem 3rem 1.8rem 3rem;
  border-radius: 15px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 31px;
  }

  .notification-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.1rem;

    h2 {
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .notification-num {
      width: 32px;
      height: 25px;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--1---Blue, #0a327b);
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
  .mark {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: var(--4---Dark-Grey-Blue, #5e6778);
  }
  .mark:hover {
    color: var(--1---Blue, #0a327b);
    cursor: pointer;
  }
`;

export default App;

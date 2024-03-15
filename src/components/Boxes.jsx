import styled from 'styled-components'

import data from "../data.json"


export default function Boxes({ setCount,id, name, action, time, content, profilePicture, group, isDifferent, isUnread, oval }){
  
  if(isDifferent) return (
    <div>
    <FirstBox>
    <img src={profilePicture} alt="" />
    <div className='container-different'>
    <div className='top-div-different'>
      <span className='name'>{name}</span>
      <span className='action'>{action}</span>
      </div>
    <div className='bottom-div'>
        <span className='time'>{time}</span>
    </div>
    <div className='privateText'>
      <span>Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.</span>
    </div>
    </div>
    </FirstBox>
</div>

  )
  return (
      <div>
        <Box isUnread={isUnread}>
        <img src={profilePicture} alt="" />
        <div className='container'>
        <div className='top-div'>
          <span>
          <span className='name'>{name}</span>
          <span className='action'>{action}</span>
          <span className='content'>{content}</span>
          <span className='group'>{group}</span>
          </span>
   
          {oval ? <span className='oval'></span> : null}
          </div>
        <div className='bottom-div'>
            <span className='time'>{time}</span>
        </div>
        </div>
        </Box>
    </div>
  )
}
const FirstBox = styled.div`
    display: flex;
    border-radius: 8px;
    margin-bottom: 8px;
    padding-left: 20px;



img{
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 45px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: url(/images/avatar-mark-webber.webp) lightgray 50% / cover no-repeat;
    margin-right: 19px;
    margin-top: 1.8rem;
  }
  .container-different{
    display: flex;
    flex-direction: column;
    background-color: ${({ isUnread }) => (isUnread ? "var(--8---Snow, #F7FAFD)" : "transparent")};

    .top-div-different{
      width: 554px;
      height: 45px;
      padding-bottom: 1px;
      margin-top: 5px;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 3px;
      flex-shrink: 0;

      .name{
      color: rgba(28, 32, 43, 1);
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .action{
      color: rgba(94, 103, 120, 1);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .content{
      color: var(--4---Dark-Grey-Blue, #5E6778);
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }

    .content:hover{
      color: var(--1---Blue, #0A327B);
        cursor: pointer;
    }
    .name:hover{
      color: var(--1---Blue, #0A327B);
        cursor: pointer;
    }
    }

    .bottom-div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 13px;

      .time{
      color: var(--5---Grey-Blue, #939CAD);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    }

  .privateText{
    width: 566px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--7---Very-Light-Grey-Blue, #DDE7EE);
    color: var(--4---Dark-Grey-Blue, #5E6778);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.7rem 2rem 2rem;


    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .privateText:hover{
    background: var(--6---Light-Grey-Blue, #E5EFFA);
    cursor: pointer;
  }
  }
`

const Box = styled.div`
  width: 670px;
  min-height: 80px;
  flex-shrink: 0;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: ${({ isUnread }) => (isUnread ? "var(--8---Snow, #F7FAFD)" : "transparent")};


  img{
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 45px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: url(/images/avatar-mark-webber.webp) lightgray 50% / cover no-repeat;
    margin-right: 19px;
  }
  .container{
    display: flex;
    flex-direction: column;

    .top-div{
    width: 554px;
    height: 45px;
    padding-bottom: 1px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;

    .name{
      color: rgba(28, 32, 43, 1);
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin-right: 0.6rem;
    }
    .action{
      color: rgba(94, 103, 120, 1);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-right: 0.6rem;
    }
    .content{
      color: var(--4---Dark-Grey-Blue, #5E6778);
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .content:hover{
      color: var(--1---Blue, #0A327B);
        cursor: pointer;
    }
    .name:hover{
      color: var(--1---Blue, #0A327B);
        cursor: pointer;
    }
    .group:hover{
      color: var(--1---Blue, #0A327B);
        cursor: pointer;
    }


    .group{
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }

    .oval{
      width: 8px;
      height: 8px;
      flex-shrink: 0;
      background-color: #F65552;
      border-radius: 50%;
    }

  }

  .bottom-div{
      display: flex;
      align-items: center;
      justify-content: space-between;

      .time{
      color: var(--5---Grey-Blue, #939CAD);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  }
  

`
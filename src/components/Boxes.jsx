import styled from 'styled-components'

import data from "../data.json"


export default function Boxes({ id, name, action, time, content, profilePicture, group, isDifferent }){
  console.log(isDifferent)

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
        <Box>
        <img src={profilePicture} alt="" />
        <div className='container'>
        <div className='top-div'>
          <span className='name'>{name}</span>
          <span className='action'>{action}</span>
          <span className='content'>{content}</span>
          <span className='group'>{group}</span>
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
  .container-different{
    display: flex;
    flex-direction: column;

    .top-div-different{
    width: 554px;
    height: 45px;
    padding-bottom: 1px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    }

  .privateText{
    width: 566px;
    height: 97px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--7---Very-Light-Grey-Blue, #DDE7EE);
    background: var(--6---Light-Grey-Blue, #E5EFFA);
  }

  .img.private-img{
    width: 20px; /* Example width */
      height: 20px;
  }
  }
`

const Box = styled.div`
  width: 670px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--8---Snow, #F7FAFD);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding-left: 20px;


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

    .group{
      color: var(--1---Blue, #0A327B);
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
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
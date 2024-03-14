import styled from 'styled-components'
// import Mark from "/images/avatar-mark-webber.webp"
// import Angela from "/images/angela-gray.webp"
// import Jacob from "/images/avatar-jacob-thompson.webp"
// import Rizky from "/images/avatar-rizky-hasanuddin.webp"
// import Kimberly from "/images/avatar-kimberly-smith.webp"
// import Nathan from "/images/avatar-nathan-peterson.webp"
// import Anna from "/images/avatar-anna-kim.webp"

import data from "../data.json"


export default function Boxes({ id, name, action, content, profilePicture }){
  console.log(id)
  return (
      <div>
        <Box>
        <img src={profilePicture} alt="" />
        <div>
          <span className='name'>{name}</span>
          <span className='action'>{action}</span>
          <span className='content'>{content}</span>
        </div>
        </Box>
    </div>
  )
}

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

  div{
    width: 554px;
    height: 45px;
    padding-bottom: 1px;
    display: flex;
    justify-content: start;
    align-items: flex-start;
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
  }
`
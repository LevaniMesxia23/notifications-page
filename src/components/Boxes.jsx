
import styled from 'styled-components'

export default function Boxes(){

  return (
      <div>
        <Box />
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
`
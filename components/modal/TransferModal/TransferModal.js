import React, { useState } from 'react'
import styled from 'styled-components'

import Transfer from '../Transfer/Transfer'
import Receive from '../Receive/Receive'
import CoinSelector from '../CoinSelector/CoinSelector'

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
    const [action, setAction] = useState('send');
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);


    const selectedStyle = {
        color: '#3773f5',
    }

    const unselectedStyle = {
        border: '1px solid #282b2f',
    }

    const selectedModal = (option) => {
      switch(option) {
        case 'send':
          return <Transfer 
          setAction={setAction}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
          selectedToken={selectedToken}
          />
        case 'receive':
          return <Receive 
          setAction={setAction}
          selectedToken={selectedToken}
          walletAddress={walletAddress}
          />
        case 'transferring':
          return <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
          }}
        >
          Transfer in progress...
        </div>
        case 'transferred':
          return  <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#27ad75',
          }}
        >
          Transfer complete
        </div>
        case 'select':
          return <CoinSelector
          setAction={setAction}
          selectedToken={selectedToken}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
          setSelectedToken={setSelectedToken}
          />

        default:
          return <Transfer 
          setAction={setAction}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}
          selectedToken={selectedToken} />
      }
    }
    
    return (
        <Wrapper>
            <Selector>
                <Option style={action === 'send' ? selectedStyle : unselectedStyle} onClick={() => setAction('send')}>
                    <p>send</p>
                </Option>
                <Option style={action === 'receive' ? selectedStyle : unselectedStyle} onClick={() => setAction('receive')}>
                    <p>receive</p>
                </Option>
            </Selector>
            <ModalMain>{selectedModal(action)}</ModalMain>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column; 
`

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
      cursor: pointer;
      background-color: #111214;
  }
`

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`

export default TransferModal
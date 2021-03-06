import { connect } from 'react-redux'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  position: absolute;
  top: 102px;
  z-index: 2;
  right: 0;
  left: 0;
  padding: 4px;
  text-align: center;
  font-size: 14px;
  color: #ae5b11;
  background: rgb(255, 185, 122);

  body.scrolled & {
    position: fixed;
    top: 62px;
  }

  @media (min-width: 992px) {
    top: 40px;

    body.scrolled & {
      top: 54px;
    }
  }
`

const ChainWarning = ({ isCorrectChain, chains }) =>
  !isCorrectChain && (
    <Container>
      Your web wallet is connected to the wrong chain. Switch to{' '}
      {chains
        .map(
          ({ displayName, chainId }) => `${displayName} (net id: ${chainId})`
        )
        .join(', ')}
    </Container>
  )

const mapStateToProps = state => ({
  isCorrectChain:
    !state.wallet.chainId ||
    Object.keys(state.config.chains).includes(state.wallet.chainId),
  chains: Object.values(state.config.chains)
})

export default connect(mapStateToProps)(ChainWarning)

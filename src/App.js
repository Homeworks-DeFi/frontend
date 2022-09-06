import { useEffect } from 'react';
import './App.css';


function App() {

  const checkWalletIsConnected = () => { }

  const connectWalletHandler = () => { }

  const mintNftHandler = () => { }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }


  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='main-app'>
      <h1>Home Works</h1>
      <div>
        {connectWalletButton()}
      </div>
    </div>
  )
}

export default App;
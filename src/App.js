// Author : Nemuel Wainaina

import { useState } from "react"
import QRCode from 'qrcode'

const App = () =>  {
  const [url, setURL] = useState('')
  const [qrCode, setQrCode] = useState('')

  const generateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 1000,
      margin: 2
    }, (err, url) => {
      if(err) return console.log(err)

      // no error in generating the QR code
      console.log(url)
      setQrCode(url)
    })
  }

  return (
    <div className="App">
      <header>
        <h2>QR Code Generator</h2>
      </header>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => {
          setURL(e.target.value)
        }}
        placeholder="eg. www.google.com" />
      &nbsp;&nbsp;&nbsp;
      <button onClick={generateQRCode}>Generate</button>
      <br />
      <br />
      {
        qrCode 
          &&
        <>
          <img src={qrCode} />
          <br />
          <a href={qrCode} download="qrcode.png">Download</a>
        </>
      }
    </div>
  );
}

export default App;

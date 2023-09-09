import React, { useState } from 'react'

export default function Card() {
    const [input , setInput] = useState("")
    const[qr , setQr] = useState()
    const[isloading, setIsLoading] = useState(false)
    const getQRcode = async (e)=>{
        e.preventDefault()
        try{
            setIsLoading(true)
            const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200*200&data=${input}`)
            setQr(res.url)

        }catch(error){
            console.log(error)

        }finally{
            setIsLoading(false)

        }
    }
  return (
    <>
    <form className='form' onSubmit={getQRcode}>
        <h1 className='title'>QR Code Generator</h1>
        <input type="text" className='input' placeholder='Enter Url or text'
        value={input} onChange={(e)=>setInput(e.target.value)} />
    
    {isloading && <div className='loading'><span></span>Loading...</div>}
    {!isloading && (qr ? <img className='qr_code' src={qr} alt='qr_code'/>:
    <div className='loading'>Generate Qr Code for you</div>)}
    <input type="submit" className='submit' value="Generate QR Code" />
    </form>

    </>

  )
}

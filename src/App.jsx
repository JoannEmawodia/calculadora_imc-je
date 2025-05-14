import { useState } from 'react'

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Calcule seu IMC</h1>
        </header>
        <form>
          <label> Digite sua altura</label>
          <input type="number" placeholder="em centimetros" />
          <label>Digite seu peso</label>
          <input type="number" placeholder="em kg" />
        </form>
        <div>
          <h3>O seu IMC é: 20</h3>
          <p>Sua classificação é: Obeso nivel I</p>
        </div>
      </div>
    </>

  )

}

export default App

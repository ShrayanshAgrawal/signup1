import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
     <div className="bck">
      <div className="signup">
        
        <div className="ch1">
          <div className="cir">
            <h3 className="he">Upload your image</h3>
            <input type="image" className="cp" />
          </div>

          <div className="st">
            <input type="text" placeholder="Describe your status" className="sta" />
            <input type="text" placeholder="Enter your name" className="na" />
          </div>

          <div className="ph">
            <input 
              type="tel" 
              maxLength={10} 
              placeholder="Enter your phone number" 
              className="phno" 
            />
            <input 
              type="number" 
              placeholder="Enter your age" 
              min="15" 
              max="120" 
              className="age" 
            />
          </div>

          <div className="button-container">
            <button 
              className="signup-btn" 
              onClick={() => navigate("/demo")}
            >
              Sign-Up
            </button>
          </div>
        </div>

        <div className="ch2">
          <button className="social-btn google">Sign-up with Google</button>
          <button className="social-btn twitter">Sign-up with Twitter</button>
          <button className="social-btn facebook">Sign-up with Facebook</button>
          <button className="social-btn github">Sign-up with GitHub</button>
        </div>
        
      </div>
    </div>

</>
  )
}
export default App
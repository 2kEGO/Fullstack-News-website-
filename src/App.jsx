import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className="main-page-background">
        <div className="main-page-container">

          <div className="nav-bar-container">
            <nav>

              <div className="nav-left-section">
                
                <ul>
                  <li>
                    <div id='hamburger'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </li>

                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Latest News</a>
                  </li>
                  <li>
                    <a href="">Reviews</a>
                  </li>

                </ul>

              </div>
              <div className="nav-right-section"></div>
            </nav>
          </div>

          <div className="news-content-container"></div>

        </div>
      </div>
    </>
  )

  function SignInPage() {
    return <div className="sign-up-container">

      <div className="sign-up-left">
        <img src="" alt="" />
      </div>

      <div className="sign-up-right">
        <form action="submit">

          <div className="title-section">
            <h1></h1>
          </div>

          <div className="form-section">

            <div>
              <label htmlFor="">Full Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">User Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Confirm Password</label>
              <input type="text" />
            </div>

          </div>

        </form>
      </div>

    </div>
  }
}

export default App

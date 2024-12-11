

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

export default SignInPage;
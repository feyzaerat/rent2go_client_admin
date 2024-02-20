import React from 'react'
import './success.css'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../components'

type Props = {}

const SuccessPage = (props: Props) => {
  return (
    <>
    <Navbar />
    <div className="success">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2>Reset Password Successful !</h2>
        </div>
        <div className="contentContainer">
        <p>
              <span>Reset password transaction has been successfully.. </span><br></br>
              <span>
              Please check your mailbox.
              </span>
            </p>
        </div>
        <div className="actionContainer">
          <Link
            to="/profile/your-reservation"
            type="button"
            className="btn btn-profile"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default SuccessPage
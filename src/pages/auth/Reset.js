import React, { useState } from 'react'
import styles from "./Auth.module.scss";
import resetImg from "../../assets/forgot.png"
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loader from '../../components/loader/Loader';

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (event) => {
    event.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("Check your email for reset link")
    setIsLoading(false)
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });
  }

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width="400px"/>
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form onSubmit={resetPassword}>
            <input type="text" placeholder="Email" required value={email} 
              onChange={(event) => setEmail(event.target.value)}/>
            
            <button type='submit' className="--btn --btn-primary --btn-block">Reset Password</button>
            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
          
        </div>
      </Card>
    </section>
    </>
  )
}

export default Reset
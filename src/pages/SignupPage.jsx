import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { SignupInFooter } from '../cmps/SignupInFooter';
// import { GoogleLogin } from 'react-google-login';


export const Signup = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');
    const emailPattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9]+\\.[a-z]{2,4}$");


    useEffect(() => {
        if (history.location.state) setEmail(history.location.state.detail);
        else setEmail(''); 
    }, [history]);

    const handleSignin = (event) => {
        event.preventDefault()
        try {
            dispatch(signup({ firstName, emailAddress, password }))
            history.push('/user-profile')
        } catch (err) {
            setFirstName('')
            setEmailAddress('')
            setPassword('')
            console.log('plz feel in all inputs nedded')
        }
    }


    const handleFailure = (result) => {
        console.log(result)
    }

    return (
        <>
            <section className='sign-page'>
                <h1 className='logo logo-pages'>NetPlix</h1>
                <section className='form-container'>
                    <form onSubmit={handleSignin}>
                        {error && <p>{error}</p>}
                        <h1>Sign Up</h1>
                        <input
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                            required
                        />
<input
    placeholder="Email address"
    value={email ? email : emailAddress}
    onChange={({ target }) => setEmailAddress(target.value.toLocaleLowerCase())}
    pattern={emailPattern}
    required
/>
                        <input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            required
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button type="submit">
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <span>Already a user? <Link to="/signin">Sign in now.</Link></span>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </p>
                    </div>
                </section>

                <SignupInFooter />
            </section>
        </>
    )



}
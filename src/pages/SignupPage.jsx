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

    useEffect(() => {
        if (history.location.state) setEmail(history.location.state.detail);
        else setEmail(''); // Set it to an empty string if undefined
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

    const handleSignupWithGoogle = async (res) => {
        const email = res.profileObj.email
        const username = res.profileObj.givenName
        const userPassword = res.profileObj.email
        dispatch(signup({ firstName: username, emailAddress: email, password: userPassword }))
        history.push('/user-profile')
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
    pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$"
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
                    {/* <GoogleLogin
                        clientId='361317884251-ufajak1hhu42t8mpobrucofa84afg4rs.apps.googleusercontent.com'
                        onSuccess={handleSignupWithGoogle}
                        onFailure={handleFailure}
                        render={renderProps => (
                            <button className='btn-google-login' onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google" aria-hidden="true"></i>
                                Signup with Google</button>
                        )}
                        buttonText="Login"
                        cookiePolicy={'single_host_origin'}>
                    </GoogleLogin> */}
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
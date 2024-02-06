import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignupInFooter } from '../cmps/SignupInFooter';
import { login } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
// import { GoogleLogin } from 'react-google-login';
import { userService } from '../services/user.service';


export const Signin = () => {
    const history = useHistory()
    const [emailAddress, setEmailAddress] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (history.location.state) setEmail(history.location.state.detail)
        else return
    }, [history])

    const handleLogin = (event) => {
        event.preventDefault()
        try {
            dispatch(login({ emailAddress, password, isNew: false }))
            history.push('/user-profile')
        } catch (error) {
            setEmailAddress('')
            setPassword('')
            setError(error.message)
        };
    };


    const handleFailure = (result) => {
        console.log(result)
    }

    const handleLoginWithGoogle = async (res) => {
        // const password = await userService.checkGoogleProfile(res.profileObj.email)
        const email = res.profileObj.email
        dispatch(login({ emailAddress: email, password, isNew: false }))
        history.push('/user-profile')
    }

    return (
        <section className='sign-page'>
            <h1 className='logo logo-pages'>NetPlix</h1>
            <section className='form-container'>
                <form onSubmit={handleLogin}>
                    {error && <p>{error}</p>}
                    <h1>Sign In</h1>
                    <input
                        placeholder="Email address"
                        value={email ? email : emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value.toLocaleLowerCase())}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)}
                        required
                    />
                    <button type="submit">
                        Sign In
                    </button>
                </form>
                {/* <GoogleLogin
                    clientId='361317884251-ufajak1hhu42t8mpobrucofa84afg4rs.apps.googleusercontent.com'
                    onSuccess={handleLoginWithGoogle}
                    onFailure={handleFailure}
                    render={renderProps => (
                        <button className='btn-google-login' onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-google" aria-hidden="true"></i>
                            Login with Google</button>
                    )}
                    buttonText="Login"
                    cookiePolicy={'single_host_origin'}>
                </GoogleLogin> */}
                <div>
                    <span>New to Netflix? <Link to="/signup">Sign up now.</Link></span>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                </div>
            </section>
            <SignupInFooter />
        </section>
    )

}
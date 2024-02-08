
import { useHistory } from 'react-router-dom';
import { signup } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignupInFooter } from '../cmps/SignupInFooter';

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [emailError, setEmailError] = useState('');
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$/;
    const history = useHistory()
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');

    const validateEmail = (value) => {
        if (!value.match(emailPattern)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmailAddress(value);
        validateEmail(value);
    };

     const handleSignin = (event) => {
        event.preventDefault()
        if (!emailAddress.match(emailPattern)) {
            setEmailError('Please enter a valid email address');
            return; 
        } else {
            try {
                dispatch(signup({ firstName, emailAddress, password }))
                history.push('/user-profile')
            } catch (err) {
                setFirstName('')
                setEmailAddress('')
                setPassword('')
            }
        }
    }

    return (
        <section className='sign-page'>
            <h1 className='logo logo-pages'>NetPlix</h1>
            <section className='form-container'>
                <form onSubmit={handleSignin}>
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
                        onChange={handleEmailChange}
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

                    {emailError && <p className='error-message'>{emailError}</p>}
                    <button type="submit">Sign Up</button>
                </form>
                <div>
                         <span>Already a user? <Link to="/signin">Sign in now.</Link></span>
                       <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                       </p>
                    </div>
              </section>
                <SignupInFooter />
        </section>
    );
};
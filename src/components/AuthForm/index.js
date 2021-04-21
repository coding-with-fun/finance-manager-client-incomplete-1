import React from 'react';

const AuthForm = ({ type }) => {
    return (
        <div>
            <h1>{type === 0 ? 'Sign In' : 'Sign Up'}</h1>
        </div>
    );
};

export default AuthForm;

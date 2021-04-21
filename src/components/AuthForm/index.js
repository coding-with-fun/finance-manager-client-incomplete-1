import React from 'react';

const AuthForm = ({ routeType }) => {
    return (
        <div>
            <h1>{routeType === 0 ? 'Sign In' : 'Sign Up'}</h1>
        </div>
    );
};

export default AuthForm;

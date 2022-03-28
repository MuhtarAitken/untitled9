import React, {SyntheticEvent, useState} from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const accessToken = "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDg0MTEwNDksImlhdCI6MTY0ODQwNzQ0OSwiaWQiOjF9.eSJBLboEeNEkhHBm-tT7sRXY641kkXfcXYAVa9tIP8s\"";

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();


        const response = await fetch('https://tsarka-frontend-test.herokuapp.com/frontend/task/graphql', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                email, password
            })
        });


    }


    return (
        <div className="text-center">
            <form className="text-center" onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <input type="email" className="form-control" placeholder="email address"
                       onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="password"
                       onChange={e => setPassword(e.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </div>

    );
};

export default Login;
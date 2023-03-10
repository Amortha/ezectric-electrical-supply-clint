import { useEffect, useState } from "react"
import { json } from "react-router";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://ezectric-electrical-supply.onrender.com/user/${email}`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken',accessToken);
                    setToken(accessToken);

                })
        }
    }, [user]);
    return [token]
}
export default useToken
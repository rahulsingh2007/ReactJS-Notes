/* import { useState, useEffect } from 'react';

function UserList() {
    // 1. Define states for your data, loading status, and errors
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 2. Create an async function inside the useEffect hook
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result); // 3. Store the data in your state
            } catch (error) {
                setError(error.message); // Handle errors gracefully
            } finally {
                setLoading(false); // Stop the loading spinner
            }
        };

        fetchData();
    }, []); // 4. Empty dependency array ensures this runs exactly once on mount

    // 5. Render different UI states based on API status
    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList; */


import { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Import axios at the top

function UserList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 2. Axios simplifies the fetch call and handles non-2xx status codes automatically
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                
                // 3. Axios automatically parses JSON; the data lives inside response.data
                setData(response.data); 
            } catch (error) {
                // 4. Axios wraps errors inside error.message or error.response.data
                setError(error.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList;

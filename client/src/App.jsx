import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
    const [items, setItems] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('https://localhost:8000/');
                setItems(res.data);
                console.log(items);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, []);

    return <div className='App'>hej</div>;
}

export default App;

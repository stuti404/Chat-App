import { useState } from "react";
import axios from "axios";

const projectID ="522b9601-b85a-4ba6-a622-d7c95b775022";

const LoginForm =() =>{
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[error,setError] = useState('');


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const authObject ={
            'project-ID':projectID,'User-Name':username , "User-Secret":password
        };
        try{
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem("password",password);

            window.location.reload();
            setError('');
        }
        catch(err){
                setError('oops, incorrect Credentials');
        }
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value) }className="input" placeholder="UserName" required />
                    <input type="Password" value={password} onChange={(e) => setPassword(e.target.value) }className="input" placeholder="Password" required />
                    <div align="center">
                        <button className="button">
                            <span>Start chat</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>

            </div>
        </div>
    );
};
export default LoginForm;
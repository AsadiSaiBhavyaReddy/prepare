import axios from 'axios'
import login from './login.jpg'; 
import Swal from 'sweetalert2';

export default function Login({ store }) { 
    function handleSubmit() { 
        console.log({ 
            un: document.getElementById("idun").value, 
            pw: document.getElementById("idpw").value 
        }); 
        axios.post('http://localhost:8081/check', { 
            un: document.getElementById("idun").value, 
            pw: document.getElementById("idpw").value 
        }).then((response) => { 
            console.log(response.data); 
            if (response.data !== "fail") { 
                store.dispatch({ "type": "login", "data": { "un": response.data.name, "role": response.data.role } }); 
                // Show login successful popup
                Swal.fire({
                    title: "Login Successful",
                    icon: "success"
                });
            } else {
                // Show login failed message
                Swal.fire({
                    title: "Login Unsuccessful",
                    icon: "error"
                });
            }
        }); 
    } 

    function handleMouseOver() {
        document.getElementById("idlogin").style.boxShadow = "10px 10px 15px grey";
    }

    function handleMouseLeave() {
        document.getElementById("idlogin").style.boxShadow = "0px 0px 0px grey";
    }

    return(
        <div id="idlogin" className="login-form" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <p style={{ fontSize: "25px" }}>Login Page</p> <br/>
            <div style={{ textAlign: "left" }}>
                <label htmlFor="idun">Username:</label> <br/>
                <input type="text" name="un" id="idun" /> <br/><br/>
                <label htmlFor="idpw">Password:</label> <br/>
                <input type="password" name="pw" id="idpw" /><br/><br/><br/>
            </div>
            <button onClick={handleSubmit}> Login </button>
        </div>
    );
}

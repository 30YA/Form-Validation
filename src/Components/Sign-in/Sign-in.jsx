import {useState} from 'react';
import "./Sign_in.css";
function Sign_In() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        isAccepted: false
    })
    const handler = (e) => {
        if (e.target.name !== "isAccepted") {
            setData({...data,[e.target.name]: e.target.value})
        }
        else{
            setData({...data,[e.target.name]: e.target.checked})
        }
    }
    return ( 
        <form className="Sign_in">
            <h1 className="Topic">Sign-in</h1>
            <div>
                {/* <label>Name</label> */}
                <input name="name" className="text_Input" type="text" onChange={handler} placeholder="Name"/>
            </div>
            <div>
                <input name="email" className="text_Input" type="text" onChange={handler} placeholder="Email"/>
            </div>
            <div>
                <input name="password" className="text_Input" type="text" onChange={handler} placeholder="Password"/>
            </div>
            <div>
                <input name="confirm" className="text_Input" type="text" onChange={handler} placeholder="Password Confirm"/>
            </div>
            <div className="checkbox">
                <label htmlFor="accept-id"> <b>I accept terms of privacy policy</b> </label>
                <input id="accept-id" name="isAccepted" className="accept" type="checkbox" onChange={handler}/>
            </div>
            <div>
                <input className="submit_btn" type="submit" />
            </div>
        </form>
     );
}

export default Sign_In;
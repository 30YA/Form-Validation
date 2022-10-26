import {useState, useEffect} from 'react';
import validate from '../../utils/validate'
import "./Sign_in.css";
function Sign_In() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        isAccepted: false
    })
    const [errorrs, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data));
    },[data])

    const handler = event => {
        if (event.target.name !== "isAccepted") {
            setData({...data,[event.target.name]: event.target.value})
        }
        else{
            setData({...data,[event.target.name]: event.target.checked})
        }
    }
    const focusHandler = event => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        })
    }
    return ( 
        <form className="Sign_in">
            <h1 className="Topic">Sign-in</h1>
            <div>
                {/* <label>Name</label> */}
                <input name="name" className="text_Input" type="text" onChange={handler} onFocus={focusHandler} placeholder="Name"/>
                {errorrs.name && touched.name && <span className='error'>{errorrs.name}</span>}
            </div>
            <div>
                <input name="email" className="text_Input" type="text" onChange={handler} onFocus={focusHandler} placeholder="Email"/>
                {errorrs.email && touched.email && <span className='error'>{errorrs.email}</span>}
            </div>
            <div>
                <input name="password" className="text_Input" type="text" onChange={handler} onFocus={focusHandler} placeholder="Password"/>
                {errorrs.password && touched.password &&  <span className='error'>{errorrs.password}</span>}
            </div>
            <div>
                <input name="confirm" className="text_Input" type="text" onChange={handler} onFocus={focusHandler} placeholder="Password Confirm"/>
                {errorrs.confirm && touched.confirm &&  <span className='error'>{errorrs.confirm}</span>}
            </div>
            <div className="checkbox">
                <label htmlFor="accept-id"> <b>I accept terms of privacy policy</b> </label>
                <input id="accept-id" name="isAccepted" className="accept" type="checkbox" onChange={handler} onFocus={focusHandler}/>
                {errorrs.isAccepted && touched.isAccepted &&  <span className='error'>{errorrs.isAccepted}</span>}
            </div>
            <div>
                <input className="submit_btn" type="submit" />
            </div>
        </form>
     );
}

export default Sign_In;
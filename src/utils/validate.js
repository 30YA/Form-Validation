const validate = (data,type) => {
    const error = {};
    // validate of email :
    if (!data.email) {
        error.email = "email requirement !"
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        error.email = "invalid email"
    }else{delete error.email};
    
    // validate of pass :
    if (!data.password) {
        error.password = "password requirement !"
    }else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password)){
        error.password = "Minimum eight char at least a letter and a number"
    }else{delete error.password};

    if (type === "Sign-Up") {
        // validate of name :
        if (!data.name.trim()) {
            error.name = "name requirement !";
        }
        else{delete error.name};
        // validate of confirm :
        if (!data.confirm) {
            error.confirm = "plz confirm password"
        }else if (data.confirm !== data.password) {
            error.confirm = "password isn't match"
        }else{delete error.confirm};
    
        // validate of privacy :
        if (!data.isAccepted) {
           error.isAccepted = "plz accept our policy"; 
        }else{delete error.isAccepted};
    }
    return error;
}
export default validate;
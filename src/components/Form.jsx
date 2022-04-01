import React from 'react'


function Form(promps) {
    return(
        <div className="container">
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                
                
                {promps.isRegistered === false && <input type="password" placeholder="Confirm Password" />
                }

                <button type="submit" placeholder="btn">
                {
                    promps.isRegistered ? "Login" : "Register"
                }
                </button>
            </form>
        </div>
    )
}

export default Form;
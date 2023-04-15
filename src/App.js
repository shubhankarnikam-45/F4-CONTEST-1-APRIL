import { useState } from "react"
import "./style.css"
const App=()=>{


    //using the state varianbles
    let[name,setName]=useState("");
    let[nameValidator,setNameValidator]=useState(false);
   
    let[email,setEmail]=useState("");
    let[emailValidator,setEmailValidator]=useState(false);
   
    let[password,setPassword]=useState("");
    let[passwordValidator,setPasswordValidator]=useState(false);
   
    let[Cpassoword,setCpassword]=useState("");
    let[CpassowordValidator,setCpassowordValidator]=useState(false);

    //this function to cheak the name is valiid or not.

    console.log(nameValidator,emailValidator,passwordValidator,CpassowordValidator)
    function handleName(e)
    {
        console.log("hand")
        setName(e.target.value);
        setNameValidator(validateName(e.target.value));

    }

    function validateName(value)
    {
        if(value!="")
        return true;
        
        return false;
    }


    function handleEmail(e)
    {
        setEmail(e.target.value);
        setEmailValidator(validateEmail(e.target.value));
    }

    function validateEmail(value)
    {
         // abhi.shek@gmail.com
         let index_of_at = email.indexOf('@') 
         let index_of_dot = email.lastIndexOf('.')
         return (index_of_at>0 && index_of_dot  && index_of_dot > index_of_at )
    }

    function handlePassword(e)
    {
        setPassword(e.target.value);
        setPasswordValidator(validatePassword(e.target.value));
    }

    function validatePassword(value)
    {
        if(value.length>=8)
        {
            return true;
        }
        return false;
    }


    function handleCpassword(e)
    {
        setCpassword(e.target.value);
        setCpassowordValidator(validateCPassword(e.target.value));
    }


    function validateCPassword(value)
    {
        if(value==password)
        return true;
        return false;
    }







    function submitBtn(e)
    {
        console.log("in submit")
        e.preventDefault()

        
        // else
        // {
        //     alert("form not sumitted sucess fully")
        // }
        // {nameValidator?null:<div className="error-message">please enter the name</div>}
        //     {emailValidator?null:<div className="error-message">please enter the email</div>}
        //     {/* {passwordValidator?null:<div className="error-message">please enter the password</div>} */}
        //     {CpassowordValidator?null:<div className="error-message">password mismatch</div>}
        let f=document.querySelector('.form')

        if(nameValidator==false)
        {
            
            let e=document.createElement("div");
            e.setAttribute('class','name-error');
            e.innerText="please enter the name"
            f.appendChild(e)
        }
         if(emailValidator==false)
        {
            
            let e=document.createElement("div");
            e.setAttribute('class','email-error');
            e.innerText="please enter the email properly"
            f.appendChild(e)
        }
         if(passwordValidator==false)
        {
            
            let e=document.createElement("div");
            e.setAttribute('class','pass-error');
            e.innerText="password must contain 8 characters"
            f.appendChild(e)
        }
        if(CpassowordValidator==false)
        {
            
            let e=document.createElement("div");
            e.setAttribute('class','cpass-error');
            e.innerText="password mismatch"
            f.appendChild(e)
        }

        if(nameValidator==true && emailValidator==true && passwordValidator==true && CpassowordValidator==true)
        {
            console.log("shubhar")
            let e=document.createElement("div");
            e.setAttribute('class','confirm-message');
            e.innerText="form submitted sucessfully"
            f.appendChild(e)
            setTimeout(() => {
                alert("Form submitted sucessfully")
            }, 3000);
        }
    }

    return(

        <div className="form">
            <h1>SingUp</h1>
            <form onSubmit={submitBtn}>
                <input type="text" placeholder="Full Name" onChange={handleName} value={name}/><br/>
                
                <input type="email" placeholder="Email" onChange={handleEmail} value={email}/><br/>
                <input type="passoword" placeholder="Password"onChange={handlePassword} value={password}/><br/>
                <input type="password" placeholder="Confirm Password" onChange={handleCpassword } value={Cpassoword}/><br/>
                <button type="submit">SingUp</button>
            </form>
            
            
        </div>
    )
}

export default App;

import Axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/FormHelper';
import { setToken, setUserDetails } from '../helper/SessionHelper';

//for insert data..
export function Membership(FullName,Email,password,image){
    let URL="http://localhost:5000/api/v1/CreateUser"

    let PostBody={
        FullName:FullName,
        Email:Email,
        password:password,
        image:image
    }

    return Axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })

}



//for Login ..
export function LoginRequest(Email,Password){
    let URL="http://localhost:5000/api/v1/Login"

    let PostBody={
        Email:Email,
        password:Password
    }


    return Axios.post(URL,PostBody).then((res)=>{

        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        return false;
    });

}


//for admin Login.....
export function AdminLoginRequest(Email,Password){
    let URL="http://localhost:5000/api/v1/AdminLogin"

    let PostBody={
        Email:Email,
        password:Password
    }


    return Axios.post(URL,PostBody).then((res)=>{

        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        return false;
    });

}




//for food insert..

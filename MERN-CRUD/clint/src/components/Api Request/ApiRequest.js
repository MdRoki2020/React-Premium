import axios from 'axios';
import Axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/FormHelper';
import { getToken,setEmail,setOTP,setToken, setUserDetails } from '../helper/SessionHelper';

const AxiosHeader={headers:{"token":getToken()}}

//for insert data..
export function Membership(FullName,Email,password,image){
    let URL="http://localhost:5000/api/v1/CreateUser"

    let PostBody={
        FullName:FullName,
        Email:Email,
        password:password,
        image:image,
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
        console.log("Something Went Wrong");
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
export function FoodRequest(foodName,foodType,foodPrice,foodStock,foodImg,foodDes){
    let URL="http://localhost:5000/api/v1/CreateFood"

    let PostBody={
        foodsName:foodName,
        foodsType:foodType,
        foodsPrice:foodPrice,
        foodsStockQty:foodStock,
        foodImage:foodImg,
        foodsDescription:foodDes
    }

    return Axios.post(URL,PostBody,AxiosHeader).then((res)=>{
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


//sendOTP email..
export function RecoverVerifyEmailRequest(email){
    let URL=".....url............./RecoverVerifyEmail/"+email;

    return axios.get(URL).then((res)=>{
        if(res.status===200){
            if(res.data['status']==='fail'){
                ErrorToast("No User Found");
                return false;
            }else{
                setEmail(email);
                SuccessToast("A 6 Digit Verification code has been sent to your email address");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong");
        return false;
    });
}


//OTP verify..
export function RecoverVerifyOTPRequest(email,OTP){
    let URL="..........URL...../RecoverVerifyOTP/"+email+"/"+OTP;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast(res.data['data']);
                return false;
            }
            else{
                setOTP(OTP)
                SuccessToast("Code Verification Success");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        return false;
    });
}

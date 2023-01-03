import axios from 'axios';
import Axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/FormHelper';
import { getToken,setEmail,setOTP,setToken, setUserDetails } from '../helper/SessionHelper';
import { SetALLProduct, SetTotal } from "../redux/state/ProductSlice";
// import { HideLoader, ShowLoader } from "../redux/state/settingsSlice"
import store from '../redux/store/store';


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

//Food Read..
export function ReadFood(){
    let URL="http://localhost:5000/api/v1/ReadFood"
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}

//delete food
export function Delete(id){
    let URL="http://localhost:5000/api/v1/DeleteFood/"+id;
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return true
        }else{
            return false
        }

    }).catch((err)=>{
        console.log(err);
        return false;
    })
}

//update food
export function UpdateFood(id,foodName,foodType,foodPrice,foodStockQty,foodDescription,photo){
    let URL="http://localhost:5000/api/v1/UpdateFood/"+id;
    debugger

    let PostBody={
        foodsName:foodName,
        foodsType:foodType,
        foodsPrice:foodPrice,
        foodsStockQty:foodStockQty,
        foodsDescription:foodDescription,
        foodImage:photo
    }

    return Axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })
}

//read data by id
export function ReadById(id){
    let URL="http://localhost:5000/api/v1/ReadById/"+id;
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}


//sendOTP email..
export function RecoverVerifyEmailRequest(email){
    let URL="http://localhost:5000/api/v1/RecoverVerifyEmail/"+email;

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
export function RecoverVerifyOTPRequest(email,otp){
    let URL="http://localhost:5000/api/v1/RecoverVerifyOTP/"+email+"/"+otp;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast(res.data['data']);
                return false;
            }
            else{
                setOTP(otp)
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


//password change request
export function RecoverResetPassRequest(email,OTP,password){
    let URL="http://localhost:5000/api/v1/RecoverResetPass";

    let postBody={email:email,OTP:OTP,password:password}

    return axios.post(URL,postBody).then((res)=>{
        if(res.status===200){
            if(res.data['status']==='fail'){
                ErrorToast(res.data['data'])
                return false;
            }else{
                setOTP(OTP)
                SuccessToast("New Password Created");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
    });
}


//food table with business 

export async function GetProductList(pageNo,perPage,searchKeyword){
    
    let URL ="http://localhost:5000/api/v1/ProductList/" + pageNo + "/" + perPage + "/" + searchKeyword;

    // store.dispatch(ShowLoader);


    try {
        const result = await axios.get(URL)

        // store.dispatch(HideLoader())

        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetALLProduct(result.data['data'][0]['Rows']))
                store.dispatch(SetTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetALLProduct([]))
                store.dispatch(SetTotal(0))
                ErrorToast("No Data Found")
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }

    catch (e) {
        ErrorToast("Something Went Wrong")
        // store.dispatch(HideLoader())
    }
}


//read Video
export function ReadVideo(){
    let URL="http://localhost:5000/api/v1/ReadVideo"
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}


//foodCount
export function foodCount(){
    let URL="http://localhost:5000/api/v1/foodCount"
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'][0];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}



//match by foodsType
export function matchingByFoodType(foodsType){
    let URL="http://localhost:5000/api/v1/matchingByFoodType/"+foodsType;
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}

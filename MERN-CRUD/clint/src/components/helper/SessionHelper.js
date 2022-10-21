class SessionHelper{
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token");
    }

    setEmail(Email){
        localStorage.setItem("Email",Email)
    }
    getEmail(){
        return localStorage.getItem("Email")
    }

    setOTP(OTP){
        localStorage.setItem("OTP",OTP)
    }

    getOTP(){
        return localStorage.getItem('OTP');
    }

    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails));
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"));
    }

    removeSessions(){
        localStorage.clear();
        window.location.href="/login"
    }

    


}

export const {setToken,getToken,setEmail,getEmail,setUserDetails,getUserDetails,setOTP,getOTP,removeSessions}=new SessionHelper();
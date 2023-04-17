import Axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/FormHelper';

//Create ADS
export function PostADsRequest(data){
    

    let URL="http://localhost:5000/api/v1/postVideo"


    return Axios.post(URL,data).then((res)=>{
        
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


//Read All Orders
export function GetVideo(){
    let URL="http://localhost:5000/api/v1/GetVideo"
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







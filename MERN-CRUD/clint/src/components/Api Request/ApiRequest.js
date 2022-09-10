import Axios from 'axios';

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
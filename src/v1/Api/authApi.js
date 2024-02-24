import requestMaker from '../Lib/NetworkHandler'

export const sendOTP = (data)=>{
    const url = `user/sendOtp`
    const payload = data;
    const params = {}
    return requestMaker(url, "post", {params, payload})
}
export const register = (data)=>{
    const url = `user/signup`
    const payload = data;
    const params = {}
    return requestMaker(url, "post", {params, payload})
}

export const login = (data)=>{
    const url = `user/login`
    const payload = data;
    const params = {}
    return requestMaker(url, "post", {params, payload})
}

// change url 
export const fetchUserDetails = (data)=>{
    const url = `user/login`
    const payload = data;
    const params = {}
    return requestMaker(url, "post", {params, payload})
}
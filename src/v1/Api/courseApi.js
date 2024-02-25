import requestMaker from "../Lib/NetworkHandler"

export const CreateCourse = (data)=>{

    const url = `course/createCourse`
    const payload = data
    const params = {}
    return requestMaker(url, "post", {payload,params}, {
        'Content-Type': 'multipart/form-data'
      })
}

export const fetchCategories = ()=>{
    const url = `course/showAllCategories`
    const payload = {}
    const params = {}
    return requestMaker(url, "get", {payload,params})

}
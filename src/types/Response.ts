
export class Response {

  status : any = {}

  data : any = {}


  constructor(data: any){
    if(data.error != null){
      this.status = this.loadErrorMessage(data.error)
    }else{
      this.status = {
        error : 0,
        message : "OK"
      }
      this.data = data
    }
  }

  loadErrorMessage(errorCode : string){
    let errors :  any = [
      { errorCode : "000000", message : "Unhandled error" },
      { errorCode : "000025", message : "Post not found" },
      { errorCode : "000026", message : "Some error message" },
      { errorCode : "000027", message : "Some error message 2" },
      { errorCode : "000028", message : "Some error message 3" }
     ]
    return errors.filter(data => data.errorCode == errorCode).length > 0 ? errors.filter(data => data.errorCode == errorCode)[0] : errors.filter(data => data.errorCode == "000000")[0]
  }


}

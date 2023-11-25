// import axios
import axios from "axios";

const getPollutanData = async (startTime:string, endTime:string, url:string, endPoint:string) => {

    /*
    Funciton to get data of pullutan gasses from external server
    @param {startTime:String} = start time to make a query
    @param {endTime:String} = finish time to make a query
    @param {url:String} = url to get the data
    @param {endPoint:String} = end point to get the data
    */
  
    return new Promise(async (resolve, reject) => {
  
      try {
  
        const data = await axios.get(`${url}${endPoint}`, {
          params: {
            datetimeStart: startTime,
            datetimeEnd: endTime,
            ubications: "lat:4.697540,lng:-74.114441"
          }
        })
 
        
  
        resolve({
            result: true,
            data,
            detail: null
        });
  
      } catch (e) {
  
        reject({
            result: true,
            data:null,
            detail: null
        });
  
      }
  
  
  
    })
  
  
  
  }


  export default getPollutanData;
  
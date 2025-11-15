import {useState,useEffect} from 'react'
import apiClient from '../services/api-client';
import { CanceledError, type AxiosRequestConfig } from 'axios';


interface FetchResponse<T>{
  count:number;
  results:T[];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig, deps?:any[] )=>{
       const [data,setData] = useState<T[]>([]);
          const [error, setError] = useState("");
          const [isLoading ,setLoadig]=useState(false);
          useEffect(() => {
    
            const controller= new AbortController()
            setLoadig(true)
            apiClient
              .get<FetchResponse<T>>(endpoint ,{signal:controller.signal,...requestConfig})
              .then((res) => {setData(res.data.results);
    
                   setLoadig(false)
              })
              .catch((err) =>{
                if(err instanceof CanceledError) return ; 
                 setError(err.message)
                 setLoadig(false)
                });
                    
              return ()=>controller.abort();
          } ,  deps ?[...deps]:[]);
           return {
            data,
            error,
            isLoading
           }
} 
export default useData;



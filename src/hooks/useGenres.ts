import {useState,useEffect} from 'react'
import apiClient from '../api-client';
import { CanceledError } from 'axios';

interface Genre{
  id:number;
  name:string;
}

interface FetchGanresResponse{
  count:number;
  results:Genre[];
}
const useGenres=()=>{
       const [genres, setGenres] = useState<Genre[]>([]);
          const [error, setError] = useState("");
          const [isLoading ,setLoadig]=useState(false);
          useEffect(() => {
    
            const controller= new AbortController()
            setLoadig(true)
            apiClient
              .get<FetchGanresResponse>("/genres" ,{signal:controller.signal})
              .then((res) => {setGenres(res.data.results);
    
                   setLoadig(false)
              })
              .catch((err) =>{
                if(err instanceof CanceledError) return ; 
                 setError(err.message)
                 setLoadig(false)
                });
                    
              return ()=>controller.abort();
          },[]);
           return {
            genres,
            error,
            isLoading
           }
} 
export default useGenres;



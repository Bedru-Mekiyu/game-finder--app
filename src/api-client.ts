import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6a2cebc9036d43b5a52b15015d06e963'
    }
})
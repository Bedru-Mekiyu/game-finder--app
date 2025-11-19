import { Image, type ImageProps } from '@chakra-ui/react';
import meh from '../assets/meh.jpg'
import thumbsUp from '../assets/thumbsUp.jpg'
import bullsEye from '../assets/eyesBull.png'

interface Props{
  rating:number;
}

function Emoji({rating}:Props) {
  if(rating<3)return null;
  const emojiMap:{[key:number]:ImageProps}={
    3:{src:meh ,alt:'meh', boxSize:'25px'},
    4:{src:thumbsUp ,alt:'recommended', boxSize:'25px'},
    5:{src:bullsEye ,alt:'exeptional',  boxSize:'35px'},
  }
  return (
    <Image{...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji;
'use client';
import { PuffLoader, RiseLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
            <RiseLoader color="#FFC52C" />
      
    </div>
   );
}
 
export default Loader;
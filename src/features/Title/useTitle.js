import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `Fusion Toys | ${title}`;
    },[title]);
}

export default useTitle;
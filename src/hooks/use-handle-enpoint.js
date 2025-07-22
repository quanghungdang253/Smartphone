import { useEffect, useState } from "react";

const useEnpoint = (value) => {

    const [state, setState] = useState(value);
    useEffect(() => {
            setState(value);
    },[value])
    return state;
}

export default useEnpoint;
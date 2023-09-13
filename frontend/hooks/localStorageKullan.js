import { useState } from "react";

export function localStorageKullan(key, initialValue) {

    const [state, setState] = useState(() => {
        const storedStringData = localStorage.getItem(key);
        const realData = JSON.parse(storedStringData);
        return realData ? realData : initialValue;
    });

    function updateStorage(value){
        localStorage.setItem(key, JSON.stringify(value));
        setState(value)
    }
    return [state, updateStorage];


}
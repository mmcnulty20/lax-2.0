import { useEffect } from "react";

export const useComponentDidMount = callback =>
    useEffect( () => callback(), [] )

export const useComponentWillUnmount = callback => 
    useEffect(() => () => callback(), [])


// export const useInputField = 
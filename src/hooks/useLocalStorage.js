//Step 1
import { useState } from 'react'

const useLocalStorage = (key, initialValue) => { //Build a function called localStorage and added 'key' and 'initialValue' as parameters.
    const [ storedValue, setStoredValue ] = useState(() => { //Set up a state property called storedValue that takes a function as it's initial value.
        if (localStorage.getItem(key)) { //Check to see if the item we passed in already exists in localStorage.
            return JSON.parse(localStorage.getItem(key)) //If the item we passed already exists in localStorage, return that value.
        }
        localStorage.setItem(key, JSON.stringify(initialValue)) //If the item doesn't already exist, return whatever initialValue is passed in.
        return initialValue //Return what gets set as the initialValue.
    })

    const setValue = (value) => { //Inside the hook, write a function called 'setValue' that takes a 'value' parameter.
        setStoredValue(value) //Update the state of 'storedValue' with 'value'.
        localStorage.setItem(key, JSON.stringify(value)) //Save the 'value' to localStorage.
    }
    return [storedValue, setValue] //Return storedValue and setValue
}

export default useLocalStorage //Don't forget to export the component
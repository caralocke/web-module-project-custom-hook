//Step 2
import useLocalStorage from "./useLocalStorage"; //Import useLocalStorage for use.

const useDarkMode = () => { //Build a function called useDarkMode.
    const [ darkMode, setDarkMode ] = useLocalStorage('darkMode') //Call useLocalStorage and pass in the key you want to use. 
    return [darkMode, setDarkMode] //Return the value and the setter that were returned out of the useLocalStorage call into an array.
}

export default useDarkMode //Don't forget to export!
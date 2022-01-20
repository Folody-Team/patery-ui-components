export const checkDarkLight = (el) => {
    // check dark mode and light mode browser
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
    /**
     * check dark mode and light mode browser
     * if dark mode is true then set the color of the button to dark
     * if light mode is true then set the color of the button to light
     * if neither dark or light mode is true then set the color of the button to light
     * @param {string} el
     * @returns {string}
     * @example
     * checkDarkLight("dark")
     * checkDarkLight("light")
     */
    if (darkMode) return ("dark");
    if (lightMode) return ("light");
    else return ("light");
}
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
/**
 * @abstract
 * @param {string} el
 * @returns {string}
 * @example
 */
export const uuid = () => {
    // generate a random uuid
    /**
     * The uuid() method generates a random UUID.
     * @returns {string}
     * @abstract
     * @returns {string}
     * @example
     * uuid()
     */
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => 
        c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    );
}
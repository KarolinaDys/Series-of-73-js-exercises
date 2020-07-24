/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const paragraphs = document.querySelectorAll(".target")
    
    const paragraph1 = paragraphs[0];
    const paragraph2 = paragraphs[1];
    const paragraph3 = paragraphs[2];
    const paragraph4 = paragraphs[3];
    const paragraph5 = paragraphs[4];
     paragraph5.innerHTML = "owned"
     paragraph4.innerHTML = "owned"
     paragraph3.innerHTML = "owned"
     paragraph2.innerHTML = "owned"
     paragraph1.innerHTML = "owned"
})();
/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let html = "<table>"
    for (i=0;i<board.length;i++)
        {html += "<tr> <td>" +board[i] + "</td> </tr>"}
    html += "</table>"
    let table = document.createElement("tr");    
    document.getElementById("target").innerHTML = html;

})();
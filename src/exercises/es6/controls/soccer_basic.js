/* eslint-disable */
// A soccer game (basic)
const score = ['Belgium', 'Spain', 'Spain', 'Belgium', 'Spain', 'Belgium', 'Belgium', 'Belgium'];

const table = document.querySelector('table#soccer tbody');

let dataTable = '';
let belgiumScore = 0;
let spainScore = 0;

score.forEach((key) => {
    if (key == 'Belgium') {
        belgiumScore += 1;
    } else {
        spainScore++;
    }

    dataTable +=
        `<tr>
            <td>
            ${belgiumScore}
            </td>
            <td>
            ${spainScore}
            </td>
        </tr>`;
});

table.innerHTML = dataTable;
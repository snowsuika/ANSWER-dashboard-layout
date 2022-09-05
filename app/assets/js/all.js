// add hover table pointer class

const hoverCells = document.querySelectorAll('table.table.table-hover tr');
const lastTds = document.querySelectorAll('table.table.table-hover tr>td:last-child')
hoverCells.forEach((cell) => cell.classList.add('cursor-pointer'));
lastTds.forEach((td) => td.classList.add('text-end'));

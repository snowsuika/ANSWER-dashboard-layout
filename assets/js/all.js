"use strict";

// add hover table pointer class
var hoverCells = document.querySelectorAll('table.table.table-hover tr');
var lastTds = document.querySelectorAll('table.table.table-hover tr>td:last-child');
hoverCells.forEach(function (cell) {
  return cell.classList.add('cursor-pointer');
});
lastTds.forEach(function (td) {
  return td.classList.add('text-end');
});
//# sourceMappingURL=all.js.map

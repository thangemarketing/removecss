/* eslint-env browser */

(function () {
    'use strict';

    var container;
    var row;
    var column;
    var heading;
    var text;

    container = document.getElementById('add-here');

    if (!container) {
        return;
    }

    row = document.createElement('div');
    row.className = 'row';

    column = document.createElement('div');
    column.className = 'col-lg-4';

    heading = document.createElement('h3');
    heading.className = 'test-green';
    heading.innerHTML = 'PhantomJS';

    text = document.createTextNode('PhantomJS works! This paragraph was added at runtime.');

    column.appendChild(heading);
    column.appendChild(text);
    row.appendChild(column);

    if (container.firstChild) {
        container.insertBefore(row, container.firstChild);
    } else {
        container.appendChild(row);
    }
})();

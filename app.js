var ITEM_COUNT = 1500;
var containerEle = document.getElementById('output');
var displayNoneEle = document.getElementById('displayNone');


function createElements() {
  containerEle.innerHTML = '';
  var startTime = performance.now();

  if (displayNoneEle.checked) {
    document.body.style.display = 'none';
  }

  appendItems(containerEle);

  document.body.style.display = '';

  document.getElementById('test-a').innerText = (performance.now() - startTime);
}

function updateElements() {
  var startTime = performance.now();

  if (displayNoneEle.checked) {
    document.body.style.display = 'none';
  }

  for (var x = 0; x < ITEM_COUNT; x++) {
    var ele = document.getElementById('item-' + x);
    var clientWidth = ele.clientWidth;
    var clientHeight = ele.clientHeight;
    ele.style.height = (Math.floor(Math.random() * 30) - 10) + 'px';
  }

  document.body.style.display = '';

  document.getElementById('test-b').innerText = (performance.now() - startTime);
}


function appendItems(containerEle) {
  for (var x = 0; x < ITEM_COUNT; x++) {
    var ele = document.createElement('div');
    containerEle.appendChild(ele);

    var clientWidth = ele.clientWidth;
    ele.style.width = Math.ceil(Math.random() * 50) + 'pz';

    var clientHeight = ele.clientHeight;
    ele.style.height = '12px';

    ele.className = 'item';
    ele.id = 'item-' + x;
    ele.innerHTML = x;
    ele.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}

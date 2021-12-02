const div= document.querySelector('div');
// div[{x: 3, y: 5}].style.background="white";
const orderList = {x: 3, y: 5};
const orderListq = document.createElement('div');
orderListq.classList.add('snake')
orderListq.style.gridRowStart=orderList.y;
orderListq.style.gridColumnStart=orderList.x;
  div.appendChild(orderListq);

orderListq.addEventListener("click", function() {
  orderListq.classList.toggle('snake')
})
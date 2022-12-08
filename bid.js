let count = 0;
const selectButton = document.getElementsByClassName("buttons");

for (let i = 0; i < selectButton.length; i++) {
  const inputButton = selectButton[i];
  inputButton.addEventListener("click", function (event) {
    count++;
    if (count > 5) {
      alert("I have already select 5 players");
      count = 5;
      return;
    }
    inputButton.disabled = true;
    const button = event.target;
    const playersItem = button.parentNode.parentNode;
    const title = playersItem.getElementsByClassName("card-title")[0].innerText;
    addItemToCart(title);


  });
}
function addItemToCart(title) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  const cartItems = document.getElementsByClassName("player-select")[0];
  cartRow.innerHTML = `
    <li class="mb-4 cart-item-title">${title}</li>

    `;
  cartItems.append(cartRow);
}

//for validate the input field that they doesn't take the string or special carracter
function numberOnly(input) {
    let num = /[^0-9]/gi;
    input.value = input.value.replace(num,"");
}

//first calculate button
const btn1 = document.getElementById("buttons1");
btn1.addEventListener("click", function () {
    const perPlayer = parseInt(document.getElementById('input-sec1').value);
    if(isNaN(perPlayer) || count == 0){
        alert('Please Input valid number or select player');
        return false;
    }
    const OldplayersTotalPrice = document.getElementById('playersPriceTotal');
    const newPlayersTotalPrice = count*perPlayer;
    OldplayersTotalPrice.innerText = newPlayersTotalPrice;

});

//total calculate button
const btn2 = document.getElementById('buttons2').addEventListener('click',function(){

    const managerPrice = parseInt(document.getElementById('input-sec2').value);
    const coachPrice = parseInt(document.getElementById('input-sec3').value);
    const perPlayer = document.getElementById('input-sec1').value;
    
    if(isNaN(perPlayer) || isNaN(managerPrice) || isNaN(coachPrice) ||count == 0){
        alert('Please Input valid number or select player');
        return false;
    }

    // If user presses following button without using the button which is set at the up of the page; they can get a total with the following button at a time. Thats why it has been written here.
    const OldplayersTotalPrice = document.getElementById('playersPriceTotal');
    const newPlayersTotalPrice = parseInt(count*perPlayer);
    OldplayersTotalPrice.innerText = newPlayersTotalPrice;

    const totalPrice = newPlayersTotalPrice + managerPrice + coachPrice;

    const oldTotalPrice = document.getElementById('totalPrice');
    oldTotalPrice.innerText = totalPrice;
    
});

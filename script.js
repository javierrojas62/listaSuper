// script.js
function addItem() {
    const itemInput = document.getElementById('item');
    const itemText = itemInput.value.trim();
  
    if (itemText === '') {
      return;
    }
  
    const shoppingList = document.getElementById('shoppingList');
    const newItem = document.createElement('li');
    newItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    newItem.innerHTML = `
      ${itemText}
      <button class="btn btn-danger btn-sm" onclick="removeItem(this)">Eliminar</button>
    `;
    shoppingList.appendChild(newItem);
    itemInput.value = '';
  }
  
  function removeItem(button) {
    const itemToRemove = button.parentNode;
    itemToRemove.remove();
  }
  
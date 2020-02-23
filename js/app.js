document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const foodListItem = createFoodListItem(event.target);
  const foodList = document.querySelector('#food-list');
  foodList.appendChild(foodListItem);

  event.target.reset();
}

const createFoodListItem = function (form) {
  const foodListItem = document.createElement('li');
  foodListItem.classList.add('food-list-item');

  const restaurant = document.createElement('h2');
  restaurant.textContent = form.restaurant.value;
  foodListItem.appendChild(restaurant);

  const food = document.createElement('h3');
  food.textContent = form.food.value;
  foodListItem.appendChild(food);

  const course = document.createElement('p');
  course.textContent = form.course.value;
  foodListItem.appendChild(course);

  return foodListItem;
}

const handleDeleteAllClick = function (event) {
  const foodList = document.querySelector('#food-list');
  foodList.innerHTML = '';
}

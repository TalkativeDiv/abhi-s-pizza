let menu_list_array = [
  "Pepperoni Pizza",
  "Cheese Pizza",
  "Supreme Pizza",
  "Meat Lover's Pizza",
  "Pepperoni Lover's Pizza",
  "Veggie Lover's Pizza",
  "Backyard BBQ Chicken Pizza",
  "Buffalo Chicken Pizza",
];

let getMenu = () => {
  let htmldata;
  htmldata = "<ol class='menulist'>";
  menu_list_array.sort();
  for (let i = 0; i < menu_list_array.length; i++) {
    htmldata = htmldata + "<li>" + menu_list_array[i] + "</li>";
  }
  htmldata = htmldata + "</ol>";
  document.getElementById("display_menu").innerHTML = htmldata;
};

function addItem() {
  menu_list_array.sort();
  let htmldata = "<section class='cards'>";
  for (var i = 0; i < menu_list_array.length; i++) {
    htmldata +=
      '<div class="card">' +
      '<img src="/src/icons/pizza.png" style="width: 100px; height:80px; display:flex;justify-content:center;"/>' +
      menu_list_array[i] +
      "</div> <br/>";
  }
  htmldata = htmldata + "</section>";
  document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function addTop() {
    let item = document.getElementById("txtPizza").value;
  menu_list_array.push(item);
  addItem();
}

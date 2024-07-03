const addProduct = () => {
  const myUl = document.querySelector(".nuovaclasse");
  const myLi = document.createElement("li");
  const input = document.querySelector("input");
  myUl.appendChild(myLi);
  myLi.innerText = input.value;
};

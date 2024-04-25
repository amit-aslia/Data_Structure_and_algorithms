const addNumbers = (n) => {
  const matrix = document.getElementById("matrix");
  const width = 90 / n;
  for (let i = 1; i <= n * n; i++) {
    const divElem = document.createElement("div");
    divElem.textContent = i;
    divElem.style.width = `${width}%`;
    divElem.style.flex = `flex: 1 0 calc(${width}%);`;
    divElem.classList.add("eachNumber");
    matrix.appendChild(divElem);
  }
};

const handleClick = () => {
  const inputValue = document.getElementById("input");
  addNumbers(parseInt(inputValue.value));
};

const rotateTheArray = (n) => {
  const listNodesQuery = document.querySelectorAll(".eachNumber");
  const listNodes = Array.from(listNodesQuery); // Convert NodeList to array
  const mode = n % listNodes.length;
  const initNodes = listNodes.slice(0, listNodes.length - mode).map(elem => elem.textContent);
  const rNodes = listNodes.slice(listNodes.length - mode).map(elem => elem.textContent);
  listNodes.forEach((elem, index) => {
    if (rNodes?.[index])
      elem.textContent = rNodes[index];
    else {
      elem.textContent = initNodes.shift();
    }
  });
};

const handleRotate = () => {
  const inputValue = document.getElementById("rotate");
  rotateTheArray(inputValue.value);
};

(function () {
  console.log("hello");
})();

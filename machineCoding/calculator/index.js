(function () {
  let textArea = document.getElementById("textarea");
  console.log(textArea);

  const addElementToTextArea = (elem) => {
    const { value } = textArea;
    if (!value.length && elem === ".") return;
    textArea.value += elem;
  };

  const removeLastElem = () => {
    const { value } = textArea;
    textArea.value = value.slice(0, -1);
  };

  const clearTextArea = () => {
    textArea.value = "";
  };

  const calculate = () => {
    const { value } = textArea;
    const result = eval(value);
    if (!isNaN(result)) {
      textArea.value = result;
    } else {
      alert("Wrong expression, Please check your input");
    }
  };

  document.addEventListener("click", (e) => {
    const value = e.target.textContent;
    console.log(value === "C");
    switch (value) {
      case "C":
        clearTextArea();
        break;
      case "<":
        removeLastElem();
        break;
      case "=":
        calculate();
        break;
      default:
        addElementToTextArea(value);
    }
  });
})();

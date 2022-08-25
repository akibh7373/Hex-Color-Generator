// DOM Selection
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

// Add Event Listener
btn.addEventListener("click", function () {
  // To left color
  // Take colors into an array
  const numbText = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const hex = numbText;
  const hex2 = numbText;
  const hex3 = numbText;
  const hex4 = numbText;
  const hex5 = numbText;
  const hex6 = numbText;
  let hexaColor = "#";
  let hexaColor2 = "";
  let hexaColor3 = "";
  let hexaColor4 = "";
  let hexaColor5 = "";
  let hexaColor6 = "";
  const ranNumb = Math.floor(Math.random() * hex.length);
  const ranNumb2 = Math.floor(Math.random() * hex2.length);
  const ranNumb3 = Math.floor(Math.random() * hex3.length);
  const ranNumb4 = Math.floor(Math.random() * hex4.length);
  const ranNumb5 = Math.floor(Math.random() * hex5.length);
  const ranNumb6 = Math.floor(Math.random() * hex6.length);

  for (let i = 0; i < 1; i++) {
    hexaColor += hex[ranNumb];
  }
  for (let i = 0; i < 1; i++) {
    hexaColor2 += hex2[ranNumb2];
  }
  for (let i = 0; i < 1; i++) {
    hexaColor3 += hex2[ranNumb3];
  }
  for (let i = 0; i < 1; i++) {
    hexaColor4 += hex[ranNumb4];
  }
  for (let i = 0; i < 1; i++) {
    hexaColor5 += hex2[ranNumb5];
  }
  for (let i = 0; i < 1; i++) {
    hexaColor6 += hex2[ranNumb6];
  }
  const allHexNumb =
    hexaColor + hexaColor2 + hexaColor3 + hexaColor4 + hexaColor5 + hexaColor6;

  document.body.style.backgroundColor = allHexNumb;
  color.textContent = allHexNumb;
  color.style.backgroundColor = allHexNumb;
});

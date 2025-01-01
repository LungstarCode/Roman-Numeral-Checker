document.getElementById('convert-btn').addEventListener('click', () => {
    const input = document.getElementById('number').value.trim();
    const outputElement = document.getElementById('output');
  
    if (!input) {
      outputElement.textContent = "Please enter a valid number";
      outputElement.style.color = "#ff5252"; // Error text color
      return;
    }
  
    const num = parseInt(input);
  
    if (num < 1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1";
      outputElement.style.color = "#ff5252";
      return;
    }
  
    if (num >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
      outputElement.style.color = "#ff5252";
      return;
    }
  
    outputElement.textContent = convertToRoman(num);
    outputElement.style.color = "#00e676"; // Success text color
  });
  
  function convertToRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];
  
    let roman = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        roman += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
  
    return roman;
  }
  
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============


// Sam PEGEOT
// GitHub Samy57


document.addEventListener("DOMContentLoaded", () => {


  let currentNumberIsDecimal = false;
  let stack = 0;
  let action = (a) => (a);

  for (let b of document.getElementsByClassName("calculator__keys")[0].children) {
    b.addEventListener("click", () => {
      if (b.dataset.action == "calculate") {
        document.getElementsByClassName("calculator__display")[0].textContent = action(stack, parseFloat(document.getElementsByClassName("calculator__display")[0].textContent));

      }
      else if (b.dataset.action == "clear") { // Remise à zéro du nombre tapé
        document.getElementsByClassName("calculator__display")[0].textContent = "0";
        currentNumberIsDecimal = false;
      }
      else if (b.dataset.action == "decimal") {
        if (!currentNumberIsDecimal) {
          currentNumberIsDecimal = true;
          document.getElementsByClassName("calculator__display")[0].textContent += b.textContent;
        }
      }

      else if (b.dataset.action == "multiply") {
        stack = parseFloat(document.getElementsByClassName("calculator__display")[0].textContent);
        document.getElementsByClassName("calculator__display")[0].textContent = "0";
        currentNumberIsDecimal = false;
        action = (a, b) => (a * b);
      }

      else if (b.dataset.action == "add") {
        stack = parseFloat(document.getElementsByClassName("calculator__display")[0].textContent);
        document.getElementsByClassName("calculator__display")[0].textContent = "0";
        currentNumberIsDecimal = false;
        action = (a, b) => { return a + b };
      }
      else if (b.dataset.action == "soustract") {
        stack = parseFloat(document.getElementsByClassName("calculator__display")[0].textContent);
        document.getElementsByClassName("calculator__display")[0].textContent = "0";
        currentNumberIsDecimal = false;
        action = (a, b) => { return a - b };
      }
      else if (b.dataset.action == "divide") {
        stack = parseFloat(document.getElementsByClassName("calculator__display")[0].textContent);
        document.getElementsByClassName("calculator__display")[0].textContent = "0";
        currentNumberIsDecimal = false;
        action = (a, b) => { return a / b };
      }

      else if (b.dataset.action == "number") { // C'est un chiffre
        if (document.getElementsByClassName("calculator__display")[0].textContent == "0") { // Traite le cas particulier des zéros
          if (!(b.textContent == "0")) {
            document.getElementsByClassName("calculator__display")[0].textContent = b.textContent;
          }
        }
        else {
          document.getElementsByClassName("calculator__display")[0].textContent += b.textContent;
        }
      }
    }
    );



  }


});



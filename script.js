let $criptoIcon = document.querySelector("#criptoIcon");
let $valuteIcon = document.querySelector("#valuteIcon");
let $criptoPage = document.querySelector("#criptoPage");
let $valutePage = document.querySelector("#valutePage");

$criptoIcon.addEventListener("click", function () {
  $criptoPage.classList.remove("hide");
  $valutePage.classList.add("hide");
});
$valuteIcon.addEventListener("click", function () {
  $valutePage.classList.remove("hide");
  $criptoPage.classList.add("hide");
});

let $listValute = document.querySelector("#listValute");

const url = "https://www.cbr-xml-daily.ru/daily_json.js";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let valute = data.Valute;
    for (key in valute) {
      $listValute.insertAdjacentHTML(
        "beforeend",
        `
            <div class="nominal">
            <div class="p">
            
            <p class = "">${valute[key].Name}</p> 
            <p>${(
              ((valute[key].Value - valute[key].Previous) / valute[key].Value) *
              100
            ).toFixed(2)}%</p> 
            </div>
            
            <div class="values">
               <p id = "price" >₽${valute[key].Value.toFixed(2)}</p>
               <p>${valute[key].CharCode} ${valute[key].Nominal}</p>
            </div>
            </div>
        `
      );
    }
  });

let $listCripto = document.querySelector("#listCripto")
const urlCrypto = "https://api.coingecko.com/api/v3/indexes"

fetch(urlCrypto)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (key in data) {
      $listCripto.insertAdjacentHTML(
        "beforeend",
        `
            <div class="nominal">
            <div class="p">
            
            <p class = "">${data[key].id}</p> 
            <p>${data[key].market}</p> 

            </div>
            
            <div class="values">
               <p id = "price" >$${data[key].last.toFixed(7)}</p>
            </div>
            </div>
        `
      );
    }
  });
  



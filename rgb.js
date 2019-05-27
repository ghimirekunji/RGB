const input = document.querySelector("input");
const button = document.querySelector("button")
const resultcontainer =document.querySelector(".resultcontainer")


//function that generates random hexacolor
function randomhexaGenerator() {
  var letters = '0123456789abcdef';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; // same like i+=1; i=1+i;
      //color =color + (letters[Math.floor(Math.random() * 16)]);
  }
  return color;
}




// with for loop we are having a constant genrated colors all time 

for (let i=0; i < 5; i++){
  let color = randomhexaGenerator();
  let autoDiv= document.createElement("div");

  autoDiv.style.backgroundColor = color;
  autoDiv.setAttribute("class", "auto-gen-div")

  let copybtn = document.createElement("button");
    copybtn.classList.add("copy_btn");

    let span = document.createElement("span")
   span.textContent=color;
   autoDiv.appendChild(span)


   copybtn.addEventListener("click", () => {
    try {

        var range = document.createRange(); // create new range object
        range.selectNodeContents(span); // set range to encompass desired element text
        var selection = window.getSelection(); // get Selection object from currently user selected text
        selection.removeAllRanges(); // unselect any user selected text (if any)
        selection.addRange(range); // add range to Selection object t;
    } catch (err) {
        console.log(err);
    }
    document.execCommand("copy");
});
copybtn.textContent ="copy";
    resultcontainer.appendChild(autoDiv)
    autoDiv.appendChild(copybtn)

}
// with for loop we are having a constant genrated colors all time 








//function that uses the random color and does stuss liek creating divs and setting attributes 
function colorsGenerator(){
  let inputvalue=input.value;
  resultcontainer.innerHTML = "";
  for (let i=0; i < inputvalue; i++){
    let color = randomhexaGenerator();
    let autoDiv= document.createElement("div");
    
    autoDiv.style.backgroundColor = color;
    autoDiv.setAttribute("class", "auto-gen-div")



    let copybtn = document.createElement("button");
    copybtn.classList.add("copy_btn");


   let span = document.createElement("span")
   span.textContent=color;
   autoDiv.appendChild(span)

    copybtn.addEventListener("click", () => {
      try {

          var range = document.createRange(); // create new range object
          range.selectNodeContents(span); // set range to encompass desired element text
          var selection = window.getSelection(); // get Selection object from currently user selected text
          selection.removeAllRanges(); // unselect any user selected text (if any)
          selection.addRange(range); // add range to Selection object t;
      } catch (err) {
          console.log(err);
      }
      document.execCommand("copy");
  });

    copybtn.textContent ="copy";
    resultcontainer.appendChild(autoDiv)
    autoDiv.appendChild(copybtn)
}
clearinput();
} 



// event listener 
button.addEventListener("click",colorsGenerator)



function clearinput(){
  if (button.click){
    input.value ="";
  }
}




























































//Sheery style not  working//Sheery style not  working//Sheery style not  working

/*

function randomhexaGenerator() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




    
  const button = document.querySelector("button")
   button.addEventListener("click", (e)=>{
  event.preventDefault();
  const input = document.querySelector("input");
  let inputvalue=input.value;

  const resultcontainer =document.querySelector(".resultcontainer")
  resultcontainer.innerHTML ="";
  for (i=0; i<inputvalue; i++){
    let color = randomhexaGenerator();
    let autoDiv= document.createElement("div");
    autoDiv.style.backgroundColor = color;
    autoDiv.className ="auto-gen-div";
    autoDiv.textContent= color;

    
    autoDiv.addEventListener("click", ()=> {
      navigator.clipboard.writeText(color);
    });
    resultcontainer.appendChild(autoDiv);
  }
})
Sheery styleSheery styleSheery styleSheery styleSheery styleSheery style
TILL HERETILL HERETILL HERETILL HERETILL HERETILL HERETILL HERE
*/
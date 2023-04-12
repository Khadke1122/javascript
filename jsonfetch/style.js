let input = document.getElementById("input");
let button = document.getElementById("btn");
let output = document.getElementById("output");


button.onclick = function (){
  let name = input.value;
  fetch(`http://www.omdbapi.com/?s=${name}&apikey=8a9eeed7`)
        .then(response => response.json())
        // .then(response => console.log(JSON.stringify(res)))
        .then(data => {
          console.log(data);
          let array= data.Search;
        for(n in array){
          (array[n].Title);
        
let card = document.createElement('div');
card.setAttribute('class','card');
output.append(card);

let bottom = document.createElement('h6'); 
bottom.setAttribute('class','card-title')
bottom.innerHTML = array[n].Title;
card.append(bottom);

let image = document.createElement('img');
let post = array[n].Poster;
image.setAttribute('src',post);
image.setAttribute('class','card-img-top')
card.append(image);








}  
})
}
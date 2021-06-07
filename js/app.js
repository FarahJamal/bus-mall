'use strict';
 

let leftImgEl=document.getElementById('left-img');
let centerImgEl=document.getElementById('center-img');
let rightImgEl=document.getElementById('right-img');
let submitButton=document.getElementById('subB');
let selectedValue = document.getElementById("list");

let round=25;
let imageNumber=0;
function CategoryImg(name,filePath){
this.name=name;
this.filePath=filePath;
this.shows=0;
this.votes=0;
CategoryImg.allImg.push(this);
}
let filesArr=
[
"bag","banana","bathroom","boots","breakfast","bubblegum","chair","cthulhu","dog-duck","dragon","pen","pet-sweep","scissors","shark",
"sweep","tauntaun","unicorn","usb","water-can","wine-glass"

]

CategoryImg.allImg=[];

for(let x=0;x<filesArr.length;x++){
new CategoryImg(filesArr[x],`img/${filesArr[x]}.jpg`)
}

let left,right,center=null;

function displayImg(){
     left=generateRandomPic();
     right=generateRandomPic();
     center=generateRandomPic();
    while(left === center || left === right || right===center || right===left || center ===right || center === left){
         left=generateRandomPic();
         right=generateRandomPic();
         center=generateRandomPic();
}
   
leftImgEl.src=CategoryImg.allImg[left].filePath;
centerImgEl.src=CategoryImg.allImg[center].filePath;
rightImgEl.src=CategoryImg.allImg[right].filePath;
CategoryImg.allImg[left].shows++;
CategoryImg.allImg[center].shows++;
CategoryImg.allImg[right].shows++;

}

displayImg();


function generateRandomPic(){
    let randomIndex = Math.floor(Math.random() * CategoryImg.allImg.length);
    return randomIndex;               
                    
}
/* leftImgEl.addEventListener('click',imageHandler);
centerImgEl.addEventListener('click',imageHandler);
rightImgEl.addEventListener('click',imageHandler); */
let container=document.getElementById('images');
container.addEventListener('click',imageHandler);
var roundNo;
let buttonRound=document.getElementById('subA');
buttonRound.onclick = function() { 
    roundNo=document.getElementById('roundNo').value;
    console.log(roundNo)
    if(roundNo==null || roundNo ==0){
        round=25;
    }
    else{
    round=roundNo;
    }
    document.getElementById('roundNo').value="";
    buttonRound.disabled=true;
};
let pressCount=0;
function imageHandler(event){
pressCount+=1;
    //console.log(event.target.id);
    if(round>=pressCount){
    if(event.target.id === 'left-img'){
        CategoryImg.allImg[left].votes++;
    }
    else if(event.target.id === 'center-img'){
        CategoryImg.allImg[center].votes++;
    }
    else if(event.target.id === 'right-img'){
        CategoryImg.allImg[right].votes++;
    }
    else{
        return;
    }
    generateRandomPic();
    displayImg();
   
    console.log(CategoryImg.allImg);
}
else{
    submitButton.onclick = function() { 
        submitButton.disabled = false;
        displayResult();
        submitButton.disabled = true;

    
    };
/*     leftImgEl.removeEventListener('click',imageHandler);
centerImgEl.removeEventListener('click',imageHandler);
rightImgEl.removeEventListener('click',imageHandler); */
container.removeEventListener('click',imageHandler);


}
}

function displayResult(){
    let parrentEl=document.getElementById('unList');
    let ulEl=document.createElement('ul');
    parrentEl.appendChild(ulEl);
    
    for(var i=0;i<CategoryImg.allImg.length;i++){
    var liEl=document.createElement('li');
    liEl.textContent=`${CategoryImg.allImg[i].name} had ${CategoryImg.allImg[i].votes} votes, and was seen ${CategoryImg.allImg[i].shows} times.`;
    ulEl.appendChild(liEl);
}

}
var text="";
function getSelectValue()
        {
            selectedValue.onchange=function(){
                 text= selectedValue.options[selectedValue.selectedIndex].value;
            imageNumber=Number(text);
            console.log(imageNumber);

            }
        }

        getSelectValue();
        console.log(imageNumber);

displayImg();



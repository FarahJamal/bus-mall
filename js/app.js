'use strict';
 

let leftImgEl=document.getElementById('left-img');
let centerImgEl=document.getElementById('center-img');
let rightImgEl=document.getElementById('right-img');
let leftImgEl2=document.getElementById('left-img2');
let centerImgEl2=document.getElementById('center-img2');
let rightImgEl2=document.getElementById('right-img2');
let leftImgEl3=document.getElementById('left-img3');
let centerImgEl3=document.getElementById('center-img3');
let rightImgEl3=document.getElementById('right-img3');
let submitButton=document.getElementById('subB');
let select = document.getElementById("list");
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');
let ctx = document.getElementById('myChart');
let percentageChart = document.getElementById('myChart2');
let lineChart = document.getElementById('myChart3');
let radarChart = document.getElementById('myChart4');
let polarAreaChart = document.getElementById('myChart5');
let rgb = [];
let rgb2=[];

for(var i = 0; i < 20; i++){
    rgb.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    rgb2.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);

}
console.log(rgb);
let arrOfName=[];
let round=10;
let imageNumber=0;
let votes2=[];
let shows2=[];
var graphIndex = 0;

prevButton.addEventListener('click', prevGraph);
nextButton.addEventListener('click', nextGraph);

      
      function switchGraph() {
    switch(graphIndex){
    case 0:
       ctx.style.visibility = 'visible';
      ctx.style.height = '530px';
      percentageChart.style.visibility = 'hidden';
     percentageChart.style.height="0px";
    lineChart.style.visibility = 'hidden';
      lineChart.style.height = '0px';
    radarChart.style.visibility = 'hidden';
      radarChart.style.height = '0px';
      polarAreaChart.style.visibility = 'hidden';
      polarAreaChart.style.height = '0px';
      break;
    case 1:
        document.getElementById('myChart').style.visibility = 'hidden';
        document.getElementById('myChart').style.height = '0px';
        document.getElementById('myChart2').style.visibility = 'visible';
        document.getElementById('myChart2').style.height = '530px';
        document.getElementById('myChart3').style.visibility = 'hidden';
        document.getElementById('myChart3').style.height = '0px';
        document.getElementById('myChart4').style.visibility = 'hidden';
        document.getElementById('myChart4').style.height = '0px';
        document.getElementById('myChart5').style.visibility = 'hidden';
        document.getElementById('myChart5').style.height = '0px';
        
      break;
    case 2:
        document.getElementById('myChart').style.visibility = 'hidden';
        document.getElementById('myChart').style.height = '0px';
        document.getElementById('myChart2').style.visibility = 'hidden';
        document.getElementById('myChart2').style.height = '0px';
        document.getElementById('myChart3').style.visibility = 'visible';
        document.getElementById('myChart3').style.height = '530px';
        document.getElementById('myChart4').style.visibility = 'hidden';
        document.getElementById('myChart4').style.height = '0px';
        document.getElementById('myChart5').style.visibility = 'hidden';
        document.getElementById('myChart5').style.height = '0px';
       
      break;
         case 3:
        document.getElementById('myChart').style.visibility = 'hidden';
        document.getElementById('myChart').style.height = '0px';
        document.getElementById('myChart2').style.visibility = 'hidden';
        document.getElementById('myChart2').style.height = '0px';
        document.getElementById('myChart3').style.visibility = 'hidden';
        document.getElementById('myChart3').style.height = '0px';
        document.getElementById('myChart4').style.visibility = 'visible';
        document.getElementById('myChart4').style.height = '530px';
        document.getElementById('myChart5').style.visibility = 'hidden';
        document.getElementById('myChart5').style.height = '0px';
        
      break;
      case 4:
        document.getElementById('myChart').style.visibility = 'hidden';
        document.getElementById('myChart').style.height = '0px';
        document.getElementById('myChart2').style.visibility = 'hidden';
        document.getElementById('myChart2').style.height = '0px';
        document.getElementById('myChart3').style.visibility = 'hidden';
        document.getElementById('myChart3').style.height = '0px';
        document.getElementById('myChart4').style.visibility = 'hidden';
        document.getElementById('myChart4').style.height = '0px';
        document.getElementById('myChart5').style.visibility = 'visible';
        document.getElementById('myChart5').style.height = '530px';
     
      break;    
        
    default:
      //do nothing
    }
  }

// set graph to previous graph and jump to prev anchor
function prevGraph() {
if(graphIndex === 0) {
graphIndex = 4;
} else {
graphIndex--;
}
switchGraph();
location.href = '#prev-button';
}

// set graph to next graph and jump to next anchor
function nextGraph() {
if(graphIndex === 4) {
graphIndex = 0;
} else {
graphIndex++;
}
switchGraph();
location.href = '#next-button';
}


function CategoryImg(name,filePath){
this.name=name;
this.filePath=filePath;
this.shows=0;
this.votes=0;
arrOfName.push(name);
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
let prevLeft,prevRight,prevCenter=null;
let prevArr=[];
let selectedValue=3;
let selectedString="";
function displayImg(){
     left=generateRandomPic();
     right=generateRandomPic();
     center=generateRandomPic();
   
    while(left === center || left === right || right===center 
       || prevArr.includes(CategoryImg.allImg[left].filePath) 
       || prevArr.includes(CategoryImg.allImg[center].filePath) 
       || prevArr.includes(CategoryImg.allImg[right].filePath)){
         left=generateRandomPic();
         right=generateRandomPic();
         center=generateRandomPic();
         
}



prevLeft=CategoryImg.allImg[left].filePath;
prevRight=CategoryImg.allImg[right].filePath;
prevCenter=CategoryImg.allImg[center].filePath;

prevArr=[prevLeft,prevRight,prevCenter];
leftImgEl.src=CategoryImg.allImg[left].filePath;
centerImgEl.src=CategoryImg.allImg[center].filePath;
rightImgEl.src=CategoryImg.allImg[right].filePath;
CategoryImg.allImg[left].shows++;
CategoryImg.allImg[center].shows++;
CategoryImg.allImg[right].shows++;


}

displayImg();
/*select.onchange = function(){
  selectedString = select.options[select.selectedIndex].value;
  selectedValue=Number(selectedString);
  console.log(selectedValue);
  if(selectedValue === 6){
    displayImg();

  }
  else if(selectedValue===9){
    console.log('I am nine');
  }
  else{
    console.log('I am three');
  }
}*/

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
        round=3;
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
if(pressCount === round- 1){
    submitButton.onclick = function() { 
        submitButton.disabled = false;

        document.getElementById('select-graph').style.visibility = 'visible';
        
        submitButton.disabled = true;

        savingToLs();
        console.log(CategoryImg.allImg);
        displayResult();
        gettingChart();
    };
   
/*     leftImgEl.removeEventListener('click',imageHandler);
centerImgEl.removeEventListener('click',imageHandler);
rightImgEl.removeEventListener('click',imageHandler); */
container.removeEventListener('click',imageHandler);
document.getElementById('subB').style.visibility='visible';



}
}

function displayResult(){
    let parrentEl=document.getElementById('unList');
    let tableEl=document.createElement('table');
    parrentEl.appendChild(tableEl);
    votes2=[];
    shows2=[];
    var thEl=document.createElement('th');
    thEl.textContent='total votes and shows result!';
    tableEl.appendChild(thEl);
    for(var i=0;i<CategoryImg.allImg.length;i++){
       
        votes2.push(CategoryImg.allImg[i].votes);
        shows2.push(CategoryImg.allImg[i].shows);
        
    var trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl=document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent=`${CategoryImg.allImg[i].name} had ${CategoryImg.allImg[i].votes} votes, and was seen ${CategoryImg.allImg[i].shows} times.`;

    
}

}
function savingToLs(){
    let convertedArr = JSON.stringify(CategoryImg.allImg); 
    localStorage.setItem('vote',convertedArr);
    
  }
  
  
  function gettingOrdersFromLs(){
    let data = localStorage.getItem('vote');
    console.log(data);
    //Null
    let parsedOrder = JSON.parse(data);
    console.log(parsedOrder);
   
    if(parsedOrder !== null){ // parsedOrder !== Null
  
      CategoryImg.allImg = parsedOrder;
       


    }
  }


        //getSelectValue();
        //console.log(imageNumber);
        

        function gettingChart(){
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: arrOfName,
                    datasets: [{
                        label: '# of Votes',
                        data: votes2,
                        backgroundColor: '#F7DD4F',

                        
                    },{
                      label: '# of Seen',
                      data: shows2,
                      backgroundColor:
                        '#89C7E7',
                        
                      
                  }
                  ]
                }
            });
        

              new Chart(percentageChart, {
                type: 'pie',
                data: {
                  labels: arrOfName,
                  datasets: [
                    {
                        label:'# of Votes',

                      backgroundColor: rgb,
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor:rgb2,
                          
                             
                    }
                  ],


                },
               
              });
              new Chart(radarChart, {
                type: 'radar',
                data: {
                  labels: arrOfName,
                  datasets: [
                    {  
                      label:'# of Votes',
                      backgroundColor:  '#F7DD4F',
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor:
                          '#89C7E7',
                             
                    }
                  ],


                },
               
              });
              new Chart(lineChart, {
                type: 'line',
                data: {
                  labels: arrOfName,
                  datasets: [
                    {
                        label:'# of Votes',
                      backgroundColor: '#F7DD4F',
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor:
                          '#89C7E7',
                             
                    }
                  ],


                },
               
              });
              new Chart(polarAreaChart, {
                type: 'polarArea',
                data: {
                  labels: arrOfName,
                  datasets: [
                    {
                      backgroundColor: rgb,
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor: rgb,
                             
                    }
                  ],


                },
               
              });
              
          
            
            console.log(shows2);
            console.log(votes2);
        }


gettingOrdersFromLs();

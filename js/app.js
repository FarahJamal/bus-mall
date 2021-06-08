'use strict';
 

let leftImgEl=document.getElementById('left-img');
let centerImgEl=document.getElementById('center-img');
let rightImgEl=document.getElementById('right-img');
let submitButton=document.getElementById('subB');
let selectedValue = document.getElementById("list");
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');
let ctx = document.getElementById('myChart');
var percentageChart = document.getElementById('myChart2');
var lineChart = document.getElementById('myChart3');
var radarChart = document.getElementById('myChart4');
var polarAreaChart = document.getElementById('myChart5');



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
     percentageChart.height="0px";
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
        document.getElementById('myChart2').style.visibility = 'hidden';
        document.getElementById('myChart2').style.height = '0px';
        document.getElementById('myChart3').style.visibility = 'visible';
        document.getElementById('myChart3').style.height = '530px';
        document.getElementById('myChart4').style.visibility = 'hidden';
        document.getElementById('myChart4').style.height = '0px';
        document.getElementById('myChart5').style.visibility = 'hidden';
        document.getElementById('myChart5').style.height = '0px';
        
      break;
    case 2:
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

function displayImg(){
     left=generateRandomPic();
     right=generateRandomPic();
     center=generateRandomPic();
   
    while(left === center || left === right || right===center || right===left || center ===right || center === left
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



//console.log(center," ", left, " ", right);

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
        displayResult();
        document.getElementById('select-graph').style.visibility = 'visible';
        gettingChart();
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
        votes2.push(CategoryImg.allImg[i].votes);
        shows2.push(CategoryImg.allImg[i].shows);
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
                        backgroundColor: 
                            'rgba(255, c, 132, 0.4)',

                        
                    },{
                      label: '# of Seen',
                      data: shows2,
                      backgroundColor:
                        'rgba(200, 120, 132, 0.5)',
                        
                      
                  }
                  ]
                }
            });
            new Chart(percentageChart.getContext('2d'),{
                type: 'bar',
                data: {
                  labels:arrOfName,
                  datasets: [{
                    label: '% of Times Picked',
                    data: votes2,
                    backgroundColor: 'green',
                  }, {
                    label: '# of Seen',
                    data: shows2,
                    backgroundColor:
                      'rgba(200, 120, 132, 0.5)',
                         
                }
                
                ],
                },
                
               
              });

              new Chart(percentageChart, {
                type: 'pie',
                data: {
                  labels: arrOfName,
                  datasets: [
                    {
                      backgroundColor: 'yellow',
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor:
                          'rgba(200, 120, 132, 0.5)',
                             
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
                      backgroundColor: 'yellow',
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor:
                          'rgba(200, 120, 132, 0.5)',
                             
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
                      backgroundColor: 'yellow',
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor:
                          'rgba(200, 120, 132, 0.5)',
                             
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
                      backgroundColor: 'yellow',
                      data: votes2,
                    },{
                        label: '# of Seen',
                        data: shows2,
                        backgroundColor:
                          'rgba(200, 120, 132, 0.5)',
                             
                    }
                  ],


                },
               
              });
              
          
            
            console.log(shows2);
            console.log(votes2);
        }



       
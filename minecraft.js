const widthCube = 20;
const heightCube = 20;
const div= document.querySelector('div');
const sky=document.querySelector(".sky");
const pickaxe=document.querySelector(".pickaxe");
const shovel=document.querySelector(".shovel");
const axe=document.querySelector(".axe");
const lastMemory=document.querySelector(".lastMemory");
const lastMemoryClass=lastMemory.classList;
const allCube=[];

sky.style.gridTemplateRows= 'repeat(heightQube, 1fr)';
sky.style.gridTemplateColumns= 'repeat(widthQube, 1fr)';


function printCube(row,startCol,endCol,classIteam){
  for(let i=startCol;i<endCol;i++){
    const cubeImg = document.createElement('div');
    cubeImg.classList.add(classIteam)
    div.appendChild(cubeImg);
    cubeImg.style.gridRowStart=row;
    cubeImg.style.gridColumnStart=i;
    allCube.push(cubeImg)
    // picCube(cubeImg,classIteam)
  }
}
function choosetool(toolChoose, otherTool1, otherTool2){
  picCube()
  toolChoose.addEventListener("click", function() {
    if(otherTool1.classList[1]){otherTool1.classList.toggle('backgroundBlue')}
    if(otherTool2.classList[1]){otherTool2.classList.toggle('backgroundBlue')}
    if(!(toolChoose.classList[1]==="backgroundBlue")){toolChoose.classList.toggle('backgroundBlue')}
  })
}
console.log(allCube);
function picCube(){

  if(pickaxe.classList[1]==="backgroundBlue"){
    for(let i=0;i<allCube.length;i++){
      if(allCube[i].className==="stone"){
        allCube[i].addEventListener("click", function() {
            if(lastMemoryClass[1]){lastMemoryClass.toggle(lastMemoryClass[1])}
            allCube[i].classList.remove("stone")
          lastMemoryClass.toggle("stone")
        })

      }else{
        allCube[i].addEventListener("click", function() {
        pickaxe.animate([
          { background : 'red', border: '2px solid red'},
          { background : 'red', border: '2px solid red' }
        ], {
          duration: 400,
          iterations: 1
        });
      })
      }

    }
  }
}







// function picCube(cubeImg,classIteam){
//   cubeImg.addEventListener("click", function() {
//     if(lastMemoryClass[1]){lastMemoryClass.toggle(lastMemoryClass[1])}
//     cubeImg.classList.remove(classIteam)
//     lastMemoryClass.toggle(classIteam)
//   })
// }





printCube(6,7,8,'cloud')
printCube(7,5,9,'cloud')
printCube(7,10,12,'cloud')
printCube(8,4,12,'cloud')
printCube(9,8,10,'cloud')
printCube(9,16,19,'woodGreen')
printCube(10,16,19,'woodGreen')
printCube(11,16,19,'woodGreen')
printCube(13,5,6,'woodGreen')
printCube(14,4,7,'woodGreen')
printCube(12,17,18,'woodBrown')
printCube(13,17,18,'woodBrown')
printCube(14,17,18,'woodBrown')
printCube(14,14,16,'stone')
printCube(14,20,21,'stone')
printCube(15,1,21,'groundWithGrass')
printCube(16,1,21,'ground')
printCube(17,1,21,'ground')
printCube(18,1,21,'ground')
printCube(19,1,21,'ground')
printCube(20,1,21,'ground')

choosetool(pickaxe, shovel, axe)
choosetool(shovel, pickaxe, axe)
choosetool(axe, shovel, pickaxe)
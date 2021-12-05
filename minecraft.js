const sky=document.querySelector(".sky");
const menu=document.querySelectorAll(".menu div");
const pickaxe=document.querySelector(".pickaxe");
const shovel=document.querySelector(".shovel");
const axe=document.querySelector(".axe");
const lastMemory=document.querySelector(".lastMemory");
const lastMemoryClass=lastMemory.classList;
let btn=document.querySelector("button");
let inputBtn=document.querySelector("input");
let header=document.querySelector("header");
let images = {
  woodGreen: "woodGreen",
  ground: "ground",
  woodBrown: "woodBrown",
  cloud: "cloud",
  blue: "blue",
  groundWithGrass: "groundWithGrass",
  stone: "stone",
};

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 1],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

function makeBoard(matrix) {
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      let makeDivElement = document.createElement("div");
      switch (matrix[i][j]) {
        case 6:
          makeDivElement.classList.add(images.groundWithGrass);
          break;
        case 5:
          makeDivElement.classList.add(images.cloud);
          break;
        case 4:
          makeDivElement.classList.add(images.ground);
          break;
        case 3:
          makeDivElement.classList.add(images.woodBrown);
          break;
        case 2:
          makeDivElement.classList.add(images.woodGreen);
          break;
        case 1:
          makeDivElement.classList.add(images.stone);
          break;
        case 0:
          makeDivElement.classList.add(images.blue);
          break;
      }
      addElement(makeDivElement, i+1, j+1);
    }
  }
}
function addElement(makeDivElement, i, j) {
  makeDivElement.style.gridRowStart = i;
  makeDivElement.style.gridColumnStart = j;
  sky.appendChild(makeDivElement);
}

function lastOne(thisClass){
if(lastMemoryClass[1]){
  lastMemoryClass.toggle(lastMemoryClass[1])
}
lastMemoryClass.toggle(thisClass)
}
function calculationPickCube(e, typeMenu, typeClass, typeClass2){
    if(e.target.classList[0]===typeClass){
      e.target.classList.remove(typeClass)
      e.target.classList.add("blue")
      lastOne(typeClass)
    }else if(e.target.classList[0]===typeClass2){
      e.target.classList.remove(typeClass2)
      e.target.classList.add("blue")
      lastOne(typeClass2)
    }else{
      typeMenu.animate([
          { background : 'red', border: '2px solid red'},
          { background : 'red', border: '2px solid red' }
        ], {
              duration: 250,
              iterations: 1
      });
    }
  }
function cleanCubeWithTool(e){
  if(pickaxe.classList[1]==="backgroundBlue"){
    calculationPickCube(e,pickaxe, "stone",)
  }else if(shovel.classList[1]==="backgroundBlue"){
    calculationPickCube(e, shovel, "woodBrown","woodGreen")
  } else if(axe.classList[1]==="backgroundBlue"){
    calculationPickCube(e, axe, "ground","groundWithGrass")
  }
}
function picCube(toolChoose){
      if(toolChoose.classList[0]==="pickaxe"){
        } else if(toolChoose.classList[0]==="shovel"){
          } else if(toolChoose.classList[0]==="axe"){
        }
      }
function choosetool(toolChoose, otherTool1, otherTool2){
  toolChoose.addEventListener("click", function m() {
    if(otherTool1.classList[1]){
      otherTool1.classList.toggle('backgroundBlue')
    }
    if(otherTool2.classList[1]){
      otherTool2.classList.toggle('backgroundBlue')
    }
    if(!(toolChoose.classList[1]==='backgroundBlue')){
      toolChoose.classList.toggle('backgroundBlue')
    }
  })
  }
  function lastOnePick(e1){
    if(lastMemoryClass[1]){
      sky.addEventListener("click",function ww(e){
        if(e.target.classList[0]==="blue"){
          e.target.classList.add(e1.target.classList[1])
          lastMemoryClass.toggle(lastMemoryClass[1])
          sky.removeEventListener("click", ww)
        }
      })
    }
  }
  function reset(){
    if(shovel.classList[1]){
      shovel.classList.toggle('backgroundBlue')
    }
    if(axe.classList[1]){
      axe.classList.toggle('backgroundBlue')
    }
    if(!pickaxe.classList[1]){
      pickaxe.classList.toggle('backgroundBlue')
    }
    if(lastMemoryClass[1]){
      lastMemoryClass.toggle(lastMemoryClass[1])
    }
    sky.innerHTML="";
    makeBoard(matrix);
  }
  
choosetool(pickaxe, shovel, axe)
choosetool(shovel, pickaxe, axe)
choosetool(axe, shovel, pickaxe)

lastMemory.addEventListener("click", lastOnePick)

btn.addEventListener('click', reset)

sky.addEventListener("click", cleanCubeWithTool)

inputBtn.addEventListener("click", function(){
  header.style.visibility="hidden"
})

makeBoard(matrix);






//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const widthCube = 20;
// const heightCube = 20;
// const div= document.querySelector('div');
// const sky=document.querySelector(".sky");
// const pickaxe=document.querySelector(".pickaxe");
// const shovel=document.querySelector(".shovel");
// const axe=document.querySelector(".axe");
// const lastMemory=document.querySelector(".lastMemory");
// const menu=document.querySelectorAll(".menu div");
// const lastMemoryClass=lastMemory.classList;
// const allCube=[];
// let btn=document.querySelector("button");
// sky.style.gridTemplateRows= 'repeat(heightQube, 1fr)';
// sky.style.gridTemplateColumns= 'repeat(widthQube, 1fr)';

// function printCube(row,startCol,endCol,classIteam){
//   for(let i=startCol;i<endCol;i++){
//     const cubeImg = document.createElement('div');
//     cubeImg.classList.add(classIteam)
//     div.appendChild(cubeImg);
//     cubeImg.style.gridRowStart=row;
//     cubeImg.style.gridColumnStart=i;
//     allCube.push(cubeImg)
//   }
// }

// function stickCubeToMenu(typeClass, i){
//   allCube[i].addEventListener("click", function() {
//       if(lastMemoryClass[1]){
//         lastMemoryClass.toggle(lastMemoryClass[1])
//       }
//       allCube[i].classList.remove(typeClass)
//     lastMemoryClass.toggle(typeClass)
//   })
// }

// function calculationPickCube(typeMenu, typeClass, typeClass2){
//   for(let i=0;i<allCube.length;i++){
//     if(allCube[i].className===typeClass){
//         stickCubeToMenu(typeClass, i)
//     }else if(allCube[i].className===typeClass2){
//         stickCubeToMenu(typeClass2, i)
//       }
//       else{
//           allCube[i].addEventListener("click", function m1() {
//               typeMenu.animate([
//                   { background : 'red', border: '2px solid red'},
//             { background : 'red', border: '2px solid red' }
//           ], {
//               duration: 250,
//               iterations: 1
//             });
//           })
//         }
//       }
//   }
  
// function picCube(toolChoose){
//     if(toolChoose.classList[0]==="pickaxe"){
//         calculationPickCube(pickaxe, "stone","aaefadfgas")
//       } else if(toolChoose.classList[0]==="shovel"){
//           calculationPickCube(shovel, "woodBrown","woodGreen")
//         } else if(toolChoose.classList[0]==="axe"){
//         calculationPickCube(axe, "ground","groundWithGrass")
//       }
//     }

//     function choosetool(toolChoose, otherTool1, otherTool2){
//     toolChoose.addEventListener("click", function m() {
//         if(otherTool1.classList[1]){
//             otherTool1.classList.toggle('backgroundBlue')
//       }
//       if(otherTool2.classList[1]){
//           otherTool2.classList.toggle('backgroundBlue')
//         }
//         if(!(toolChoose.classList[1]==='backgroundBlue')){
//             toolChoose.classList.toggle('backgroundBlue')
//           }
//           picCube(toolChoose)
//         })
//       }


// // //!part2
// // function lastOnePick(){
// //   lastMemory.addEventListener("click",function(e1){
// //     console.log(e1.target.classList);
// //     if(lastMemoryClass[1]){
// //       sky.addEventListener("click",function qq(e){
// //         console.dir(e);
// //           if(e.target.classList[0]==="sky"){
// //           const cubeImg = document.createElement('div');
// //           cubeImg.classList.add(e1.target.classList[1])
// //           div.appendChild(cubeImg);
// //           // cubeImg.style.gridRowStart=Math.floor((e.y-21)/22);
// //           cubeImg.style.gridColumnStart=Math.floor((e.layerX-e.x)/20);
// //           allCube.push(cubeImg)
// //           sky.removeEventListener("click", qq)
// //         } else if(e1.target.classList.length===0){
// //           sky.addEventListener("click",function ww(e){
// //               sky.classList.add(e1.target.classList[1])
// //               console.log(e);
// //             })
// //             sky.removeEventListener("click", ww)
// //           }
// //         })
// //   }
// //   })
// // }

//   choosetool(pickaxe, shovel, axe)
//   choosetool(shovel, pickaxe, axe)
//   choosetool(axe, shovel, pickaxe)


// function reset(){
//   printCube(6,7,8,'cloud')
//   printCube(7,5,9,'cloud')
//   printCube(7,10,12,'cloud')
//   printCube(8,4,12,'cloud')
//   printCube(9,8,10,'cloud')
//   printCube(9,16,19,'woodGreen')
//   printCube(10,16,19,'woodGreen')
//   printCube(11,16,19,'woodGreen')
//   printCube(13,5,6,'woodGreen')
//   printCube(14,4,7,'woodGreen')
//   printCube(12,17,18,'woodBrown')
//   printCube(13,17,18,'woodBrown')
//   printCube(14,17,18,'woodBrown')
//   printCube(14,14,16,'stone')
//   printCube(14,20,21,'stone')
//   printCube(15,1,21,'groundWithGrass')
//   printCube(16,1,21,'ground')
//   printCube(17,1,21,'ground')
//   printCube(18,1,21,'ground')
//   printCube(19,1,21,'ground')
//   printCube(20,1,21,'ground')

//   choosetool(pickaxe, shovel, axe)
//   choosetool(shovel, pickaxe, axe)
//   choosetool(axe, shovel, pickaxe)
//   // lastOnePick()
// }

// btn.addEventListener('click', function(){
//   div.innerHTML="";
//   reset()
// })

// reset()
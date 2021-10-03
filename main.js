
let atualImg = 1;

setInterval(()=>{
  if(atualImg === 8){
    atualImg = 1;
  }else{
     const imgObra = document.querySelector('.img-obra');
    imgObra.src = `/src/obras/cena0${atualImg}.png`;
    atualImg = atualImg + 1;
  }

  
},3000);


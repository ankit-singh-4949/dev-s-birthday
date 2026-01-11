let currentPage = 1;
const totalPages = 5;

function nextPage(){
  document.getElementById("page" + currentPage).classList.remove("active");
  currentPage++;
  if(currentPage <= totalPages){
    document.getElementById("page" + currentPage).classList.add("active");
  }
}

// music autoplay fix
window.addEventListener("click",()=>{
  document.getElementById("bgMusic").play();
},{once:true});

document.querySelectorAll("#name").forEach(el=>{
  el.innerText = friendName;
});
function previousPage(){
  document.getElementById("page" + currentPage).classList.remove("active");
  currentPage--;
  if(currentPage >= 1){
    document.getElementById("page" + currentPage).classList.add("active");
  }
}

function share(){
  const msg = `🎉 Happy Birthday ${friendName} 🎂  
Tumhari life khushiyon se bhari rahe 💖`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}

const nameText = friendName;
let i = 0;
const speed = 150;

function typeName(){
  if(i < nameText.length){
    document.getElementById("typingName").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeName, speed);
  }
}
typeName();


const canvas = document.getElementById("fireworks");
if(canvas){
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function Particle(x,y,color){
    this.x=x;
    this.y=y;
    this.color=color;
    this.radius=Math.random()*2+1;
    this.dx=(Math.random()-0.5)*5;
    this.dy=(Math.random()-0.5)*5;
    this.life=100;
  }

  function explode(){
    const x=Math.random()*canvas.width;
    const y=Math.random()*canvas.height/2;
    const color=`hsl(${Math.random()*360},100%,50%)`;
    for(let i=0;i<50;i++){
      particles.push(new Particle(x,y,color));
    }
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
      p.x+=p.dx;
      p.y+=p.dy;
      p.life--;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
      ctx.fillStyle=p.color;
      ctx.fill();
      if(p.life<=0) particles.splice(i,1);
    });
    requestAnimationFrame(animate);
  }

  setInterval(explode,800);
  animate();
}

const slides=["img1.jpg","img2.jpg","img3.jpg"];
let s=0;
setInterval(()=>{
  s=(s+1)%slides.length;
  document.getElementById("slide").src=slides[s];
},2500);


const finalLink = "https://USERNAME.github.io/birthday/";

document.getElementById("qrCode").src =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
  encodeURIComponent(finalLink);




function movie(n,r,i,s,rd){
    this.name=n;
    this.rating=r;
    this.image=i;
    this.shortinfo=s;
    this.rdate=rd
}

let mov1=new movie("Black Widow",6.7,"https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg","Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",2021);
let mov2=new movie("Encounter",5.8,"https://m.media-amazon.com/images/M/MV5BYmFjODRjMjItYjFlMi00Mzk5LWIwNjMtOWM1YzYxZWFjMTBiXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UY209_CR0,0,140,209_AL_.jpg","Two brothers embark on a journey with their father, who is trying to protect them from an alien threat.",2021);
let mov3=new movie("Eternals",6.4,"https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_UY209_CR0,0,140,209_AL_.jpg","The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",2021)
let mov4=new movie("Ghostbusters: Afterlife",7.2,"https://m.media-amazon.com/images/M/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY209_CR0,0,140,209_AL_.jpg","When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",2021);
let mov5=new movie("The Hand of God",7.1,"https://m.media-amazon.com/images/M/MV5BZmE4NzM4YmItOTRkYS00NTEyLThlNDItNzJjMTNlMTgwMzEyXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_UY209_CR0,0,140,209_AL_.jpg","In 1980s Naples, young Fabietto pursues his love for football as family tragedy strikes, shaping his uncertain but promising future as a filmmaker.",2021);
let mov6=new movie("King Richard",7.2,"https://m.media-amazon.com/images/M/MV5BYTcyNmY4ZGEtYmE4Zi00ZDViLTlmYzMtMmQ4ZTM4OWNmZjQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"," A look at how tennis superstars Venus and Serena Williams became who they are after the coaching from their father Richard Williams.",2021);
let mov7=new movie("Red Notice",6.4,"https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg","An Interpol agent tracks the world's most wanted art thief.",2021);
let mov8=new movie("The Climb",6.7,"https://m.media-amazon.com/images/M/MV5BZDczYjkxYzMtMGM2Yy00MDg0LWIwZGQtMjYwZWEzNDFmMzY5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg","A look at the friendship between two guys that spans over many years.",2019)
let mov9=new movie("Soul",8.2,"https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UY209_CR0,0,140,209_AL_.jpg","After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",2021);

let moviedata=[];
moviedata.push(mov1,mov2,mov3,mov4,mov5,mov6,mov7,mov8,mov9);
localStorage.setItem("movies",JSON.stringify(moviedata));


let datarec=JSON.parse(localStorage.getItem("movies"))||[];
function display(){
datarec.map(function(ele){
    
    let bag=document.createElement("div");
    bag.style.margin="20px";
    bag.style.display="grid";
    bag.style.gridColumn="repeat(3,1fr)"
    bag.style.border="1px solid black"
    let imgdiv=document.createElement("div");
    let img=document.createElement("img");
    img.src=ele.image;
    imgdiv.append(img);
    let matterdiv=document.createElement("div");
    let name=document.createElement("h3");
    name.innerText=ele.name;
    let rate=document.createElement("div");
    rate.innerHTML="<b>IMDb Rating : </b>"+ele.rating;
    let si=document.createElement("div");
    si.innerHTML="<b>Short Info : </b> "+ele.shortinfo;
    let rdate=document.createElement("div");
    rdate.innerHTML="<b>Release Date : </b>"+ele.rdate;
    matterdiv.append(name,rate,rdate,si);
 
    bag.append(imgdiv,matterdiv)
    document.querySelector("#movies").append(bag)
    
})
}
display();
function sortingfuna(){
        datarec=datarec.sort(function(a,b){return a.rating-b.rating})
        document.querySelector("#movies").innerText="";
        display();
    }
    function sortingfund(){
        datarec= datarec.sort(function(a,b){return b.rating-a.rating})
        document.querySelector("#movies").innerText="";
        display();
}
import { navbar } from "../component/navbar";
document.getElementById("nav_bar").innerHTML=navbar();
import '../styles/index.css'
/* let obj=[{
    image :"https://c7.alamy.com/comp/3/8b1e23176c3c48669672079a526b599d/ggk3t0.jpg"},
    {image : "https://c7.alamy.com/comp/3/916a680f5d084edd866ec2de157b9411/f6je5m.jpg"},
    {image:"https://c7.alamy.com/comp/3/7644cf858ef948e8824e57f482630ab2/f6jej6.jpg"},
    {image:"https://c7.alamy.com/comp/3/6894a14e05964f4bad84526fedc3c579/f6jeh6.jpg"},
    {image: "https://c7.alamy.com/comp/3/6e4a57b593c9461183500ca90f57b45e/f6je5n.jpg"}
]

let bag=document.querySelector("#slideshow")
let i=0;

setInterval(display,2000);

function display(){
      let temp=document.createElement("div");
      let image=document.createElement("img");
      bag.innerHTML=""
    if(i==obj.length)
    i=0;
    image.src=obj[i].image;
    i++;
    bag.append(image);
 
} */
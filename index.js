const myAge = document.getElementById("myAge");
const myFullName = document.getElementById("myFullName");
const mySubmit = document.getElementById("mySubmit");
const ageResult = document.getElementById("ageResult");
const fullNameResult = document.getElementById("fullNameResult");

const yumenikki = document.getElementById("yumenikki");
yumenikki.volume = 0.15;

mySubmit.onclick = function(){
  if(myAge.value == "15"){
    ageResult.textContent = `Yesss that ur age Babe`;
    ageResult.setAttribute(`style`, `color: white`);
  }
  else {
    ageResult.textContent = `wow cigany u've been lying this whole time, havent u? i know u hate me. thats so rude of u because i love u babe. but i guess this relationship is only made up of lies.`;
    ageResult.setAttribute(`style`, `color: rgba(180, 2, 2, 1`);
  }
  if(myFullName.value == "klara anna dankova"){
    fullNameResult.textContent = `Omg your full name is so pretty, just like u i looooove u`;
    fullNameResult.setAttribute(`style`, `color: white`);
  }
    else if(myFullName.value == "klara"){
      fullNameResult.textContent = `Very close. Add more :)`;
      fullNameResult.setAttribute(`style`, `color: rgba(229, 80, 80, 1)`);
    }
    else if(myFullName.value == "klara dankova"){
      fullNameResult.textContent = `Muchhh closer, keep going. :DDD (swap dankova with something else LEL)`;
      fullNameResult.setAttribute(`style`, `color: rgba(222, 222, 222, 1)`);
    }
  else {
    fullNameResult.textContent = `You dont even know your full name do you?`;
    fullNameResult.setAttribute(`style`, `color: rgba(180, 2, 2, 1)`);
  }

}
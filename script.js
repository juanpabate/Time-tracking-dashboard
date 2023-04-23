const data= [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
const container= document.querySelector('.second-section');

const dailyBtn= document.querySelector('#daily');
const weecklyBtn= document.querySelector('#weekly');
const MonthlyBtn= document.querySelector('#monthly');

dailyBtn.addEventListener("click", (e)=> {
  e.target.classList.value= "selected";
  weecklyBtn.classList.remove('selected');
  MonthlyBtn.classList.remove('selected');
  frecuencia= e.target.innerText;
  dibujarElementos(daily);
});

weecklyBtn.addEventListener("click", (e)=> {
  e.target.classList.value= "selected";
  dailyBtn.classList.remove('selected');
  MonthlyBtn.classList.remove('selected');
  frecuencia= e.target.innerText;
  dibujarElementos(weeckly);
});
MonthlyBtn.addEventListener("click", (e)=> {
  e.target.classList.value= "selected";
  weecklyBtn.classList.remove('selected');
  dailyBtn.classList.remove('selected');
  frecuencia= e.target.innerText;
  dibujarElementos(monthly);
});


let frecuencia = "Daily";

const daily= data.map(element => [element.timeframes.daily, element.title]);
const weeckly= data.map(element => [element.timeframes.weekly, element.title]);
const monthly= data.map(element => [element.timeframes.monthly, element.title]);


const dibujarElementos= (tiempo)=>{
  container.innerHTML = " ";

    tiempo.map(element=> {

      let iconName;
      
      if (element[1]== "Self Care"){
          iconName= "self-care"
        }else {
          iconName= element[1].toLowerCase();
        }

        container.innerHTML += (`<div class="task-card card">
                 <div class="task-card__icon ${element[1]}">
                 <img class="task-card__icon--image" src="./images/icon-${iconName}.svg" alt="Work">
                 </div>
                 <div id="data" class="task-card__data">
                 <div class="task-card__data--activity">
                     <p id="activity">${element[1]}</p>
                     <img id="dots" src="./images/icon-ellipsis.svg" alt="Dots">
                 </div>
                 <div class="task-card__data--time">
                     <p id="hours">${element[0].current}hrs</p>
                     <p id="previous">Previous - ${element[0].previous}hrs</p>
                 </div>
                 </div>
                 </div>`
             )
    })
}

dibujarElementos(daily);



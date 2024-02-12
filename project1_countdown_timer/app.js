


const eventDateInput="19 December 2023 10:55 PM"; // providing date by user
const eventDate=new Date(eventDateInput);  //converting the date provided by the user in std format

console.log(eventDate);

// selecting the elements

const fullDate=document.querySelector("#fullDate")
const day=document.querySelector("#day")
const hour=document.querySelector("#hour")
const minute=document.querySelector("#minute")
const second=document.querySelector("#second")

fullDate.textContent=eventDateInput


function timeDiffManagement(){
    const today=new Date();
    const timeDiff=eventDate-today; //return time difference in milliseconds
    // console.log(timeDiff)
    if(timeDiff>0){
            const timeDiffInSecond=timeDiff/1000;
    const remainYear=Math.floor(timeDiffInSecond/(60*60*24*365.25));
    // console.log(remainYear);
    const remainMonth=Math.floor(timeDiffInSecond/(60*60*24*30.44)%12);
    // console.log(remainMonth);
    const remainDays=Math.floor((timeDiffInSecond/(60*60*24)%30.44));
    // console.log(remainDays);
    const remainHour=Math.floor((timeDiffInSecond/(60*60))%24);
    // console.log(remainHour);
    const remainMin=Math.floor((timeDiffInSecond/60)%60);
    // console.log(remainMin);
    const remainSec=Math.floor((timeDiffInSecond)%60);
    // console.log(remainSec);
    day.textContent=remainDays;
    hour.textContent=remainHour;
    minute.textContent=remainMin;
    second.textContent=remainSec;
    }

    
}
setInterval(()=>{timeDiffManagement()},1000)

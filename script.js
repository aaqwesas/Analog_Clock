document.addEventListener('DOMContentLoaded', () => {
    set_clock();
    getTime();
    setInterval(getTime, 1000);
  });
  
function set_clock() {
    const number = document.querySelector('.number-hours');
    const barSecond = document.querySelector('.bar-seconds');
    let numberHTML = '';
    let barSecondHTML = '';
  
    for (let i = 1; i <= 12; i++) {
      numberHTML += `<span style="--index:${i}"><p>${i}</p></span>`;
    }
    number.innerHTML = numberHTML;
  
    for (let i = 1; i <= 60; i++) {
      barSecondHTML += `<span style="--index:${i}"><p></p></span>`;
    }
    barSecond.innerHTML = barSecondHTML;
}
  
function getTime() {
    const hour = document.querySelector(".hand.hours");
    const min = document.querySelector(".hand.mins");
    const sec = document.querySelector(".hand.secs");
  
    let date = new Date();
    let curr_hour = date.getHours();
    let curr_min = date.getMinutes();
    let curr_second = date.getSeconds();

    let h = (curr_hour < 10) ? "0" + curr_hour : curr_hour;
    let m = (curr_min < 10) ? "0" + curr_min : curr_min;
    let s = (curr_second < 10) ? "0" + curr_second : curr_second;
    var time = h + ":" + m + ":" + s + " "
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
  
    hour.style.transform = `rotate(${curr_hour * 30 + curr_min / 2}deg)`;
    min.style.transform = `rotate(${curr_min * 6}deg)`;
    sec.style.transform = `rotate(${curr_second * 6}deg)`;
}
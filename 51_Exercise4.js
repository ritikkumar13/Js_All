// Make a clock
let a = new Date()
let h = a.getHours( )
let m = a.getMinutes( )
let s = a.getSeconds( )
let d = a.Date( )
console.log(h, m, s, d)

// // Code for Reading
setInterval(time, 1000)

function time() {


  let day = new Date()

  let hr = day.getHours()

  let mm = day.getMinutes()

  let ss = day.getSeconds()
  let represent = 'AM'
  let date = day.getDate()
  let month = day.getMonth()
  let year = day.getFullYear()
  let days = day.getDay()
  // console.log(date)
  switch (days) {
    case 1 || '1':
      days = 'MONDAY'
      break;

    case 2 || '2':
      days = 'TUESDAY'
      break;

    case 3 || '3':
      days = 'WEDNESDAY'
      break;

    case 4 || '4':
      days = 'FRIDAY'
      break;

    case 1 || '1':
      days = 'SATURDAY'
      break;

    case 1 || '1':
      days = 'SUNDAY'
      break;

  }

  if (hr > 12) {
    hr - 12
  }
  if (hr >= 12 && hr <= 23) {
    represent = 'PM'
  }
  if (hr < 10) { hr = '0' + hr }
  if (mm < 10) { mm = '0' + mm }
  if (ss < 10) { ss = '0' + ss }

  clock.innerHTML = ` ${hr} : ${mm} : ${ss} ${represent} | ${days} `

  month += 1
  if (date < 10) { date = '0' + date }
  if (month < 10) { month = '0' + month }


  clock2.innerHTML = `DATE : ${date} / ${month} / ${year} `



}
time()
function darkmode() {
  if (btn.textContent == ' Dark Mode') {
    btn.innerHTML = 'light mode'
    document.body.classList.toggle("dark-mode");
    let a = document.body.getElementsByTagName('h3')[0].style.color = "white";
    let b = document.body.getElementsByTagName('h3')[1].style.color = "white";
    let c = document.body.getElementsByTagName('button')[0].style.color = "black";
    let d = document.body.getElementsByTagName('button')[0].style.backgroundColor = "white";

  }
  else {
    btn.innerHTML = ' Dark Mode'
    document.body.classList.toggle("dark-mode");
    let a = document.body.getElementsByTagName('h3')[0].style.color = "black";
    let b = document.body.getElementsByTagName('h3')[1].style.color = "black";
    let c = document.body.getElementsByTagName('button')[0].style.color = "white";
    let d = document.body.getElementsByTagName('button')[0].style.backgroundColor = "black";
  }
}
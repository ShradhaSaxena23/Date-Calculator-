const options1 = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const optionsHindi = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    localeMatcher: 'lookup',
    timeZone: 'Asia/Kolkata', 
};

function showDate() {
  const x = document.getElementById("startDate").value;
  const formattedDate = new Intl.DateTimeFormat("hi-IN", options1).format(new Date(x));
  document.getElementById('firstinput').innerHTML = formattedDate;
}

function output() {
  const startDate = new Date(document.getElementById("startDate").value);
  const operation = document.getElementById("operation").value;
  const durationValue = parseInt(document.getElementById("durationValue").value) || 0;
  const durationType = document.getElementById("durationType").value;

  let outputdate;

  if (operation === "add") {
      outputdate = new Date(startDate);
      if (durationType === "days") {
          outputdate.setDate(outputdate.getDate() + durationValue);
      } else if (durationType === "months") {
          outputdate.setMonth(outputdate.getMonth() + durationValue);
      } else if (durationType === "weeks") {
          outputdate.setDate(outputdate.getDate() + durationValue * 7);
      } else if (durationType === "years") {
          outputdate.setFullYear(outputdate.getFullYear() + durationValue);
      }
  } else if (operation === "subtract") {
      outputdate = new Date(startDate);
      if (durationType === "days") {
          outputdate.setDate(outputdate.getDate() - durationValue);
      } else if (durationType === "months") {
          outputdate.setMonth(outputdate.getMonth() - durationValue);
      } else if (durationType === "weeks") {
          outputdate.setDate(outputdate.getDate() - durationValue * 7);
      } else if (durationType === "years") {
          outputdate.setFullYear(outputdate.getFullYear() - durationValue);
      }
  }
  const resultElement = document.getElementById("result");

  if (!isNaN(outputdate.getTime())) {
    const formattedResult = new Intl.DateTimeFormat("hi-IN", optionsHindi).format(outputdate);
    resultElement.innerHTML = ` ${formattedResult}`;
} else {
    resultElement.innerHTML = "Invalid date";
}

  return false;
}

const optionsHindi1 = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    localeMatcher: 'lookup',
    timeZone: 'Asia/Kolkata', 
};

function today(){
const today = new Date();
const formattedDate1 = new Intl.DateTimeFormat("hi-IN", optionsHindi1).format(today);
document.getElementById('today').innerHTML ="Today : "+ formattedDate1;

}
window.onload = today;
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

    document.getElementById("secondDate").value = "";
 document.getElementById('secondinput').innerHTML = "";
   document.getElementById('result').innerHTML = "";
    document.getElementById("durationValue").value = "";
    document.getElementById("durationType").value = "Days";
  
    
    const radioButtons = document.getElementsByName("fav_language");
    for (const radio of radioButtons) {
      radio.checked = false;
    }

  const x = document.getElementById("startDate").value;
  const formattedDate = new Intl.DateTimeFormat("hi-IN", options1).format(new Date(x));
  document.getElementById('firstinput').innerHTML = "Your desired start date is: <br>"+formattedDate;
}
function showDate2() {
    const y = document.getElementById("secondDate").value;
    const formattedDate = new Intl.DateTimeFormat("hi-IN", options1).format(new Date(y));
    document.getElementById('secondinput').innerHTML = "Your desired second date is:<br> "+formattedDate;
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




   
            function output() {
                const startDate = new Date(document.getElementById("startDate").value);
                const secondDate = new Date(document.getElementById("secondDate").value);
                const operationType = document.querySelector('input[name="fav_language"]:checked');
                const durationValue = parseInt(document.getElementById("durationValue").value) || 0;
                const durationType = document.getElementById("durationType").value;
    
                let resultMessage;
    
                if (secondDate.toString() !== "Invalid Date") {
                  
                    const timeDifference = Math.abs(secondDate - startDate);
                    const differenceInDays = Math.floor(timeDifference / (1000 * 3600 * 24));
                    const differenceInMonths = (secondDate.getFullYear() - startDate.getFullYear()) * 12 + (secondDate.getMonth() - startDate.getMonth());
                    const differenceInYears = secondDate.getFullYear() - startDate.getFullYear();
                    resultMessage = `Difference: ${differenceInDays} days, ${differenceInMonths} months, ${differenceInYears} years`;
                } else if (operationType && durationValue > 0 && durationType) {
                    
                    const outputDate = new Date(startDate);
    
                    if (operationType.value === "Add") {
                        if (durationType === "days") {
                            outputDate.setDate(outputDate.getDate() + durationValue);
                        } else if (durationType === "weeks") {
                            outputDate.setDate(outputDate.getDate() + durationValue * 7);
                        } else if (durationType === "months") {
                            outputDate.setMonth(outputDate.getMonth() + durationValue);
                        } else if (durationType === "years") {
                           
                            outputDate.setFullYear(outputDate.getFullYear() + durationValue);

                        }
                    }
                    else if (operationType.value === "Subtract") {
                        if (durationType === "days") {
                            outputDate.setDate(outputDate.getDate() - durationValue);
                        } else if (durationType === "months") {
                            outputDate.setMonth(outputDate.getMonth() - durationValue);
                        } else if (durationType === "weeks") {
                            outputDate.setDate(outputDate.getDate() - durationValue * 7);
                        }
                        else if (durationType === "years") {
                           
                            outputDate.setFullYear(outputDate.getFullYear() - durationValue);

                        }
                    }
                    const formattedResult = new Intl.DateTimeFormat("hi-IN", optionsHindi).format(outputDate);
                resultMessage = `Result Date: ${formattedResult}`;
            } else {
                resultMessage = "Invalid input. Please provide all necessary information.";
            }

            document.getElementById("result").innerHTML = resultMessage;
    
    
    
    
    

  
    return false;
  }

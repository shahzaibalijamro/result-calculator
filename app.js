var input0 = document.querySelector('.input0');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var input3 = document.querySelector('.input3');
var input4 = document.querySelector('.input4');
var input5 = document.querySelector('.input5');
var head = document.querySelector('#head');
// console.log(head.innerHTML);
function inputValue() {
    var totalMarks = input0.value;
    var obtainedMarks = +input2.value + +input3.value + +input4.value + +input5.value;
    var percentage = obtainedMarks/totalMarks*100;
    if (percentage < 33) {
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "Fail".`;
    }else if (percentage >= 33 && percentage < 40){
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "E".`;
    }else if (percentage >= 40 && percentage < 50){
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "D".`;
    }else if (percentage >= 50 && percentage < 60){
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "C".`;
    }else if (percentage >= 60 && percentage < 70){
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "B".`;
    }else if (percentage >= 70 && percentage < 80){
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "A".`;
    }else if (percentage >= 80 && percentage < 90){
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "A+".`;
    }else if (percentage >= 90 && percentage <= 100){
        head.innerHTML = `${input1.value} Your Obtained marks are ${obtainedMarks}
        out of ${totalMarks},
        Your Percentage is ${percentage}%
        And Your Grade is "A++".`;
    }else{
        head.innerHTML = "Please give correct marks."
    }
}
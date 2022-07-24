let students = [
    {name: 'John', score: 99},
    {name: 'sam', score: 50},
    {name: 'tony', score: 30},
    {name: 'ayush', score: 81},
    {name: 'sandy', score: 51},
    {name: 'abhi', score: 31},
]

let studentContainerElement = document.getElementById("container");

for(let index = 0; index < students.length; index++){
    var student = students[index];
    let studentElement = document.createElement("div");
    studentElement.innerText = `student name is ${student.name} and score is ${student.score}`;
    if(student.score > 80){
        studentElement.style.backgroundColor ="lightgreen";
    }else if(student.score >= 35 && student.score <= 79){
        studentElement.style.backgroundColor = "lightblue";
    } else{
        studentElement.style.backgroundColor = "red";
    }
    studentContainerElement.appendChild(studentElement);
}
//// Today topic is objects

let person = {
 name: "Umair",
 age : 26,
 cnic: 33103-1280016-9,
canSpeakurdu: true,
speak: function (sentence) {
    console.log(sentence + this.name);
}

};
person.speak("hello i am ");
console.log(person);
console.log(person.name);


function speak1(sentence) { // object k ander yh kam ni krta jeasy k "this.name" waly mein usny name print ni krna 
    // qk yh obecj k ander ni hy    
    console.log(sentence + this.name);
}

speak1("hello i am ");  



let student1 = {
    name: "Saqib", 
    class: 9,
    Rollno: 1,
    Teacher: "Sidra",
    Subject: "English, Urdu, Pak studies",
    schoolTime: 7.15,
}




let student2 = {
    name: "SHahid", 
    class: 9,
    Rollno: 2,
    Teacher: "Sidra",
    Subject: "English, Urdu, Pak studies",
    schoolTime: 7.15,
}



let student3 = {
    name: "Hassan", 
    class: 9,
    Rollno: 3,
    Teacher: "Sidra",
    Subject: "English, Urdu, Pak studies",
    schoolTime: 7.15,
}

let student4 = {
    name: "Bushra", 
    class: 9,
    Rollno: 4,
    Teacher: "Sidra",
    Subject: "English, Urdu, Pak studies",
    schoolTime: 7.15,
}


let student5 = {
    name: "Samra", 
    class: 9,
    Rollno: 5,
    Teacher: "Sidra",
    Subject: "English, Urdu, Pak studies",
    schoolTime: 7.15,
}

let student6 = {
    name: "Anita", 
    class: 9,
    Rollno: 6,
    Teacher: "Sidra",
    Subject: "English, Urdu, Pak studies",
    schoolTime: 7.15,
}


let student7 = {
    name: "Nida", 
    class: 9,
    Rollno: 7,
    Teacher: "Sidra",
    Subject: "English, Urdu, Pak studies",
    schoolTime: 7.15,
}


let studentsDataNineClass = [student1, student2, student3, student4, student5, student6, student7,];

console.log(studentsDataNineClass);



function provideStudentData(name1,class1,rollno,teacher, subject,schooltime1) {
 return { 
     name: name1, 
    class: class1,
    Rollno: rollno,
    Teacher: teacher,
    Subject: subject,
    schoolTime: schooltime1,
}
}

let studentsDataNine = [
    provideStudentData("saqib", 9 , 1 ,"Sidra","English,Urdu,Pak studies", 7.15),
    provideStudentData("shahid", 9 , 2 ,"Sidra","English,Urdu,Pak studies", 7.15),
    provideStudentData("hasan", 9 , 3 ,"Sidra","English,Urdu,Pak studies", 7.15),
    provideStudentData("bushra", 9 , 4 ,"Sidra","English,Urdu,Pak studies", 7.15),
    provideStudentData("samra", 9 , 5 ,"Sidra","English,Urdu,Pak studies", 7.15),
    provideStudentData("anita", 9 , 6 ,"Sidra","English,Urdu,Pak studies", 7.15),
    provideStudentData("nida", 9 , 7 ,"Sidra","English,Urdu,Pak studies", 7.15)
]

console.log(studentsDataNine);

//// user sy agr value leni hu tu,,,
//// this method is used for to get input by the user through prompt

let preStudents = localStorage.getItem("studentData9");
let studentData9 = preStudents ? JSON.parse(preStudents): [];
function provideStudentData1() {
    let stdDAta = { 
        name: prompt("enter your name"), 
       class: +prompt("enter your class"),
       Rollno: +prompt("enter your Roll No"),
       Teacher: prompt("enter your teacher name"),
       Subject: prompt("enter your subjects"),
       schoolTime: prompt("enter your school timing"),
   };
   
studentData9.push(stdDAta); //// studentData9.push(stdData).. used for variable "stdData" push in variable stuidentData9

console.log(studentData9); 
};

//// Agr hum user sy koi data leaty hain,,, 
// usk bad jb hum browser ko reload krty hain tu humra sara data delete hu jata hy.. 
// is problem sy bachny k liay hum jo method istimal krty hain usko hum "localStorage.setItem" istimal krty hain


localStorage.setItem("name", "Umair");   // () is mein hum ko 2 value add krni prti hy 1. data ka name.. 2 data actual value
// local.storage mein hum srf string data hi save kr skty hain ... agr humny is k ander "objects" ka data store krna hu tu
// yh objects ko khrab kr deta hy qk objects k andr number or boolen type b data huta hy .. usk liay hum "JSON" istimail krty hain
let stringify = JSON.stringify(studentData9);
localStorage.setItem("students", stringify);
















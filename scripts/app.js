const myFullName = "Shivam Verma";
const myStudentNumber = "1162886";

console.log(`${myFullName} - ${myStudentNumber}`);

let headerContent = document.querySelector('h1');
headerContent.innerHTML = `${myFullName} - ${myStudentNumber}`;
headerContent.classList.add('headingPrimary');

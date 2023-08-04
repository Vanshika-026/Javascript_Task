const heading = document.getElementById('heading');
const para = document.getElementById('para');
const button = document.getElementById('btn');


heading.style.color = 'orange';
para.style.color = 'green';
button.style.background = 'orange';
button.addEventListener('click', () =>{
    alert('Button Clicked!');
})
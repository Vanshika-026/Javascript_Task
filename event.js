const button = document.getElementById('btn');
btn.addEventListener('click', () => {
    alert("Button Clicked!");
})
heading.style.color = "green";
btn.style.background = "orange";
document.addEventListener('keydown', (Event) =>{
    if (Event.key === 'Enter'){
       alert("Enter Key!");
    }
})
{
function mOver(obj) {
  obj.innerHTML = "Thank You!";
}

function mOut(obj) {
  obj.innerHTML = "Glad to see you!";
}
}
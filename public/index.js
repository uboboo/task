// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.user-name').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      const ans=confirm(event.target.innerHTML+"を削除しますか");
      if(ans){
        event.target.
      }
    });
  });

  document.querySelector('.send-button').addEventListener('click', (event) => {
    const text = document.querySelector('.input-text').value;
    const now= new Date();
    const year= now.getFullYear();
    const month=now.getMonth()+1;
    const day=now.getDate();
    const hours=now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: text,year : year,month:month,day:day,hours:hours,min:min,sec:sec }) })
  });
});
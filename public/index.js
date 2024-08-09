// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.user-name').forEach((elem) => {
    const names=[];
    elem.addEventListener('click', (event) => {
      const ans=confirm(event.target.innerHTML+"を削除しますか");
      if(ans){
        names.push(elem.innerHTML);
        elem.remove();
      }
    });
    fetch('/api/user', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name:names}) });
  });

  document.querySelector('.send-button').addEventListener('click', (event) => {
    const text = document.querySelector('.input-text').value;
    fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: text}) });
  });

  document.querySelector('.delete-button').addEventListener('click',(event)=>{
    const ans=confirm("全て削除しますか");
    const names=[];
    if(ans){
      document.querySelectorAll('.user-name').forEach((elem)=>{
        names.push(elem.innerHTML);
        elem.remove();
      })
    }
    fetch('/api/user', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name:names}) });
  })
});
const date = new Date();
const today = date.toLocaleDateString('en-US', {
  month: 'long',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

console.log(today);

document.querySelector('.date').innerHTML = today;


setInterval(() => {
  const date = new Date();
  const today = date.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  
  console.log(today);
  
  document.querySelector('.date').innerHTML = today;
}, 10000);
const readMoreBtn = document.querySelector('.readMoreBtn');
const text = document.querySelector('.p_resume');
readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('showMore');
  if(readMoreBtn.innerText == 'Show More'){
    readMoreBtn.innerText = 'Show Less';
  }else{
    readMoreBtn.innerText = 'Show More';
  }
})

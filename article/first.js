const share=document.querySelector('.share-image');
const share_option=document.querySelector('.social-links');

share.addEventListener('click',(e)=>{
     
    // share_option.style.transition='visibility' ;
    // share_option.style.transitionDuration= '1s';
    // share_option.style.transitionTimingFUnction='ease';
    share_option.style.visibility='visible';
    
})

share.addEventListener('dblclick',(e)=>{
 
    share_option.style.visibility='hidden';
    
})
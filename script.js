function copyCode(){
  const notice=document.getElementById('notice');
  const fallback=()=>{const el=document.createElement('textarea');el.value='LIBERT79';document.body.appendChild(el);el.select();try{document.execCommand('copy');notice.textContent='Code LIBERT79 copié.';}catch(e){notice.textContent='Code promo : LIBERT79';}el.remove();notice.classList.add('show');setTimeout(()=>notice.classList.remove('show'),2200);};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText('LIBERT79').then(()=>{notice.textContent='Code LIBERT79 copié.';notice.classList.add('show');setTimeout(()=>notice.classList.remove('show'),2200)}).catch(fallback)}else fallback();
}

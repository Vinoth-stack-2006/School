function toggleMenu(){
  var m=document.getElementById('mobileMenu');
  m.classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
}
document.addEventListener('click',function(e){
  var m=document.getElementById('mobileMenu');
  var h=document.getElementById('ham');
  if(m.classList.contains('open')&&!m.contains(e.target)&&!h.contains(e.target)){
    m.classList.remove('open');
  }
});
var obs=new IntersectionObserver(function(entries){
  entries.forEach(function(e,i){
    if(e.isIntersecting){setTimeout(function(){e.target.classList.add('vis')},i*75)}
  });
},{threshold:0.08});
document.querySelectorAll('.fi').forEach(function(el){obs.observe(el)});

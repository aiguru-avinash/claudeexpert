(function(){var h=document.getElementById('hamburger'),s=document.getElementById('sidebar'),o=document.getElementById('sidebarOverlay');
function t(f){s.classList.toggle('open',f);o.classList.toggle('active',f)}
h.addEventListener('click',function(){t(!s.classList.contains('open'))});o.addEventListener('click',function(){t(false)});
var a=s.querySelector('a.active');if(a&&a.scrollIntoView)a.scrollIntoView({block:'center'})})();

document.querySelectorAll('a[href^="#"]').forEach (anchor=> {
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollintoview({behaviour:'smooth'})
    });
});

//script code for back to top//
window.addEventListener('scroll', function(){
    var backtoTopbutton = this.document.querySelector('back_to_top');
    if(window.scrollY>600){
        backtoTopbutton.style.display='block';
    }
    else{
        backtoTopbutton.style.display='none';
    }
});
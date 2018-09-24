document.addEventListener('DOMContentLoaded', function() {

    //BANNER

    let allSlides = document.querySelectorAll('.banner-slide');
    let prevBannerButton = document.getElementById('banner-prev');
    let nextBannerButton = document.getElementById('banner-next');
    let currentIndex = 0;

    let firstSlide = allSlides[0].classList.add('active');

    prevBannerButton.addEventListener('click', function(){
        allSlides[currentIndex].classList.remove('active');
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = allSlides.length-1;
        }
        allSlides[currentIndex].classList.add('active');
    });

    nextBannerButton.addEventListener('click', function(){
        allSlides[currentIndex].classList.remove('active');
        currentIndex++;
        if(currentIndex > allSlides.length - 1){
            currentIndex  = 0;
        }
        allSlides[currentIndex].classList.add('active');

    })

});

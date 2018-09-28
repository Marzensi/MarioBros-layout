document.addEventListener('DOMContentLoaded', function() {

    const defaultOptions = {
      pauseTime: 3000,
    };

//PAGE LOGO

    let pageLogo = document.querySelector('.page-logo-cnt');
    pageLogo.onmouseover = pageLogo.onmouseout = logoHandler;

    function logoHandler(event){

        if(event.type === 'mouseover'){
            event.target.style.width = "170px";
            event.target.style.height = "170px";
        }
        if(event.type === 'mouseout'){
            event.target.style.width = "150px";
            event.target.style.height = "150px";
        }
}

//BANNER

    let allSlides = document.querySelectorAll('.banner-slide');
    let prevBannerButton = document.getElementById('banner-prev');
    let nextBannerButton = document.getElementById('banner-next');
    let bannerPagination = document.querySelectorAll('.banner-pagination > li');
    let currentIndex = 0;

    let firstSlide = allSlides[0].classList.add('active');
    let firstPagination = bannerPagination[0].classList.add('active');

    prevBannerButton.onclick = prevBanner;
    nextBannerButton.onclick = nextBanner;

    let bannerTimeout = setTimeout(() => {
        nextBanner();
    },defaultOptions.pauseTime);

    function setBanner(nr){
        currentIndex = nr;
        for(let i=0; i<allSlides.length; i++) {
            allSlides[i].classList.remove('active');
            bannerPagination[i].classList.remove('active');
        }
            allSlides[nr].classList.add('active');
            bannerPagination[nr].classList.add('active');

        clearTimeout(bannerTimeout);
        setTimeout(() => {
            nextBanner();
        },defaultOptions.pauseTime);
    }

    function prevBanner(){
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = allSlides.length-1;
        }
        setBanner(currentIndex);
    }

    function nextBanner(){
        currentIndex++;
        if(currentIndex > allSlides.length - 1){
            currentIndex  = 0;
        }
        setBanner(currentIndex);
    }


// BANNER BUTTONS

    let bannerChangeCnt = document.getElementById('banner-change-cnt');
    bannerChangeCnt.onmouseover = bannerChangeCnt.onmouseout = bannerHandler;

    function bannerHandler(event) {

        if (event.type === 'mouseover') {
            event.target.classList.add('active');
        }
        if (event.type === 'mouseout') {
            event.target.classList.remove('active');
        }
    }

//BANNER PAGINATION
    bannerPagination.onclick = paginationHandler;

    function paginationHandler(){

    }

    //     currentIndex=nr;
    //     for(let i=0; i<bannerPagination.length; i++) {
    //         allSlides[i].classList.remove('active');
    //         bannerPagination[i].classList.remove('active');
    //     }
    //     allSlides[nr].classList.add('active');
    //     bannerPagination[nr].classList.add('active');
    // }


});




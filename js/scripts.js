const menuBtnEl = document.querySelector('.menu-btn .btn');
const activeMenuEl = document.querySelector('.active-menu');
const menuContainerEl = document.querySelector('.menu-container');
const menuEl = document.querySelector('.menu');
const sectionEl = document.querySelector('section');
const infoBtnEl = document.querySelector('.info-btn');
const asideEl = document.querySelector('aside');
const overlayEl = document.querySelector('.overlay');

menuBtnEl.addEventListener('click', ()=>{
    menuBtnEl.classList.toggle('active');
    activeMenuEl.classList.toggle('active');
    menuContainerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
    sectionEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    if(menuBtnEl.classList.contains('active')) {
        infoBtnEl.style.opacity = 0;
        infoBtnEl.style.visibility= "hidden";
    }else {
        infoBtnEl.style.opacity = 1;
        infoBtnEl.style.visibility = "visible";
    };
});

infoBtnEl.addEventListener('click', ()=> {
    infoBtnEl.classList.toggle('active');
    asideEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    if(infoBtnEl.classList.contains('active')) {
        menuBtnEl.style.opacity = 0;
        menuBtnEl.style.visibility = "hidden";
    }else {
        menuBtnEl.style.opacity = 1;
        menuBtnEl.style.visibility = "visible";
    };
});

overlayEl.addEventListener('click', ()=> {
    sectionEl.classList.remove('active');

    asideEl.classList.remove('active');
    infoBtnEl.classList.remove('active');



    menuContainerEl.classList.remove('active');
    menuBtnEl.classList.remove('active');
    overlayEl.classList.remove('active');
    menuEl.classList.remove('active');
    if(menuBtnEl.classList.contains('active')) {
        infoBtnEl.style.opacity = 0;
        infoBtnEl.style.visibility= "hidden";
    }else {
        infoBtnEl.style.opacity = 1;
        infoBtnEl.style.visibility = "visible";
    };
    if(infoBtnEl.classList.contains('active')) {
        menuBtnEl.style.opacity = 0;
        menuBtnEl.style.visibility = "hidden";
    }else {
        menuBtnEl.style.opacity = 1;
        menuBtnEl.style.visibility = "visible";
    };
});



function typeWriterEffect() {

    const words = [
        "a Website.",
        "an E-commerce.",
        "a Social Media App."
    ];
    let wordCount = 0;
    let letterCount = 0;

    let currentText = "";
    let currentWord = "";

    let timeOut = 400;

    let isDeleting = false;

    function type() {
        if(wordCount === words.length) {
            wordCount = 0;
        }

        currentWord = words[wordCount];

        if(isDeleting) {
            currentText = currentWord.slice(0, --letterCount);
        }else {
            currentText = currentWord.slice(0, ++letterCount);
        }

        document.querySelector('.typewrite').textContent = currentText;

        timeOut = isDeleting ? 200 : 400;

        if(!isDeleting && currentText.length === currentWord.length) {
            timeOut = 2000;
            isDeleting = true;
        }else if (isDeleting && currentText.length === 0) {
            timeOut = 1000;
            isDeleting = false;
            wordCount++;
        }
        setTimeout(type, timeOut);
    }
    type();
};

typeWriterEffect();


const paginationEl = document.querySelectorAll('.pagination');
const allMenuEl = document.querySelectorAll('.item');
const activeMenuh5El = document.querySelector('.active-menu h5');

allMenuEl.forEach((menu) => {
    menu.addEventListener('click', () => {
        allMenuEl.forEach((menu) => menu.classList.remove('active'));
        paginationEl.forEach((page) => page.classList.add('hidden'));

        menu.classList.add('active');

        // Get the target section ID from the 'data-target' attribute of the clicked menu item
        const targetSectionId = menu.dataset.target;
        const targetSection = document.querySelector(targetSectionId);

        if (targetSection) {
            targetSection.classList.remove('hidden'); // Show the target section
        }


        menuContainerEl.classList.remove('active');
        menuBtnEl.classList.remove('active');
        overlayEl.classList.remove('active');
        menuEl.classList.remove('active');
        activeMenuEl.classList.remove('active');
        sectionEl.classList.remove('active');

        if(menuBtnEl.classList.contains('active')) {
            infoBtnEl.style.opacity = 0;
            infoBtnEl.style.visibility= "hidden";
        }else {
            infoBtnEl.style.opacity = 1;
            infoBtnEl.style.visibility = "visible";
        };
        if(infoBtnEl.classList.contains('active')) {
            menuBtnEl.style.opacity = 0;
            menuBtnEl.style.visibility = "hidden";
        }else {
            menuBtnEl.style.opacity = 1;
            menuBtnEl.style.visibility = "visible";
        };

        const getActivePage = menu.querySelector('a');

        if (getActivePage) {
            const activePageText = getActivePage.innerText;
            activeMenuh5El.textContent = activePageText.toUpperCase();
        } else {
            activeMenuh5El.textContent = "Default Text";
        }
    });
});







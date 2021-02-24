const anchors = document.querySelectorAll('a[href*="#"]');
console.log(anchors)
for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const anchorBlock = anchor.getAttribute('href');
        document.querySelector('' + anchorBlock).scrollIntoView ({
            behavior: 'smooth',
            block: 'start'
        })
    })
    
}
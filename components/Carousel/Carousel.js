// class Carousel {

// // class for Arrow right with select and deselect methods


// // class for Carousel Item that finds the correct item, and creates an event listener
// //Carousel Item class also needs a select and deselect method

// //Carousel class that ties everything together
// //needs an initiate method, update activity method, and get item method
// }

// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

let carousel = (function() {
    let box = document.querySelector('.Carousel');
    let right = box.querySelector('.Carousel__arrow-right');
    let left = box.querySelector('.Carousel__arrow-left');
    let items = box.querySelector('.Carousel__item');
    let counter = 0;
    let amount = items.lenght;
    let current = items[0];

    box.classList.add('active');

    function Navigate(direction) {
        current.classList.remove('current');
        counter = counter+direction;
        if (direction === -1 && counter < 0) {
            counter = amount -1;
        }
        if (direction === 1 && !items[counter]) {
            counter = 0;
        }
        current = items[counter];
        current.classList.add('current');
    }
    right.addEventListener('click', function(ev) {
        Navigate(1);
    });
    left.addEventListener('click', function(ev) {
        Navigate(-1);
    });
    Navigate(0);
})();
"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mob-menu');
    const mobileMenuItems = document.querySelectorAll('.mob-list__item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');

        if (hamburger.classList.contains('hamburger_active')) {
            mobileMenu.classList.add('mob-menu_active');
        } else {
            mobileMenu.classList.remove('mob-menu_active');
        }

        mobileMenuItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                hamburger.classList.remove('hamburger_active');
                mobileMenu.classList.remove('mob-menu_active');
            })
        })
    });
});

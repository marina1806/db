'use strict'
let button = document.querySelector('.header__btn');
let form = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');


button.addEventListener('click', () => {
  form.classList.add('popup__form_open');
  popup.classList.add('popup_open');
});
close.addEventListener('click', () => {
    form.classList.toggle('popup__form_open');
    popup.classList.toggle('popup_open');
  });
burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('menu_active');
});

let tab = function(){
  let tabNav = document.querySelectorAll('.tabs__item'),
      tabContent = document.querySelectorAll('.tabs__block'),
      tabName;
  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });
  function selectTabNav(){
    tabNav.forEach(item =>{
      item.classList.remove('tabs__item_active');
    });
    this.classList.add('tabs__item_active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }
  function selectTabContent(tabName){
    tabContent.forEach(item =>{
      item.classList.contains(tabName) ? item.classList.add('tabs__block_active') : item.classList.remove('tabs__block_active');
    });
  }

  };
  tab();

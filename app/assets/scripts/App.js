import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
RevealOnScroll($(".feature-item"), 85%);
RevealOnScroll($(".testimonial"), 60%);
/*
Menu button JS script
This file is licensed under the MIT license.
Copyright (C) 2025 EWS Band Society
*/

const nav = document.getElementById("menu-nav");
const menuIcon = document.getElementById("menu-icon");
const xIcon = document.getElementById("x-icon");

function openCloseMenu() {
  nav.classList.toggle("opened-menu");
  menuIcon.classList.toggle("no-display");
  xIcon.classList.toggle("no-display");
}

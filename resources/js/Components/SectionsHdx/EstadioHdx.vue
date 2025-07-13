<script setup>
import { onMounted } from 'vue';


const emits = defineEmits([
    'handle-section-click'
]);

const zoneIds = ['zonaA', 'zonaB', 'zonaC', 'zonaE', 'zonaF', 'zonaH'];

onMounted(() => {
    zoneIds.forEach(zoneId => {
        const zone = document.getElementById(zoneId);
        if (zone) {
            const handleClick = () => {
                emits('handle-section-click', zoneId);
            };

            zone.addEventListener('click', handleClick);
            zone.addEventListener('touchstart', handleClick);
        }
    });
});
</script>

<template>

<svg id="zones_hdx" class="tw-w-full tw-h-screen" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 650 500" validated="validated" x="0" y="0">
  <defs>
    <clipPath id="clippath">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-1">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-2">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-3">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-4">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-5">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-6">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-7">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-8">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-9">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-10">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-11">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-12">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-13">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-14">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-15">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-16">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-17">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-18">
      <rect x="192.2" y="342.1" width="17.6" height="12.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-19">
      <rect x="296.8" y="341.8" width="12.3" height="12.3" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-20">
      <rect x="296.8" y="341.8" width="12.3" height="12.3" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-21">
      <rect x="281.8" y="140.5" width="14" height="14.1" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-22">
      <rect x="281.8" y="140.5" width="14" height="14.1" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-23">
      <rect x="225.8" y="145.6" width="19.6" height="6.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-24">
      <rect x="225.8" y="145.6" width="19.6" height="6.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-25">
      <rect x="318.8" y="147.3" width="24.4" height="3.1" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-26">
      <rect x="318.8" y="147.4" width="24.4" height="3.1" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-27">
      <rect x="346.1" y="338.1" width="15" height="15" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-28">
      <rect x="346.1" y="338.1" width="15" height="15" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-29">
      <rect x="244.8" y="345.9" width="16.8" height="6.2" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-30">
      <rect x="244.8" y="345.9" width="16.8" height="6.2" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-31">
      <rect x="379.9" y="303.8" width="16.4" height="14.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-32">
      <rect x="379.9" y="303.8" width="16.4" height="14.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-33">
      <path d="M389.3,309.5c0,.2.1.3.3.3s.3-.1.3-.3c0-.2-.1-.3-.3-.3s-.3.1-.3.3" fill="none" pointer-events="visiblePainted"></path>
    </clipPath>
    <linearGradient id="Degradado_sin_nombre_2" data-name="Degradado sin nombre 2" x1="-243.9" y1="993.3" x2="-242.9" y2="993.3" gradientTransform="translate(203.4 -450.6) rotate(-180) scale(.8 -.8)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#d0d2d3"></stop>
      <stop offset=".4" stop-color="#d0d2d3"></stop>
      <stop offset="1" stop-color="#808284"></stop>
    </linearGradient>
    <clipPath id="clippath-34">
      <rect x="379.9" y="303.8" width="16.4" height="14.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
    <clipPath id="clippath-35">
      <path d="M393.6,312.2s0,0,0,0h0Z" fill="none" pointer-events="visiblePainted"></path>
    </clipPath>
    <linearGradient id="Degradado_sin_nombre_21" data-name="Degradado sin nombre 2" x1="379.9" y1="312.2" x2="380.9" y2="312.2" gradientTransform="matrix(0,0,0,0,13,493.8)" xlink:href="#Degradado_sin_nombre_2"></linearGradient>
    <clipPath id="clippath-36">
      <rect x="379.9" y="303.8" width="16.4" height="14.5" fill="none" pointer-events="visiblePainted"></rect>
    </clipPath>
  </defs>
  <rect id="c300" x="132.9" y="223.3" width="13.1" height="49.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <path id="c301" d="M149.9,179.6l-10.5,11.2-3,3.9c-1.8,3.5-3,7.3-3,11.8v10.5h12.4v-9.8c0-1,.2-1.6.5-2.8,1-2.4,2-4.6,4-6.5l9.1-9-9.5-9.3h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c302" d="M179,150c-3,2.8-11,11.7-23.8,25.5l8.2,8.6,22.8-25,2-1.6c1.8-1.3,3.7-2,5.1-2.8l-3.9-11.8c-1,.5-1.8,1.3-3.5,1.6-2.7,1.6-4.9,3.8-6.9,5.5h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c303" points="196.9 153.6 241.7 153.6 241.7 144.2 194.4 144.2 196.9 153.6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c304" x="246.1" y="141.3" width="48.5" height="12.4" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c305" points="343.3 153.6 298.4 153.6 298.4 144.2 345.4 144.2 343.3 153.6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c306" d="M349.8,155l3.9,2.8,12.6,13.2,10.5,11.8,6.6-6.5-1-1.3,1.6-1.8-23.9-25.8-3.5-2c-2.4-1.4-4.3-2.4-5.7-2.7l-3.6,11,2.5,1.3Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c307" d="M399.5,188.7c2.7,2.7,4.6,5.7,5.7,9.5.9,1.8,1,3.7,1.3,5.1v11.9h-12.6v-10.3c0-1.8-.2-3.9-.9-4.9l-1-1.3-12-12,8.3-8.6,11.2,10.6Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <rect id="c308" x="393.5" y="223.8" width="11.8" height="49.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <path id="c309" d="M392.3,297.6l-12,12.1,8.3,8.6,10.7-10.7c2.7-2.7,4.6-5.9,5.7-9.7l1.3-4.9v-11.8h-12.6v10.2c0,2-.2,3.9-.9,5.1l-.5,1.1h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c310" d="M376.7,313.6l6.6,6.5-.9,1.3,1.6,1.8-24.2,25.8-3.5,2c-2.4,1.4-4.3,2.4-5.7,2.7l-3.7-11c2.4-1.4,4.3-2.8,5.9-4,2-1.3,9.9-9.8,23.9-25.1h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c311" points="298.4 342.8 298.4 352.4 345.4 352.4 343.3 342.8 298.4 342.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c312" x="246.1" y="342.8" width="48.5" height="12.4" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c313" points="241.7 342.8 241.7 352.4 194.4 352.4 196.9 342.8 241.7 342.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c314" d="M163.2,312l22.8,24.7,2,1.8c1.8,1.3,3.7,2,5.1,2.8l-3.9,11.8c-1-.5-1.8-1.3-3.5-1.8-2.8-1.4-5.1-3.5-7.1-5.1l-13.9-14.3-10.1-11.2,8.6-8.7h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c315" d="M150.2,298.7l9.1,9-9.4,9.4-10.5-11.2c-1.3-1-1.8-2-3-3.9-1.8-3.5-3-7.3-3-11.8v-10.5h12.4v9.7l.5,3c.3,2,1.7,4.4,3.9,6.3Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c350" points="131 246.3 131 225.7 114.1 225.7 114.1 248.2 117.6 248.2 117.6 246.3 131 246.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c351" d="M133.2,195.2l-15.3-6.6c-2.7,5.7-3.9,11.8-3.9,18v10.3h17l-.2-9.5c-.2-1,0-1.8.2-3.7,0-3.1,1-5.5,2.2-8.5Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c352" d="M148,177.3l-11.8-11.7-13.9,15.3-1.3,1.6-2.8,4.6,15.3,7.1c1.3-2.4,2.8-4.3,4.6-6.5l6.5-7.3,3.4-3.1h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c353" d="M157.5,144l-16.5,17.3,12,12.5c4-5.1,9.7-11,16.8-17.8l-12.3-12Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></path>
  <path id="c354" d="M188.5,140.4l-5.4-16.5c-4,1.3-9.4,4.3-15.3,9.5-2.8,2.7-5.5,5.3-7.7,7.7l-1.8,2.1,12,11.8,2-2c4.9-5.1,9.1-8.6,12.6-10.7,1.9-1.6,3.1-1.8,3.6-1.9h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></path>
  <polygon id="c355" points="199.9 138.6 215.5 138.6 215.5 125.9 192.1 125.9 194.6 136.7 199.9 136.7 199.9 138.6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c356" points="216.4 125.9 216.4 138.6 235.5 138.6 235.5 136 239.3 136 239.3 125.9 216.4 125.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c357" points="246.1 135.2 249.5 135.2 249.5 138.1 269.5 138.1 269.5 125.9 246.1 125.9 246.1 135.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c358" points="294.2 135.2 294.2 125.9 270 125.9 270 138.1 291 138.1 291 135.2 294.2 135.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c359" points="323.3 125.9 301.4 125.9 301.4 136 305.6 136 305.6 138.6 323.3 138.6 323.3 125.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c360" points="324.4 125.9 324.4 138.6 340.8 138.6 340.8 136.7 346.3 136.7 348.8 125.9 324.4 125.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c361" d="M354.4,127l-2.7,11.7,3.9,1.8c2.7,1.4,4.3,2.7,5.3,3.7l8,8.2,8.3-8.6-6.5-6.6c-1.8-1.4-3.9-3.5-6.4-5.1-4.2-3.6-7.7-5.1-9.9-5.1h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c362" points="369.3 152.8 386.6 171.3 395.1 162.5 377.8 144.4 369.3 152.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c363" d="M399.4,167.6l-9,9,10.7,11c1.4,1.4,3,3.5,4,5.5l11.7-5.1c-1-1.4-1.6-3-2.8-4-4-5.1-7.7-9.4-11-12.6l-3.6-3.8h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c364" d="M406.1,193.8c1.3,1.8,1.6,4,2.4,6.5l.5,2.8v12.1h10.7c.9-2.4,1-5.5,1-9,.2-6.6-1-12.8-3.5-17.7l-11.1,5.3h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c365" points="408.3 247.5 420.8 247.5 420.8 223.8 410.7 223.8 410.7 227.9 408.3 227.9 408.3 247.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c366" points="408.3 248.5 408.3 269.4 410.7 269.4 410.7 273.1 420.8 273.1 420.8 248.5 408.3 248.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c367" d="M406.3,302.4l11.7,4.6c1.8-4.9,3-10.5,2.8-17l-1-8.3h-10.8v11.9l-.5,2.8c-.8,1.9-1.4,4-2.2,6Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c368" d="M406.1,303.2c-1.3,2.4-2.8,4.3-4.6,6.4l-11,10.7,9,9.1,3.9-3.7c3.5-3.5,6.6-7.5,11-12.6,1.3-1.4,2-3.5,3.5-5.3l-11.8-4.6Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c369" points="386.6 325.1 371.3 341.5 379.4 350.1 395.1 333.9 386.6 325.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></polygon>
  <path id="c370" d="M379,350.8l-8.2-8.6-9.9,10.2c-1.4,1.3-4.3,3-9.1,5.5l2.7,11.8c2,0,5.5-1.4,10.2-4.9l6.4-5.1,7.9-8.9Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c371" points="323.6 358.1 323.6 370.7 348.9 370.7 346.3 359.9 341 359.9 341 358.1 323.6 358.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c372" points="301.4 370.7 322.7 370.7 322.7 358.1 305.6 358.1 305.6 360.2 301.4 360.2 301.4 370.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c373" points="291.1 361 291.1 358.1 270.5 358.1 270.5 370.4 294.2 370.4 294.2 361 291.1 361" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c374" points="269.9 358.1 249.5 358.1 249.5 361 246.1 361 246.1 370.4 269.9 370.4 269.9 358.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c375" points="235.5 360.5 235.5 358.1 216.8 358.1 216.8 370.7 239.3 370.7 239.3 360.5 235.5 360.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c376" points="215.9 358.1 199.9 358.1 199.9 359.9 194.6 359.9 192.1 370.7 215.9 370.7 215.9 358.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c377" d="M169.6,340.6l-11.8,12.1,9.9,9.9c5.9,5.3,11,8.6,15.3,9.7l5.7-16.5c-1-.2-2-1-3.9-1.8-3.7-2-7.7-5.7-12.6-10.5l-2.6-2.9h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></path>
  <polygon id="c378" points="152.8 322.8 140.7 335.1 157.2 352.4 168.8 340.2 157.2 327.6 152.8 322.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></polygon>
  <path id="c379" d="M136.3,330.5l11.8-11.7c-3.5-3.9-6.5-7.5-9.5-10.7-1.8-1.8-3.9-4.3-5.1-6.6l-15.7,5.7c1.4,3.7,3,6.4,4.9,8.2l13.6,15.1Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c380" d="M130.9,279.4h-16.8v10.5c0,5.5,1.3,11,3.5,16.5l15.7-5.9c-1.3-2.4-1.8-5.1-2-8l-.4-13.1h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c381" points="114.1 249.1 114.1 270.6 131 270.6 131 251.2 117.6 251.2 117.6 249.1 114.1 249.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c400" points="107.2 256.4 107.2 272.3 112.5 272.3 112.5 222.3 107.2 222.3 107.2 239.9 102.1 239.9 102.1 256.4 107.2 256.4" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c401" d="M111.3,203.9v15.7h-5.1l-.5-8.2h-3.7c0-5.5.5-10.7,1.3-15.5,1.3-6.6,2.8-12.4,4.9-16.8l3.9,1.8,4.9-6.5,4.9,3.7-3.9,5.5c-2.4,3.9-4,8.2-5.3,13.2-1,2.7-1.3,5.1-1.4,7.1Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c402" points="124.6 161.6 146.5 138.1 148.9 140.5 155.7 133.8 159.9 137.8 124.6 174.9 120.6 171.5 127.5 164 124.6 161.6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c403" d="M192.9,113.3l.2,6.5c-1.3,0-5.1,1-11,2.4-3.9,1.3-8,3.5-12.6,6.6-2.4,1.6-4,3.7-5.7,5.1l-4.9-4,5.7-5.7c.2-.2-.9-1-2.4-2,2.4-1.4,5.3-3.5,9-5.3,4.6-2.4,9.1-4,13.4-5.3l1.3,3,2.4-.5,4.6-.8Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c404" points="241.1 119.7 198 119.7 198 112.8 207.7 112.8 207.7 109 231 109 231 112.8 241.1 112.8 241.1 119.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c405" points="294.4 119.7 246.1 119.7 246.1 112.8 257 112.8 257 109 282.9 109 282.9 112.8 294.4 112.8 294.4 119.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c406" points="341.2 119.7 298.1 119.7 298.1 112.8 307.8 112.8 307.8 109 331.3 109 331.3 112.8 341.2 112.8 341.2 119.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c407" d="M373.3,123.7l1,.5,2.4,1.8,2,1.8-4,4.3-2.7-2.4c-2.7-1.8-6.4-4-10.3-6.5-4-1.8-8.2-3.7-12-4l-3.9-.5v-6.1l3.9.2,3.5.9,1.3-2.7c4,1.3,8.2,2.4,11.7,4l9,5.5-1.9,3.2h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c408" points="382 132.2 388.7 139 391.3 136.8 412.1 159.1 409.8 161.3 417.3 169 412.6 173.5 377.3 136.3 382 132.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c409" d="M419.8,172.1c2,2.4,3.9,4.6,5.1,6.5l3.5-1.8.2.2c2,3.9,3.9,8.2,5.3,13.9.9,2.7,1,5.1,1.3,7.1v10h-4.2v8.3h-5.7l.2-12-.5-4.9c-.5-4-1.3-8-2-11.2-1-3.5-2-6.5-4-9.5l-2.8-3.2,3.6-3.4h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c410" points="430.7 241 430.7 223.8 423.9 223.8 423.9 273.1 430.7 273.1 430.7 257.5 434.4 257.5 434.4 241 430.7 241" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c411" d="M424.8,296.8c-.5,4-1.3,8-2,11.2-1,3.5-2,6.5-4,9.5l-2.7,3.5,3.9,3.7c2-2.4,3.9-4.6,5.1-6.5l3.5,1.8.2-.2c2-3.9,3.9-8.2,5.3-13.9l1.3-7.1v-10.4h-4v-8.3h-5.7l.2,12-1.1,4.7h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c412" points="409.8 335.1 417.3 327.4 412.6 323.3 377.3 360.2 382 364.6 388.7 357.6 391.3 359.7 412.1 337.6 409.8 335.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c413" d="M365.7,381.4c3-1.4,5.9-3.7,9-5.5l-1.3-2.8c.9-.2,1.6-1,3.5-2.4l2-2-4-4-2.7,2.4c-2.7,1.8-6.4,4-10.3,6.4-4,2-8.2,3.9-12,4.3l-3.9.9v5.9l3.9-.2,3.5-.9,1.3,2.7c3.6-1.8,7.8-3.2,11-4.8Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c414" points="341.2 376.9 298.1 376.9 298.1 383.5 307.8 383.5 307.8 387.7 331.3 387.7 331.3 383.5 341.2 383.5 341.2 376.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c415" points="294.4 376.9 246.1 376.9 246.1 383.5 257 383.5 257 387.7 282.9 387.7 282.9 383.5 294.4 383.5 294.4 376.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c416" points="241.1 376.9 198 376.9 198 383.5 207.7 383.5 207.7 387.7 231 387.7 231 383.5 241.1 383.5 241.1 376.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c417" d="M192.9,383l.2-6.4c-1.3,0-5.1-1-11-2.4-3.9-1.3-8-3.5-12.6-6.6l-5.7-5.1-4.9,4,5.7,5.7-2.4,2c2.4,1.4,5.3,3.5,9,5.3,4.6,2,9.1,3.9,13.4,5.3l1.3-3,2.4.5,4.6.7Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c418" points="124.6 335 146.5 358.1 148.9 356.1 155.7 362.5 159.9 358.7 124.6 321.4 120.6 324.8 127.5 332.4 124.6 335" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c419" d="M103.4,300.7c1.3,6.6,2.8,12.1,4.9,16.4l3.9-1.8,4.9,6.6,4.9-3.7-4-5.4c-2.4-3.9-4-8.2-5.3-13.2l-1.3-6.6v-15.8h-5.1l-.5,8.2h-3.5c-.2,5.4.2,10.7,1.1,15.3Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
    <rect id="c400cd1" x="102.1" y="256.4" width="5.1" height="15.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c400cd2" x="102.1" y="222.3" width="5.1" height="17.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <path id="c401cd1" d="M105.8,211.4l.5,8.2h-3.9c-.2-2-.2-4.9-.2-8.2h3.6Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c401cd2" d="M113.8,172.6l2.8,2-4.9,6.6-3.7-1.8c1.3-2.4,2.4-4.3,3.9-5.7,0,0,1.9-1.1,1.9-1.1Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c402cd1" points="120.6 171.7 117.6 169 124.4 161.6 127.5 164 120.6 171.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c402cd2" points="149.4 140.5 155.7 133.4 153.2 131.2 146.5 138 149.4 140.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c403cd1" d="M164.7,123.8l-5.7,5.7-2.8-2.4,1.3-1.3c1.3-1.3,2.7-2.7,4.6-4,2.1,1.3,2.6,1.9,2.6,2h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c403cd2" d="M193.2,112.8l-4.9.9-2.7.5-1.3-3c3.7-1,6.5-1.3,8.3-1.4l.6,3h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <rect id="c404cd1" x="198" y="109" width="9.7" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c404cd2" x="231" y="109" width="10.2" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c405cd1" x="246.1" y="109" width="11" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c405cd2" x="282.9" y="109" width="11.7" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c406cd1" x="298.1" y="109" width="9.7" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c406cd2" x="331.3" y="109" width="10.2" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c407cd1" points="353 113.5 349.8 112.8 345.4 112.6 345.4 109.3 348.1 109.8 354.3 111.1 353 113.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c407cd2" d="M373.5,123.7l1.3-2.8c2.7,1.8,4.6,3.9,6.4,5.3l-1.8,1.8-2-1.8-2.7-1.8-1.2-.7h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c408cd1" points="384.4 129.8 391.3 137.1 389 139 382 132.2 384.4 129.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c408cd2" points="412 159.1 419.3 166.9 417.3 169.2 409.8 161.3 412 159.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c409cd1" d="M423.4,170.6c1.3,1.3,2.7,3,4.6,6.4l-3.5,2.1c-1.3-1.8-2.8-4.3-5.1-6.6l2.7-2h1.3Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <rect id="c409cd2" x="430.7" y="208.3" width="3.9" height="8.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c410cd1" x="430.7" y="223.8" width="3.9" height="17" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c140cd2" x="430.7" y="257.5" width="3.9" height="15.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c411cd1" x="430.7" y="280.2" width="3.9" height="8.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <path id="c411cd2" d="M424.8,317.5c-1.3,1.8-2.8,4-5.1,6.5l2.7,2.4,1.3-.9c1.3-1.3,2.7-3.5,4.6-6.5l-3.5-1.5Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c412cd1" points="417.1 327.4 409.8 335 412.1 337.6 419.3 330.3 417.1 327.4" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c412cd2" points="389 357.3 382 364.3 384.5 366.6 391.3 359.7 389 357.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c413cd1" d="M373.5,373.2l1.3,2.7c2.7-1.8,4.6-3.7,6.4-5.1l-1.8-2-2,2c-2.1,1.4-3.3,2.1-3.9,2.4Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c413cd2" points="353 382.8 349.8 383.5 345.4 383.7 345.4 387 348.1 386.5 354.3 385.5 353 382.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c414cd1" x="331.3" y="383.5" width="10.2" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c414cd2" x="298.1" y="383.5" width="9.7" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c415cd1" x="282.9" y="383.5" width="11.7" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c415cd2" x="246.1" y="383.5" width="11" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c416cd1" x="231" y="383.5" width="10.2" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c416cd2" x="198" y="383.5" width="9.7" height="3.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <path id="c417cd1" d="M193.2,383l-4.9-.5-2.7-.5-1.3,3c3.7,1,6.5,1.3,8.3,1.4l.6-3.4h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <path id="c417cd2" d="M164.7,372.5l-5.7-5.7-2.8,2.4,1.3,1.4c1.3,1.3,2.7,2.4,4.6,3.9l2.6-2h0Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c418cd1" points="155.7 362.5 148.9 356.1 146.5 358.1 152.9 365.2 155.7 362.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c418cd2" points="120.6 324.9 117.6 327.4 124.4 335 127.5 332.9 120.6 324.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <path id="c419cd1" d="M113.8,324.1l2.8-2-4.9-6.6-3.7,1.8c1.3,2.4,2.4,4,3.9,5.7,0,0,1.9,1.1,1.9,1.1Z" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
  <polygon id="c419cd2" points="106 276.9 102.3 276.9 102.3 279.1 102.1 285.4 105.8 285.4 106 276.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>

  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(111.7 202.7) rotate(-90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">401</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(137.4 158.5) rotate(-45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">402</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(213.5 116.9)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">404</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(264.6 116.9)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">405</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(312.1 116.9)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">406</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(355.5 118.6) rotate(24.4)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">407</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(391.3 148.1) rotate(45.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">408</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(425.5 185.5) rotate(82.6)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">409</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(170.2 125.6) rotate(-25)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">403</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(124.7 243.4) rotate(-90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">350</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(125.8 211.5) rotate(-90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">351</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(130.8 188) rotate(-45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">352</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(153.2 164.9) rotate(-45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">353</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(169.3 147) rotate(-45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">354</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(198 134.1)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">355</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(222.1 134.1)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">356</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(251.5 134.1)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">357</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(275.2 134.1)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">358</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(306.7 134.1)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">359</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(329.3 134.1)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">360</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(357.7 136.2) rotate(45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">361</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(375.3 154.4) rotate(45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">362</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(397.3 178.5) rotate(45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">363</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(411.3 195.7) rotate(90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">364</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(411.3 231.1) rotate(90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">365</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(426.1 242.4) rotate(90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">410</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(429.4 310.5) rotate(-75.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">411</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(397.6 349.6) rotate(-46)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">412</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(411.3 253.2) rotate(90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">366</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(417.5 300.7) rotate(-90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">367</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(402.2 321.5) rotate(-45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">368</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(380.4 345.1) rotate(-45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">369</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(363.4 362) rotate(-45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">370</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(358 383.2) rotate(-25.2)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">413</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(328.6 367.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">371</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(306.7 367.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">372</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(314.3 385)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">414</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(264.6 385.4)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">415</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(214.4 385)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">416</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(169.3 377.2) rotate(23)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">417</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(275.2 367.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">373</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(252.8 367.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">374</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(222.1 367.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">375</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(198.7 367.5)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">376</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(168.2 353.5) rotate(45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">377</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(148.1 336.6) rotate(45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">378</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(132.8 340.8) rotate(45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">418</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(125.8 312) rotate(45)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">379</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(119.3 286.6) rotate(90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">380</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(103.1 293.7) rotate(76)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">419</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(124.7 267.5) rotate(-90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">381</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(141.4 205.8) rotate(-59.7)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">301</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(171.3 170.4) rotate(-41.6)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">302</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(211.9 151.7)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">303</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(359.8 159.7) rotate(50.8)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">306</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(391.2 193.1) rotate(53.4)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">307</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(395.9 242.4) rotate(90)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">308</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(395.9 308) rotate(-54.8)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">309</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(365.8 339.1) rotate(-46.6)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">310</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(317.4 350.9)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">311</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(264.6 350.9)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">312</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(213.4 350.9)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">313</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(168.3 329.7) rotate(46.3)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">314</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(135.9 294.6) rotate(54.7)" font-family="ArialMT, Arial" font-size="7.7" isolation="isolate">
              <tspan x="0" y="0">315</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <polygon id="c203" points="200 157.8 213.1 189.1 236.7 189.1 236.7 157.8 200 157.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c204" x="238.4" y="157.8" width="30.1" height="31.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c205" x="274.9" y="157.8" width="28.8" height="31.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c206" points="343.4 157.8 305.4 157.8 305.4 189.1 330.1 189.1 343.4 157.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c207" points="333.5 187.6 346.1 158.5 366.8 180 346.3 200.4 333.5 187.6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c208" points="367.8 181.5 386.8 201.6 358.7 212.9 347.6 201.9 367.8 181.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c209" points="388.1 205 360 214.9 360 245.5 388.1 245.5 388.1 205" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></polygon>
  <polygon id="c210" points="360 279.7 388.1 290.8 388.1 247.2 360 247.2 360 279.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></polygon>
  <polygon id="c211" points="367.8 313 386.8 293 358.7 281.4 347.6 292.5 367.8 313" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted" class="active"></polygon>
  <polygon id="c212" points="346.1 335.9 366.8 314.3 346.3 293.8 333.5 306.4 346.1 335.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c202" points="208.8 187.6 196.2 158.5 175.5 180 195.9 200.4 208.8 187.6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c201" points="174.4 181.5 155.5 201.6 183.6 212.9 194.7 201.9 174.4 181.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c218" points="174.4 313 155.5 293 183.6 281.4 194.7 292.5 174.4 313" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c217" points="196.2 335.9 175.5 314.3 195.9 293.8 208.8 306.4 196.2 335.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c213" points="330.1 305.8 305.4 305.8 305.4 337.2 343.4 337.2 330.1 305.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c214" x="274.9" y="305.8" width="28.8" height="31.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c215" x="238.4" y="305.8" width="30.1" height="31.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c216" points="200 337.2 236.7 337.2 236.7 305.8 213.1 305.8 200 337.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(170.8 202.1)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">201</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(187.4 184.1)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">202</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(215.8 176.5)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">203</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(246.9 176.5)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">204</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(315.2 176.5)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">206</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(283.5 176.5)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">205</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(343.5 184.1)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">207</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(360.5 201.2)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">208</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(367.8 230.6)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">209</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(367.2 267.7)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">210</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(358.6 298.6)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">211</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(341.7 315.6)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">212</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(313 325.4)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">213</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(283.1 325.4)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">214</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(248.8 325.4)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">215</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(216.8 325.4)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">216</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(187.4 316.2)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">217</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(168.5 298.6)" font-family="ArialMT, Arial" font-size="7.6" isolation="isolate">
              <tspan x="0" y="0">218</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(279.9 153) rotate(-90)" font-family="ArialMT, Arial" font-size="6.9" isolation="isolate">
              <tspan x="0" y="0">304</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <polygon id="c111c3" points="214.9 195.6 214.9 199.1 211.4 199.1 211.4 202.6 225.4 202.6 225.4 200.3 225.4 199.1 225.4 195.6 214.9 195.6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c111c1" x="207.9" y="210.9" width="17.6" height="2.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c111c2" x="207.9" y="202.6" width="17.6" height="8.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c116c3" points="331.6 196.2 331.6 199.7 335.1 199.7 335.1 203.2 321 203.2 321 200.9 321 199.7 321 196.2 331.6 196.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c116c1" x="321" y="211.4" width="17.6" height="2.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c116c2" x="321" y="203.2" width="17.6" height="8.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c112c3" points="230.7 196.2 230.7 203.2 248.3 203.2 248.3 200.9 248.3 199.7 248.3 196.2 230.7 196.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c112c1" x="230.7" y="211.4" width="17.6" height="2.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect x="263" y="206.2" width="19.8" height="4.4" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c113a" x="252.9" y="212.3" width="14.5" height="1.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c114a" x="279.9" y="212.3" width="14.5" height="1.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c110" x="208.9" y="223" width="2.6" height="19.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c125" x="208.9" y="253.5" width="2.6" height="19.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c110b" x="206" y="223" width="2.6" height="19.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c125b" x="206" y="253.5" width="2.6" height="19.8" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c112c2" x="230.7" y="203.2" width="17.6" height="8.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c115c3" points="298.7 196.2 298.7 203.2 316.3 203.2 316.3 200.9 316.3 199.7 316.3 196.2 298.7 196.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c115c1" x="298.7" y="211.4" width="17.6" height="2.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c115c2" x="298.7" y="203.2" width="17.6" height="8.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c117c3" points="356.1 223.1 347.1 223.1 347.1 244 350.1 244 351.6 244 356.1 244 356.1 223.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c117c1" x="334.1" y="223.1" width="2.7" height="20.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c117c2" x="336.7" y="223.1" width="10.4" height="20.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c118c3" points="356.1 251.2 347.1 251.2 347.1 272.1 350.1 272.1 351.6 272.1 356.1 272.1 356.1 251.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c118c1" x="334.1" y="251.2" width="2.7" height="20.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c118c2" x="336.7" y="251.2" width="10.4" height="20.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c113c2" points="253 193.2 253 198.7 270.6 198.7 270.6 196.9 270.6 195.9 270.6 193.2 253 193.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c113c1" x="253" y="198.7" width="17.6" height="6.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c114c2" points="276.5 193.2 276.5 198.7 294.1 198.7 294.1 196.9 294.1 195.9 294.1 193.2 276.5 193.2" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c114c1" x="276.5" y="198.7" width="17.6" height="6.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon points="337.5 245.3 330.4 245.3 330.4 217.1 215.5 217.1 215.5 245.3 208.4 245.3 208.4 249.9 215.5 249.9 215.5 278.1 330.4 278.1 330.4 249.9 337.5 249.9 337.5 245.3" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect id="c123a" x="238.2" y="279.9" width="13.1" height="3.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c120a" x="293.7" y="279.9" width="13.1" height="3.1" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect x="252.4" y="286.5" width="41" height="5.7" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect x="213.6" y="279.9" width="21.4" height="6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect x="308.2" y="279.9" width="21" height="6" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c124c2" x="206.7" y="291" width="19.9" height="2.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c123c2" x="229.5" y="291" width="19.9" height="2.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c122" x="251" y="293.9" width="19.9" height="2.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c121" x="274.7" y="293.9" width="19.9" height="2.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c120c2" x="297.1" y="291" width="19.9" height="2.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c123c3" x="229.5" y="294" width="19.9" height="5.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c120c3" x="297.1" y="294" width="19.9" height="5.5" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <rect id="c119c2" x="319.9" y="291" width="19.9" height="2.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <polygon id="c124c3" points="211.1 293.9 211.1 296.8 214.3 296.8 214.3 299.7 226.6 299.7 226.6 296.8 226.6 296.5 226.6 293.9 211.1 293.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <polygon id="c119c3" points="335.4 293.9 335.4 296.8 332.2 296.8 332.2 299.7 319.9 299.7 319.9 296.8 319.9 296.5 319.9 293.9 335.4 293.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></polygon>
  <rect x="254.2" y="278.1" width="37.5" height="5.9" fill="#f2f2f2" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></rect>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(215.9 284.3)" font-family="ArialMT, Arial" font-size="2.9" isolation="isolate">
              <tspan x="0" y="0">JUGADORES</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(309.1 284.3)" font-family="ArialMT, Arial" font-size="2.9" isolation="isolate">
              <tspan x="0" y="0">JUGADORES</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(267.7 290.4)" font-family="ArialMT, Arial" font-size="2.9" isolation="isolate">
              <tspan x="0" y="0">PRENSA</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(266.7 209.5)" font-family="ArialMT, Arial" font-size="2.9" isolation="isolate">
              <tspan x="0" y="0">PRENSA</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(210.2 237.5) rotate(-90)" font-family="ArialMT, Arial" font-size="4.2" isolation="isolate">
              <tspan x="0" y="0">110</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(210.2 267.4) rotate(-90)" font-family="ArialMT, Arial" font-size="4.2" isolation="isolate">
              <tspan x="0" y="0">125</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(211 209.4)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">111</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(233.2 209.4)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">112</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(255.3 203.6)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">113</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(278.5 203.6)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">114</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(300.7 209.4)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">115</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(323.9 210.4)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">116</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(339.1 228.1) rotate(90)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">117</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(339.1 255.1) rotate(90)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">118</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(320 299.2)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">119</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(300.7 299.2)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">120</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(278.5 303)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">121</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(254.4 303)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">122</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(232.2 299.2)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">123</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g isolation="isolate">
    <g isolation="isolate">
      <g isolation="isolate">
        <g isolation="isolate">
          <g isolation="isolate">
            <text transform="translate(213.9 299.2)" font-family="ArialMT, Arial" font-size="7" isolation="isolate">
              <tspan x="0" y="0">124</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g>
    <path d="M370.6,169c2.1-.4,3.9-.5,6.4-.5s4.2.1,6.3.5c.5,2.2.5,4.5.5,6.6s-.1,3.7-.5,6.2c-2.4.4-3.8.5-6.4.5s-3.8-.1-6.3-.5c-.4-2.4-.5-3.7-.5-6.3-.1-2.6.1-4.3.5-6.5Z" fill="#004d96" fill-rule="evenodd" pointer-events="visiblePainted"></path>
    <path d="M371,181.3c1.6.2,3.8.5,6.2.5s4.2-.2,5.7-.4c.3-1.7.4-3.5.4-5.9s-.1-4.6-.4-6.2c-1.9-.4-2-.4-5.7-.5-3.8-.1-6.2.5-6.2.5-.2,1.7-.5,3.7-.5,6.2-.1,2.3.1,4.3.5,5.8h0Z" fill="#fff" fill-rule="evenodd" pointer-events="visiblePainted"></path>
    <g>
      <path d="M371.2,172l2.3-1.5,1.4,1.1,1.6-1.1,1.1,1.1,1.5-1.1,1.1,1.1v3.4l-1.9,1.2v-3.5c0-.2,0-.4-.1-.5-.1-.2-.3-.3-.6-.4v8.5h-2.1v-7.6c0-.2,0-.4-.1-.5s-.4-.4-.6-.4v8.5h-1.9v-7.3c0-.3-.1-.6-.4-.9-.3-.2-.9-.2-1.3-.1Z" fill="#a8053d" fill-rule="evenodd" pointer-events="visiblePainted"></path>
      <path d="M378.2,176.6l3.2-2.1,1.3,1.1-1.5,1.1-1.2-.9v2.2c0,.1.5.6,1,.6.3.1,1.1.1,1.6-.2l-2.8,1.8-1.7-1.5v-2.1h.1Z" fill="#004d96" pointer-events="visiblePainted"></path>
    </g>
  </g>
  <g>
    <path d="M404.7,273.9c-3,3-8.2,3-11.3,0-3-3-3-8.2,0-11.3,3-3,8.2-3,11.3,0,3.1,3.1,3.1,8.1,0,11.3" fill="#fff" stroke="silver" stroke-miterlimit="10" stroke-width=".3" pointer-events="visiblePainted"></path>
    <g>
      <path d="M401.2,269.2c0,1.2-1,2.1-2.1,2.1s-2.1-1-2.1-2.1,1-2.1,2.1-2.1,2.1.9,2.1,2.1" fill="#992d31" pointer-events="visiblePainted"></path>
      <path d="M401.8,264.5c-1.6.3-2.9.7-2.9.7-2.6,1.1-4.4,3-4.2,4.5.1,1.1.6,1.7,2,1.9-2.4.2-3.9-.5-4-1.9-.2-1.7,2.1-3.9,5.3-4.9,0,0,.6-.2,1.4-.3h2.4" fill="#2c6245" pointer-events="visiblePainted"></path>
      <path d="M396.4,264.5c1.6.3,2.9.7,2.9.7,2.6,1.1,4.4,3,4.2,4.5-.1,1.1-.6,1.7-2,1.9,2.4.2,3.9-.5,4-1.9.2-1.7-2.1-3.9-5.3-4.9,0,0-.6-.2-1.4-.3h-2.4" fill="#2c6245" pointer-events="visiblePainted"></path>
    </g>
  </g>
  <g>
    <g>
      <path d="M402.3,207.6v-.9l-.6-.6h-3l-.6.6v.9h-3v11.2h10.2v-11.2h-3ZM401.8,207.6h-3v-.9h3v.9Z" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
      <path d="M402.7,214.3h1.4v-.4h-1.4v.4ZM396.8,211.2l.8,1.5h.3l.8-1.5v1.5h.6v-2.7h-.4l-1,1.9-1-1.9h-.5v2.7h.5v-1.5h0ZM400.4,210.1h-.5v2.7h.5v-2.7ZM401.5,214.6c.2,0,.3-.2.3-.3,0-.2-.2-.3-.3-.3-.2,0-.3.2-.3.3,0,.2.2.3.3.3ZM404.1,210.1h-.5v2.7h.5v-2.7ZM401.4,211.1l1.4,1.6h.3v-2.7h-.4v1.6l-1.3-1.6h-.3v2.7h.4v-1.6h-.1ZM399.7,213.9h0c-.3,0-.6.1-.7.2-.3.3-.4.7-.4,1.2s.2,1.4,1.1,1.4h0c.5,0,1-.2,1.1-1.4,0-.5-.1-.9-.4-1.2-.2,0-.4-.2-.7-.2ZM400.2,215.3c0,.4-.1,1-.5,1h0c-.5,0-.5-.6-.5-1s.1-1.1.5-1.1h0c.5.1.5.6.5,1.1ZM397.5,215.1h0c-.3-.1-.6-.3-.6-.5s.2-.3.6-.3.5,0,.6.1v-.4c-.1,0-.3-.1-.6-.1s-.6,0-.8.2c-.1.1-.2.3-.2.5s0,.4.2.5c.2.2.4.3.6.4.2.1.4.2.5.3s.1.2,0,.3-.2.2-.4.2h-.2c-.2,0-.5,0-.7-.1v.4c.1.1.4.1.7.1s.6,0,.8-.2c.2-.1.4-.6.2-1,0,0-.4-.3-.7-.4ZM404.2,215.1h-.4c0,.7-.5,1.2-1.1,1.2s-1.1-.5-1.1-1.1h0c0-.1-.4-.1-.4-.1h0c0,1,.7,1.7,1.5,1.7.8-.1,1.5-.8,1.5-1.7,0,.1,0,0,0,0h0Z" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
    </g>
    <g>
      <path d="M402.3,207.6v-.9l-.6-.6h-3l-.6.6v.9h-3v11.2h10.2v-11.2h-3ZM401.8,207.6h-3v-.9h3v.9Z" fill="#d7282f" pointer-events="visiblePainted"></path>
      <path d="M402.7,214.3h1.4v-.4h-1.4v.4ZM396.8,211.2l.8,1.5h.3l.8-1.5v1.5h.6v-2.7h-.4l-1,1.9-1-1.9h-.5v2.7h.5v-1.5h0ZM400.4,210.1h-.5v2.7h.5v-2.7ZM401.5,214.6c.2,0,.3-.2.3-.3,0-.2-.2-.3-.3-.3-.2,0-.3.2-.3.3,0,.2.2.3.3.3ZM404.1,210.1h-.5v2.7h.5v-2.7ZM401.4,211.1l1.4,1.6h.3v-2.7h-.4v1.6l-1.3-1.6h-.3v2.7h.4v-1.6h-.1ZM399.7,213.9h0c-.3,0-.6.1-.7.2-.3.3-.4.7-.4,1.2s.2,1.4,1.1,1.4h0c.5,0,1-.2,1.1-1.4,0-.5-.1-.9-.4-1.2-.2,0-.4-.2-.7-.2ZM400.2,215.3c0,.4-.1,1-.5,1h0c-.5,0-.5-.6-.5-1s.1-1.1.5-1.1h0c.5.1.5.6.5,1.1ZM397.5,215.1h0c-.3-.1-.6-.3-.6-.5s.2-.3.6-.3.5,0,.6.1v-.4c-.1,0-.3-.1-.6-.1s-.6,0-.8.2c-.1.1-.2.3-.2.5s0,.4.2.5c.2.2.4.3.6.4.2.1.4.2.5.3s.1.2,0,.3-.2.2-.4.2h-.2c-.2,0-.5,0-.7-.1v.4c.1.1.4.1.7.1s.6,0,.8-.2c.2-.1.4-.6.2-1,0,0-.4-.3-.7-.4ZM404.2,215.1h-.4c0,.7-.5,1.2-1.1,1.2s-1.1-.5-1.1-1.1h0c0-.1-.4-.1-.4-.1h0c0,1,.7,1.7,1.5,1.7.8-.1,1.5-.8,1.5-1.7,0,.1,0,0,0,0h0Z" fill="#fff" pointer-events="visiblePainted"></path>
    </g>
  </g>
  <g id="Ilustración_1">
    <g clip-path="url(#clippath)">
      <g>
        <g clip-path="url(#clippath-1)">
          <path d="M209.3,347.9c0-3-3.7-5.4-8.2-5.4h-.1c-1.5,0-3,.3-4.3.8-2.3.9-3.8,2.6-4,4.4v.2h0v.2h0v.2h0c.1,1.6.9,2.9,2.3,3.9,1.5,1.1,3.5,1.6,5.9,1.6h.1c2.4,0,4.5-.6,6-1.7,1.4-1.1,2.2-2.5,2.2-4.1h0c0-.1.1-.1.1-.1Z" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-2)">
          <path d="M209.3,347.9c0-3-3.7-5.4-8.2-5.4h-.1c-1.5,0-3,.3-4.3.8-2.3.9-3.8,2.6-4,4.4v.2h0v.2h0v.2h0c.1,1.6.9,2.9,2.3,3.9,1.5,1.1,3.5,1.6,5.9,1.6h.1c2.4,0,4.5-.6,6-1.7,1.4-1.1,2.2-2.5,2.2-4.1h0c0-.1.1-.1.1-.1Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-3)">
          <path d="M200.1,350.2c.1,0,.2-.1.2-.1.3,0,.6.3.6.6s-.3.6-.6.6-.6-.2-.6-.6-.1-.2-.1-.2c0,0-.1,0-.1.1-.1.1-.2.1-.3.1h-.2c-.3-.1-.3-.4-.3-.5h0c0-.1-.1-.1-.1-.1h-.1c-.1.1-.2.1-.3.1h-.2c-.5-.2-.4-.6-.4-.7h-.4c-.3,0-.5-.2-.5-.5s0-.2.1-.3c.1-.1.2-.1.3-.1.3,0,.4.1.5.3h0s0,.1.1.1.1,0,.1-.1h0c.1-.1.2-.2.5-.2h.2c.2.1.3.2.3.5s.1.1.1.1h.1c.1-.1.2-.2.3-.2s.2,0,.3.1c.4.2.2.8.2.8,0,.1-.1.2,0,.2h.3" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-4)">
          <path d="M200.1,350.2c.1,0,.2-.1.2-.1.3,0,.6.3.6.6s-.3.6-.6.6-.6-.2-.6-.6-.1-.2-.1-.2c0,0-.1,0-.1.1-.1.1-.2.1-.3.1h-.2c-.3-.1-.3-.4-.3-.5h0c0-.1-.1-.1-.1-.1h-.1c-.1.1-.2.1-.3.1h-.2c-.5-.2-.4-.6-.4-.7h-.4c-.3,0-.5-.2-.5-.5s0-.2.1-.3c.1-.1.2-.1.3-.1.3,0,.4.1.5.3h0s0,.1.1.1.1,0,.1-.1h0c.1-.1.2-.2.5-.2h.2c.2.1.3.2.3.5s.1.1.1.1h.1c.1-.1.2-.2.3-.2s.2,0,.3.1c.4.2.2.8.2.8,0,.1-.1.2,0,.2h.3,0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-5)">
          <path d="M208.8,347.3c-1.6.4-2.9.9-3.4,1.1-.8-.7-2.6-2.2-3.1-2.6-.3-.2-.5-.3-.6-.4-.1,0-.2-.1-.3,0-.1,0-.3,0-.4.1-.3.1-.6.4-1,.6h0c-.3.2-.6.4-.8.5h-.3c-.2,0-.4-.1-.5-.1h0l.7-.7c.5-.5,1-1.1,2.2-1.1h.1c.7,0,1.4.3,1.5.3.7.3,1.4.5,2.1.5s1.5-.2,2.3-.5c.8.6,1.3,1.4,1.5,2.3" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-6)">
          <path d="M208.8,347.3c-1.6.4-2.9.9-3.4,1.1-.8-.7-2.6-2.2-3.1-2.6-.3-.2-.5-.3-.6-.4-.1,0-.2-.1-.3,0-.1,0-.3,0-.4.1-.3.1-.6.4-1,.6h0c-.3.2-.6.4-.8.5h-.3c-.2,0-.4-.1-.5-.1h0l.7-.7c.5-.5,1-1.1,2.2-1.1h.1c.7,0,1.4.3,1.5.3.7.3,1.4.5,2.1.5s1.5-.2,2.3-.5c.8.6,1.3,1.4,1.5,2.3" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-7)">
          <path d="M200.9,342.9h.1c1.1,0,2.2.2,3.2.4h.2c.9.3,1.7.7,2.4,1.2-.7.3-1.3.4-1.9.4h0c-.6,0-1.3-.2-1.9-.4,0,0-.8-.4-1.7-.4h-.1c-1,0-1.6.4-1.9.7-.4,0-.7.1-1,.2-.2.1-.4.1-.6.1h-.2c-.2,0-1.4-.3-2.3-.6,1.4-.9,3.5-1.6,5.7-1.6" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-8)">
          <path d="M200.9,342.9h.1c1.1,0,2.2.2,3.2.4h.2c.9.3,1.7.7,2.4,1.2-.7.3-1.3.4-1.9.4h0c-.6,0-1.3-.2-1.9-.4,0,0-.8-.4-1.7-.4h-.1c-1,0-1.6.4-1.9.7-.4,0-.7.1-1,.2-.2.1-.4.1-.6.1h-.2c-.2,0-1.4-.3-2.3-.6,1.4-.9,3.5-1.6,5.7-1.6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-9)">
          <path d="M194.7,344.9h0c1.1.4,2.3.7,2.6.7h.4c.3,0,.5-.1.8-.1s.2-.1.3-.1h0l-.7.8c-.1.1-.2.2-.1.4,0,.1.1.2.2.2.2.1.5.2.8.2h.3c.3-.1.6-.3,1-.6.3-.2.6-.5.9-.5h.3c.2,0,.3.1.7.3.5.4,2.9,2.4,3.2,2.7,0,0,.1.1.1.3s-.1.2-.2.3c-.1.1-.2.1-.3.1-.2,0-.3-.1-.3-.1h-.1c-.2-.3-.9-.9-1.2-1.1-.1,0-.1-.1-.2-.1,0,0-.1,0-.1.1-.1.1,0,.2.1.3l1,1s.1.1.1.2c0,.2-.1.3-.2.4s-.2.1-.3.1-.2-.1-.2-.1l-.2-.2c-.3-.3-.5-.5-.7-.7-.1,0-.1-.1-.2-.1h-.1s-.1.1,0,.2h.1c0,.1.7.9.7.9,0,0,.1.2,0,.3h-.1c-.1.2-.3.2-.3.2h-.2c-.3-.3-.5-.5-.7-.6,0,0-.1-.1-.2-.1h-.1c-.1.1,0,.2.1.3l.6.6s-.1.1-.3.1h-.1c-.2,0-.4-.1-.5-.2,0-.1.1-.2.1-.4,0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c0-.3-.1-.7-.5-.9-.1-.1-.3-.1-.4-.1h-.3c-.1-.2-.3-.3-.5-.4-.1,0-.2-.1-.4-.1s-.4.1-.5.2c-.2-.2-.4-.3-.6-.3s-.4.1-.6.2c-.2-.2-1.1-.6-3.1-1.1-.1,0-.3-.1-.5-.1.2-.6.8-1.4,1.6-2.1" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-10)">
          <path d="M194.7,344.9h0c1.1.4,2.3.7,2.6.7h.4c.3,0,.5-.1.8-.1s.2-.1.3-.1h0l-.7.8c-.1.1-.2.2-.1.4,0,.1.1.2.2.2.2.1.5.2.8.2h.3c.3-.1.6-.3,1-.6.3-.2.6-.5.9-.5h.3c.2,0,.3.1.7.3.5.4,2.9,2.4,3.2,2.7,0,0,.1.1.1.3s-.1.2-.2.3c-.1.1-.2.1-.3.1-.2,0-.3-.1-.3-.1h-.1c-.2-.3-.9-.9-1.2-1.1-.1,0-.1-.1-.2-.1,0,0-.1,0-.1.1-.1.1,0,.2.1.3l1,1s.1.1.1.2c0,.2-.1.3-.2.4s-.2.1-.3.1-.2-.1-.2-.1l-.2-.2c-.3-.3-.5-.5-.7-.7-.1,0-.1-.1-.2-.1h-.1s-.1.1,0,.2h.1c0,.1.7.9.7.9,0,0,.1.2,0,.3h-.1c-.1.2-.3.2-.3.2h-.2c-.3-.3-.5-.5-.7-.6,0,0-.1-.1-.2-.1h-.1c-.1.1,0,.2.1.3l.6.6s-.1.1-.3.1h-.1c-.2,0-.4-.1-.5-.2,0-.1.1-.2.1-.4,0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c0-.3-.1-.7-.5-.9-.1-.1-.3-.1-.4-.1h-.3c-.1-.2-.3-.3-.5-.4-.1,0-.2-.1-.4-.1s-.4.1-.5.2c-.2-.2-.4-.3-.6-.3s-.4.1-.6.2c-.2-.2-1.1-.6-3.1-1.1-.1,0-.3-.1-.5-.1.2-.6.8-1.4,1.6-2.1" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-11)">
          <path d="M208.9,348.2h0v.2c-.2,1.2-1,2.2-2.2,3.1-1.5,1-3.5,1.5-5.6,1.5h-.1c-4.3,0-7.8-2.2-7.9-5v-.3c.1,0,.4.1.4.1,2,.4,2.7.9,2.9,1v.3c0,.5.4.9.8.9h.1c.1.3.3.6.6.7.1,0,.2.1.3.1h.2c.1.1.2.3.5.4.1,0,.2.1.3.1h.2c.2.3.5.6.9.6s.5-.1.7-.3c.2.1.5.2.8.2h.1c.3,0,.5-.2.6-.3h.2c.2,0,.4-.1.5-.2.2-.1.3-.3.3-.4h.1c.2,0,.4-.1.6-.2.3-.2.4-.5.4-.7h.1c.2,0,.4-.1.5-.2.2-.1.3-.4.4-.6,0-.1,0-.3-.1-.4.6-.3,1.8-.7,3.2-1v.3h.2" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-12)">
          <path d="M208.9,348.2h0v.2c-.2,1.2-1,2.2-2.2,3.1-1.5,1-3.5,1.5-5.6,1.5h-.1c-4.3,0-7.8-2.2-7.9-5v-.3c.1,0,.4.1.4.1,2,.4,2.7.9,2.9,1v.3c0,.5.4.9.8.9h.1c.1.3.3.6.6.7.1,0,.2.1.3.1h.2c.1.1.2.3.5.4.1,0,.2.1.3.1h.2c.2.3.5.6.9.6s.5-.1.7-.3c.2.1.5.2.8.2h.1c.3,0,.5-.2.6-.3h.2c.2,0,.4-.1.5-.2.2-.1.3-.3.3-.4h.1c.2,0,.4-.1.6-.2.3-.2.4-.5.4-.7h.1c.2,0,.4-.1.5-.2.2-.1.3-.4.4-.6,0-.1,0-.3-.1-.4.6-.3,1.8-.7,3.2-1v.3h.2" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-13)">
          <path d="M209.3,347.9c0-3-3.7-5.4-8.2-5.4h-.1c-1.5,0-3,.3-4.3.8-2.3.9-3.8,2.6-4,4.4v.2h0v.2h0v.2h0c.1,1.6.9,2.9,2.3,3.9,1.5,1.1,3.5,1.6,5.9,1.6h.1c2.4,0,4.5-.6,6-1.7,1.4-1.1,2.2-2.5,2.2-4.1h0c0-.1.1-.1.1-.1Z" fill="#000f9f" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-14)">
          <path d="M200.1,350.2c.1,0,.2-.1.2-.1.3,0,.6.3.6.6s-.3.6-.6.6-.6-.2-.6-.6-.1-.2-.1-.2c0,0-.1,0-.1.1-.1.1-.2.1-.3.1h-.2c-.3-.1-.3-.4-.3-.5h0c0-.1-.1-.1-.1-.1h-.1c-.1.1-.2.1-.3.1h-.2c-.5-.2-.4-.6-.4-.7h-.4c-.3,0-.5-.2-.5-.5s0-.2.1-.3c.1-.1.2-.1.3-.1.3,0,.4.1.5.3h0s0,.1.1.1.1,0,.1-.1h0c.1-.1.2-.2.5-.2h.2c.2.1.3.2.3.5s.1.1.1.1h.1c.1-.1.2-.2.3-.2s.2,0,.3.1c.4.2.2.8.2.8,0,.1-.1.2,0,.2h.3" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-15)">
          <path d="M208.8,347.3c-1.6.4-2.9.9-3.4,1.1-.8-.7-2.6-2.2-3.1-2.6-.3-.2-.5-.3-.6-.4-.1,0-.2-.1-.3,0-.1,0-.3,0-.4.1-.3.1-.6.4-1,.6h0c-.3.2-.6.4-.8.5h-.3c-.2,0-.4-.1-.5-.1h0l.7-.7c.5-.5,1-1.1,2.2-1.1h.1c.7,0,1.4.3,1.5.3.7.3,1.4.5,2.1.5s1.5-.2,2.3-.5c.8.6,1.3,1.4,1.5,2.3" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-16)">
          <path d="M200.9,342.9h.1c1.1,0,2.2.2,3.2.4h.2c.9.3,1.7.7,2.4,1.2-.7.3-1.3.4-1.9.4h0c-.6,0-1.3-.2-1.9-.4,0,0-.8-.4-1.7-.4h-.1c-1,0-1.6.4-1.9.7-.4,0-.7.1-1,.2-.2.1-.4.1-.6.1h-.2c-.2,0-1.4-.3-2.3-.6,1.4-.9,3.5-1.6,5.7-1.6" fill="#ffd100" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-17)">
          <path d="M194.7,344.9h0c1.1.4,2.3.7,2.6.7h.4c.3,0,.5-.1.8-.1s.2-.1.3-.1h0l-.7.8c-.1.1-.2.2-.1.4,0,.1.1.2.2.2.2.1.5.2.8.2h.3c.3-.1.6-.3,1-.6.3-.2.6-.5.9-.5h.3c.2,0,.3.1.7.3.5.4,2.9,2.4,3.2,2.7,0,0,.1.1.1.3s-.1.2-.2.3c-.1.1-.2.1-.3.1-.2,0-.3-.1-.3-.1h-.1c-.2-.3-.9-.9-1.2-1.1-.1,0-.1-.1-.2-.1,0,0-.1,0-.1.1-.1.1,0,.2.1.3l1,1s.1.1.1.2c0,.2-.1.3-.2.4s-.2.1-.3.1-.2-.1-.2-.1l-.2-.2c-.3-.3-.5-.5-.7-.7-.1,0-.1-.1-.2-.1h-.1s-.1.1,0,.2h.1c0,.1.7.9.7.9,0,0,.1.2,0,.3h-.1c-.1.2-.3.2-.3.2h-.2c-.3-.3-.5-.5-.7-.6,0,0-.1-.1-.2-.1h-.1c-.1.1,0,.2.1.3l.6.6s-.1.1-.3.1h-.1c-.2,0-.4-.1-.5-.2,0-.1.1-.2.1-.4,0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c0-.3-.1-.7-.5-.9-.1-.1-.3-.1-.4-.1h-.3c-.1-.2-.3-.3-.5-.4-.1,0-.2-.1-.4-.1s-.4.1-.5.2c-.2-.2-.4-.3-.6-.3s-.4.1-.6.2c-.2-.2-1.1-.6-3.1-1.1-.1,0-.3-.1-.5-.1.2-.6.8-1.4,1.6-2.1" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
        <g clip-path="url(#clippath-18)">
          <path d="M208.9,348.2h0v.2c-.2,1.2-1,2.2-2.2,3.1-1.5,1-3.5,1.5-5.6,1.5h-.1c-4.3,0-7.8-2.2-7.9-5v-.3c.1,0,.4.1.4.1,2,.4,2.7.9,2.9,1v.3c0,.5.4.9.8.9h.1c.1.3.3.6.6.7.1,0,.2.1.3.1h.2c.1.1.2.3.5.4.1,0,.2.1.3.1h.2c.2.3.5.6.9.6s.5-.1.7-.3c.2.1.5.2.8.2h.1c.3,0,.5-.2.6-.3h.2c.2,0,.4-.1.5-.2.2-.1.3-.3.3-.4h.1c.2,0,.4-.1.6-.2.3-.2.4-.5.4-.7h.1c.2,0,.4-.1.5-.2.2-.1.3-.4.4-.6,0-.1,0-.3-.1-.4.6-.3,1.8-.7,3.2-1v.3h.2" fill="#ffd100" pointer-events="visiblePainted"></path>
        </g>
      </g>
    </g>
  </g>
  <g id="Toyota">
    <g clip-path="url(#clippath-19)">
      <g>
        <rect x="296.8" y="341.8" width="12.3" height="12.3" fill="#ec1b2e" pointer-events="visiblePainted"></rect>
        <g clip-path="url(#clippath-20)">
          <path d="M305,345.3c-.6-.2-1.3-.3-2.1-.3s-1.5.1-2.1.3c-1.5.5-2.6,1.5-2.6,2.7s2.1,3,4.6,3,4.6-1.3,4.6-3-1-2.2-2.6-2.7M303,349.7c-.4,0-.7-.7-.7-1.7h1.4c0,.9-.3,1.7-.7,1.7M302.3,347.3c.1-.7.4-1.1.7-1.1s.6.5.7,1.1h-1.4M304,347.2c-.2-1-.6-1.8-1.1-1.8s-.9.7-1.1,1.8c-.9-.1-1.6-.5-1.6-.9s1.2-.9,2.7-.9,2.7.4,2.7.9-.7.7-1.6.9M299,347.9c0-.5.2-1,.5-1.4h0c0,.6,1,1.2,2.3,1.4h0c0,1.3.3,2.3.8,2.7-2-.1-3.6-1.3-3.6-2.7M303.3,350.6c.5-.3.8-1.3.8-2.5h0c1.3-.3,2.3-.9,2.3-1.5s0,0,0,0c.3.4.5.9.5,1.4,0,1.4-1.6,2.6-3.6,2.7" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
      </g>
    </g>
  </g>
  <g id="logo_pepsi">
    <g clip-path="url(#clippath-21)">
      <g clip-path="url(#clippath-22)">
        <g>
          <path d="M293.8,142.6c-1.3-1.3-3.1-2.1-4.9-2.1s-3.6.7-4.9,2.1c-1.3,1.3-2.1,3.1-2.1,4.9s.7,3.6,2.1,4.9c1.3,1.3,3.1,2.1,4.9,2.1s3.6-.7,4.9-2.1c1.3-1.3,2.1-3.1,2.1-4.9s-.7-3.6-2.1-4.9" pointer-events="visiblePainted"></path>
          <path d="M288.8,140.8c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7,6.7-3,6.7-6.7-3-6.7-6.7-6.7" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M283.1,150.1c1,2.2,3.2,3.7,5.7,3.7s4.8-1.6,5.8-3.8h-.3c-4.8-1.3-6.7,1.1-11.2.2" fill="#12009d" pointer-events="visiblePainted"></path>
          <path d="M283.1,145.1h.3c4.8,1.3,6.7-1.1,11.2-.2-1-2.2-3.2-3.7-5.7-3.7s-4.8,1.6-5.8,3.8" fill="#ed1a38" pointer-events="visiblePainted"></path>
          <path d="M288.3,148.8h.9v-.6l.7-.3c.5-.2.9-.4.9-.9h0c0-.5-.4-.8-1.1-.8h-1.4v2.6ZM289.2,147.5v-.7h.4c.2,0,.3,0,.3.2h0c0,.2-.1.2-.3.3h-.4v.2ZM283.1,148.8h.9v-.6l.7-.3c.5-.2.9-.4.9-.9h0c0-.5-.4-.8-1.1-.8h-1.4v2.6ZM284,147.5v-.7h.4c.2,0,.3,0,.3.2h0c0,.2-.1.2-.3.3h-.4v.2ZM285.8,148.8h2.2v-.6h-1.4v-.3h1.1v-.6h-1.1v-.3h1.4v-.6h-2.2v2.6-.2h0ZM290.8,148.2c.3.4.8.7,1.5.7s1.2-.3,1.2-.9h0c0-.5-.4-.6-.9-.8h-.4c-.3-.1-.4-.2-.4-.3s.1-.2.3-.2.5,0,.5.3l.8-.3c-.2-.3-.5-.6-1.3-.6s-1.2.3-1.2.8h0c0,.4.2.6.9.8h.5c.3.2.4.2.4.3s-.1.2-.3.2c-.4,0-.6-.2-.8-.3l-.8.3h0ZM293.7,148.8h.9v-2.6l-.9.3v2.2h0Z" pointer-events="visiblePainted"></path>
        </g>
      </g>
    </g>
  </g>
  <g id="ELEKTRA">
    <g clip-path="url(#clippath-23)">
      <g clip-path="url(#clippath-24)">
        <g>
          <path d="M245.1,152.2h-19c-.2,0-.3-.1-.3-.3v-5.9c0-.2.1-.3.3-.3h19c.2,0,.3.1.3.3v5.9c0,.2-.1.3-.3.3" fill="#ee3124" pointer-events="visiblePainted"></path>
          <path d="M229.4,148.9c-.5,0-.9.2-1,.7,0,.2,0,.4.1.6.2.1.4.2.6.2v-.5c-.2,0-.4-.3-.3-.6,0-.3.3-.5.6-.4h0" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M230.1,150c-.2.1-.6,0-.7-.2v-.2.5c.2.3.6.4.8.2h0v-.3h-.2" fill="#fff" pointer-events="visiblePainted"></path>
          <polygon points="230.3 150.2 230.3 150.2 230.6 150.2 230.6 149.9 230.5 149.9 230.3 149.9 230.3 150.2" fill="#fff" pointer-events="visiblePainted"></polygon>
          <path d="M230.9,148.4l-.5.2c0,.3,0,.5-.3.6-.3,0-.5,0-.6-.3h0c.2.4.7.7,1.1.5.2,0,.4-.2.4-.4v-.7" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M230,147.8c.2.1.3.5.2.7l-.2.2c.2,0,.3-.1.4-.3.2-.3,0-.7-.2-.8h0l-.2.2h.2" fill="#fff" pointer-events="visiblePainted"></path>
          <polygon points="230 147.5 230 147.5 229.9 147.3 229.6 147.5 229.7 147.5 229.8 147.8 229.8 147.8 230 147.5" fill="#fff" pointer-events="visiblePainted"></polygon>
          <path d="M229.3,147.7c-.2-.1-.4-.2-.6-.2s-.4.2-.5.4l.4.3c.2-.2.5-.2.7,0s.2.5,0,.7h0c.3-.4.2-.9-.1-1.2" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M228.2,149.1c0-.3.2-.5.5-.5s.2,0,.2,0c-.1-.1-.3-.2-.5-.2-.3,0-.6.3-.6.6h0c0,.1.3.2.3.2v-.2" fill="#fff" pointer-events="visiblePainted"></path>
          <polygon points="227.9 149.1 227.9 149.1 227.7 149.4 228.1 149.5 228.1 149.4 228.2 149.2 227.9 149.1" fill="#fff" pointer-events="visiblePainted"></polygon>
          <path d="M242.8,149.7c0,.3-.1.4-.4.4s-.3,0-.3-.3.2-.4.6-.4.1,0,.2,0v.2h-.1ZM243.2,149.9v-.4c0-.4,0-.7-.2-.8-.1-.1-.3-.2-.6-.2h-.4c-.3.1-.2.4-.2.4h.4c.3,0,.5.1.5.4h-.2c-.3,0-.6,0-.7.2-.2.1-.3.3-.3.5s0,.3.2.5.3.2.5.2h.3c.1,0,.2,0,.2-.2,0,0,0,.1.1.2h.5c-.1-.1-.2-.3-.2-.6" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M241.3,148.4c-.2,0-.4,0-.5.2v-.2h-.5v2.1h.5v-1.2c0-.1,0-.2.1-.3,0-.1.2-.2.3-.2h.4v-.4h-.4" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M239,148.8h-.6l.3-.4h.2v-.4l.5-.2v.6h.6v.4h-.6v1.2h.5v.4h-.5c-.2,0-.4,0-.5-.2-.1-.1-.2-.3-.2-.5v-1h.3Z" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M238.2,150.5h-.2l-.6-.9-.2.2v.7h-.5v-2.8l.5-.2v1.7l.7-.8h.6l-.7.8.8,1.3h-.4Z" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M233.8,147.7l.5-.2v2.3c0,.2,0,.4.2.4,0,.1-.2.2-.4.2s-.3-.2-.3-.4v-2.3Z" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M232.1,149.3h1c0-.3-.2-.4-.5-.4s-.4.1-.5.4M233.5,149.6h-1.4c0,.2,0,.3.2.4,0,0,.2.1.4.1h.6c-.2.3-.4.3-.8.3s-.5,0-.7-.3c-.2-.2-.3-.4-.3-.7s0-.6.3-.8c.2-.2.4-.3.7-.3s.5,0,.7.3c.2.2.3.4.3.7s0,.1,0,.2" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M235,149.3h1c0-.3-.2-.4-.5-.4s-.4.1-.5.4M236.5,149.6h-1.4c0,.2,0,.3.2.4.1,0,.2.1.4.1h.6c-.2.3-.4.3-.8.3s-.5,0-.7-.3c-.2-.2-.3-.4-.3-.7s0-.6.3-.8c.2-.2.4-.3.7-.3s.5,0,.7.3c.2.2.3.4.3.7v.2" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
      </g>
    </g>
  </g>
  <g id="zapata">
    <g clip-path="url(#clippath-25)">
      <g clip-path="url(#clippath-26)">
        <path d="M343.2,147.4h-.7c-.1,0-.2,0-.3.2-.2.8-.4,1.6-.7,2.4,0,.1,0,.3-.1.4h.9c.2-.8.4-1.6.7-2.4,0-.2.1-.3.2-.5M318.8,147.4v.5h1.6c-.5.6-1,1.3-1.6,1.9v.5h2.5v-.5h-1.6c.5-.6,1-1.2,1.5-1.9v-.5h-2.5.1ZM326.5,147.4h-1.3v3.1h.6v-1.2h.9c.4,0,.6-.2.8-.5.1-.4,0-.7-.2-1-.2-.2-.5-.3-.7-.3M326.5,148.8h-.7v-.9h.7c.3,0,.4.2.4.4s-.1.4-.4.4M334.8,147.5h-.6s-.1,0-.1.1c-.3.7-.5,1.5-.8,2.2,0,.2-.2.5-.3.7h.7c0-.2,0-.4.2-.6h1.1c0,.2.1.4.2.6h.6l-.3-.9c-.3-.7-.5-1.4-.8-2.1M334.1,149.2c.1-.4.3-.7.4-1.1.1.4.2.7.4,1.1h-.8ZM323.9,148.5c0-.3-.2-.6-.4-1h-.6v.3c-.3.7-.5,1.4-.8,2.1,0,.2-.1.3-.2.5h.6c0-.2.1-.4.2-.6h1.2c0,.2,0,.4.2.6h.6c-.2-.6-.5-1.3-.7-1.9M322.8,149.2c0-.4.3-.7.4-1.1.1.4.2.7.4,1.1h-.8M329.5,147.5h-.7c-.3.9-.6,1.6-.8,2.4,0,.2-.2.5-.2.7h.6c0-.2,0-.5.2-.7h1.1c0,.2,0,.4.2.6h.6v-.3c-.3-.9-.6-1.8-1-2.7M328.7,149.2c0-.4.3-.7.4-1.1.1.4.2.7.4,1.1h-.8ZM333,147.4h-2.3v.5h.9v2.5h.6v-2.5h.9v-.5h-.1ZM338.9,147.4h0c-.2.8-.4,1.6-.7,2.4,0,.2,0,.3-.1.5h.9c.3-1,.5-1.9.8-2.9h-.8M340.6,147.4h0c-.2.8-.4,1.6-.6,2.3,0,.2-.1.4-.2.6h.9c.2-.7.4-1.3.6-2,0-.3.2-.6.3-1h-.8" fill="#fff" pointer-events="visiblePainted"></path>
      </g>
    </g>
  </g>
  <g id="MEGA_flat">
    <g clip-path="url(#clippath-27)">
      <g clip-path="url(#clippath-28)">
        <g>
          <path d="M353.2,338.1c3.8-.2,7.3,2.8,7.8,6.6.7,6-5.7,10.4-11,7.5-6.6-3.6-4.4-13.6,3.3-14.1h0ZM348.6,350.9c1.5-3.9,5-6.8,9-7.8,0-.1-.3-.8-.4-1-.4-.7-1.1-1.2-1.8-1.5-4,1.5-7,5.1-7.8,9.2,0,0,.8,1,.9,1.1s0,0,0,0h0ZM347.3,349.2c.4-2.2,1.4-4.3,2.8-6,.2-.3.5-.5.6-.7,0-.2-.5-.7-.6-.8,0-.1-.8-.5-1-.3s-.8,1-.9,1.2c-.8,1.2-1.4,2.9-1.6,4.4v.9c0,.3.5,1.2.6,1.4,0,.2,0,0,0,0h.1ZM355.9,345c-2.7,1-5.3,3.2-6.7,5.7,0,.1-.3.4-.2.6,0,.2.9.6.9.6,1.7-2,3.9-3.5,6.4-4.3.2,0,1.1-.3,1.1-.3.2-.3-.4-1.4-.6-1.7-.2-.3-.7-.7-.9-.7h0Z" fill="#0072bc" pointer-events="visiblePainted"></path>
          <path d="M348.6,350.9h0c-.1,0-.9-1-.9-1.1.8-4.1,3.9-7.7,7.8-9.2.8.3,1.4.8,1.8,1.5s.5.9.4,1c-4,1-7.5,3.9-9,7.8h0Z" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M355.9,345c.2,0,.8.5.9.7.2.3.8,1.4.6,1.7-.2.3-.9.3-1.1.3-2.5.8-4.7,2.3-6.4,4.3l-.9-.6s0-.4.2-.6c1.4-2.6,4-4.7,6.7-5.7h0Z" fill="#fff" pointer-events="visiblePainted"></path>
          <path d="M347.3,349.2h-.1c-.2-.2-.6-1.2-.6-1.4v-.9c.2-1.5.8-3.1,1.6-4.4.8-1.3.7-1.1.9-1.2.2,0,.8.2,1,.3.2.1.7.7.6.8-.2.3-.4.5-.6.7-1.4,1.7-2.4,3.8-2.8,6h0Z" fill="#fff" pointer-events="visiblePainted"></path>
        </g>
      </g>
    </g>
  </g>
  <g id="Boing_x21_">
    <g clip-path="url(#clippath-29)">
      <g clip-path="url(#clippath-30)">
        <g>
          <path d="M261,347s0-.2-.5-.4c-.2,0-.5-.2-.8-.2s0,0,0,0c0,0-.2,0-.2.2l-.4,2.1h-.2v-.2h0c-.1-.3-1.1-.6-1.7-.7,0,0-.2,0-.2.2v.8q-.1,0-.1.2h.4c0,.3-.2.6-.4.6s0,0,0,0c-.1,0-.2-.7-.2-1.1.1-.8.3-1.2.7-1.5h.2v.7h.2c.3,0,.5,0,.8.2.1,0,.2,0,.2-.2.1-1-.3-1.6-1.1-1.8h-1c0-.1,0-.2-.2-.2h-1.3s-.2,0-.2.2v.6s-.2.3-.2.5c-.1-.3-.1-.7,0-.9,0,0,0-.2-.2-.2h-1.9l-1.3.2s-.2,0-.2.2c-.2,0-.3-.1-.5-.1h-.4c-.3.1-.6.5-.8.9,0,.3-.2.5-.2.8-.2-.2-.3-.3-.5-.4.1-.2.2-.5.1-.8-.1-.6-.6-.9-1.3-.9h-.4c-.7.2-1.4.5-1.8.8-.1,0-.3.2-.4.4h0v.6h.5v2.7h0v.6s0,.3-.5.3-.2,0-.2.2v.4h1.6c2.4-.7,3-1.9,3.1-2.3v-.2c.1.2.3.3.4.4.2,0,.3.1.5.1.3,0,.5-.1.7-.2h1.6s.2,0,.2-.2.9,0,.9,0c.1,0,.2,0,.2-.2v-.4h-.1c-.1,0,0,0,0,0v-1c.2.4.3.7.5,1.1v.3h-.1v.3s0,.2.2.2l1.6.3h.1c.3.3.7.4.8.4h.4c1,0,1.5-.9,1.7-1.2h0c.1.4.5.5.8.5s.4,0,.5-.2.1-.3,0-.5h0s.1,0,.2-.2l1-2h0c0-.1-.6,0-.6,0v.2ZM252.5,346.7h0v.2h0c0,.1,0,0,0,0h0v-.2ZM250.2,348.7c-.2-.5,0-1.1.2-1.3v.2c.2.3.2.9,0,1.3v.2s0-.1-.2-.3h0ZM247.1,347.5s0,.2-.1.2v-.5h.2v.2h0ZM247.7,349.6c0,.2-.4.5-.8.6v-1.2h.4c.2,0,.3,0,.3.2v.6-.2h.1Z" fill="#fff" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M255,346.2h1.3v.3c-.3,0-.5.2-.6.4-.3.4-.5.9-.6,1.6,0,.5,0,1.4.5,1.4v.3c-.5,0-1.1-.2-1.6-.3v-.2c.4,0,.3-.4.2-.6-.2-.4-.3-.7-.5-1.1,0-.2-.2-.3-.2-.5-.1.2-.3,1.5,0,1.7h.3v.2h-1.1v-.2c.3,0,0-.7.3-2.4,0-.2,0-.4-.2-.4v-.2h1.8c-.2.5,0,1.1.2,1.4v.2c0-.4.1-.7.3-1,0,0,.2-.3.2-.5h0v-.2h-.3,0Z" fill="#00ae44" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M252.4,346.3v.2c-.2.1,0,.4,0,.5.2.7.2,1.6,0,2.3,0,.1,0,.2.2.2v.2h-1.4v-.2c.4,0,.4-.6.5-1,0-.2,0-1.5-.4-1.8h-.3v-.3c.4,0,.9,0,1.3-.2h0Z" fill="#00ae44" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M257.7,347.7v-.3c0-.4-.2-.6-.6-.3-.4.3-.6.9-.7,1.6,0,.4,0,1.3.3,1.4.4.2.7-.5.8-.9h-.5v-.8c.6,0,1.5.4,1.6.5,0,.2-.2.5-.3.7-.3.5-.9,1.3-1.8,1.1,0,0-.8-.2-1.1-1.2-.3-1.3.4-2.6,1.2-3h.9c.7.2,1.1.7,1,1.6-.3,0-.6-.2-.9-.2h0v-.2Z" fill="#00ae44" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M260.8,347.1c-.3.7-.6,1.3-1,2,0,0-.3-.2-.6-.2.1-.7.3-1.4.4-2.1.5,0,1.2.3,1.2.4h0Z" fill="#00ae44" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M248.1,347.8s.3-.4.3-.8c-.2-.9-1.3-.7-1.4-.7-.6.1-1.3.5-1.8.8,0,.1-.3.2-.4.3v.3c.3,0,.5-.1.6,0,.2.2,0,.9,0,1.3v2.3c0,.3-.4.4-.7.4v.4c.3,0,.6,0,.8-.1.2,0,.4,0,.6-.2,2.4-.7,2.9-1.9,3-2.2.2-.8-.3-1.7-1-1.9h0ZM246.8,347.1h0c.2,0,.4,0,.5.1v.3c0,.3-.3.5-.6.5v-1h.1ZM247.9,349.7c-.2.4-.6.7-1.2.7v-1.6c.4-.1.9-.2,1.1,0v.8h0Z" fill="#00ae44" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M259.1,349.1c.3,0,.9.2.6.6-.2.3-1.1,0-.9-.4,0-.1.2-.2.3-.2" fill="#00ae44" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M251.4,347.6c0-.3-.2-.6-.4-.8,0-.2-.4-.3-.6-.3h-.3c-.3,0-.5.5-.7.8-.3.9,0,2,.6,2.4.5.3,1,0,1.2-.3.3-.4.5-1.1.3-1.8h-.1ZM250.6,348.9s0,.3-.3.3-.3-.3-.4-.4c-.2-.6,0-1.4.3-1.6,0,0,.3.2.3.3.2.4.2,1.1,0,1.5h0Z" fill="#00ae44" fill-rule="evenodd" pointer-events="visiblePainted"></path>
          <path d="M258.7,350.1c.2,0,.3,0,.3.3s0,.3-.3.3-.3,0-.3-.3,0-.3.3-.3M258.7,350.2c-.1,0-.2.1-.2.3s.1.3.2.3.2-.1.2-.3-.1-.3-.2-.3M258.6,350.6h0v-.3h.2l-.2.3Z" fill="#00ae44" pointer-events="visiblePainted"></path>
        </g>
      </g>
    </g>
  </g>
  <g id="Sabritas">
    <g clip-path="url(#clippath-31)">
      <g clip-path="url(#clippath-32)">
        <path d="M395.9,309.2c.2,0,.4.2.4.4s-.2.4-.4.4-.4-.2-.4-.4.2-.4.4-.4" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M387.7,318.3c-2.3,0-4.4-1.1-5.8-2.9,0,0,0,0,0,0-.5,0-.8-.3-.8-.3,0,0,0,0,0,0,0-.1-.3-.4-.4-.7-1-2.4-.4-5.4.1-6.2.1-.2.2-.3.4-.4,0,0,0,0,0,0,1.3-2.4,3.7-3.9,6.4-3.9s4.6,1.2,6,3.1c.1,0,.2,0,.3,0,.3,0,.5.2.6.2h0c.2.1.4.4.5.7.4,1,.7,2.8,0,4.9-.1.3-.3.6-.6.9-1,2.9-3.8,4.8-6.8,4.8Z" fill="#fffce6" pointer-events="visiblePainted"></path>
        <path d="M387.7,304.1c3.8,0,7,3.1,7,7s-3.1,7-7,7-7-3.1-7-7,3.1-7,7-7" fill="#fe0" pointer-events="visiblePainted"></path>
        <path d="M387.7,304.1c-3.9,0-7,3.1-7,7s3.1,7,7,7,7-3.1,7-7-3.1-7-7-7M393.2,314.7c-.2.3-.5.6-.8.9h0c-1.3,1.2-3,2-4.8,2s-4.3-1.2-5.6-3c.4-.4,1.3-.7,2-.7,3,.1,6.3,2.1,9.1.7,0,0,0,0,0,0ZM387.4,313c-3.6,0-6.3,1.8-6.3-1.9s3-6.6,6.6-6.6,6.6,3,6.6,6.6-3.2,1.9-6.9,1.9Z" fill="#f18831" pointer-events="visiblePainted"></path>
        <path d="M393.2,314.7c-2.8,1.4-6.1-.6-9.1-.7-.8,0-1.7.2-2,.7.7-.4,1.4-.4,2-.3,2.8.3,5.5,2.1,8.3,1.3.3-.3.5-.6.8-.9,0,0,0,0,0,0Z" fill="#fddb0f" pointer-events="visiblePainted"></path>
        <path d="M394,307.8c0,0,.1,0,.2-.2,0,0,.1-.2.2-.2,0,0,0-.2,0-.2,0,0-.3-.3-.8,0,.1.2.2.4.3.6,0,0,0,0,0,0Z" fill="#f7a434" pointer-events="visiblePainted"></path>
        <path d="M381.5,314.3s0,0,0,0c0,.1-.2.2-.2.4,0,0,0,.2,0,.3,0,0,.2.3.8.2h0c-.2-.3-.4-.5-.5-.8h0Z" fill="#f7a434" pointer-events="visiblePainted"></path>
        <path d="M395.9,309.3c.2,0,.3.1.3.3s-.1.3-.3.3-.3-.1-.3-.3.1-.3.3-.3M395.9,309.8c.1,0,.3-.1.3-.3s-.1-.3-.3-.3-.3.1-.3.3.1.3.3.3M395.8,309.4h.1c0,0,.1,0,.1.1s0,0,0,0v.2c0,0,0,0,0,0v-.2h-.1v.2h0v-.4ZM395.9,309.6s0,0,0,0,0,0,0,0h0c0,.1,0,.1,0,.1Z" fill="#231f20" pointer-events="visiblePainted"></path>
        <path d="M395.1,308.7c0-.4-.3-1.1-.7-1.4,0,0,0,.3-.3.5-.2.2-.5.3-1,.4-.5.1-1.2.2-1.9.2-.7,0-1.7,0-2.9-.2-1.2-.2-2-.3-2.5-.4-.5,0-1.7-.3-2.4-.2-.7,0-.9,0-1.5.2-.6.2-.8.5-1,.7-.1.2-.3.5-.4,1.1-.1.6-.2,1.4-.2,1.9,0,.6,0,1.3.2,2.1.2.8.4,1.2.6,1.5,0,0,0-.1,0-.3,0-.1.2-.4.4-.6.2-.2.7-.3,1.6-.4,1,0,2,0,2.5.1.5,0,2.1.3,2.5.3.4,0,.8,0,1.1.1.3,0,1,0,1.5,0,.5,0,1,0,1.6-.2.7-.1,1-.3,1.2-.5.2-.1.5-.3.7-.5.2-.2.3-.4.5-1,.2-.7.3-1.2.3-1.9,0-.7,0-1.2-.2-1.5Z" fill="#cf3421" pointer-events="visiblePainted"></path>
        <path d="M382,309.4c.2,0,.4.2.7.2s.4-.2.5-.4c-.2-.2-.6-.3-1-.3-.9,0-1.4.5-1.4,1.1s.9,1.4.9,2-.2.4-.4.4-.6-.2-.9-.2-.5.2-.6.4c.2.2.6.3,1.1.3,1,0,1.5-.6,1.5-1.2,0-.8-.9-1.4-.9-2s.2-.4.4-.4Z" fill="#e1251b" pointer-events="visiblePainted"></path>
        <path d="M389.6,309.8c.2,0,.3-.1.3-.3s-.1-.3-.3-.3-.3.1-.3.3.1.3.3.3Z" fill="#e1251b" pointer-events="visiblePainted"></path>
        <path d="M386.7,310c-.3,0-.5.1-.6.3.1-.5.3-1.3.3-1.3h-.5c0,0-.1,0-.2.1l-.4,1.6c0,0-.2.7-.3,1.1h0c0,.2-.2.3-.3.3s-.2-.1-.2-.3c0-.1.4-1.8.4-1.8h-.5c0,0-.1,0-.2.1h0c0,0-.2-.2-.5-.2-.7,0-1.2,1-1.2,1.9,0,.5.3.7.6.7s.5-.2.7-.4c0,.3.2.4.5.4s.4,0,.6-.3h0c.2.1.5.3.9.3,1,0,1.3-1.2,1.4-1.9,0-.4-.2-.7-.6-.7ZM384.1,311.1c0,0,0,.3,0,.4-.1.4-.3.7-.5.7s-.2,0-.2-.3c0-.6.3-1.5.7-1.5.2,0,.2.4.1.7ZM386,312.2c-.1,0-.2,0-.3,0,0,0,.1-.6.2-.7.2-.7.4-1,.6-1s.2,0,.2.3c0,.5-.3,1.5-.7,1.5Z" fill="#e1251b" pointer-events="visiblePainted"></path>
        <path d="M394.4,310.3c.2,0,.3.1.4.1s.3-.2.4-.3c0,0-.1,0-.2,0,0,0,0,0,0,0-.1,0-.3,0-.5,0-.6,0-1,.3-1,.8s.7.8.7,1.1,0,.3-.4.3-.2,0-.3,0t0,0h0c0,0-.2,0-.3,0-.2,0-.2-.2-.2-.4,0-.1.4-1.7.4-1.7h-.5c0,0-.1,0-.2.1h0c0,0-.2-.2-.5-.2-.7,0-1.2.9-1.2,1.7h0c0,0-.2.4-.4.4s-.1,0-.1-.2c0,0,0-.2,0-.3l.3-1.2h.3c.2,0,.3-.4.3-.4h-.5l.2-.8h-.5c0,0-.1,0-.2.1,0,0,0,.3-.2.7h-.1c0,0-.1,0-.1.1v.3c0,0,.2,0,.2,0-.1.5-.2,1-.3,1.2,0,0,0,0,0,0,0,.2-.2.4-.4.4s-.1,0-.1-.2,0,0,0-.2l.4-1.8h-.5c0,0-.1,0-.2.1l-.4,1.6c0,.1,0,.2,0,.4,0,.4.3.5.5.5s.5-.1.7-.4c0,.3.3.4.5.4s.6-.2.7-.5c0,.3.3.5.6.5s.6-.2.7-.4c0,.3.2.4.5.4s.3,0,.4-.1c.2,0,.4.1.6.1.6,0,.9-.4.9-.8,0-.7-.8-.9-.8-1.2s0-.2.2-.2h0ZM392.7,311c0,0,0,.3,0,.3-.1.5-.3.7-.5.7s-.2,0-.2-.3c0-.5.3-1.5.6-1.5.2,0,.3.2.2.7Z" fill="#e1251b" pointer-events="visiblePainted"></path>
        <path d="M389,310.1c0,0-.2,0-.3,0-.2,0-.4.1-.5.4v-.4c0,0-.4,0-.4,0-.1,0-.2,0-.2.1-.1.5-.6,2.3-.6,2.3h.7s.2-1.1.3-1.4c0-.3.1-.4.2-.5.1-.1.3,0,.5-.2.1,0,.2-.2.2-.4Z" fill="#e1251b" pointer-events="visiblePainted"></path>
        <path d="M393.7,312.2h0s0,0,0,0" fill="#e1251b" pointer-events="visiblePainted"></path>
        <path d="M382,309.4c.2,0,.4.2.7.2s.4-.2.5-.4c-.2-.2-.6-.3-1-.3-.9,0-1.4.5-1.4,1.1s.9,1.4.9,2-.2.4-.4.4-.6-.2-.9-.2-.5.2-.6.4c.2.2.6.3,1.1.3,1,0,1.5-.6,1.5-1.2,0-.8-.9-1.4-.9-2s.2-.4.4-.4Z" fill="#999" pointer-events="visiblePainted"></path>
      </g>
      <g clip-path="url(#clippath-33)">
        <rect x="389.3" y="309.1" width=".7" height=".7" transform="translate(75.1 695.1) rotate(-89.3)" fill="url(#Degradado_sin_nombre_2)" pointer-events="visiblePainted"></rect>
      </g>
      <g clip-path="url(#clippath-34)">
        <path d="M386.7,310c-.3,0-.5.1-.6.3.1-.5.3-1.3.3-1.3h-.5c0,0-.1,0-.2.1l-.4,1.6c0,0-.2.7-.3,1.1h0c0,.2-.2.3-.3.3s-.2-.1-.2-.3c0-.1.4-1.8.4-1.8h-.5c0,0-.1,0-.2.1h0c0,0-.2-.2-.5-.2-.7,0-1.2,1-1.2,1.9,0,.5.3.7.6.7s.5-.2.7-.4c0,.3.2.4.5.4s.4,0,.6-.3h0c.2.1.5.3.9.3,1,0,1.3-1.2,1.4-1.9,0-.4-.2-.7-.6-.7ZM384.1,311.1c0,0,0,.3,0,.4-.1.4-.3.7-.5.7s-.2,0-.2-.3c0-.6.3-1.5.7-1.5.2,0,.2.4.1.7ZM386,312.2c-.1,0-.2,0-.3,0,0,0,.1-.6.2-.7.2-.7.4-1,.6-1s.2,0,.2.3c0,.5-.3,1.5-.7,1.5Z" fill="#999" pointer-events="visiblePainted"></path>
        <path d="M394.4,310.3c.2,0,.3.1.4.1s.3-.2.4-.3c0,0-.1,0-.2,0,0,0,0,0,0,0-.1,0-.3,0-.5,0-.6,0-1,.3-1,.8s.7.8.7,1.1,0,.3-.4.3-.2,0-.3,0t0,0h0c0,0-.2,0-.3,0-.2,0-.2-.2-.2-.4,0-.1.4-1.7.4-1.7h-.5c0,0-.1,0-.2.1h0c0,0-.2-.2-.5-.2-.7,0-1.2.9-1.2,1.7h0c0,0-.2.4-.4.4s-.1,0-.1-.2c0,0,0-.2,0-.3l.3-1.2h.3c.2,0,.3-.4.3-.4h-.5l.2-.8h-.5c0,0-.1,0-.2.1,0,0,0,.3-.2.7h-.1c0,0-.1,0-.1.1v.3c0,0,.2,0,.2,0-.1.5-.2,1-.3,1.2,0,0,0,0,0,0,0,.2-.2.4-.4.4s-.1,0-.1-.2,0,0,0-.2l.4-1.8h-.5c0,0-.1,0-.2.1l-.4,1.6c0,.1,0,.2,0,.4,0,.4.3.5.5.5s.5-.1.7-.4c0,.3.3.4.5.4s.6-.2.7-.5c0,.3.3.5.6.5s.6-.2.7-.4c0,.3.2.4.5.4s.3,0,.4-.1c.2,0,.4.1.6.1.6,0,.9-.4.9-.8,0-.7-.8-.9-.8-1.2s0-.2.2-.2h0ZM392.7,311c0,0,0,.3,0,.3-.1.5-.3.7-.5.7s-.2,0-.2-.3c0-.5.3-1.5.6-1.5.2,0,.3.2.2.7Z" fill="#999" pointer-events="visiblePainted"></path>
        <path d="M389,310.1c0,0-.2,0-.3,0-.2,0-.4.1-.5.4v-.4c0,0-.4,0-.4,0-.1,0-.2,0-.2.1-.1.5-.6,2.3-.6,2.3h.7s.2-1.1.3-1.4c0-.3.1-.4.2-.5.1-.1.3,0,.5-.2.1,0,.2-.2.2-.4Z" fill="#999" pointer-events="visiblePainted"></path>
      </g>
      <g clip-path="url(#clippath-35)">
        <rect x="393.6" y="312.2" width="0" height="0" fill="url(#Degradado_sin_nombre_21)" pointer-events="visiblePainted"></rect>
      </g>
      <g clip-path="url(#clippath-36)">
        <path d="M385.8,311.3c.2-.7.4-1,.6-1s.2,0,.2.3c0,.5-.3,1.5-.7,1.5s-.2,0-.3,0c0-.1.1-.6.2-.7ZM385.9,310.5c0-.1.4-1.7.4-1.7h-.5c0,0-.1,0-.2.1l-.4,1.6c0,.1-.2,1-.3,1.3,0,0,0,0,0,0,0,.1,0,.2,0,.2.2.1.5.3.9.3,1,0,1.3-1.2,1.4-1.9,0-.4-.2-.7-.6-.7s-.6.2-.8.5" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M385,311.7c0,.2-.2.3-.4.3s-.2-.1-.1-.3c0-.1.4-1.8.4-1.8h-.5c0,0-.1,0-.2.1h0c0,0-.3-.2-.5-.2s-.6.2-.8.4c-.3.4-.4.9-.4,1.4,0,.5.3.7.6.7s.6-.2.7-.4c0,.3.2.4.5.4s.5-.1.7-.4M384,311.3c-.1.4-.3.7-.5.7s-.2,0-.2-.3c0-.6.3-1.5.7-1.5s.2.2.2.6c0,0-.1.5-.1.5Z" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M391.1,310.3h-1.2v-.3c0,0,.1-.1.2-.1h1.3s-.1.4-.3.4Z" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M389.2,309.4c0,.2.1.3.3.3s.3-.1.3-.3c0-.2-.1-.3-.3-.3s-.3.1-.3.3Z" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M388.1,310.3c.2-.3.3-.4.5-.4s.2,0,.3,0c0,.2-.1.4-.2.4-.2,0-.3,0-.5.2-.1,0-.2.2-.2.5,0,.3-.3,1.4-.3,1.4h-.7s.4-1.8.6-2.3c0,0,0-.1.2-.1h.5v.4Z" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M391.1,312c-.1.2-.4.5-.8.5s-.6-.2-.5-.6c0-.1,0-.3,0-.4,0-.3.5-2.2.5-2.2,0,0,0-.1.2-.1h.5l-.6,2.4c0,.1,0,.2,0,.3,0,.1,0,.2.1.2.2,0,.4-.3.4-.5" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M389.9,312c-.2.3-.4.4-.7.4s-.5-.1-.5-.5c0-.1,0-.2,0-.4l.4-1.6c0,0,0-.1.2-.1h.5l-.4,1.8c0,0,0,.1,0,.2,0,0,0,.2.1.2.2,0,.3-.2.4-.4" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M393.4,311.9c0,0-.1,0-.2,0-.1,0-.2,0-.1-.4,0-.1.4-1.7.4-1.7h-.5c0,0-.1,0-.2.1h0c0,0-.2-.2-.5-.2s-.6.2-.8.4c-.3.4-.4.9-.4,1.4,0,.5.3.7.6.7s.6-.2.7-.4c0,.3.2.4.5.4s.3,0,.4-.2c.2,0,.4.2.6.2M392.5,310.9c0,0,0,.3,0,.3-.1.5-.3.7-.5.7s-.2,0-.2-.3c0-.5.3-1.5.6-1.5.2,0,.3.2.2.7Z" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M394.4,310.2c.2,0,.3.1.4.1s.3-.1.3-.3c-.2-.1-.4-.2-.7-.2-.6,0-.9.3-.9.8s.7.8.7,1.2,0,.2-.3.2-.4-.2-.6-.2c0,0-.2,0-.2.2.1.1.4.3.8.3.6,0,.9-.4.9-.8s-.7-.8-.7-1.2,0-.2.3-.2Z" fill="#fff" pointer-events="visiblePainted"></path>
        <path d="M382.6,309.5c-.2,0-.4-.2-.7-.2s-.4.2-.4.4c0,.6.9,1.1.9,2s-.4,1.1-1.4,1.1-.9-.2-1.1-.4c0-.2.3-.3.5-.3s.5.2.9.2.4-.1.4-.4c0-.6-.9-1.2-.9-2s.4-1.1,1.4-1.1.7.1,1,.3c0,.2-.2.4-.5.4Z" fill="#fff" pointer-events="visiblePainted"></path>
      </g>
    </g>
  </g>
</svg>

</template>

<style scoped>

</style>

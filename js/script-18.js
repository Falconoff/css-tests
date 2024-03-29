//#cpc-on-off #codepenchallenge
let root = document.documentElement;
let color = ["#47cf73", "#7f71fe", "#1A3AF8", "#47cf73"];
var animateDur = "1.4s";

window.onload = function () {
  let activeChecked = document.querySelector(
    ".radio-checked_input:checked + .radio-checked_label",
  );
  let left = activeChecked.offsetLeft;
  let width = activeChecked.offsetWidth;
  animation(left, width);
};

document
  .querySelectorAll(".radio-checked_label")
  .forEach(t => t.addEventListener("click", onChecked));

function onChecked(e) {
  let left = e.target.offsetLeft;
  let width = e.target.offsetWidth;
  animation(left, width);
}
var bool = true;
function animation(left, width) {
  root.style.setProperty(
    "--pagination-width",
    width + "px",
  );
  root.style.setProperty("--highlight-left", left + "px");
  (bool = !bool) ? svgCreate("right") : svgCreate("left");
}

function svgCreate(position) {
  let svgLeft =
    `<svg class="svg_icon" fill="none" viewBox="0 0 132 140" xmlns="http://www.w3.org/2000/svg">
<path d="M110 50.4209L68.7302 25.4209" id="Line1"/>
<path d="M110 59.498L45.9597 54.498" id="Line2"/>
<path d="M110 70.4824L46.1323 87.4824" id="Line3"/>
<path d="M110 79.3584L73.3484 113.358" id="Line4"/>
<path d="M110 73.4473L34.2236 110.447" id="Line5"/>
<path d="M110 64.499L24.0356 70.499" id="Line6"/>
<path d="M110 54.4736L39.8398 31.4736" id="Line7"/>
<path d="M110 56.4893L23.8953 38.4893" id="Line8"/>
<path d="M110 67.4893L21.1013 85.4893" id="Line9"/>
<path d="M110 85.2861L85.4102 118.286" id="Line10"/>
<path d="M110 76.4111L50.2839 116.411" id="Line11"/>
<path d="M110 61.4995L18.9907 59.4307" id="Line12"/>
		
		<g> <g> <g class="svg_obj"> <path d="M14.6324 5.25L20.9832 16.25C21.5606 17.25 20.8389 18.5 19.6842 18.5H6.98249C5.82778 18.5 5.10609 17.25 5.68344 16.25L12.0343 5.25C12.6116 4.25 14.055 4.25 14.6324 5.25Z" fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="3" stroke=` +
    color[Math.floor(Math.random() * 4)] +
    `></path>
		</g> <animateMotion begin="0s" dur=` +
    animateDur +
    ` repeatCount="1"> <mpath xlink:href="#Line` +
    Math.floor(Math.random() * 6 + 6) +
    `"></mpath> </animateMotion> </g> </g> <g> <g> <g class="svg_obj"> <circle cx="12" cy="11" r="6.5" stroke-width="3" stroke=` +
    color[Math.floor(Math.random() * 4)] +
    `></circle> </g> <animateMotion begin="0s" dur=` +
    animateDur +
    ` repeatCount="1"> <mpath xlink:href="#Line` +
    Math.floor(Math.random() * 12 + 1) +
    `"></mpath> </animateMotion> </g> </g> 
		 <g> <g> <g class="svg_obj"> <circle cx="12" cy="11" r="6.5" stroke-width="3" stroke=` +
    color[Math.floor(Math.random() * 4)] +
    `></circle> </g> <animateMotion begin="0s" dur=` +
    animateDur +
    ` repeatCount="1"> <mpath xlink:href="#Line` +
    Math.floor(Math.random() * 6 + 1) +
    `"></mpath> </animateMotion> </g> </g> 
		 <g> <g> <g class="svg_obj"> <circle cx="12" cy="11" r="6.5" stroke-width="3" stroke=` +
    color[Math.floor(Math.random() * 4) + 1] +
    `></circle> </g> <animateMotion begin="0s" dur=` +
    animateDur +
    ` repeatCount="1"> <mpath xlink:href="#Line` +
    Math.floor(Math.random() * 12 + 1) +
    `"></mpath> </animateMotion> </g> </g> 
		</svg>`;
  let svgRight =
    `<svg class="svg_icon" fill="none" viewBox="0 0 132 140"  xmlns="http://www.w3.org/2000/svg" >
<path d="M20 54.6191L64.6763 20.6191" id="Line13"/>
<path d="M20 56.5518L97.7788 20.5518" id="Line14"/>
<path d="M20 58.5176L90.8684 40.5176" id="Line15"/>
<path d="M20 63.5L111.989 61.5" id="Line16"/>
<path d="M20 69.5029L100.053 77.5029" id="Line17"/>
<path d="M20 73.5166L105.127 94.5166" id="Line18"/>
<path d="M20 77.5479L91.2126 108.548" id="Line19"/>
<path d="M20 80.6191L58.3235 108.619" id="Line20"/>
<path d="M20 83.7598L42.4385 114.76" id="Line21"/>
<path d="M20 66.5L98.0205 69.5" id="Line22"/>
<path d="M20 60.5049L102.93 49.5049" id="Line23"/>
<path d="M20 75.5303L83.1702 96.5303" id="Line24"/>
		
		<g> <g> <g class="svg_obj"> <path d="M14.6324 5.25L20.9832 16.25C21.5606 17.25 20.8389 18.5 19.6842 18.5H6.98249C5.82778 18.5 5.10609 17.25 5.68344 16.25L12.0343 5.25C12.6116 4.25 14.055 4.25 14.6324 5.25Z" fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="3" stroke="#d0d8e3"></path>
		</g> <animateMotion begin="0s" dur=` +
    animateDur +
    ` repeatCount="1"> <mpath xlink:href="#Line` +
    Math.floor(Math.random() * 12 + 13) +
    `"></mpath> </animateMotion> </g> </g> 
		
		<g> <g> <g class="svg_obj"> <path d="M17.2394 3L7.6162 18.2116M5 5.51355L20.2116 15.1367" stroke="#ff3c41" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g> <animateMotion begin="0s" dur=` +
    animateDur +
    ` repeatCount="1"> <mpath xlink:href="#Line` +
    Math.floor(Math.random() * 12 + 13) +
    `"></mpath> </animateMotion> </g> </g> 
		<g> <g> <g class="svg_obj"> <path d="M17.2394 3L7.6162 18.2116M5 5.51355L20.2116 15.1367" stroke="#acb2c0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g> <animateMotion begin="0s" dur=` +
    animateDur +
    ` repeatCount="1"> <mpath xlink:href="#Line` +
    Math.floor(Math.random() * 12 + 13) +
    `"></mpath> </animateMotion> </g> </g> 
		</svg>`;

  let span = document.createElement("span");
  let radioChecked = document.querySelector(
    ".radio-checked",
  );
  span.className = "svg svg--" + position;
  if (position === "left") {
    span.innerHTML = svgLeft;
  } else {
    span.innerHTML = svgRight;
  }

  setTimeout(function () {
    radioChecked.appendChild(span);
  }, 400);
  setTimeout(function () {
    span.remove();
  }, 1500);
}

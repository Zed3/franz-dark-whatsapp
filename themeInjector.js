function injectTheme() {
  let menu = document.querySelector("._3s1D4");
  menu.insertAdjacentHTML('beforeend', /*html*/`
<li tabindex="-1" class="_10anr vidHz _28zBA" data-animate-dropdown-item="true" style="opacity: 1; transform: translateY(0px);"><div class="_3lSL5 _2dGjP" role="button" title="Theme">Theme</div></li>
`);
}

module.exports = injectTheme;
import '@babel/polyfill';
import $ from 'jquery';

// Input
const input = $('#copytext');
const copyHTML = $('#copy-html');
const copyCSS = $('#copy-css');
const copySASS = $('#copy-sass');

// Values
let toggleWidth = $('#toggle-width__value').val() + 'px';
let toggleHeight = $('#toggle-height__value').val() + 'px';
let togglePadding = $('#toggle-padding__value').val() + 'px';
let toggleInactiveColor = $('#toggle-inactive-color__value').val();
let toggleActiveColor = $('#toggle-active-color__value').val();
let toggleInactiveHoverColor = $('#toggle-inactive-hover-color__value').val();
let toggleActiveHoverColor = $('#toggle-active-hover-color__value').val();

/* prettier-ignore */
$('#controls').on('change', () => {

  toggleWidth = $("#toggle-width__value").val() + "px";
  toggleHeight = $("#toggle-height__value").val() + "px";
  togglePadding = $("#toggle-padding__value").val() + "px";
  toggleInactiveColor = $("#toggle-inactive-color__value").val();
  toggleActiveColor = $("#toggle-active-color__value").val();
  toggleInactiveHoverColor = $("#toggle-inactive-hover-color__value").val();
  toggleActiveHoverColor = $("#toggle-active-hover-color__value").val();

	$(document.documentElement).css('--toggle-width', toggleWidth);
	$(document.documentElement).css('--toggle-height', toggleHeight);	
	$(document.documentElement).css('--toggle-padding', togglePadding);
	$(document.documentElement).css('--inactive-color', toggleInactiveColor);
	$(document.documentElement).css('--active-color', toggleActiveColor);
	$(document.documentElement).css('--inactive-hover-color', toggleInactiveHoverColor);
	$(document.documentElement).css('--active-hover-color', toggleActiveHoverColor);
});

const toggleHTML = () => `
<label for="toggle-1" class="checkbox-container">
  <input type="checkbox" id="toggle-1" class="toggle"></input>
  <span class="checkmark"></span>
  <span class="label-text">label</span>
</label>`;

const toggleCSS = () => `
.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: 10px;
  box-sizing: border-box;
  /* The order of these two is important */ }
  .checkbox-container:nth-last-child(1) {
    padding-bottom: 0; }
  .checkbox-container:hover input ~ .checkmark {
    background: ${toggleInactiveHoverColor}; }
  .checkbox-container input ~ .label-text {
    color: ${toggleInactiveColor};
    transition: 0.3s; }
  .checkbox-container input:hover ~ .label-text {
    color: ${toggleInactiveHoverColor}; }
  .checkbox-container input:checked ~ .checkmark {
    background-color: ${toggleActiveColor}; }
  .checkbox-container input:checked:hover ~ .checkmark {
    background: ${toggleActiveHoverColor}; }
  .checkbox-container input:checked ~ .checkmark:after {
    margin-left: calc(${toggleWidth} - ${toggleHeight}); }
  .checkbox-container input:checked ~ .label-text {
    color: ${toggleActiveColor}; }
  .checkbox-container input:checked:hover ~ .label-text {
    color: ${toggleActiveHoverColor}; }
  .checkbox-container .checkmark {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: ${toggleWidth};
    height: ${toggleHeight};
    margin-right: 10px;
    background: ${toggleInactiveColor};
    border-radius: 10000px;
    padding: ${togglePadding};
    transition: 0.3s; 
    box-sizing: border-box }
    .checkbox-container .checkmark:after {
      content: "";
      background: white;
      display: block;
      position: absolute;
      height: calc(${toggleHeight} - (${togglePadding} * 2));
      width: calc(${toggleHeight} - (${togglePadding} * 2));
      border-radius: 100%;
      transition: 0.3s; }
  .checkbox-container .toggle {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0; }`;

const toggleSASS = () => `
.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: 10px;
  box-sizing: border-box;

  &:nth-last-child(1) {
    padding-bottom: 0;
  }

  /* The order of these two is important */
  &:hover input ~ .checkmark {
    background: ${toggleInactiveHoverColor};
  }

  input ~ .label-text {
    color: ${toggleInactiveColor};
    transition: 0.3s;
  }

  input:hover ~ .label-text {
    color: ${toggleInactiveHoverColor};
  }

  input:checked {
    & ~ .checkmark {
      background-color: ${toggleActiveColor};
    }

    &:hover ~ .checkmark {
      background: ${toggleActiveHoverColor};
    }

    & ~ .checkmark:after {
      margin-left: calc(${toggleWidth} - ${toggleHeight});
    }

    & ~ .label-text {
      color: ${toggleActiveColor};
    }

    &:hover ~ .label-text {
      color: ${toggleActiveHoverColor};
    }
  }

  .checkmark {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: ${toggleWidth};
    height: ${toggleHeight};
    margin-right: 10px;
    background: ${toggleInactiveColor};
    border-radius: 10000px;
    padding: ${togglePadding};
    transition: 0.3s;
    box-sizing: border-box;

    &:after {
      content: "";
      background: white;
      display: block;
      position: absolute;
      height: calc(${toggleHeight} - (${togglePadding} * 2));
      width: calc(${toggleHeight} - (${togglePadding} * 2));
      border-radius: 100%;
      transition: 0.3s;
    }
  }

  .toggle {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}`;

copyHTML.on('click', () => {
  input.val(toggleHTML());
  input.select();
  document.execCommand('copy');

  resetBtns();
  copyHTML.text('Copied to Clipboard!');
  copyHTML.css('opacity', '0.5');
});

copyCSS.on('click', () => {
  input.val(toggleCSS());
  input.select();
  document.execCommand('copy');

  resetBtns();
  copyCSS.text('Copied to Clipboard!');
  copyCSS.css('opacity', '0.5');
});

copySASS.on('click', () => {
  input.val(toggleSASS());
  input.select();
  document.execCommand('copy');

  resetBtns();
  copySASS.text('Copied to Clipboard!');
  copySASS.css('opacity', '0.5');
});

function resetBtns() {
  copyHTML.text('Copy HTML');
  copyHTML.css('opacity', '1');
  copyCSS.text('Copy CSS');
  copyCSS.css('opacity', '1');
  copySASS.text('Copy SASS');
  copySASS.css('opacity', '1');
}

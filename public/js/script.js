// constants and state variables

const datePickerOptions = {
    defaultDate: new Date(),
    setDefaultDate: true,
}

let year;


// cached element references

const yearEl = document.getElementById('year');
const selectEls = document.querySelectorAll('select');
const datepickerEls = document.querySelectorAll('.datepicker');

// event listeners

// functions

init();

function init() {
    year = new Date().getFullYear();
    M.FormSelect.init(selectEls);
    M.Datepicker.init(datepickerEls, datePickerOptions);
    render();
}

function render() {
    yearEl.textContent = year;
}
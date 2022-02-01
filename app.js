const gridderConatiner = document.querySelector('.gridder-container');
const $collapses = document.querySelectorAll('.collapse');

const setMarginBottom = (collapse, marginBottom) => {
  const gridderItem = collapse.closest('.gridder-item');
  gridderItem.style.marginBottom = marginBottom;
};

let marginBottom = '';

$collapses.forEach((collapse, index) => {
  if (index < 1) {
    marginBottom = window.getComputedStyle(collapse).height;
    window.bootstrap.Collapse.getOrCreateInstance(collapse).hide();
  }
  console.log(window.getComputedStyle(collapse).height);

  collapse.addEventListener('show.bs.collapse', function (event) {
    setMarginBottom(collapse, marginBottom);
  });
});

$collapses.forEach(collapse => {
  collapse.addEventListener('hide.bs.collapse', function (event) {
    console.log('hg');
    const gridderItem = collapse.closest('.gridder-item');
    gridderItem.style.marginBottom = 'unset';
  });
});

window.addEventListener('resize', () => {
  const collapse = document.querySelector('.collapse.show');
  setMarginBottom(collapse, window.getComputedStyle(collapse).height);
});

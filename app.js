const gridderConatiner = document.querySelector('.gridder-container');
const $collapses = document.querySelectorAll('.collapse');

$collapses.forEach(collapse => {
  collapse.addEventListener('show.bs.collapse', function (event) {
    document.querySelectorAll('.collapse.show').forEach(item => {
      const colla = window.bootstrap.Collapse.getInstance(item);
      console.log({ colla });
      colla.hide();
    });
    const gridderItem = collapse.closest('.gridder-item');
    gridderItem.style.marginBottom = '100px';
  });
});

$collapses.forEach(collapse => {
  collapse.addEventListener('hide.bs.collapse', function (event) {
    const gridderItem = collapse.closest('.gridder-item');
    gridderItem.style.marginBottom = 'unset';
  });
});

window.addEventListener('resize', () => {
  const containerWidth = window.getComputedStyle(gridderConatiner).width;
  console.log({ containerWidth });

  $collapses.forEach(collapse => {
    collapse.style.width = containerWidth;
  });
});

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);


  // setup image columns
  [...block.children].forEach((row) => {
  
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
        if(block.classList.contains('flex-block')){
         const image = pic.querySelector('img');
        const border = document.createElement('div');
        border.className = 'border';
        col.append(border);
     
    }
    
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}

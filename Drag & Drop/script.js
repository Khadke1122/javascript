const imgBox = document.querySelector('.imgBox');
const fishBoxes = document.getElementsByClassName('fishBox');

imgBox.addEventListener('dragstart', (e)=>{
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});
imgBox.addEventListener('dragend', (e)=>{
    e.target.className = 'imgBox';
});

for(fishBox of fishBoxes){
    fishBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
    });
    fishBox.addEventListener('dragenter', (e)=>{
        e.target.className += ' dashed';
    });
    fishBox.addEventListener('dragleave', (e)=>{
         e.target.className = 'fishBox';
    });
    fishBox.addEventListener('drop', (e)=>{
        e.target.append(imgBox);
    });
}
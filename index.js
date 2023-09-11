const frameContents = document.querySelectorAll('.frame .content');
const draggableFrameItems = document.querySelectorAll('.frame-item');
let globalItem;

frameContents.forEach((frame) => {
    frame.addEventListener('dragenter', dragEnter);
    frame.addEventListener('dragover', dragOver);
    frame.addEventListener('dragleave', dragLeave);
    frame.addEventListener('drop', drop);
});

draggableFrameItems.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

function dragEnter(e) {
    e.target.classList.add('.frame-scale');
    console.log('drag enter');
}

function dragLeave(e) {
    e.target.classList.remove('.frame-scale');
    console.log('drag leave');
}

function dragOver(e) {
    e.preventDefault();
    console.log('drag over');
}

function drop(e) {
    e.target.classList.remove('frame-scale');
    e.target.appendChild(globalItem);
    console.log('drag drop');
}

function dragStart(e) {
    e.target.classList.add('frame-item-rotate');
    globalItem = e.target;
    console.log('drag start');
}

function dragEnd(e) {
    e.target.classList.remove('frame-item-rotate');
    console.log('drag end');
}
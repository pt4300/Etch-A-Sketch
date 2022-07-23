
const slider = document.querySelector('.slider');

function sketch(){
    generateGrid(slider.value);
    const apply_button = document.querySelector('.apply');
    const reset_button = document.querySelector('.reset');
    const text_slider = document.querySelector('.text-slider');
    const gridElement = document.querySelectorAll('.column');
    text_slider.textContent = slider.value;
    slider.addEventListener('change',()=>{
        text_slider.textContent = slider.value;

    });
    apply_button.addEventListener('click',()=>{

        generateGrid(slider.value);
        sketch();
    });

    reset_button.addEventListener('click',()=>{
        reset();
        text_slider.textContent = slider.value;
    });

    gridElement.forEach((grid)=>{
        grid.addEventListener('mouseover',()=>{
            grid.style.background ="black";
        })
    });
    

}

function generateGrid(size){
    const container = document.querySelector('.grid-container');
    let cellWidth = 1100/size;
    let cellHeight = 800/size;
    container.innerHTML = "";
    for(let i =0;i<size;i++){
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = 'display:flex; background:darkgray; max-width=1100px;'
        container.appendChild(row);
        for(let i =0;i<size;i++){
            let column = document.createElement('div');
            column.classList.add('column');
            column.style.cssText = `flex:1 1 auto; height:${cellHeight}px;width:${cellWidth}px`;
            // column.textContent = `${i}`;
            row.appendChild(column);
        }
    }

}


function reset(){
    slider.value = 16;
    generateGrid(16);
    sketch();
    
}
sketch()

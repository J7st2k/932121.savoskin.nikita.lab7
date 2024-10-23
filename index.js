function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addShape(type) {
    const quantity = parseInt(document.getElementById('shape-quantity').value);
    if(quantity < 1 || quantity > 10) return;
    for (let i = 0; i < quantity; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape', type);
        
        let size;
        let left, top;
        if (type === 'square') {
            size = getRandomSize(50, 200); 
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            left = Math.random() * (window.innerWidth - size) + 'px';
            top = Math.random() * (window.innerHeight - size) + 'px';
        } else if (type === 'triangle') {
            size = getRandomSize(50, 200);
            shape.style.borderLeft = size + 'px solid transparent';
            shape.style.borderRight = size + 'px solid transparent';
            shape.style.borderBottom = size + 'px solid blue';
            left = Math.random() * (window.innerWidth - 2*size) + 'px';
            top = Math.random() * (window.innerHeight - size) + 'px';
        } else if (type === 'circle') {
            size = getRandomSize(50, 200);
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.borderRadius = '50%';
            left = Math.random() * (window.innerWidth - size) + 'px';
            top = Math.random() * (window.innerHeight - size) + 'px';
        }

        shape.style.left = left;
        shape.style.top = top;

        shape.addEventListener('click', () => {    
            if (type !== 'triangle') {
            shape.classList.toggle('selected');
            }
            if (type === 'triangle' && shape.style.borderBottomColor === 'blue') {
                shape.style.borderBottomColor = 'yellow'; 
            } else if (type === 'triangle') {
                shape.style.borderBottomColor = 'blue'; 
            }
        });

        shape.addEventListener('dblclick', () => {
            shape.remove();
        });

        document.body.appendChild(shape);
    }
}

/* 
Skill 부분 구현
컨테이너를 하나 만들고 이미지 두개씩 겹쳐 넣기
*/

const images = document.querySelector('.images');

for (let i = 0; i <= 7; i++) {
    const container = document.createElement('div');
    container.style.position = "relative";
    container.style.zIndex = 1;
    const img = new Image();
    const hover = new Image();
    
    img.src = `lang_${i}.png`;

    if (i == 0) {
        img.classList.add('imageProp');
        hover.src = `Familiar.png`;
        hover.classList.add('hoverPropFamiliar');
    } else {
        img.classList.add('imageProp');
        hover.src = `Tried.png`;
        hover.classList.add('hoverPropTried');
    }
    
    images.appendChild(container)
    container.appendChild(img);
    container.appendChild(hover);
}

//Create function newImage

function newImage(imgSrc, left, bottom){
    let item = document.createElement('img')
    item.src = imgSrc
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}

//newImage function calls (Delete previous code)

newImage('assets/pine-tree.png', 450, 200)
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//Create function newItem

function newItem(imgSrc, left, bottom){
    let item = newImage(imgSrc, left, bottom)

    item.addEventListener("dblclick", function () {
    item.remove()
    })
}

//newItem function calls
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

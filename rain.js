let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')
let AllSquares = []
///////////////////
function Square (x , y) {
    this.x = x
    this.y = y
    this.speed = (2 - Math.random()) * 8
    this.direction = Math.random()/20
    this.size = 10
    this.move = function (j) {
        context.fillStyle = "rgb(0, 136, 255)"
        context.fillRect(this.x , this.y , 2 - Math.random() , 10)
        this.x += Math.sin(this.direction * Math.PI/2)  * this.speed;
        this.y += Math.cos(this.direction * Math.PI/2)  * this.speed;

        if (this.y >= canvas.height) {
            AllSquares.splice(j,1)
        }
    }
}
///////////////////
const Create = () => {
    for (let i = 0; i < 20; i++) {
        let q = new Square(Math.floor(Math.random()*canvas.width) , 0)
        AllSquares.push(q)
    }
}
//////////////////
const Draw = () => {
    for (let j = 0; j < AllSquares.length; j++) {
        AllSquares[j].move(j)        
    }
}


const Update = () => {
    Create()
    context.clearRect(0 , 0 , canvas.width , canvas.height)
    Draw()
    requestAnimationFrame(Update)
}
Update()
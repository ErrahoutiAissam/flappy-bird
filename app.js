document.addEventListener("DOMContentLoaded", () => {
    const bird = document.querySelector('.birdy')
    const ground = document.querySelector('.ground-animated')
    const gameArea = document.querySelector('.game-container')


    let leftBird = 220;
    let bottomBird = 100;
    let gravity = 3;
    let isgameOver = false
    let gap = 430



    function startGame() {
        bottomBird -= gravity
        bird.style.bottom = bottomBird + 'px'
        bird.style.left = leftBird + 'px'

    }
    let timer = setInterval(startGame, 30)

    function spaceBar(e) {
        if (e.keyCode === 32) {
            jumping()
        }
    }

    function jumping() {
        if (bottomBird < 500 && bottomBird > 0)
            bottomBird += 50
        bird.style.bottom += bottomBird + 'px'
        // console.log(bottomBird)
    }
    document.addEventListener('keyup', spaceBar)

    function randomObstacles() {

        let randomObstacleHeigth = Math.random() * 60
        let obstacleBottom = randomObstacleHeigth
        let obstacleLeft = 440;
        const obstacle = document.createElement('div')
        const upperObstacle = document.createElement('div')
        if (!isgameOver) {
            obstacle.classList.add('obstacle')
            upperObstacle.classList.add('upperObstacle')
        }

        gameArea.appendChild(obstacle)
        gameArea.appendChild(upperObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        upperObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        upperObstacle.style.bottom = obstacleBottom + gap + 'px'


        function movingObstacles() {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'
            upperObstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -60) {
                clearInterval(timer2)
                gameArea.removeChild(obstacle)
                // console.log(10)
            }
            if (obstacleLeft > 200 && obstacleLeft < 280 && leftBird === 220 &&
                (bottomBird < obstacleBottom + 152 || bottomBird > obstacleBottom + gap - 190) ||
                bottomBird === -20
            ) {
                console.log(bottomBird)
                console.log(obstacleBottom + gap - 200)
                console.log("hello")
                clearInterval(timer2)
                gameOver()
            }

        }
        let timer2 = setInterval(movingObstacles, 20)
        if (!isgameOver) setTimeout(randomObstacles, 2300)



    } randomObstacles()

    function gameOver() {
        clearInterval(timer)
        console.log('game over')
        isgameOver = true
        document.removeEventListener('keyup', spaceBar)
        ground.classList.add('ground')
        ground.classList.remove('ground-animated')
        const button = document.createElement('button')
        const endGame = document.createElement('span')
        button.classList.add('play-again')
        endGame.classList.add('end-game-text')
        gameArea.appendChild(button)
        gameArea.appendChild(endGame)
        button.textContent = 'Play Again ?'
        endGame.textContent = 'Game Over'
        button.addEventListener("click", () => {
            window.location.reload();
            console.log(55)

        })

    }
})
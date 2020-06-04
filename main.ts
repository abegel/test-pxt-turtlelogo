let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . . 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.setScore(sprites.heading(mySprite))
game.onUpdate(function () {
    sprites.updateheading(mySprite)
    controller.moveSprite(mySprite)
    info.setScore(sprites.heading(mySprite))
})

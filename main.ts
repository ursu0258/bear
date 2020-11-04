scene.onOverlapTile(SpriteKind.Food, img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, function (sprite, location) {
    info.setLife(3)
    apple.destroy(effects.confetti, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileDarkGrass1)
    apple = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(apple, sprites.castle.tileDarkGrass2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("go to trees and get 5 fruit", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
})
let apple: Sprite = null
let carrot = sprites.create(img`
    ..............................
    .......4444444444444444.......
    ......444444444444444444......
    .....44444444444444444444.....
    ....4444444444444444444444....
    ....4444444444444444444444....
    ...444444444444444444444444...
    ...444444444444444444444444...
    ...444444444449111111111944...
    444444444444411111111111194...
    444444444444111111111111119...
    444444444444111111111111111...
    444444444444111111111111111...
    444444444444111111111111111...
    444444444444911111111111111...
    444444444444491111111111114...
    444444444444449111111111944...
    444444444444444444444444444...
    444444444444444444444444444...
    444444444444444444444444444...
    444444444444444444444444444...
    444444444444444444444444444...
    444444444444444444444444444...
    ...444444444444444444444444...
    ...444444444444444444444444...
    ...444444444444444444444444...
    ...44444444444444444444444....
    ....4444444444444444444444....
    ....444444444...4444444444....
    .....4444444.....44444444.....
    `, SpriteKind.Player)
scene.cameraFollowSprite(carrot)
tiles.setTilemap(tiles.createTilemap(hex`1e001e0001010101010101010101010101010101010101010101010101010101010101060202020204030301020202020202020202040303010e0e0e0e0e0e0101020202020204030301020202020202020202040303010e0e02020f0e0101020202020201030301020202020202020202010303010e020202020e0101020202020201030301020202020202020202010303010e020202020e010104040101010103030102020202020202020201030301020202020e0e0101020202020e0103030104040101010101010101030301020202020e020101020202020e01030301020202020202020202010303010202020202020101020202020201030301020202020202020202010303010202020202020101020202020201030301020202020202020202010303010202020202020101020202020e010303010205020202020202020103030102020202020201010202020e0e010303010202020202020202020103030104040101010101010404010101010303010101010101010101010103030102020202020201010202020202010303030303030303030303030303030102020202020201010202020202010303030303030303030303030303030102020202020201010202020202010303010101010101010101010104040102020202020201010202020202010303010e0e0e0e02020202020202020102020202020201010202020202010303010e0e0e0202020202020202020102020202020201010202020202010303010e020202020202020202020201020202020202010104040101010103030102020202020202020202020201020202020202010102020e0e0e010303010202020202020202020202020402020202020201010202020e0e01030301020202020202020202020202040202020202020101020202020e010303010404010101010101010101010101010101010101010202020e0e010303030303030303030303030303030303030303030301010e0e0e0e0e010303030303030303030303030303030303030303030301010101010101010404010101010101010101040401010101010101040401010c090909090b0909070102020202020202020201020202020202020201010807090b09090909090102020202020202020201020202020202020201010a090909070909090d0102020202020202020201020202020202020201010101010101010101010101010101010101010101010101010101010101`, img`
    222222222222222222222222222222
    2........2............2......2
    2........2............2......2
    2.....2..2.........2..2......2
    2.....2..2.........2..2......2
    2..2222..2.........2..2......2
    2.....2..2..22222222..2......2
    2.....2..2.........2..2......2
    2.....2..2.........2..2......2
    2.....2..2.........2..2......2
    2.....2..2.........2..2......2
    2.....2..2.........2..2..22222
    2..2222..22222222222..2......2
    2.....2...............2......2
    2.....2...............2......2
    2.....2..22222222222..2......2
    2.....2..2............2......2
    2.....2..2............2......2
    2.....2..2............2......2
    2..2222..2............2......2
    2.....2..2...................2
    2.....2..2...................2
    2.....2..2..222222222222222222
    2.....2......................2
    2.....2......................2
    2222222..222222222..2222222..2
    2.........2.........2........2
    2.........2.........2........2
    2.........2.........2........2
    222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,myTiles.tile3,myTiles.tile4,sprites.dungeon.chestClosed,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles4,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.dungeon.hazardLava1,sprites.dungeon.buttonOrange], TileScale.Sixteen))
controller.moveSprite(carrot, 100, 0)
controller.moveSprite(carrot, 100, 100)
tiles.placeOnRandomTile(carrot, myTiles.tile4)
scene.setBackgroundColor(6)
info.setLife(3)

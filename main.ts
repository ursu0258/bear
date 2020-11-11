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
    game.showLongText("Find the button", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("go to trees and get 1 apple", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    apple.destroy(effects.confetti, 500)
    info.setLife(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`14001400030c0d100d0c0d0c0d0c100c0d0c0d0c100c0d050e1f01020102140201020102010201020102150a0f1c1801141414010201191c1c1c1c1c1c1c1a0b12021714141401022202170201020102140222080f0117011401022002011701020114141401020b0e0217020102010201021702010214140102010a0f011e1c1c1c1c1c1c1c1a01020102010201020b0e0217020102200220020102191c1c1c1c18010a0f0117010201141414010201170102011d17020b0e0217020102011414020102170201020117010a12011b1c1c180214140102011b180222021702080e0201020117010214140102011701020117010a0f0102220217020102010201191a0201021b180b0e020102011701191c1c1c1c1a0201020102170a0f0102010217021702010201020102010201170b0e0214020117011701020102010214141402170a1201141421131c1a0201020102141414140117080e0201140102010201022202010214020102170a0f0102010201020102010201020102010201160b0407091109070907090711070907090711070906`, img`
        22222222222222222222
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        2..................2
        22222222222222222222
        `, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.hazardLava1,sprites.dungeon.buttonTeal,sprites.dungeon.floorDarkDiamond,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,myTiles.tile5,sprites.vehicle.roadIntersection2,sprites.dungeon.chestOpen,myTiles.tile6,myTiles.tile7,sprites.dungeon.floorLight5], TileScale.Sixteen))
    game.showLongText("Follow the road but don’t get hit by the lava and watch out for the ducklings ", DialogLayout.Bottom)
    tiles.placeOnRandomTile(carrot, sprites.dungeon.floorDarkDiamond)
    scene.setBackgroundColor(11)
    Duck = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    Duck.follow(carrot, 25)
    tiles.placeOnRandomTile(Duck, sprites.dungeon.floorLight5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark2)
    game.showLongText("Find the chest", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Duck.destroy()
    info.changeLifeBy(-1)
})
let Duck: Sprite = null
let apple: Sprite = null
let carrot: Sprite = null
carrot = sprites.create(img`
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
tiles.setTilemap(tiles.createTilemap(hex`1e001e0001010101010101010101010101010101010101010101010101010101010101060202020204030304020202020202020202040303010e0e0e0e0e0e0101020202020204030304020202020202020202040303010e0e02020e0e0101020202020201030301020202020202020202010303010e020202020e0101020202020201030301020202020202020202010303010e020202020e010104040101010103030102020202020202020201030301020202020e0e0101020202020e0103030104040101010101010101030301020202020e020101020202020e01030301020202020202020202010303010202020202020101020202020201030301020202020202020202010303010202020202020101020202020201030301020202020202020202010303010202020202020101020202020e010303010205020202020202020103030102020202020201010202020e0e01030301020202020202020202010303010404010101010101040401010101030301010101010101010101010303010202020202020101020202020f010303030303030303030303030303030102020202020201010202020202010303030303030303030303030303030102020202020201010202020202010303010101010101010101010104040102020202020201010202020202010303010e0e0e0e02020202020202020102020202020201010202020202010303010e0e0e0202020202020202020102020202020201010202020202010303010e020202020202020202020201020202020202010104040101010103030102020202020202020202020201020202020202010102020e0e0e010303010202020202020202020202020402020202020201010202020e0e01030301020202020202020202020202040202020202020101020202020e010303010404010101010101010101010101010101010101010202020e0e010303030303030303030303030303030303030303030301010e0e0e0e0e010303030303030303030303030303030303030303030301010101010101010404010101010101010101040401010101010101040401010c090909090b0909070102020202020202020201020202020202020201010807090b09090909090102020202020202020201020202020202020201010a090909070909090d01020202020202020202010f0202020202020201010101010101010101010101010101010101010101010101010101010101`, img`
    222222222222222222222222222222
    2.....................2......2
    2.....................2......2
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
game.showLongText("Find the chest at left and get the next hint.", DialogLayout.Bottom)

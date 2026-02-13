namespace cockpit {

    // 4x7 Pixel Digit-Font
    const iconImages: Image[] = [ 

        // 0
        img`
        . 7 7 .
        . 7 7 . 
        . 7 7 .
        . 7 7 .
        . 7 7 .
        . 7 7 .
        . 7 7 .
        `
    ]

    export function createIconSprites(
        value: number,
        baseX: number,
        baseY: number
    ): Sprite[] {

        let spritesArray: Sprite[] = []
        let str = value.toString()

        for (let i = 0; i < value; i++) {

            let digit = parseInt(str.charAt(i))
            let s = sprites.create(iconImages[0], SpriteKind.Cockpit)

            s.setFlag(SpriteFlag.RelativeToCamera, true)
            s.setPosition(baseX + i * 5, baseY)

            spritesArray.push(s)
        }

        return spritesArray
    }
}

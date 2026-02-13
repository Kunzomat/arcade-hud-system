namespace cockpit {

    // 4x7 Pixel Digit-Font
    const digitImages: Image[] = [

        // 0
        img`
        . 7 7 .
        7 . . 7
        7 . . 7
        7 . . 7
        7 . . 7
        7 . . 7
        . 7 7 .
        `,

        // 1
        img`
        . . 7 .
        . 7 7 .
        . . 7 .
        . . 7 .
        . . 7 .
        . . 7 .
        . 7 7 7
        `,

        // 2
        img`
        . 7 7 .
        7 . . 7
        . . . 7
        . . 7 .
        . 7 . .
        7 . . .
        7 7 7 7
        `,

        // 3
        img`
        7 7 7 .
        . . . 7
        . . 7 .
        . . . 7
        . . . 7
        7 . . 7
        . 7 7 .
        `,

        // 4
        img`
        7 . . 7
        7 . . 7
        7 . . 7
        7 7 7 7
        . . . 7
        . . . 7
        . . . 7
        `,

        // 5
        img`
        7 7 7 7
        7 . . .
        7 7 7 .
        . . . 7
        . . . 7
        7 . . 7
        . 7 7 .
        `,

        // 6
        img`
        . 7 7 .
        7 . . .
        7 7 7 .
        7 . . 7
        7 . . 7
        7 . . 7
        . 7 7 .
        `,

        // 7
        img`
        7 7 7 7
        . . . 7
        . . 7 .
        . . 7 .
        . 7 . .
        . 7 . .
        . 7 . .
        `,

        // 8
        img`
        . 7 7 .
        7 . . 7
        7 . . 7
        . 7 7 .
        7 . . 7
        7 . . 7
        . 7 7 .
        `,

        // 9
        img`
        . 7 7 .
        7 . . 7
        7 . . 7
        . 7 7 7
        . . . 7
        . . . 7
        . 7 7 .
        `
    ]

    export function createNumberSprites(
        value: number,
        baseX: number,
        baseY: number
    ): Sprite[] {

        let spritesArray: Sprite[] = []
        let str = value.toString()

        for (let i = 0; i < str.length; i++) {

            let digit = parseInt(str.charAt(i))
            let s = sprites.create(digitImages[digit], SpriteKind.Cockpit)

            s.setFlag(SpriteFlag.RelativeToCamera, true)
            s.setPosition(baseX + i * 5, baseY)

            spritesArray.push(s)
        }

        return spritesArray
    }
}

namespace cockpit {

    export function createBarSprites(
            value: number,
            baseX: number,
            baseY: number
    ): Sprite[] {

        let width = 30
        let height = 7
        let max = 50
        let spritesArray: Sprite[] = []

        let img = image.create(width, height)

        // Hintergrund (leer)
        img.fillRect(0, 0, width, height, 1)

        // Rand
        //img.drawRect(0, 0, width, height, 7)

        // Füllbreite berechnen
        let fillWidth = Math.idiv(value * (width - 2), max)

        if (fillWidth < 0) fillWidth = 0
        if (fillWidth > width - 2) fillWidth = width - 2

        // Füllung
        img.fillRect(0, 0, fillWidth, height, 7)

        let s = sprites.create(img, SpriteKind.Cockpit)
        s.setFlag(SpriteFlag.RelativeToCamera, true)
        s.setPosition(baseX + 13 , baseY)
        
        spritesArray.push(s)

        return spritesArray
    }
}

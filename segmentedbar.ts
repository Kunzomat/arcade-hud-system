namespace cockpit {

    export function createSegmentBarSprites(
        value: number,
        baseX: number,
        baseY: number
    ): Sprite[] {

        let spritesArray: Sprite[] = []

        let max = 50
        let segments = 6

        let filledSegments = Math.idiv(value * segments, max)

        let segmentWidth = 4
        let segmentHeight = 6
        let spacing = 1

        for (let i = 0; i < segments; i++) {

            let img = image.create(segmentWidth, segmentHeight)

            if (i < filledSegments) {
                img.fillRect(0, 0, segmentWidth, segmentHeight, 7)
            } else {
                img.fillRect(0, 0, segmentWidth, segmentHeight, 1)
            }

            let s = sprites.create(img, SpriteKind.Cockpit)
            s.setFlag(SpriteFlag.RelativeToCamera, true)

            s.setPosition(
                baseX + i * (segmentWidth + spacing),
                baseY
            )

            spritesArray.push(s)
        }

        return spritesArray
    }
}

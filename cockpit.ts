namespace cockpit {

    export class CockpitModule {

        private icon: Sprite
        private digits: Sprite[] = []
        private x: number
        private y: number
        private mode: DisplayType

        constructor(img: Image, type: DisplayType, x: number, y: number) {

            this.x = x
            this.y = y
            this.mode = type

            this.icon = sprites.create(img, SpriteKind.Cockpit)
            this.icon.setFlag(SpriteFlag.RelativeToCamera, true)
            this.icon.setPosition(x, y)
        }

        setValue(value: number) {

            // alte Digits löschen
            for (let d of this.digits)
                d.destroy()

            if (this.mode == DisplayType.Number) {
                this.digits = createNumberSprites(
                    value,
                    this.icon.x + this.icon.width + 2,
                    this.y
                )
            }

            if (this.mode == DisplayType.Icons) {
                this.digits = createIconSprites(
                    value,
                    this.icon.x + this.icon.width + 2,
                    this.y
                )
            }

            if (this.mode == DisplayType.Bar) {
                //this.showBar()
            }
        }
    }
}

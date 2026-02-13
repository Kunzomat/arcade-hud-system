//% color=#00FFFF icon="\uf108"
namespace cockpit {

    export enum DisplayType {
        //% block="8 segment number"
        Number = 0,
        //% block="bar"
        Bar = 1,
        //% block="icons"
        Icons = 2
    }

    class CockpitElement {

        icon: Sprite
        value = 0
        maxValue = 10
        type: DisplayType

        textSprite: TextSprite = null
        bar: StatusBarSprite = null
        iconSprites: Sprite[] = []

        constructor(iconImage: Image, type: DisplayType) {

            this.type = type

            this.icon = sprites.create(iconImage, SpriteKind.UI)
            this.icon.setFlag(SpriteFlag.RelativeToCamera, true)

            if (type == DisplayType.Number) {
                this.textSprite = textsprite.create("0")
                this.textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
            }

            if (type == DisplayType.Bar) {
                this.bar = statusbars.create(30, 6, StatusBarKind.Health)
                this.bar.setFlag(SpriteFlag.RelativeToCamera, true)
                this.bar.setMax(this.maxValue)
            }
        }

        setPosition(x: number, y: number) {

            this.icon.setPosition(x, y)

            if (this.textSprite)
                this.textSprite.setPosition(x + 25, y)

            if (this.bar)
                this.bar.setPosition(x + 35, y)

            this.updateIcons(x, y)
        }

        setValue(v: number) {
            this.value = v

            if (this.textSprite)
                this.textSprite.setText("" + v)

            if (this.bar)
                this.bar.value = v

            if (this.type == DisplayType.Icons)
                this.updateIcons(this.icon.x, this.icon.y)
        }

        setMax(max: number) {
            this.maxValue = max
            if (this.bar)
                this.bar.setMax(max)
        }

        updateIcons(baseX: number, baseY: number) {

            // alte löschen
            for (let s of this.iconSprites)
                s.destroy()

            this.iconSprites = []

            if (this.type != DisplayType.Icons)
                return

            for (let i = 0; i < this.value; i++) {
                let s = sprites.create(this.icon.image.clone(), SpriteKind.UI)
                s.setFlag(SpriteFlag.RelativeToCamera, true)
                s.setPosition(baseX + 20 + (i * 12), baseY)
                this.iconSprites.push(s)
            }
        }
    }

    // Block Funktionen

    //% block="create cockpit element with icon $img as $type"
    export function createElement(img: Image, type: DisplayType): CockpitElement {
        return new CockpitElement(img, type)
    }

    //% block="set element position x $x y $y"
    export function setPosition(element: CockpitElement, x: number, y: number) {
        element.setPosition(x, y)
    }

    //% block="set element value to $value"
    export function setValue(element: CockpitElement, value: number) {
        element.setValue(value)
    }

    //% block="set element max to $max"
    export function setMax(element: CockpitElement, max: number) {
        element.setMax(max)
    }
}

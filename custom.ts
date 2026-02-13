namespace SpriteKind {
    export const Cockpit = SpriteKind.create()
}

//% color=#1E90FF icon="\uf108" block="Sci-Fi Cockpit"
namespace cockpit {

    export enum DisplayType {
        //% block="number"
        Number = 0,
        //% block="bar"
        Bar = 1,
        //% block="icons"
        Icons = 2
    }

    export class CockpitElement {
        icon: Sprite

        constructor(img: Image, x: number, y: number) {
            this.icon = sprites.create(img, SpriteKind.Player)
            this.icon.setFlag(SpriteFlag.RelativeToCamera, true)
            this.icon.setPosition(x, y)
        }
    }

    //% block="Panel $img as $type at x $x y $y"
    //% blockSetVariable=myCockpit
    //% img.shadow=screen_image_picker
    //% inlineInputMode=inline
    export function createCockpitElement(
        img: Image,
        type: DisplayType,
        x: number,
        y: number
    ): CockpitModule {
        return new CockpitModule(img, type, x, y)
        }

    //% block="set $module value to $value"
    export function setModuleValue(
        module: CockpitModule,
        value: number
    ) {
        module.setValue(value)
    }
}
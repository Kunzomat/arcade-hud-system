namespace HUD {

    let ammo = 0
    let rockets = 0
    let energy = 0
    let fuel = 0
    let points = 0
    let hudSprite: TextSprite = null

    export function init() {
        hudSprite = textsprite.create("")
        hudSprite.setPosition(80, 10)
        hudSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    }

    export function setAmmo(value: number) {
        ammo = value
        update()
    }

    export function setRockets(value: number) {
        rockets = value
        update()
    }

    export function setEnergy(value: number) {
        energy = value
        update()
    }

    export function setFuel(value: number) {
        fuel = value
        update()
    }

    export function setPoints(value: number) {
        points = value
        update()
    }

    function update() {
        if (hudSprite) {
            hudSprite.setText(
                "A:" + ammo +
                " R:" + rockets +
                " E:" + energy +
                " F:" + fuel +
                " P:" + points
            )
        }
    }
}
 
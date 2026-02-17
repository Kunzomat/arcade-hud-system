let ammo = cockpit.createCockpitElement(img`
    . . . . 
    . 1 1 . 
    . 1 1 . 
    . . . . 
    . 1 1 . 
    . . . . 
    . . . . 
    `, cockpit.DisplayType.Number, 10, 10)
cockpit.setModuleValue(ammo, 99999)
let rokets = cockpit.createCockpitElement(img`
    . 1 1 . 
    . 1 1 . 
    . 1 1 . 
    1 1 1 1 
    1 1 1 1 
    1 1 1 1 
    1 . . 1 
    `, cockpit.DisplayType.Icons, 40, 10)
cockpit.setModuleValue(rokets, 10)
let energy = cockpit.createCockpitElement(img`
    . . . . 
    1 . . 1 
    . 1 1 . 
    1 1 1 1 
    1 1 1 1 
    . 1 1 . 
    1 . . 1 
    `, cockpit.DisplayType.Bar, 80, 10)
cockpit.setModuleValue(energy, 10)
let fuel = cockpit.createCockpitElement(img`
    . 1 1 . 
    1 1 1 1 
    1 . . 1 
    1 . . 1 
    1 . . 1 
    1 . . 1 
    1 1 1 1 
    `, cockpit.DisplayType.Bar, 120, 10)
cockpit.setModuleValue(fuel, 10)

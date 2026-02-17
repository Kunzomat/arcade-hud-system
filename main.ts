let ammo = cockpit.createCockpitElement(img`
    . . . 1 1 
    . . . 1 1 
    . . . . . 
    1 1 . 1 1 
    1 1 . . . 
    . . . . . 
    1 1 . . . 
    `, cockpit.DisplayType.Number, 4, 10)
cockpit.setModuleValue(ammo, 999999)
let rokets = cockpit.createCockpitElement(img`
    . . 1 . . 
    . 1 1 1 . 
    . 1 1 1 . 
    . 1 1 1 . 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 . 1 1 
    `, cockpit.DisplayType.Icons, 44, 10)
cockpit.setModuleValue(rokets, 10)
let energy = cockpit.createCockpitElement(img`
    1 . . . 1 
    . 1 . 1 . 
    1 1 1 1 1 
    . 1 1 1 . 
    1 1 1 1 1 
    . 1 . 1 . 
    1 . . . 1 
    `, cockpit.DisplayType.Bar, 85, 10)
cockpit.setModuleValue(energy, 10)
let fuel = cockpit.createCockpitElement(img`
    . 1 1 1 . 
    1 1 1 1 1 
    1 . . . 1 
    1 . . . 1 
    1 . . . 1 
    1 . . . 1 
    1 1 1 1 1 
    `, cockpit.DisplayType.SegmentBar, 125, 10)
cockpit.setModuleValue(fuel, 42)

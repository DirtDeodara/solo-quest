const loadIn = {
    id: 'loadIn',
    title: 'Load In',
    description: `The van is parked out front of the venue,
    which is a bummer cus' you know your supposed to load in around back.
    It would be some much closer to just load in the front door, though...
    One of the band members say, "Alright, it's time to load in the gear. 
    Lace up those boots, tighten that belt, and get to haulin'.
    And don't forget the drum rug this time."`,

    choices: [{
        id: 'around-back',
        description: `You decide to just do as your told and carry everything, 
        load by heavy load, around back. `,
        result: `It's a pain dragging those damn amps all the way around back
        , but the drummer sees you working hard and they come help you with the rest.`,
        hunger: 10,
        fatigue: 0,
    }, {
        id: 'front-door',
        description: `You really don't see why you should have to go all the way around.
        There's a door right there and it would cut your work in half...Screw it, 
        front door it is.`,
        result: `You manage to not run into anyone as you squeeze yourself and the towering 
        cabinet through the door and to the stage. "Easy peazy", you think. No one seems`,
        hunger: ,
        fatigue: ,
    }, {
        id: 'helping-hands',
        description: 'stuff',
        result: 'things',
        hunger: ,
        fatigue: ,
    }]
};
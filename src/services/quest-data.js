//i dont have this tied in yet. just wanted to be able to PR

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
        , but the drummer sees you working hard and after you're done they share 
        the rest of their burrito with you.`,
        hunger: -5,
        fatigue: 20
    }, {
        id: 'front-door',
        description: `You really don't see why you should have to go all the way around.
        There's a door right there and it would cut your work in half...Screw it, 
        front door it is.`,
        result: `You manage to not run into anyone as you squeeze yourself and the towering 
        cabinet through the door and to the stage. "Easy peazy", you think. You quickly finish
        loading in all the amps, but when you get back out to the van you see someone running 
        off with one of the guitars. You chase after they and soon they ditch the loot and sprint off.`,
        hunger: 5,
        fatigue: 30
    }, {
        id: 'helping-hands',
        description: `As you're carrying a stack of drums through the back alley you see an old buddy.
        They offer to help you in your task.`,
        result: `You both make quick work of the load-in. It was great to have the help, and you end 
        up catching up with your friend for a while. You lose track of time, though, and realize 
        all-of-a-sudden that the show is starting any minute.`,
        hunger: 10,
        fatigue: 10
    }]
};

const sellMerch = {
    id: 'sell-merch',
    title: 'Sell Merch',
    description: `The band has a bunch of new merch to sell. Tapes, CDs, LPs and a bunch 
    and a bunch of t-shirts. There is already a long line of eager fans ready to spend their cash. 
    You're getting pretty tired and could really use a power nap, but the band needs those sales 
    to afford gas to get to the next location.`,

    choices: [{
        id: 'sales-person',
        description: `You put your needs aside as you walk around the table and start slinging.`,
        result: `It takes forever to work your way through all the customers and you start feeling real tired.
        As you stifle a yawn, the bassist happens by with a tall coffee for you.`,
        hunger: 10,
        fatigue: -5
    }, {
        id: 'grump',
        description: `You've been on the road for too long to deal with all these jerks. 
        You work the line until none of the band members around and then run back to the van 
        for a quick nap.`,
        result: `You crawl into the back seat of the van. You manage to get a bit of shut-eye 
        and even find the bag of chips you lost yesterday! `,
        hunger: -5,
        fatigue: -10
    }, {
        id: 'gifter',
        description: `As the line starts to dwindle you see a youngster wearing a old, worn out shirt from 
        the bands last tour. They are looking longingly at the merch table. You ask if they are looking 
        for anything but they say that spent all their money just to get into the show. You ask what size 
        they wear and hook them up with a new T and a copy of the new album.`,
        result: `They're pumped! You can see that they love the band and are really happy to 
        have some new threads to show off to their friends. Their energy is infectous and you get a second wind.`,
        hunger: 5,
        fatigue: -10
    }]
};

const soundCheck = {
    id: 'sound-check',
    title: 'Sound Check',
    description: `The sound-guy who usually works this venue hasn't shown up tonight 
    and the opener is about to go on. They ask you to help. but you've never done this before...`,

    choices: [{
        id: 'helper',
        description: `Being the people-pleaser that you are, you throw caution to the wind and hop 
        behind the board. Twisting this knob and turning that dial, you spend what seems like an hour 
        trying to stop the damn feedback, but in the end, you manage to craft a pretty decent batch of 
        levels for the band and they begin their set only 10 minutes late.`,
        hunger: 5,
        fatigue: 5
    }, {
        id: 'screw-um',
        description: `You've seen this band before and they suck. Plus you're annoyed that you have 
        yet another task to complete.`,
        result: `You barely even try to get their levels right and manage to walk away from the board 
        after only 5 minutes. You reward yourself with a pre-show taco from the bar.`,
        hunger: -5,
        fatigue: 0
    }, {
        id: 'noob',
        description: `Oh my god! You have no idea where to start. You bust out your phone and start 
        to google some tutorials.`,
        result: `Really? Well, better safe than sorry. You manage to look up some to helpful tips, but it 
        all takes a long time to work out. They end up starting nearly 20 minutes late to the boos of the 
        croud.`,
        hunger: 5,
        fatigue: 15
    }]
};

const quests = [loadIn, sellMerch, soundCheck];

export default quests;
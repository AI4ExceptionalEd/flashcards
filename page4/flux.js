const fluxdata = [{
    "uuid": '001',
    "prompt": "pig vs big",
    "contrast": "maximal",
    "location": "initial",
    "sound": "p",
    "pair": {
        "item1": {
            "word": "pig",
            "visual_prompt": "visual_prompt1",
            "sound": "p",
            "ipa": "pɪɡ",
            "place": "bilabial",
            "manner": "plosive",
            "voicing": "voiceless",
            "b64_image": "./flux/pig.jpg"
        },
        "item2": {
            "word": "big",
            "visual_prompt": "visual_prompt2",
            "sound": "b",
            "ipa": "bɪɡ",
            "place": "bilabial",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./flux/big.jpg"
        }
    },
    "explanation": "The words 'pig' and 'big' differ only in their initial sound. 'Pig' starts with a voiceless bilabial plosive /p/, while 'big' starts with a voiced bilabial plosive /b/. Both sounds are produced at the same place of articulation (bilabial) and with the same manner (plosive), but differ in voicing."
}, {
    "uuid": '002',
    "prompt": "bark vs park",
    "contrast": "minimal",
    "location": "initial",
    "sound": "b",
    "pair": {
        "item1": {
            "word": "park",
            "ipa": "pɑrk",
            "sound": "p",
            "place": "bilabial",
            "manner": "plosive",
            "voicing": "voiceless",
            "b64_image": "./flux/park.jpg"
        },
        "item2": {
            "word": "bark",
            "ipa": "bɑrk",
            "sound": "b",
            "place": "bilabial",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./flux/bark.jpg"
        }
    },
    "explanation": "These words are contrasting in voicing only - 'bark' begins with a voiced bilabial plosive /b/ while 'park' begins with a voiceless bilabial plosive /p/. They share the same place of articulation (bilabial) and manner of articulation (plosive)."
}, {
    "uuid": '003',
    "prompt": "cap vs cab",
    "contrast": "minimal",
    "location": "final",
    "sound": "p",
    "pair": {
        "item1": {
            "word": "cap",
            "ipa": "kæp",
            "sound": "p",
            "place": "bilabial",
            "manner": "plosive",
            "voicing": "voiceless",
            "b64_image": "./flux/cap.jpg"
        },
        "item2": {
            "word": "cab",
            "ipa": "kæb",
            "sound": "b",
            "place": "bilabial",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./flux/cab.jpg"
        }
    },
    "explanation": "These words contrast in final position voicing - 'cap' ends with a voiceless bilabial plosive /p/ while 'cab' ends with a voiced bilabial plosive /b/."
}]; 
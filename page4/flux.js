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
            "ipa": "pɪg",
            "place": "bilabial",
            "manner": "plosive",
            "voicing": "voiceless",
            "b64_image": "./flux/pig.jpg"
        },
        "item2": {
            "word": "big",
            "visual_prompt": "visual_prompt2",
            "sound": "b",
            "ipa": "bɪg",
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
            "word": "bark",
            "ipa": "bɑrk",
            "sound": "b",
            "place": "bilabial",
            "manner": "stop",
            "voicing": "voiced",
            "b64_image": "bark.jpg"
        },
        "item2": {
            "word": "park",
            "ipa": "pɑrk",
            "sound": "p",
            "place": "bilabial",
            "manner": "stop",
            "voicing": "voiceless",
            "b64_image": "park.jpg"
        }
    },
    "explanation": "These words are contrasting in voicing only - 'bark' begins with a voiced bilabial stop /b/ while 'park' begins with a voiceless bilabial stop /p/. They share the same place of articulation (bilabial) and manner of articulation (stop)."
}]; 
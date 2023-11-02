const dalledata = [{
    "uuid": '001',
    "prompt": "input_string",
    "contrast": "maximal",
    "location": "initial",
    "sound": "r",
    "pair":{
        "item1":{
            "word": "rat",
            "visual_prompt": "visual_prompt1",
            "sound": "r",
            "ipa": "ræt",
            "place": "alveolar",
            "manner": "liquid",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/rat_dalle_photorealistic.png"
        },
        "item2":{
            "word": "cat",
            "visual_prompt": "visual_prompt2",
            "sound": "k",
            "ipa": "kæt",
            "place": "velar",
            "manner": "plosive",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/cat_dalle_photorealistic.png"
        }
    },
    "explanation": "explanation"
},
{
    "uuid": '002',
    "prompt": "input_string",
    "contrast": "maximal",
    "location": "initial",
    "sound": "r",
    "pair":{
        "item1":{
            "word": "ring",
            "visual_prompt": "visual_prompt1",
            "sound": "r",
            "ipa": "rɪŋ",
            "place": "alveolar",
            "manner": "liquid",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/ring_dalle_photorealistic.png"
        },
        "item2":{
            "word": "sing",
            "visual_prompt": "visual_prompt2",
            "sound": "s",
            "ipa": "sɪŋ",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/sing_dalle_photorealistic.png"
        }
    },
    "explanation": "explanation"
},
{
    "uuid": '003',
    "prompt": "input_string",
    "contrast": "maximal",
    "location": "initial",
    "sound": "r",
    "pair":{
        "item1":{
            "word": "rose",
            "visual_prompt": "visual_prompt1",
            "sound": "r",
            "ipa": "roʊz",
            "place": "alveolar",
            "manner": "liquid",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/rose_dalle_photorealistic.png"
        },
        "item2":{
            "word": "hose",
            "visual_prompt": "visual_prompt2",
            "sound": "h",
            "ipa": "hoʊz",
            "place": "glottal",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/hose_dalle_photorealistic.png"
        }
    },
    "explanation": "explanation"
},
{
    "uuid": '004',
    "prompt": "input_string",
    "contrast": "maximal",
    "location": "initial",
    "sound": "l",
    "pair":{
        "item1":{
            "word": "log",
            "visual_prompt": "visual_prompt1",
            "sound": "l",
            "ipa": "lɔg",
            "place": "alveolar",
            "manner": "lateral approximant",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/log_dalle_photorealistic.png"
        },
        "item2":{
            "word": "dog",
            "visual_prompt": "visual_prompt2",
            "sound": "d",
            "ipa": "dɔg",
            "place": "alveolar",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/dog_dalle_photorealistic.png"
        }
    },
    "explanation": "explanation"
},
{
    "uuid": '005',
    "prompt": "input_string",
    "contrast": "maximal",
    "location": "initial",
    "sound": "l",
    "pair":{
        "item1":{
            "word": "late",
            "visual_prompt": "visual_prompt1",
            "sound": "l",
            "ipa": "leɪt",
            "place": "alveolar",
            "manner": "lateral approximant",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/late_dalle_photorealistic.png"
        },
        "item2":{
            "word": "gate",
            "visual_prompt": "visual_prompt2",
            "sound": "g",
            "ipa": "geɪt",
            "place": "velar",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/gate_dalle_photorealistic.png"
        }
    },
    "explanation": "explanation"
},
{
    "uuid": '006',
    "prompt": "lip vs sip",
    "contrast": "maximal",
    "location": "initial",
    "sound": "l",
    "pair": {
        "item1": {
            "word": "lip",
            "visual_prompt": "visual_prompt5",
            "sound": "l",
            "ipa": "lɪp",
            "place": "alveolar",
            "manner": "lateral approximant",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/lip_dalle_photorealistic.png"
        },
        "item2": {
            "word": "sip",
            "visual_prompt": "visual_prompt6",
            "sound": "s",
            "ipa": "sɪp",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/sip_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'lip' and 'sip' differ only in their initial sound. 'Lip' starts with a voiced alveolar lateral approximant /l/, while 'sip' starts with a voiceless alveolar fricative /s/."
},
{
    "uuid": '007',
    "prompt": "sip vs zip",
    "contrast": "maximal",
    "location": "initial",
    "sound": "s",
    "pair": {
        "item1": {
            "word": "sip",
            "visual_prompt": "visual_prompt7",
            "sound": "s",
            "ipa": "sɪp",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/sip_dalle_photorealistic.png"
        },
        "item2": {
            "word": "zip",
            "visual_prompt": "visual_prompt8",
            "sound": "z",
            "ipa": "zɪp",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/zip_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'sip' and 'zip' differ only in their initial sound. 'Sip' starts with a voiceless alveolar fricative /s/, while 'zip' starts with a voiced alveolar fricative /z/."
},
{
    "uuid": '008',
    "prompt": "same vs lame",
    "contrast": "maximal",
    "location": "initial",
    "sound": "s",
    "pair": {
        "item1": {
            "word": "same",
            "visual_prompt": "visual_prompt9",
            "sound": "s",
            "ipa": "seɪm",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/same_dalle_photorealistic.png"
        },
        "item2": {
            "word": "lame",
            "visual_prompt": "visual_prompt10",
            "sound": "l",
            "ipa": "leɪm",
            "place": "alveolar",
            "manner": "lateral approximant",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/lame_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'same' and 'lame' differ only in their initial sound. 'Same' starts with a voiceless alveolar fricative /s/, while 'lame' starts with a voiced alveolar lateral approximant /l/."
},
{
    "uuid": '009',
    "prompt": "sand vs hand",
    "contrast": "minimal",
    "location": "initial",
    "sound": "s",
    "pair": {
        "item1": {
            "word": "sand",
            "visual_prompt": "visual_prompt11",
            "sound": "s",
            "ipa": "sænd",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/sand_dalle_photorealistic.png"
        },
        "item2": {
            "word": "hand",
            "visual_prompt": "visual_prompt12",
            "sound": "h",
            "ipa": "hænd",
            "place": "glottal",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/hand_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'sand' and 'hand' differ only in their initial sound. 'Sand' starts with a voiceless alveolar fricative /s/, while 'hand' starts with a voiceless glottal fricative /h/."
},
{
    "uuid": '010',
    "prompt": "mail vs maid",
    "contrast": "maximal",
    "location": "final",
    "sound": "l",
    "pair": {
        "item1": {
            "word": "mail",
            "visual_prompt": "visual_prompt15",
            "sound": "l",
            "ipa": "meɪl",
            "place": "alveolar",
            "manner": "lateral approximant",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/mail_dalle_photorealistic.png"
        },
        "item2": {
            "word": "maid",
            "visual_prompt": "visual_prompt16",
            "sound": "d",
            "ipa": "meɪd",
            "place": "alveolar",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/maid_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'mail' and 'maid' differ only in their final sound. 'Mail' ends with a voiced alveolar lateral approximant /l/, while 'maid' ends with a voiced alveolar plosive /d/."
},
{
    "uuid": '011',
    "prompt": "toll vs tote",
    "contrast": "minimal",
    "location": "final",
    "sound": "l",
    "pair": {
        "item1": {
            "word": "toll",
            "visual_prompt": "visual_prompt13",
            "sound": "l",
            "ipa": "toʊl",
            "place": "alveolar",
            "manner": "lateral approximant",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/toll_dalle_photorealistic.png"
        },
        "item2": {
            "word": "tote",
            "visual_prompt": "visual_prompt14",
            "sound": "t",
            "ipa": "toʊt",
            "place": "alveolar",
            "manner": "plosive",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/tote_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'toll' and 'tote' differ only in their final sound. 'Toll' ends with a voiced alveolar lateral approximant /l/, while 'tote' ends with a voiceless alveolar plosive /t/."
},
{
    "uuid": '012',
    "prompt": "bell vs bet",
    "contrast": "minimal",
    "location": "final",
    "sound": "l",
    "pair": {
        "item1": {
            "word": "bell",
            "visual_prompt": "visual_prompt17",
            "sound": "l",
            "ipa": "bɛl",
            "place": "alveolar",
            "manner": "lateral approximant",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/bell_dalle_photorealistic.png"
        },
        "item2": {
            "word": "bet",
            "visual_prompt": "visual_prompt18",
            "sound": "t",
            "ipa": "bɛt",
            "place": "alveolar",
            "manner": "plosive",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/bet_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'bell' and 'bet' differ only in their final sound. 'Bell' ends with a voiced alveolar lateral approximant /l/, while 'bet' ends with a voiceless alveolar plosive /t/."
},
{
    "uuid": '013',
    "prompt": "bus vs bun",
    "contrast": "maximal",
    "location": "final",
    "sound": "s",
    "pair": {
        "item1": {
            "word": "bus",
            "visual_prompt": "visual_prompt7",
            "sound": "s",
            "ipa": "bʌs",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/bus_dalle_photorealistic.png"
        },
        "item2": {
            "word": "bun",
            "visual_prompt": "visual_prompt8",
            "sound": "n",
            "ipa": "bʌn",
            "place": "alveolar",
            "manner": "nasal",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/bun_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'bus' and 'bun' differ only in their final sound. 'Bus' ends with a voiceless alveolar fricative /s/, while 'bun' ends with a voiced alveolar nasal /n/."
},
{
    "uuid": '014',
    "prompt": "hiss vs hid",
    "contrast": "maximal",
    "location": "final",
    "sound": "s",
    "pair": {
        "item1": {
            "word": "hiss",
            "visual_prompt": "visual_prompt9",
            "sound": "s",
            "ipa": "hɪs",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/hiss_dalle_photorealistic.png"
        },
        "item2": {
            "word": "hid",
            "visual_prompt": "visual_prompt10",
            "sound": "d",
            "ipa": "hɪd",
            "place": "alveolar",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/hid_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'hiss' and 'hid' differ only in their final sound. 'Hiss' ends with a voiceless alveolar fricative /s/, while 'hid' ends with a voiced alveolar plosive /d/."
},
{
    "uuid": '015',
    "prompt": "mass vs mad",
    "contrast": "maximal",
    "location": "final",
    "sound": "s",
    "pair": {
        "item1": {
            "word": "mass",
            "visual_prompt": "visual_prompt11",
            "sound": "s",
            "ipa": "mæs",
            "place": "alveolar",
            "manner": "fricative",
            "voicing": "voiceless",
            "b64_image": "./dalle3_realistic/mass_dalle_photorealistic.png"
        },
        "item2": {
            "word": "mad",
            "visual_prompt": "visual_prompt12",
            "sound": "d",
            "ipa": "mæd",
            "place": "alveolar",
            "manner": "plosive",
            "voicing": "voiced",
            "b64_image": "./dalle3_realistic/mad_dalle_photorealistic.png"
        }
    },
    "explanation": "The words 'mass' and 'mad' differ only in their final sound. 'Mass' ends with a voiceless alveolar fricative /s/, while 'mad' ends with a voiced alveolar plosive /d/."
}]




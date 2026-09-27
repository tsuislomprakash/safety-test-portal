const safetyData = [
    {
        topic: "Working at Height / ऊँचाई पर कार्य",
        questions: [
            {
                q: "1. What is Working at Height? / ऊँचाई पर कार्य क्या है?",
                options: ["Work above 2 metres / 2 मीटर से अधिक ऊँचाई पर कार्य", "Work on ground / जमीन पर कार्य", "Underground work / भूमिगत कार्य", "None / कोई नहीं"],
                ans: 0
            },
            {
                q: "2. Which harness is allowed? / कौन सा हार्नेस प्रयोग किया जाता है?",
                options: ["Body Belt / बॉडी बेल्ट", "Full Body Harness / फुल बॉडी हार्नेस", "Rope only / केवल रस्सी", "None / कोई नहीं"],
                ans: 1
            },
            {
                q: "3. Is Body Belt allowed for height work? / क्या ऊँचाई पर बॉडी बेल्ट की अनुमति है?",
                options: ["Yes / हाँ", "No / नहीं", "Sometime / कभी-कभी", "Optional / ऐच्छिक"],
                ans: 1
            },
            {
                q: "4. What is 100% Tie-Off? / 100% टाई-ऑफ क्या है?",
                options: ["Always connected to anchorage / हमेशा एंकरेज से जुड़ा रहना", "Disconnecting while moving / चलते समय हटाना", "Tying once / एक बार बांधना", "None / कोई नहीं"],
                ans: 0
            },
            {
                q: "5. What should be worn during height work? / ऊँचाई के कार्य में क्या पहनना चाहिए?",
                options: ["Helmet, Harness, Double Lanyard, Safety Shoes / हेलमेट, हार्नेस, डबल लैनयार्ड, सेफ्टी शूज", "Only Helmet / केवल हेलमेट", "Normal shoes / सामान्य जूते", "None / कोई नहीं"],
                ans: 0
            }
        ]
    },
    {
        topic: "Work Permit System / वर्क परमिट सिस्टम",
        questions: [
            {
                q: "1. What is a Work Permit? / वर्क परमिट क्या है?",
                options: ["Attendance sheet / उपस्थिति पत्रक", "Written authorization for safe work / सुरक्षित कार्य के लिए लिखित अनुमति", "Purchase order / खरीद आदेश", "Inspection report / निरीक्षण रिपोर्ट"],
                ans: 1
            },
            {
                q: "2. 'No Permit = No Work' means: / 'वर्क परमिट नहीं = काम नहीं' का अर्थ?",
                options: ["Work can continue / काम जारी रख सकते हैं", "Job shall not start / काम शुरू नहीं होगा", "Ignore permit / परमिट को अनदेखा करें", "Supervisor decides later / सुपरवाइजर बाद में तय करेगा"],
                ans: 1
            },
            {
                q: "3. Permit must be available: / वर्क परमिट कहाँ होना चाहिए?",
                options: ["Office / कार्यालय", "Store / स्टोर", "Work Site / कार्य स्थल", "Vehicle / वाहन"],
                ans: 2
            },
            {
                q: "4. Permit validity is for: / परमिट किसके लिए वैध है?",
                options: ["Any job / किसी भी कार्य", "Specific job and area / विशिष्ट कार्य और क्षेत्र", "Full plant / पूरा प्लांट", "Entire project / पूरी परियोजना"],
                ans: 1
            },
            {
                q: "5. After completion of work: / कार्य समाप्त होने के बाद क्या करना चाहिए?",
                options: ["Leave site immediately / तुरंत स्थान छोड़ें", "Return permit / परमिट वापस करें", "Ignore housekeeping / सफाई अनदेखी करें", "Leave tools / औजार छोड़ दें"],
                ans: 1
            }
        ]
    },
    {
        topic: "Welding & Gas Cutting Safety / वेल्डिंग एवं गैस कटिंग सुरक्षा",
        questions: [
            {
                q: "1. Major hazard of welding: / वेल्डिंग का प्रमुख खतरा क्या है?",
                options: ["Fire / आग", "Electric Shock / बिजली का झटका", "Burns / जलना", "All of the above / उपरोक्त सभी"],
                ans: 3
            },
            {
                q: "2. Flashback arrestor is used to: / फ्लैशबैक अरेस्टर का उपयोग किसलिए होता है?",
                options: ["Prevent explosion / विस्फोट रोकने", "Increase pressure / दबाव बढ़ाने", "Cool cylinder / सिलेंडर ठंडा करने", "Paint torch / टॉर्च पेंट करने"],
                ans: 0
            },
            {
                q: "3. Fuel gas hose colour is: / फ्यूल गैस होज का रंग क्या है?",
                options: ["Black / काला", "Red / लाल", "Yellow / पीला", "Green / हरा"],
                ans: 1
            },
            {
                q: "4. Oxygen hose colour is: / ऑक्सीजन होज का रंग क्या है?",
                options: ["Red / लाल", "Yellow / पीला", "Black / Blue / काला/नीला", "Green / हरा"],
                ans: 2
            },
            {
                q: "5. Welding torch should be lit by: / वेल्डिंग टॉर्च को किससे जलाना चाहिए?",
                options: ["Match stick / माचिस की तीली", "Spark lighter / स्पार्क लाइटर", "Candle / मोमबत्ती", "Cigarette lighter / सिगरेट लाइटर"],
                ans: 1
            }
        ]
    },
    {
        topic: "Road & Rail Safety / सड़क एवं रेल सुरक्षा",
        questions: [
            {
                q: "1. Mobile phone use while driving is: / वाहन चलाते समय मोबाइल फोन का उपयोग:",
                options: ["Allowed / अनुमति है", "Safe / सुरक्षित", "Prohibited / प्रतिबंधित", "Recommended / अनुशंसित"],
                ans: 2
            },
            {
                q: "2. Who has the right of way at a railway crossing? / रेलवे क्रॉसिंग पर प्राथमिकता किसकी होती है?",
                options: ["Car / कार", "Motorcycle / मोटरसाइकिल", "Pedestrian / पैदल यात्री", "Train/Loco / ट्रेन/लोको"],
                ans: 3
            },
            {
                q: "3. Seat belt usage while operating vehicles is: / वाहन चलाते समय सीट बेल्ट पहनना:",
                options: ["Optional / ऐच्छिक", "Recommended / अनुशंसित", "Mandatory / अनिवार्य", "Not required / आवश्यक नहीं"],
                ans: 2
            },
            {
                q: "4. Forklift maximum permitted speed inside plant is: / प्लांट के अंदर फोर्कलिफ्ट की अधिकतम गति कितनी होनी चाहिए?",
                options: ["15 kmph", "10 kmph", "20 kmph", "25 kmph"],
                ans: 1
            },
            {
                q: "5. Safe distance from the vehicle ahead is based on: / आगे चल रहे वाहन से सुरक्षित दूरी किस नियम पर आधारित है?",
                options: ["1 Second Rule", "2 Second Rule", "3 Second Rule", "5 Second Rule"],
                ans: 2
            }
        ]
    },
    {
        topic: "PPE Competency / पीपीई सुरक्षा",
        questions: [
            {
                q: "1. PPE stands for: / PPE का पूर्ण रूप क्या है?",
                options: ["Personal Protective Equipment", "Personal Protection Engine", "Protective Plant Equipment", "None"],
                ans: 0
            },
            {
                q: "2. PPE is: / PPE क्या है?",
                options: ["First line of defence / रक्षा की पहली पंक्ति", "Last line of defence / रक्षा की अंतिम पंक्ति", "Not required / आवश्यक नहीं", "Optional / ऐच्छिक"],
                ans: 1
            },
            {
                q: "3. Ear protection is required above: / किस शोर स्तर से ऊपर कान सुरक्षा आवश्यक है?",
                options: ["50 dB", "60 dB", "85 dB", "120 dB"],
                ans: 2
            },
            {
                q: "4. Damaged PPE should be: / क्षतिग्रस्त PPE का क्या करना चाहिए?",
                options: ["Continue using / उपयोग जारी रखें", "Repair with tape / टेप से मरम्मत करें", "Replace / बदलें", "Ignore / अनदेखा करें"],
                ans: 2
            },
            {
                q: "5. Reflective jackets help: / रिफ्लेक्टिव जैकेट का उद्देश्य क्या है?",
                options: ["Visibility / दृश्यता (दिखना)", "Comfort / आराम", "Decoration / सजावट", "Weight reduction / वजन घटाना"],
                ans: 0
            }
        ]
    },
    {
        topic: "Positive Isolation (LOTOTO) / पॉजिटिव आइसोलेशन",
        questions: [
            {
                q: "1. LOTOTO stands for: / LOTOTO का अर्थ क्या है?",
                options: ["Lock Out Tag Out Try Out", "Load Testing", "Line Testing", "Live Operation"],
                ans: 0
            },
            {
                q: "2. Personal lock colour for Tata Steel employees: / कर्मचारियों के लिए व्यक्तिगत लॉक का रंग:",
                options: ["Yellow / पीला", "Blue / नीला", "Red / लाल", "Black / काला"],
                ans: 2
            },
            {
                q: "3. Who can remove a personal lock? / पर्सनल लॉक कौन हटा सकता है?",
                options: ["Anyone / कोई भी", "Supervisor / सुपरवाइजर", "Lock owner / लॉक का मालिक", "Contractor / ठेकेदार"],
                ans: 2
            },
            {
                q: "4. Working on equipment without isolation is: / बिना आइसोलेशन के कार्य करना:",
                options: ["Safe / सुरक्षित", "Unsafe / असुरक्षित", "Recommended / अनुशंसित", "Faster / तेज़"],
                ans: 1
            },
            {
                q: "5. Minimum passing marks for isolation test: / न्यूनतम उत्तीर्ण अंक:",
                options: ["50%", "60%", "70%", "80%"],
                ans: 2
            }
        ]
    },
    {
        topic: "Material Handling / मटेरियल हैंडलिंग",
        questions: [
            {
                q: "1. Recommended lifting limit for a male worker: / पुरुष कर्मचारी के लिए सुरक्षित भार सीमा कितनी है?",
                options: ["15 kg", "20 kg", "25 kg", "30 kg"],
                ans: 2
            },
            {
                q: "2. Which body part should mainly be used while lifting? / भार उठाते समय मुख्य रूप से किसका उपयोग करना चाहिए?",
                options: ["Back / कमर", "Neck / गर्दन", "Legs / पैर", "Fingers / उंगलियाँ"],
                ans: 2
            },
            {
                q: "3. While lifting, the back should be: / भार उठाते समय पीठ कैसी होनी चाहिए?",
                options: ["Bent / झुकी हुई", "Twisted / मुड़ी हुई", "Straight / सीधी", "Curved / गोल"],
                ans: 2
            },
            {
                q: "4. Standing or riding on a suspended load is: / लटके हुए भार पर खड़ा होना या सवारी करना:",
                options: ["Allowed / अनुमति है", "Allowed with supervision / निगरानी में अनुमति है", "Not Allowed / अनुमति नहीं है", "Allowed in emergency / आपातकाल में अनुमति है"],
                ans: 2
            },
            {
                q: "5. Poor lifting practices generally cause: / गलत तरीके से भार उठाने से सामान्यतः क्या होता है?",
                options: ["Eye Injury / आंख की चोट", "Back Injury / कमर की चोट", "Ear Injury / कान की चोट", "Tooth Injury / दांत की चोट"],
                ans: 1
            }
        ]
    },
    {
        topic: "Fire Safety / अग्नि सुरक्षा",
        questions: [
            {
                q: "1. Fire Triangle contains: / फायर ट्रायंगल में क्या होता है?",
                options: ["Water / पानी", "Sand / बालू", "Fuel, Heat, Oxygen / ईंधन, ऊष्मा, ऑक्सीजन", "Foam / झाग"],
                ans: 2
            },
            {
                q: "2. Class A fire involves: / क्लास A आग किससे संबंधित है?",
                options: ["Wood and Paper / लकड़ी और कागज", "Metal / धातु", "Battery / बैटरी", "Gas / गैस"],
                ans: 0
            },
            {
                q: "3. PASS means: / PASS का अर्थ क्या है?",
                options: ["Pull, Aim, Squeeze, Sweep", "Push, Aim, Stop, Start", "Protect, Alarm, Safety, Stop", "None"],
                ans: 0
            },
            {
                q: "4. First action during a fire: / आग लगने पर पहला कदम क्या है?",
                options: ["Hide / छिपना", "Raise Alarm / अलार्म बजाना", "Run / भागना", "Ignore / अनदेखा करना"],
                ans: 1
            },
            {
                q: "5. Correct extinguisher for electrical fires: / विद्युत आग के लिए सही अग्निशामक कौन सा है?",
                options: ["Water / पानी", "Wet Chemical", "CO2 / कार्बन डाइऑक्साइड", "Wood"],
                ans: 2
            }
        ]
    },
    {
        topic: "Excavation Safety / खुदाई सुरक्षा",
        questions: [
            {
                q: "1. Major excavation hazard is: / खुदाई का प्रमुख खतरा क्या है?",
                options: ["Soil collapse / मिट्टी धंसना", "Sunshine / धूप", "Noise / शोर", "Painting / पेंटिंग"],
                ans: 0
            },
            {
                q: "2. Spoil pile should be placed at least: / खुदाई सामग्री कितनी दूरी पर रखनी चाहिए?",
                options: ["0.5 m", "1 m", "3 m", "5 m"],
                ans: 1
            },
            {
                q: "3. Shoring is used to: / शोरिंग का उद्देश्य क्या है?",
                options: ["Prevent collapse / धंसने से रोकना", "Drain water / पानी निकालना", "Measure depth / गहराई मापना", "Mark trench / निशान लगाना"],
                ans: 0
            },
            {
                q: "4. If an underground cable is found: / यदि भूमिगत केबल मिल जाए तो क्या करें?",
                options: ["Continue excavation / खुदाई जारी रखें", "Stop work / काम रोकें", "Cut cable / केबल काटें", "Ignore / अनदेखा करें"],
                ans: 1
            },
            {
                q: "5. Excavation should be inspected: / खुदाई का निरीक्षण कब होना चाहिए?",
                options: ["Daily / रोज", "Before shift / शिफ्ट से पहले", "After rain / बारिश के बाद", "All of the above / उपरोक्त सभी"],
                ans: 3
            }
        ]
    },
    {
        topic: "Confined Space / कन्फाइंड स्पेस",
        questions: [
            {
                q: "1. What is a Confined Space? / कन्फाइंड स्पेस क्या है?",
                options: ["Limited entry and exit space / सीमित प्रवेश और निकास वाला स्थान", "Open park / खुला पार्क", "Office room / ऑफिस कमरा", "Roadway / सड़क"],
                ans: 0
            },
            {
                q: "2. Safe oxygen level before entry: / प्रवेश से पहले सुरक्षित ऑक्सीजन का स्तर:",
                options: ["10% to 15%", "19.5% to 23.5%", "25% to 30%", "Below 10%"],
                ans: 1
            },
            {
                q: "3. Golden rule for Confined Space: / कन्फाइंड स्पेस का मुख्य नियम:",
                options: ["No Permit = No Entry / परमिट नहीं = प्रवेश नहीं", "Enter quickly / जल्दी प्रवेश करें", "Ignore testing / टेस्टिंग छोड़ें", "None / कोई नहीं"],
                ans: 0
            },
            {
                q: "4. Attendant shall stay: / अटेंडेंट को कहाँ रहना चाहिए?",
                options: ["Inside confined space / अंदर", "Outside confined space / बाहर", "In canteen / कैंटीन में", "Home / घर"],
                ans: 1
            },
            {
                q: "5. Continuous fresh air supply is called: / लगातार ताजी हवा देने की प्रक्रिया:",
                options: ["Ventilation / वेंटिलेशन", "Isolation / आइसोलेशन", "Scaffolding / स्केफॉल्डिंग", "Rigging / रिगिंग"],
                ans: 0
            }
        ]
    }
];

let defaultMaterials = [
    { title: "Module 1: Working at Height Safety", url: "https://github.com/" },
    { title: "Module 2: Work Permit System", url: "https://github.com/" },
    { title: "Module 3: Welding & Gas Cutting", url: "https://github.com/" },
    { title: "Module 4: Road & Rail Safety", url: "https://github.com/" },
    { title: "Module 5: PPE Safety Guidelines", url: "https://github.com/" },
    { title: "Module 6: Positive Isolation (LOTOTO)", url: "https://github.com/" },
    { title: "Module 7: Material Handling Ergonomics", url: "https://github.com/" },
    { title: "Module 8: Fire Safety & Extinguishers", url: "https://github.com/" },
    { title: "Module 9: Excavation Safety Standards", url: "https://github.com/" },
    { title: "Module 10: Confined Space Protocols", url: "https://github.com/" }
];
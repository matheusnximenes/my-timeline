(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/types/timelineEvents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BibleBook",
    ()=>BibleBook,
    "Era",
    ()=>Era,
    "Labels",
    ()=>Labels,
    "Type",
    ()=>Type
]);
var Labels = /*#__PURE__*/ function(Labels) {
    Labels["GENESIS"] = "genesis";
    Labels["CHARACTERS"] = "characters";
    Labels["JW_EVENTS"] = "jw events";
    Labels["BIBLES"] = "bibles";
    Labels["PROPHESIES"] = "prophesies";
    Labels["CHRIST_PROPHESIES"] = "Christ prophesies";
    Labels["JESUS"] = "jesus";
    Labels["BIBLE_EVENTS"] = "bible events";
    return Labels;
}({});
var Era = /*#__PURE__*/ function(Era) {
    Era["BC"] = "BC";
    Era["EC"] = "EC";
    return Era;
}({});
var Type = /*#__PURE__*/ function(Type) {
    Type["ACCURATE"] = "accurate";
    Type["INACCURATE"] = "inaccurate";
    return Type;
}({});
var BibleBook = /*#__PURE__*/ function(BibleBook) {
    // Old Testament
    BibleBook["GENESIS"] = "genesis";
    BibleBook["EXODUS"] = "exodus";
    BibleBook["LEVITICUS"] = "leviticus";
    BibleBook["NUMBERS"] = "numbers";
    BibleBook["DEUTERONOMY"] = "deuteronomy";
    BibleBook["JOSHUA"] = "joshua";
    BibleBook["JUDGES"] = "judges";
    BibleBook["RUTH"] = "ruth";
    BibleBook["FIRST_SAMUEL"] = "1 samuel";
    BibleBook["SECOND_SAMUEL"] = "2 samuel";
    BibleBook["FIRST_KINGS"] = "1 kings";
    BibleBook["SECOND_KINGS"] = "2 kings";
    BibleBook["FIRST_CHRONICLES"] = "1 chronicles";
    BibleBook["SECOND_CHRONICLES"] = "2 chronicles";
    BibleBook["EZRA"] = "ezra";
    BibleBook["NEHEMIAH"] = "nehemiah";
    BibleBook["ESTHER"] = "esther";
    BibleBook["JOB"] = "job";
    BibleBook["PSALMS"] = "psalms";
    BibleBook["PROVERBS"] = "proverbs";
    BibleBook["ECCLESIASTES"] = "ecclesiastes";
    BibleBook["SONG_OF_SOLOMON"] = "song of solomon";
    BibleBook["ISAIAH"] = "isaiah";
    BibleBook["JEREMIAH"] = "jeremiah";
    BibleBook["LAMENTATIONS"] = "lamentations";
    BibleBook["EZEKIEL"] = "ezekiel";
    BibleBook["DANIEL"] = "daniel";
    BibleBook["HOSEA"] = "hosea";
    BibleBook["JOEL"] = "joel";
    BibleBook["AMOS"] = "amos";
    BibleBook["OBADIAH"] = "obadiah";
    BibleBook["JONAH"] = "jonah";
    BibleBook["MICAH"] = "micah";
    BibleBook["NAHUM"] = "nahum";
    BibleBook["HABAKKUK"] = "habakkuk";
    BibleBook["ZEPHANIAH"] = "zephaniah";
    BibleBook["HAGGAI"] = "haggai";
    BibleBook["ZECHARIAH"] = "zechariah";
    BibleBook["MALACHI"] = "malachi";
    // New Testament
    BibleBook["MATTHEW"] = "matthew";
    BibleBook["MARK"] = "mark";
    BibleBook["LUKE"] = "luke";
    BibleBook["JOHN"] = "john";
    BibleBook["ACTS"] = "acts";
    BibleBook["ROMANS"] = "romans";
    BibleBook["FIRST_CORINTHIANS"] = "1 corinthians";
    BibleBook["SECOND_CORINTHIANS"] = "2 corinthians";
    BibleBook["GALATIANS"] = "galatians";
    BibleBook["EPHESIANS"] = "ephesians";
    BibleBook["PHILIPPIANS"] = "philippians";
    BibleBook["COLOSSIANS"] = "colossians";
    BibleBook["FIRST_THESSALONIANS"] = "1 thessalonians";
    BibleBook["SECOND_THESSALONIANS"] = "2 thessalonians";
    BibleBook["FIRST_TIMOTHY"] = "1 timothy";
    BibleBook["SECOND_TIMOTHY"] = "2 timothy";
    BibleBook["TITUS"] = "titus";
    BibleBook["PHILEMON"] = "philemon";
    BibleBook["HEBREWS"] = "hebrews";
    BibleBook["JAMES"] = "james";
    BibleBook["FIRST_PETER"] = "1 peter";
    BibleBook["SECOND_PETER"] = "2 peter";
    BibleBook["FIRST_JOHN"] = "1 john";
    BibleBook["SECOND_JOHN"] = "2 john";
    BibleBook["THIRD_JOHN"] = "3 john";
    BibleBook["JUDE"] = "jude";
    BibleBook["REVELATION"] = "revelation";
    return BibleBook;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-client] (ecmascript)");
;
const data = [
    {
        id: 1,
        order: 100,
        title: "Jesus Born",
        description: "Adam 2",
        start: {
            year: 0,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 30,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        custom: {
            bgColor: "white",
            color: "red",
            lineType: "solid"
        },
        sources: [
            {
                name: "doc",
                link: "jw.org"
            }
        ],
        bible: [
            {
                book: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BibleBook"].GENESIS,
                chapter: 1,
                verses: "1-2",
                link: "https://www.jw.org"
            }
        ],
        imgUrl: "https://www.jw.org",
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].GENESIS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].CHARACTERS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].JW_EVENTS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].BIBLES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].PROPHESIES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].CHRIST_PROPHESIES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].JESUS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].BIBLE_EVENTS
        ],
        other: [
            {
                name: "Article",
                srcUrl: "link",
                order: 0
            },
            {
                name: "Book",
                srcUrl: "link",
                order: 1
            },
            {
                name: "Text",
                srcUrl: "link",
                order: 2
            },
            {
                name: "Pespicaz",
                srcUrl: "link",
                order: 3
            },
            {
                name: "Img",
                srcUrl: "link",
                order: 4
            }
        ]
    },
    {
        id: 2,
        order: 101,
        title: "Jesus Ministry",
        description: "Adam 2",
        start: {
            year: 30,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 33,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 6,
        order: 1,
        title: "Adam",
        description: "Adam 2",
        start: {
            year: 4026,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 3096,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 5,
        order: 0,
        title: "Creation",
        description: "Adam 2",
        start: {
            year: 4100,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].INACCURATE
        },
        end: {
            year: 4025,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        custom: {
            bgColor: "gray"
        }
    },
    {
        id: 7,
        order: 6,
        title: "Enoch",
        description: "Adam 2",
        start: {
            year: 3404,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 3039,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].GENESIS
        ]
    },
    {
        id: 8,
        order: 2,
        title: "Anos",
        description: "Adam 2",
        start: {
            year: 3791,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2886,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].GENESIS
        ]
    },
    {
        id: 9,
        order: 7,
        title: "Methusalah",
        description: "Adam 2",
        start: {
            year: 3338,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2370,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Labels"].GENESIS
        ]
    },
    {
        id: 10,
        order: 3,
        title: "Jarede",
        description: "Adam 2",
        start: {
            year: 3566,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2604,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 11,
        order: 8,
        title: "Lameque",
        description: "Adam 2",
        start: {
            year: 3152,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2375,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 12,
        order: 9,
        title: "Noé",
        description: "Adam 2",
        start: {
            year: 2970,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2020,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 13,
        order: 10,
        title: "Diluvio",
        description: "Adam 2",
        start: {
            year: 2370,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2369,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        custom: {
            bgColor: "red"
        },
        isLandmark: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalizeFirstLetter",
    ()=>capitalizeFirstLetter,
    "getAllLabels",
    ()=>getAllLabels,
    "getHighestBCOrLowestEC",
    ()=>getHighestBCOrLowestEC,
    "getIntermediaryYearsBC",
    ()=>getIntermediaryYearsBC,
    "getIntermediaryYearsEC",
    ()=>getIntermediaryYearsEC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-client] (ecmascript)");
;
const getIntermediaryYearsEC = (currentYear, intermediaryYear)=>{
    const years = [];
    // Start from 0 and add every 100 years up to currentYear
    for(let year = intermediaryYear; year <= currentYear; year += intermediaryYear){
        years.push(year);
    }
    // Add current year if it's not already included (when currentYear % 100 !== 0)
    if (currentYear % intermediaryYear !== 0) {
        years.push(currentYear);
    }
    return years;
};
const getIntermediaryYearsBC = (latestYear, intermediaryYear)=>{
    const years = [];
    // Start from 0 and add every 100 years up to currentYear
    for(let year = latestYear; year >= 0; year -= intermediaryYear){
        years.push(year);
    }
    // Add current year if it's not already included (when currentYear % 100 !== 0)
    if (latestYear % intermediaryYear !== 0) {
        years.push(latestYear);
    }
    return years;
};
const getHighestBCOrLowestEC = (events)=>{
    var _events__start, _events_;
    // Find all BC and EC DateInfo objects
    const bcDates = [];
    const ecDates = [];
    events.forEach((event)=>{
        if (event.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC) {
            bcDates.push(event.start);
        }
        if (event.end && event.end.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC) {
            bcDates.push(event.end);
        }
        if (event.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC) {
            ecDates.push(event.start);
        }
        if (event.end && event.end.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC) {
            ecDates.push(event.end);
        }
    });
    // If there are BC dates, return the one with highest year (closest to 0)
    if (bcDates.length > 0) {
        return bcDates.reduce((highest, current)=>current.year > highest.year ? current : highest);
    }
    // If no BC dates, return the EC date with lowest year
    if (ecDates.length > 0) {
        return ecDates.reduce((lowest, current)=>current.year < lowest.year ? current : lowest);
    }
    // Fallback if no events found - return year 0 EC with accurate type
    return {
        year: 0,
        era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].EC,
        type: ((_events_ = events[0]) === null || _events_ === void 0 ? void 0 : (_events__start = _events_.start) === null || _events__start === void 0 ? void 0 : _events__start.type) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Era"].BC
    };
};
const getAllLabels = (data)=>{
    const labels = new Set();
    data.forEach((item)=>{
        if (item.labels && Array.isArray(item.labels)) {
            item.labels.forEach((label)=>labels.add(label));
        }
    });
    return Array.from(labels);
};
const capitalizeFirstLetter = (val)=>{
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/StateProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StateProvider",
    ()=>StateProvider,
    "useStateProvider",
    ()=>useStateProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const defaultContext = {};
const StateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultContext);
const StateProvider = (param)=>{
    let { children } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [activeLabels, setLabels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllLabels"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"]));
    const [activeEvents, setActiveEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>prevTheme === "light" ? "dark" : "light");
    };
    const toggleLabels = (label)=>{
        setLabels((prevLabels)=>prevLabels.includes(label) ? prevLabels.filter((l)=>l !== label) : [
                ...prevLabels,
                label
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StateContext.Provider, {
        value: {
            theme,
            toggleTheme,
            activeLabels,
            toggleLabels,
            activeEvents,
            setActiveEvents
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/StateProvider.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StateProvider, "MWpYAcUlabwQLmxjxCD5jdfb3M0=");
_c = StateProvider;
const useStateProvider = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StateContext);
};
_s1(useStateProvider, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "StateProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d4c3b005._.js.map
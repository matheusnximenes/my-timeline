module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/types/timelineEvents.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/data/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-rsc] (ecmascript)");
;
const data = [
    {
        id: 1,
        order: 100,
        title: "Jesus Born",
        description: "Adam 2",
        start: {
            year: 0,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 30,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
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
                book: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BibleBook"].GENESIS,
                chapter: 1,
                verses: "1-2",
                link: "https://www.jw.org"
            }
        ],
        imgUrl: "https://www.jw.org",
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].GENESIS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].CHARACTERS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].JW_EVENTS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].BIBLES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].PROPHESIES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].CHRIST_PROPHESIES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].JESUS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].BIBLE_EVENTS
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
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 33,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 6,
        order: 1,
        title: "Adam",
        description: "Adam 2",
        start: {
            year: 4026,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 3096,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 5,
        order: 0,
        title: "Creation",
        description: "Adam 2",
        start: {
            year: 4100,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].INACCURATE
        },
        end: {
            year: 4025,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
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
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 3039,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].GENESIS
        ]
    },
    {
        id: 8,
        order: 2,
        title: "Anos",
        description: "Adam 2",
        start: {
            year: 3791,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2886,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].GENESIS
        ]
    },
    {
        id: 9,
        order: 7,
        title: "Methusalah",
        description: "Adam 2",
        start: {
            year: 3338,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2370,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        labels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Labels"].GENESIS
        ]
    },
    {
        id: 10,
        order: 3,
        title: "Jarede",
        description: "Adam 2",
        start: {
            year: 3566,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2604,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 11,
        order: 8,
        title: "Lameque",
        description: "Adam 2",
        start: {
            year: 3152,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2375,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 12,
        order: 9,
        title: "Noé",
        description: "Adam 2",
        start: {
            year: 2970,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2020,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        }
    },
    {
        id: 13,
        order: 10,
        title: "Diluvio",
        description: "Adam 2",
        start: {
            year: 2370,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        end: {
            year: 2369,
            era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Type"].ACCURATE
        },
        custom: {
            bgColor: "red"
        },
        isLandmark: true
    }
];
}),
"[project]/src/components/timeline/parts/baseline.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "baseline": "baseline-module-scss-module__e7t79a__baseline",
  "year": "baseline-module-scss-module__e7t79a__year",
  "year_text": "baseline-module-scss-module__e7t79a__year_text",
});
}),
"[project]/src/utils/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-rsc] (ecmascript)");
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
    // Find all BC and EC DateInfo objects
    const bcDates = [];
    const ecDates = [];
    events.forEach((event)=>{
        if (event.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC) {
            bcDates.push(event.start);
        }
        if (event.end && event.end.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC) {
            bcDates.push(event.end);
        }
        if (event.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC) {
            ecDates.push(event.start);
        }
        if (event.end && event.end.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC) {
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
        era: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC,
        type: events[0]?.start?.type || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC
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
}),
"[project]/src/components/timeline/parts/baseline.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/baseline.module.scss [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-rsc] (ecmascript)");
;
;
;
;
const Baseline = ({ start, era, zoom, intermediaryYear = 50 })=>{
    const currentYear = new Date().getFullYear();
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIntermediaryYearsEC"])(currentYear, intermediaryYear);
    const yearsBC = era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIntermediaryYearsBC"])(start, intermediaryYear) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].baseline,
        children: [
            ...yearsBC,
            ...years
        ].map((y, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].year,
                style: {
                    marginRight: `${intermediaryYear - 1 * zoom}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].year_text,
                    children: y
                }, void 0, false, {
                    fileName: "[project]/src/components/timeline/parts/baseline.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, index, false, {
                fileName: "[project]/src/components/timeline/parts/baseline.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/timeline/parts/baseline.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Baseline;
}),
"[project]/src/components/timeline/timeline.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "wrapper": "timeline-module-scss-module__xP3TOq__wrapper",
});
}),
"[project]/src/components/timeline/parts/event.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "element": "event-module-scss-module__GTiA_W__element",
  "isLandmark": "event-module-scss-module__GTiA_W__isLandmark",
  "landmark": "event-module-scss-module__GTiA_W__landmark",
  "line": "event-module-scss-module__GTiA_W__line",
  "line_end": "event-module-scss-module__GTiA_W__line_end",
  "line_start": "event-module-scss-module__GTiA_W__line_start",
  "line_wrapper": "event-module-scss-module__GTiA_W__line_wrapper",
  "title": "event-module-scss-module__GTiA_W__title",
  "title_wrapper": "event-module-scss-module__GTiA_W__title_wrapper",
});
}),
"[project]/src/components/timeline/parts/event.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/event.module.scss [app-rsc] (css module)");
;
;
const Event = ({ distance, width, event })=>{
    const { isLandmark, title } = event;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isLandmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].landmark,
                style: {
                    marginLeft: `${distance}px`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/parts/event.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].line,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].line_wrapper,
                    style: {
                        marginLeft: `${distance}px`,
                        width: `${width}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title_wrapper} ${isLandmark && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].isLandmark}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/timeline/parts/event.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        event.start.year,
                                        "/",
                                        event.start.era,
                                        " (",
                                        width,
                                        "y)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/timeline/parts/event.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/timeline/parts/event.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].element} ${isLandmark && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].isLandmark}`,
                            style: {
                                borderColor: event.custom?.color ?? "",
                                borderStyle: event.custom?.lineType ?? ""
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/timeline/parts/event.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/timeline/parts/event.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/parts/event.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Event;
}),
"[project]/src/components/timeline/parts/labels.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/timeline/parts/labels.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/timeline/parts/labels.tsx <module evaluation>", "default");
}),
"[project]/src/components/timeline/parts/labels.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/timeline/parts/labels.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/timeline/parts/labels.tsx", "default");
}),
"[project]/src/components/timeline/parts/labels.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/labels.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/labels.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/timeline/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/baseline.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$timeline$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/timeline/timeline.module.scss [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/timelineEvents.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/event.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline/parts/labels.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const Timeline = ()=>{
    const currentYear = new Date().getFullYear();
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHighestBCOrLowestEC"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"]);
    const zoom = 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$timeline$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"].sort((a, b)=>a.order - b.order).map((t)=>{
                    const width = t.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC ? (t.end ? t.end.year : currentYear) - t.start.year : t.start.year - (t.end ? t.end.year : currentYear);
                    const distance = t.start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].EC && start.era === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$timelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Era"].BC ? start.year + t.start.year : start.year - t.start.year;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$event$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        event: t,
                        distance: distance * zoom,
                        width: width
                    }, t.id, false, {
                        fileName: "[project]/src/components/timeline/index.tsx",
                        lineNumber: 30,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$baseline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                start: start.year,
                era: start.era,
                zoom: zoom,
                intermediaryYear: 100
            }, void 0, false, {
                fileName: "[project]/src/components/timeline/index.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$parts$2f$labels$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/timeline/index.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/timeline/index.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Timeline;
}),
"[project]/src/styles/main.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aside": "main-module-scss-module__ofRKla__aside",
  "content": "main-module-scss-module__ofRKla__content",
  "footer": "main-module-scss-module__ofRKla__footer",
  "header": "main-module-scss-module__ofRKla__header",
  "main": "main-module-scss-module__ofRKla__main",
  "root": "main-module-scss-module__ofRKla__root",
  "title": "main-module-scss-module__ofRKla__title",
});
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/timeline/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$main$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/main.module.scss [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$main$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$main$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        alt: "logo",
                        src: "https://www.jw.org/assets/ct/5fbcfe1e6c/images/siteLogo-jworg-large.svg",
                        width: 90,
                        height: 90
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Jehovah’s Witnesses"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$main$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$main$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].aside,
                        children: "drawer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$main$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].main,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$main$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                children: "Bible Timeline"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$timeline$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__768d412e._.js.map
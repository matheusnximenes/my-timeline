import { CustomStyle } from "./../types/timelineEvents";
import {
  BibleBook,
  Era,
  Labels,
  TimelineEvent,
  Type,
} from "@/types/timelineEvents";

export const data: TimelineEvent[] = [
  {
    id: 1,
    order: 100,
    title: "Jesus Born",
    description: "Adam 2",
    start: {
      year: 0,
      era: Era.EC,
      type: Type.ACCURATE,
    },
    end: {
      year: 30,
      era: Era.EC,
      type: Type.ACCURATE,
    },
    custom: {
      bgColor: "white",
      color: "red",
      lineType: "solid",
    },
    sources: [{ name: "doc", link: "jw.org" }],
    bible: [
      {
        book: BibleBook.GENESIS,
        chapter: 1,
        verses: "1-2",
        link: "https://www.jw.org",
      },
    ],
    imgUrl: "https://www.jw.org",
    labels: [
      Labels.GENESIS,
      Labels.CHARACTERS,
      Labels.JW_EVENTS,
      Labels.BIBLES,
      Labels.PROPHESIES,
      Labels.CHRIST_PROPHESIES,
      Labels.JESUS,
      Labels.BIBLE_EVENTS,
    ],
    other: [
      {
        name: "Article",
        srcUrl: "link",
        order: 0,
      },
      {
        name: "Book",
        srcUrl: "link",
        order: 1,
      },
      {
        name: "Text",
        srcUrl: "link",
        order: 2,
      },
      {
        name: "Pespicaz",
        srcUrl: "link",
        order: 3,
      },
      {
        name: "Img",
        srcUrl: "link",
        order: 4,
      },
    ],
  },
  {
    id: 2,
    order: 101,
    title: "Jesus Ministry",
    description: "Adam 2",
    start: {
      year: 30,
      era: Era.EC,
      type: Type.ACCURATE,
    },
    end: {
      year: 33,
      era: Era.EC,
      type: Type.ACCURATE,
    },
  },
  {
    id: 6,
    order: 1,
    title: "Adam",
    description: "Adam 2",
    start: {
      year: 4026,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 3096,
      era: Era.BC,
      type: Type.ACCURATE,
    },
  },

  {
    id: 5,
    order: 0,
    title: "Creation",
    description: "Adam 2",
    start: {
      year: 4100,
      era: Era.BC,
      type: Type.INACCURATE,
    },
    end: {
      year: 4025,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    custom: {
      bgColor: "gray",
    },
  },
  {
    id: 7,
    order: 6,
    title: "Enoch",
    description: "Adam 2",
    start: {
      year: 3404,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 3039,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    labels: [Labels.GENESIS],
  },
  {
    id: 8,
    order: 2,
    title: "Anos",
    description: "Adam 2",
    start: {
      year: 3791,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 2886,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    labels: [Labels.GENESIS],
  },
  {
    id: 9,
    order: 7,
    title: "Methusalah",
    description: "Adam 2",
    start: {
      year: 3338,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 2370,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    labels: [Labels.GENESIS],
  },
  {
    id: 10,
    order: 3,
    title: "Jarede",
    description: "Adam 2",
    start: {
      year: 3566,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 2604,
      era: Era.BC,
      type: Type.ACCURATE,
    },
  },
  {
    id: 11,
    order: 8,
    title: "Lameque",
    description: "Adam 2",
    start: {
      year: 3152,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 2375,
      era: Era.BC,
      type: Type.ACCURATE,
    },
  },
  {
    id: 12,
    order: 9,
    title: "Noé",
    description: "Adam 2",
    start: {
      year: 2970,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 2020,
      era: Era.BC,
      type: Type.ACCURATE,
    },
  },
  {
    id: 13,
    order: 10,
    title: "Diluvio",
    description: "Adam 2",
    start: {
      year: 2370,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    end: {
      year: 2369,
      era: Era.BC,
      type: Type.ACCURATE,
    },
    custom: {
      bgColor: "red",
    },
    isLandmark: true,
  },
];

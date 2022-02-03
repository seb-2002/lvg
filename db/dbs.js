const db = {
  sofia: {
    type: "video",
    src: "/static/src/sofia_nonstop.mp4",
  },
  resting: {
    type: "box",

    caption: "Here's a description",
    title: "resting for sura",
    group: "group-3",
  },
  colonel: {
    type: "box",

    caption: "Here's a description",
    title: "colonel van gele",
    group: "group-1",
  },
  ozabw: {
    type: "box",

    caption: "Here's a description",
    title: "ozabw",
    group: "group-1",
  },
  devils: {
    type: "box",

    caption: "Here's a description",
    title: "devils island",
    group: "group-1",
  },
  archives: {
    type: "box",

    caption: "Here's a description",
    title: "rue des archives",
    group: "group-1",
  },
  goodbye: {
    type: "box",

    caption: "Here's a description",
    title: "goodbye to mr B",
    group: "group-2",
  },
  atelier: {
    type: "box",
    keywords:
      "memory of space, distortions, performance, research, affective crumbs, ritual, vibrant matter, spatial score",
    src_landscape: "static/src/atelier-taymans-print-lotte-van-gelder.jpg",
    description:
      "Atelier Taymans is a dance where places that have been lost are introduced to the space we meet in, together. During the performance memories are called upon, woven into the present, moved through, and gently forgotten.",
    agenda: [
      {
        title: "Setting the Space",
        host: "Tour à Plomb",
        date: "June 2019",
        evnt: "Festival ISAC",
        place: "Brussels",
      },
      {
        title: "Where we lose",
        host: "Palais du Midi",
        date: "January 2019",
        place: "Brussels",
      },
      {
        title: "Setting the Space",
        host: "Palais du Midi",
        date: "December 2018",
        place: "Brussels",
      },
      {
        title: "Setting the Space",
        host: "Palais du Midi",
        date: "November 2018",
        place: "Brussels",
      },
    ],
    credits:
      "Appearances in Atelier Taymans- Castelie Yalombo, Elena Carvajal, Flavia Passigli, Jean Lesca, Laura Battistella, Lotte van Gelder //Dramaturgical advice- Miguel Melgares //Thanks to Alexandra Bertels, for technical support with the printed matter",
    title: "Atelier Taymans / The Cleaners",
    group: "group-2",
  },
  paris: {
    type: "box",

    caption: "Here's a description",
    title: "st merry church Paris",
    group: "group-3",
  },
  dust: {
    type: "box",

    caption: "Here's a description",
    title: "dust and underground",
    group: "group-2",
  },
  soft: {
    type: "box",

    caption: "Here's a description",
    title: "soft monuments",
    group: "group-2",
  },
  meet: {
    type: "box",

    caption: "Here's a description",
    title: "so this is where we meet",
    group: "group-2",
  },
  invitation: {
    type: "box",

    caption: "Here's a description",
    title: "the invitation",
    group: "group-3",
  },
  songs: {
    title: "Songs for buried rivers",
    type: "collection",
    collection: [
      "zonnelied",
      "1",
      "2",
      "3",
      "I like flocks of birds",
      "1.sofia sample",
    ],
  },
  teaching: {
    type: "collection",
    title: "Small resistances of care",
    collection: [
      {
        title: "I like flocks of birds",
        description: "here's a description",
      },
    ],
  },
  calendar: {
    title: "calendar",
    dates: [1, 2, 3, 4],
  },
  contact: {
    title: "contact",
    email: "info@vanlot.nl",
  },
  bio: {
    group: "group-3",
    title: "Lotte van Gelder",
    text: [
      "Lotte Van Gelder builds a practice around the way bodies and environments shape one another in continuous conversation. Interested in the concrete knowledge of the experiential, minor gestures of care, ad-hoc creations, poetry and world-making through performance.",
      "Over the past couple of years, Van Gelder has been in conversation with the river Zenne, buried underneath the ground in the city of Brussels. A time of pipes, sewers, mud, waterlines, crumbling matters and narratives, movements and most of all stagnations. This research,  sometimes independent and sometimes collective,  lead to a vocabulary in movements and sounds, of waiting and attentive bodies leaking into the materials around them. A series of performative moments and ensued within the logistical structure of the art world, next to and outside of it. It’s in these in liminal spaces that Van Gelder finds her invitations can connect, resound and activate the most truthfully. ",
      "‘Each situation asks for a re-definition of appetite & survival tactics.’",
    ],
    src: "static/src/lotte-van-gelder-bio-portrait-by-antonio-mv.jpeg",
  },
};

module.exports = {
  db,
};

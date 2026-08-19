// Edit everything here — names, date, venue, contacts.
// No need to touch component files for basic customization.
//
// Optional fields you can safely omit — the matching section just won't render:
//   - contacts.secondary   (extra contact cards)
//   - howToReach           (the whole "How to Reach" accordion)
//   - downloads            (the whole "Downloads" section)

const weddingConfig = {
  groomName: 'Salmanul Faris',
  brideName: 'Fathima Marva',
  headline: "A Wedding We've Long Awaited",
  invitationCopy:
    'We cordially invite you to honor us with your presence at the blessed occasion of our wedding',

  // ISO datetime used by the countdown + "Add to calendar"
  eventDateTime: '2026-09-12T10:30:00',
  eventDateDisplay: 'Saturday, 12 September 2026',
  eventTimeDisplay: '10:30 AM – 3:00 PM',

  venue: {
    name: 'Green Land Convention Centre',
    address: 'Kozhikkode Road, Chemmad, Malappuram (Dist)',
    mapsUrl: 'https://maps.app.goo.gl/Jy2xBJSivxnpctRa7',
  },

  contacts: {
    primary: {
      name: 'Salmanul Faris K',
      role: "Groom",
      phone: '+91 7907522070',
    },
    // secondary is optional — remove this whole array if you don't need extra contacts

  },

  // howToReach is optional — remove this whole array to hide the section
  howToReach: [

    {
      icon: '🚆',
      title: 'By Train',
      body: 'Nearest railway station: parappanangadi Railway station — approx. 12 km from the venue. Well connected to major cities.',
    },
    {
      icon: '🚌',
      title: 'By Bus',
      body: 'Chemmad is well connected by private buses from nearby towns.',
    },
  ],

  // downloads is optional — remove this whole array to hide the section
  downloads: [
    { icon: '💌', label: 'Invite card', buttonText: 'Download Card', href: '#' },
    // { icon: '🎬', label: 'Save the date video preview', buttonText: 'Watch Video', href: '#' },
  ],
}

export default weddingConfig

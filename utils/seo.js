export const createSEOMeta = data => [
  { hid: 'description', name: 'description', content: data.description },
  { hid: 'og:title', property: 'og:title', content: data.title },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.description
  },
  { hid: 'og:image', property: 'og:image', content: data.image },
  { hid: 'fb:app_id', property: 'fb:app_id', content: '966242223397117' },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.HOST_NAME + '/' + data.url
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: data.cardType || 'summary_large_image'
  }
]

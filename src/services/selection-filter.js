export default function selectionFilter({ media }) {
  if (!media) return
  return ([{
    filteredMedia: [
      { title: 'Documentaries', data: media?.filter((item) => item.genre === 'documentaries') },
      { title: 'Comedies', data: media?.filter((item) => item.genre === 'comedies') },
      { title: 'Children', data: media?.filter((item) => item.genre === 'children' && item.type === 'movie') },
      { title: 'Crime', data: media?.filter((item) => item.genre === 'crime') },
      { title: 'Feel Good', data: media?.filter((item) => item.genre === 'feel-good') },
      { title: 'Drama', data: media?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: media?.filter((item) => item.genre === 'thriller') },
      { title: 'Suspense', data: media?.filter((item) => item.genre === 'suspense') },
      { title: 'Romance', data: media?.filter((item) => item.genre === 'romance') }]
  },
  {
    filteredMediaByMovies: [{ title: 'Suspense', data: media?.filter((item) => item.type === 'movie' && item.genre === 'suspense') }, { title: 'Drama', data: media?.filter((item) => item.type === 'movie' && item.genre === 'drama') }, { title: 'Children', data: media?.filter((item) => item.type === 'movie' && item.genre === 'children') }, { title: 'Romance', data: media?.filter((item) => item.type === 'movie' && item.genre === 'romance') }, { title: 'Thriller', data: media?.filter((item) => item.type === 'movie' && item.genre === 'thriller') }
    ]
  },
  {
    filteredMediaByTvSeries: [
      { title: 'Documentaries', data: media?.filter((item) => item.type === 'tv-serie' && item.genre === 'documentaries') },
      { title: 'Children', data: media?.filter((item) => item.type === 'tv-serie' && item.genre === 'children') },
      { title: 'Comedies', data: media?.filter((item) => item.type === 'tv-serie' && item.genre === 'comedies') },
      { title: 'Feel Good', data: media?.filter((item) => item.type === 'tv-serie' && item.genre === 'feel-good') },
      { title: 'Crime', data: media?.filter((item) => item.type === 'tv-serie' && item.genre === 'crime') },
    ]
  },
  {
    filteredMediaForKids: [
      { title: 'Movies', data: media?.filter((item) => item.type === 'movie' && item.genre === 'children') },
      { title: 'Tv-series', data: media?.filter((item) => item.type === 'tv-serie' && item.genre === 'children') },
    ]
  }
  ]
  )
}

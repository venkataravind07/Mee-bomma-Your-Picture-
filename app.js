// =====================================================
//  meeBomma OTT — app.js
//  Updated: May 2025 | Real images + BMS Theatre data
// =====================================================
 
// ────────────────────────────────────────────────────
//  MOVIE DATA (with real poster URLs + new 2025 titles)
// ────────────────────────────────────────────────────
const MOVIES = [
// ── GUNTUR KAARAM — Hero / #1 Recommendation ──
  {
    id: 'Gunturu Kaaram',
    title: 'Gunturu Kaaram',
    year: 2024,
    genre: ['action','drama','romance'],
    rating: 9.8,
    duration: '2h 39m',
    quality: '4K IMAX',
    isNew: false,
    isPro: true,
    isTheatre: false,
    isRec: true,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/8/0/9/1/8/780918-guntur-kaaram-0-2000-0-3000-crop.jpg?v=fc8afeb64a',
    desc: 'Years after his mother left him and remarried, Ramana is asked to sign documents denying any relations with his mother, but he refuses and demands answer to why his mother left him.',
    director: 'Trivikram Srinivas',
    cast: 'Mahesh Babu, Sree Leela, Ramya Krishna, Prakash Raj'
  },

  // ── IN THEATRES (May 2025 — BookMyShow sourced) ──
  {
    id: 'Peddi',
    title: 'Peddi',
    year: 2026,
    genre: ['action','sports'],
    rating: 8.3,
    duration: '3h 2m',
    quality: '4K',
    isNew: true,
    isPro: false,
    isTheatre: true,
    theatreDate: 'June 4, 2026',
    poster: 'https://i.redd.it/jk2l358zms8g1.jpeg',
    desc: 'In 1980s rural Andhra Pradesh, a spirited villager unites his community through sports to defend their pride against a powerful rival.',
    director: 'Buchibabu Sana',
    cast: 'Ram Charan, Jahnvi Kapoor, Shiva Raj Kumar, Jagapati Babu'
  },
  {
    id: 'Fauzi',
    title: 'Fauzi',
    year: 2026,
    genre: ['thriller','drama', 'history'],
    rating: 9.1,
    duration: '2h 56m',
    quality: '4K',
    isNew: true,
    isPro: true,
    isTheatre: true,
    theatreDate: 'Oct 15, 2026',
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/1/4/2/0/0/8/1142008-fauzi-0-2000-0-3000-crop.jpg?v=582dde3048',
    desc: 'Fauzi (2026) is a period war drama and historical fiction set in the 1940s, featuring Prabhas as a brave soldier in the British Indian Army during the pre-independence era. Directed by Hanu Raghavapudi, it follows a romantic action storyline involving hidden history and a rebellion against oppression',
    director: 'Hanu Raghavapudi',
    cast: 'Prabhas, Iman Esmail, Mithun Chakraborty, Anupam Kher'
  },
 {
  id: 'Paradise',
  title: 'The Paradise',
  year: 2026,
  genre: ['action', 'drama'],
  rating: 9.1,
  duration: '2h 52m',
  quality: '4K',
  isNew: true,
  isPro: false,
  isTheatre: true,
  theatreDate: 'Aug 21, 2026',
  poster: 'https://a.ltrbxd.com/resized/film-poster/1/2/6/3/2/6/7/1263267-the-paradise-2026-0-2000-0-3000-crop.jpg?v=6f2ef42949',
  desc: 'In 1980s Secunderabad, a marginalized tribe battles discrimination and fights for citizenship under an unexpected leader’s guidance, challenging systemic oppression.',
  director: 'Srikanth Odela',
  cast: 'Nani, Kayudu Lohar, Mohan Babu'
},
  {
    id: 'Ustaad',
    title: 'Ustaad Bhagat Singh',
    year: 2026,
    genre: ['action','drama'],
    rating: 7.4,
    duration: '2h 34m',
    quality: '4K',
    isNew: false,
    isPro: true,
    isTheatre: false,
    theatreDate: 'March 19, 2026',
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/8/0/9/1/3/780913-ustaad-bhagat-singh-0-2000-0-3000-crop.jpg?v=860093cc11',
    desc: 'A tribal boy is shaped by the values of his teacher, who gives him the name ‘Bhagat Singh’. He grows up deeply rooted in strong morals, which guide his actions throughout his life.He stands firm against injustice and takes on powerful evil forces, even when facing overwhelming odds.',
    director: 'Harish Shanker',
    cast: 'Pawan Kalyan, Sree Leela, Raashii Khanna'
  },
  {
    id: 'Ranabaali',
    title: 'Ranabaali',
    year: 2026,
    genre: ['action','thriller'],
    rating: 7.8,
    duration: '2h 30m',
    quality: '4K',
    isNew: true,
    isPro: true,
    isTheatre: true,
    theatreDate: 'Sept 11, 2026',
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/2/7/4/1/6/6/1274166-ranabaali-0-2000-0-3000-crop.jpg?v=f85e8a9e3b',
    desc: 'Set against the backdrop of British colonial rule, the story centers on the devastating Great Indian Famine of 1876–1878. With failed monsoons and exploitative imperial taxation exacerbating the crisis, the narrative centers on an area referred to as a "cursed land".',
    director: 'Rahul Sankrityan',
    cast: 'Vijay Deverakonda, Rashmika Mandanna, Vinod Sagar'
  },

  // ── MAIN LIBRARY ──
  {
    id: 'pushpa2',
    title: 'Pushpa 2: The Rule',
    year: 2024,
    genre: ['action','drama'],
    rating: 8.1,
    duration: '3h 21m',
    quality: '4K',
    isNew: false, isPro: true, isTheatre: false, isRec: true,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/7/2/0/3/0/772030-pushpa-2-the-rule-0-2000-0-3000-crop.jpg?v=04c5dfdeb7',
    desc: 'Pushpa Raj expands his red sandalwood empire, but faces powerful enemies who want to bring him down at any cost. The blockbuster sequel.',
    director: 'Sukumar',
    cast: 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil'
  },
  {
    id: 'kalki',
    title: 'Kalki 2898-AD',
    year: 2024,
    genre: ['action','scifi'],
    rating: 8.4,
    duration: '3h 1m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false, isRec: true,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/1/9/1/8/0/719180-kalki-2898-ad-0-2000-0-3000-crop.jpg?v=6f0e05ec04',
    desc: 'A mythological sci-fi epic where a reluctant warrior discovers his divine destiny in a dystopian future ruled by the Supreme Yaskin.',
    director: 'Nag Ashwin',
    cast: 'Prabhas, Deepika Padukone, Amitabh Bachchan'
  },
  {
    id: 'devara',
    title: 'Devara: Part 1',
    year: 2024,
    genre: ['action','drama'],
    rating: 7.8,
    duration: '2h 56m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/2/8/7/6/6/728766-devara-part-1-0-2000-0-3000-crop.jpg?v=7727d2bed5',
    desc: 'A fearless man rules the seas with his larger-than-life persona. When his son must walk in his footsteps, the legacy of terror is tested.',
    director: 'Koratala Siva',
    cast: 'Jr. NTR, Saif Ali Khan, Janhvi Kapoor'
  },
  {
    id: 'hanuman',
    title: 'HanuMan',
    year: 2024,
    genre: ['action','scifi'],
    rating: 8.3,
    duration: '2h 17m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false, isRec: true,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/8/1/8/6/4/781864-hanu-man-0-2000-0-3000-crop.jpg?v=dd5bd95608',
    desc: 'A struggling man gains divine superpowers from a sacred gem, igniting a battle between good and evil in a remote tribal village.',
    director: 'Prasanth Varma',
    cast: 'Teja Sajja, Amritha Aiyer, Varalaxmi Sarathkumar'
  },
  {
    id: 'sari',
    title: 'Saripodhaa Sanivaaram',
    year: 2024,
    genre: ['action','thriller'],
    rating: 7.9,
    duration: '2h 22m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/0/8/0/3/6/5/1080365-saripodhaa-sanivaaram-0-2000-0-3000-crop.jpg?v=de3ec02e21',
    desc: 'A man who controls his rage only on Saturdays becomes an unlikely vigilante after crossing paths with a ruthless corrupt police officer.',
    director: 'Vivek Athreya',
    cast: 'Nani, Priyanka Mohanan, S.J. Surya'
  },
  {
    id: 'rrr',
    title: 'RRR',
    year: 2022,
    genre: ['action','drama'],
    rating: 8.7,
    duration: '3h 2m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false, isRec: true,
    poster: 'https://a.ltrbxd.com/resized/film-poster/5/0/8/0/3/7/508037-rrr-0-2000-0-3000-crop.jpg?v=4e4649b7f9',
    desc: 'A fictional tale about two legendary revolutionaries and their journey away from home before they started fighting for their country in colonial India.',
    director: 'S.S. Rajamouli',
    cast: 'Jr. NTR, Ram Charan, Alia Bhatt, Ajay Devgn'
  },
  {
    id: 'baahubali',
    title: 'Baahubali: The Beginning',
    year: 2015,
    genre: ['action','drama'],
    rating: 8.9,
    duration: '2h 38m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/7/9/9/1/5/179915-baahubali-the-beginning-0-2000-0-3000-crop.jpg?v=51d3603b2f',
    desc: 'A young man discovers his legendary heritage and fights to reclaim the kingdom stolen from him by a treacherous family member.',
    director: 'S.S. Rajamouli',
    cast: 'Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah'
  },
  {
    id: 'kushi',
    title: 'Kushi',
    year: 2023,
    genre: ['romance','comedy'],
    rating: 7.3,
    duration: '2h 28m',
    quality: 'HD',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/8/6/9/0/4/0/869040-kushi-0-2000-0-3000-crop.jpg?v=21f872bc5f',
    desc: 'Two people from families with contrasting political ideologies fall in love, navigating hilarious family drama with warmth and heart.',
    director: 'Shiva Nirvana',
    cast: 'Vijay Deverakonda, Samantha Ruth Prabhu'
  },
  {
    id: 'dasara',
    title: 'Dasara',
    year: 2023,
    genre: ['action','drama'],
    rating: 7.6,
    duration: '2h 55m',
    quality: 'HD',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/9/6/5/0/5/796505-dasara-0-2000-0-3000-crop.jpg?v=0e3c65ae39',
    desc: 'Set in the coal mines of Singareni, a carefree young man falls for a girl and is forced to confront the dark side of his village.',
    director: 'Srikanth Odela',
    cast: 'Nani, Keerthy Suresh'
  },
  {
    id: 'thandel',
    title: 'Thandel',
    year: 2025,
    genre: ['drama','romance'],
    rating: 7.6,
    duration: '2h 17m',
    quality: 'HD',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/0/9/3/1/1/5/1093115-thandel-0-2000-0-3000-crop.jpg?v=ea671c018b',
    desc: 'Based on a true story of Telugu fishermen who accidentally cross into Pakistani waters and are imprisoned, and the woman who fights for their return.',
    director: 'Chandoo Mondeti',
    cast: 'Naga Chaitanya, Sai Pallavi'
  },
  {
    id: 'sankranthi',
    title: 'Sankranthiki Vasthunam',
    year: 2025,
    genre: ['action','comedy'],
    rating: 7.8,
    duration: '2h 34m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/2/6/6/8/4/1/1266841-sankranthiki-vasthunam-0-2000-0-3000-crop.jpg?v=c752e27f6d',
    desc: 'A retired cop returns to action when a mysterious ex-girlfriend resurfaces, pulling him into a wild and hilarious adventure.',
    director: 'Anil Ravipudi',
    cast: 'Venkatesh, Meenakshi Chaudhary, Aishwarya Rajesh'
  },
  {
    id: 'game-changer',
    title: 'Game Changer',
    year: 2025,
    genre: ['action','drama'],
    rating: 6.8,
    duration: '2h 45m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/2/8/7/6/2/728762-game-changer-2025-0-2000-0-3000-crop.jpg?v=c2ae5bada6',
    desc: 'An upright IAS officer fights against a powerful political dynasty to conduct a fair election — a high-octane political action drama.',
    director: 'Shankar',
    cast: 'Ram Charan, Kiara Advani, SJ Suryah'
  },
  {
    id: 'daaku',
    title: 'Daaku Maharaaj',
    year: 2025,
    genre: ['action'],
    rating: 7.5,
    duration: '2h 48m',
    quality: '4K',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/0/8/7/1/3/0/1087130-daaku-maharaaj-0-2000-0-3000-crop.jpg?v=3f431e98e4',
    desc: 'An outlaw with a code of honour takes on the corrupt and powerful in this mass-action blockbuster from Boyapati Srinu.',
    director: 'Boyapati Srinu',
    cast: 'Nandamuri Balakrishna, Bobby Deol, Pragya Jaiswal'
  },
  {
    id: 'krack',
    title: 'Krack',
    year: 2021,
    genre: ['action','thriller'],
    rating: 7.8,
    duration: '2h 19m',
    quality: 'HD',
    isNew: false, isPro: false, isTheatre: false,
    poster: 'https://a.ltrbxd.com/resized/film-poster/7/0/3/1/1/1/703111-krack-0-2000-0-3000-crop.jpg?v=8cd327fdba',
    desc: 'A no-nonsense police officer uses unconventional methods to battle a dangerous criminal who terrorises the innocent.',
    director: 'Gopichand Malineni',
    cast: 'Ravi Teja, Shruti Haasan'
  }
];

const SERIES = [
  { id: 's1', title: 'Dark', year: 2017, genre: ['thriller'], rating: 8.7, duration: '8 eps', isNew: false, isPro: false, poster: 'https://honest-reviews.in/wp-content/uploads/2020/07/dark_s3_poster.jpg', desc: 'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town\'s troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986.' },
  { id: 's2', title: 'Breaking Bad', year: 2008, genre: ['drama'], rating: 9.5, duration: '13 eps', isNew: false, isPro: false, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmR1UfShiKt6vY3J9tjztfpJvB7qM3xIQ_-TUF25_zZYzoTfz', desc:'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.' },
  { id: 's3', title: 'Peaky Blinders', year: 2013, genre: ['crime'], rating: 8.7, duration: '6 eps', isNew: false, isPro: false, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S&s=10', desc: 'Britain is a mixture of despair and hedonism in 1919 in the aftermath of the Great War. Returning soldiers, newly minted revolutions and criminal gangs are fighting for survival in a nation rocked by economic upheaval. One of the most powerful gangs of the time is the Peaky Blinders, run by returning war hero Thomas Shelby and his family. But Thomas has bigger ambitions than just running the streets. When a crate of guns goes missing, he recognizes an opportunity to advance in the world because crime may pay but legitimate business pays better. Trying to rid Britain of its crime is Inspector Chester Campbell, who arrives from Belfast to try to achieve that goal.' },
  { id: 's4', title: 'Alice in the Borderland', year: 2020, genre: ['thriller'], rating: 7.8, duration: '6 eps', isNew: false, isPro: false, poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTc8wYeIv9qLpAFjUp5zG-apeBwOvpX0Uhhj6KlqImDvcn5rvfG', desc: 'Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.' },
  { id: 's5', title: 'Better Call Saul', year: 2015, genre: ['drama'], rating: 9, duration: '10 eps', isNew: false, isPro: true, poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZudogDC96zcQ8h1btvghFoM6Y7qQd94UNUyceBqXslnarv260_Ij7QEvSp_FNmldAci5&s=10', desc: 'Ex-con artist Jimmy McGill turns into a small-time attorney and goes through a series of trials and tragedies, as he transforms into his alter ego Saul Goodman, a morally challenged criminal lawyer.' },
  { id: 's6', title: 'One Piece', year: 1999, genre: ['adventure'], rating: 9, duration: '1155 eps', isNew: false, isPro: true, poster: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg', desc: 'An elastic man joins forces with a crew of oddball pirates to sail toward the Grand Line, a stretch of sea where a legendary pirate hid the elusive treasure known as One Piece.' }
];

const DOWNLOADS_DATA = [
  { id: 'd1', title: 'Khaleja', year: 2010, poster: 'https://a.ltrbxd.com/resized/film-poster/9/1/3/1/9131-khaleja-0-230-0-345-crop.jpg?v=b29707471d', quality: 'HD', size: '2.2 GB' },
  { id: 'd2', title: 'Salaar: Part 1 – Ceasefire', year: 2023, poster: 'https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg', quality: '4K', size: '7.8 GB' },
  { id: 'd3', title: 'Anand', year: 2004, poster: 'https://m.media-amazon.com/images/M/MV5BNDQ3Y2RlOTgtNTFmMy00NmM0LWFmNzYtOTI5OTNhYmM2NmJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', quality: 'HD', size: '1.4 GB' }
];

// ────────────────────────────────────────────────────
//  CARD BUILDER
// ────────────────────────────────────────────────────
function makeCard(movie) {
  const theatreBadge = movie.isTheatre
    ? `<div class="card-badge-theatre">🎬 In Theatres</div>`
    : (movie.isNew ? `<div class="card-badge-new">New</div>` : '');
  const proBadge = movie.isPro ? `<div class="card-badge-pro">4K·PRO</div>` : '';

  return `
    <div class="card" onclick="showPlayer('${movie.id}')">
      <div class="card-thumb">
        <img class="card-thumb-img"
          src="${movie.poster}"
          alt="${movie.title}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="card-thumb-placeholder" style="display:none">${movie.isTheatre ? '🎬' : '🎞'}</div>
        ${theatreBadge}
        ${proBadge}
        <div class="card-overlay">
          <div class="card-play-btn">▶</div>
          <div class="card-action-row">
            <button class="card-mini-btn" onclick="event.stopPropagation();showDownloadModal('${movie.title}')">⬇</button>
            <button class="card-mini-btn" onclick="event.stopPropagation();showModal('${movie.id}')">ℹ</button>
          </div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">
          <span class="card-rating">★ ${movie.rating}</span>
          <span>${movie.year}</span>
          <span class="card-quality">${movie.quality || 'HD'}</span>
        </div>
        ${movie.isTheatre ? `<div style="font-size:0.65rem;color:#22c55e;margin-top:3px;font-weight:600;">📍 ${movie.theatreDate}</div>` : ''}
      </div>
    </div>`;
}

// ────────────────────────────────────────────────────
//  RENDER ALL ROWS / GRIDS
// ────────────────────────────────────────────────────
function renderHomeRows() {
  // In Theatres (2025 releases)
  const theatre = MOVIES.filter(m => m.isTheatre);
  document.getElementById('newReleases').innerHTML = theatre.map(makeCard).join('');

  // Recommended (flagged + sorted by rating)
  const recs = MOVIES.filter(m => m.isRec).sort((a,b) => b.rating - a.rating);
  document.getElementById('recommended').innerHTML = recs.map(makeCard).join('');

  // Trending (random shuffle)
  const trending = [...MOVIES].sort(() => 0.5 - Math.random()).slice(0, 9);
  document.getElementById('trending').innerHTML = trending.map(makeCard).join('');

  // Classics (pre-2023)
  const classics = MOVIES.filter(m => m.year <= 2022);
  document.getElementById('classics').innerHTML = classics.map(makeCard).join('');
}

function renderMoviesGrid(filter = 'all') {
  const list = filter === 'all'
    ? MOVIES
    : MOVIES.filter(m => m.genre.includes(filter));
  document.getElementById('moviesGrid').innerHTML = list.length
    ? list.map(makeCard).join('')
    : `<div style="grid-column:1/-1;padding:60px;text-align:center;color:rgba(255,255,255,.3)">No movies found for this genre.</div>`;
}

function renderSeriesGrid() {
  document.getElementById('seriesGrid').innerHTML = SERIES.map(s => `
    <div class="card" onclick="showPlayer('${s.id}')">
      <div class="card-thumb">
        <img class="card-thumb-img" src="${s.poster}" alt="${s.title}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="card-thumb-placeholder" style="display:none">📺</div>
        ${s.isNew ? '<div class="card-badge-new">New</div>' : ''}
        ${s.isPro ? '<div class="card-badge-pro">PRO</div>' : ''}
        <div class="card-overlay"><div class="card-play-btn">▶</div></div>
      </div>
      <div class="card-info">
        <div class="card-title">${s.title}</div>
        <div class="card-meta"><span class="card-rating">★ ${s.rating}</span><span>${s.duration}</span></div>
      </div>
    </div>`).join('');
}

function renderDownloads() {
  document.getElementById('downloadsGrid').innerHTML = DOWNLOADS_DATA.map(d => `
    <div class="card">
      <div class="card-thumb">
        <img class="card-thumb-img" src="${d.poster}" alt="${d.title}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="card-thumb-placeholder" style="display:none">💾</div>
        <div class="card-overlay">
          <div class="card-play-btn" onclick="showPlayer('${d.id}')">▶</div>
          <div class="card-action-row">
            <button class="card-mini-btn" onclick="toast('Removed from downloads')">🗑</button>
          </div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${d.title}</div>
        <div class="card-meta">
          <span>${d.year}</span>
          <span class="card-quality">${d.quality}</span>
          <span>${d.size}</span>
        </div>
      </div>
    </div>`).join('');
}

// ────────────────────────────────────────────────────
//  NAVIGATION
// ────────────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById(`page-${name}`);
  if (t) { t.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  closeMobileNav();
}
function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) document.getElementById('searchInput').focus();
}
function handleSearch(val) {
  if (val.length < 2) return;
  showPage('movies');
  const q = val.toLowerCase();
  const results = MOVIES.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genre.some(g => g.includes(q)) ||
    (m.cast && m.cast.toLowerCase().includes(q)) ||
    (m.director && m.director.toLowerCase().includes(q))
  );
  document.getElementById('moviesGrid').innerHTML = results.length
    ? results.map(makeCard).join('')
    : `<div style="grid-column:1/-1;padding:60px;text-align:center;color:rgba(255,255,255,.3)">No results for "${val}"</div>`;
}
function toggleMobileNav() {
  let mn = document.getElementById('mobileNavMenu');
  if (!mn) {
    mn = document.createElement('div');
    mn.id = 'mobileNavMenu'; mn.className = 'mobile-nav';
    mn.innerHTML = `
      <a href="#" onclick="showPage('home');closeMobileNav();return false;">Home</a>
      <a href="#" onclick="showPage('movies');closeMobileNav();return false;">Movies</a>
      <a href="#" onclick="showPage('series');closeMobileNav();return false;">Series</a>
      <a href="#" onclick="showPage('downloads');closeMobileNav();return false;">Downloads</a>
      <a href="#" onclick="showPage('subscribe');closeMobileNav();return false;">Subscribe</a>`;
    document.body.appendChild(mn);
  }
  mn.classList.toggle('open');
}
function closeMobileNav() {
  const mn = document.getElementById('mobileNavMenu');
  if (mn) mn.classList.remove('open');
}
function toggleProfileMenu() {
  document.getElementById('profileMenu').classList.toggle('open');
}
document.addEventListener('click', e => {
  const pm = document.getElementById('profileMenu');
  if (pm && pm.classList.contains('open') && !pm.contains(e.target) && !e.target.classList.contains('avatar'))
    pm.classList.remove('open');
});
function filterMovies(genre, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMoviesGrid(genre);
}

// ────────────────────────────────────────────────────
//  PLAYER
// ────────────────────────────────────────────────────
let isPlaying = true, isMuted = false;
let playerInterval = null, adInterval = null, adSeconds = 5;
let playerProgress = 0, playerSeconds = 0;

function showPlayer(id) {
  const movie = MOVIES.find(m => m.id === id) || SERIES.find(s => s.id === id) || DOWNLOADS_DATA.find(d => d.id === id);
  const title = movie ? movie.title : String(id);

  document.getElementById('playerTitle').textContent = title;

  // show poster in player bg
  const poster = document.getElementById('playerPoster');
  if (movie && movie.poster) { poster.src = movie.poster; poster.style.display = 'block'; }
  else poster.style.display = 'none';

  document.getElementById('playerInfo').innerHTML = movie ? `
    <div style="display:flex;align-items:flex-start;gap:16px;flex-wrap:wrap;padding:20px 24px">
      <img src="${movie.poster||''}" alt="${movie.title}" style="width:60px;aspect-ratio:2/3;object-fit:cover;border-radius:6px;flex-shrink:0" onerror="this.style.display='none'">
      <div style="flex:1">
        <div style="font-family:'Syne',sans-serif;font-size:1.05rem;font-weight:700;margin-bottom:3px">${movie.title}</div>
        <div style="font-size:0.78rem;color:rgba(255,255,255,.45);margin-bottom:8px">${movie.year||''} · ${movie.duration||''} · ★ ${movie.rating||''} · Dir. ${movie.director||''}</div>
        <div style="font-size:0.82rem;color:rgba(255,255,255,.65);line-height:1.6">${movie.desc||''}</div>
      </div>
    </div>` : '';

  document.getElementById('playerOverlay').classList.add('open');
  playerProgress = 0; playerSeconds = 0; isPlaying = true;
  document.getElementById('playBtn').textContent = '⏸';
  startPlayerProgress(); startAd();
}

function startPlayerProgress() {
  clearInterval(playerInterval);
  playerInterval = setInterval(() => {
    if (!isPlaying) return;
    playerProgress = Math.min(100, playerProgress + 0.05);
    playerSeconds += 2;
    document.getElementById('playerFill').style.width = playerProgress + '%';
    const m = Math.floor(playerSeconds / 60), s = playerSeconds % 60;
    document.getElementById('playerTime').textContent = `${m}:${s.toString().padStart(2,'0')}`;
  }, 200);
}
function startAd() {
  const overlay = document.getElementById('adOverlay');
  const skipBtn = document.getElementById('skipBtn');
  const countdown = document.getElementById('adCountdown');
  overlay.style.display = 'block';
  skipBtn.disabled = true; adSeconds = 5; countdown.textContent = 5;
  clearInterval(adInterval);
  adInterval = setInterval(() => {
    adSeconds--;
    countdown.textContent = adSeconds;
    if (adSeconds <= 0) { clearInterval(adInterval); skipBtn.disabled = false; }
  }, 1000);
}
function skipAd() { document.getElementById('adOverlay').style.display = 'none'; clearInterval(adInterval); }
function togglePlay() { isPlaying = !isPlaying; document.getElementById('playBtn').textContent = isPlaying ? '⏸' : '▶'; }
function toggleMute() { isMuted = !isMuted; document.querySelectorAll('.player-btns button')[1].textContent = isMuted ? '🔇' : '🔊'; }
function showQualityMenu() {
  const badge = document.getElementById('qualityBadge');
  const q = ['HD','FHD','4K'];
  badge.textContent = q[(q.indexOf(badge.textContent) + 1) % q.length];
  if (badge.textContent === '4K') { toast('4K + Dolby Atmos requires Pro. Upgrade to continue.'); setTimeout(() => badge.textContent = 'HD', 2000); }
  else toast(`Quality set to ${badge.textContent}`);
}
function closePlayer(e) { if (e.target === document.getElementById('playerOverlay')) closePlayerDirect(); }
function closePlayerDirect() {
  document.getElementById('playerOverlay').classList.remove('open');
  clearInterval(playerInterval); clearInterval(adInterval);
  document.getElementById('playerPoster').style.display = 'none';
}

// ────────────────────────────────────────────────────
//  INFO MODAL
// ────────────────────────────────────────────────────
function showModal(id) {
  const movie = MOVIES.find(m => m.id === id) || SERIES.find(s => s.id === id);
  if (!movie) return;
  const genres = (movie.genre||[]).map(g => g[0].toUpperCase()+g.slice(1)).join(', ');
  document.getElementById('infoModal').innerHTML = `
    <div style="position:relative">
      <div style="background:#111;aspect-ratio:16/9;overflow:hidden">
        <img src="${movie.poster||''}" alt="${movie.title}"
          style="width:100%;height:100%;object-fit:cover;opacity:0.6;filter:blur(2px)"
          onerror="this.style.display='none'">
        <div style="position:absolute;inset:0;background:linear-gradient(to top,#111 0%,transparent 60%)"></div>
        <div style="position:absolute;bottom:20px;left:24px;font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:800">${movie.title}</div>
      </div>
      <button style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,.6);border:none;color:#fff;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:1rem" onclick="closeModal()">✕</button>
    </div>
    <div class="info-modal-body">
      <div class="info-modal-meta">${movie.year} · ${movie.duration||''} · ${genres} · ★ ${movie.rating}${movie.director ? ' · Dir. '+movie.director : ''}</div>
      ${movie.cast ? `<div style="font-size:0.78rem;color:rgba(255,255,255,.35);margin-bottom:12px">Cast: ${movie.cast}</div>` : ''}
      <p class="info-modal-desc">${movie.desc}</p>
      <div class="info-modal-actions">
        <button class="btn-play" onclick="closeModal();showPlayer('${movie.id}')">▶ Play Now</button>
        <button class="btn-ghost" onclick="showDownloadModal('${movie.title}');closeModal()">⬇ Download</button>
        ${movie.isPro ? `<span class="badge-pro" style="display:flex;align-items:center;padding:8px 14px">4K · Dolby Atmos · PRO</span>` : `<span class="badge-free" style="display:flex;align-items:center;padding:8px 14px">FREE · HD</span>`}
      </div>
    </div>`;
  document.getElementById('infoOverlay').classList.add('open');
}
function closeModal(e) {
  if (!e || e.target === document.getElementById('infoOverlay'))
    document.getElementById('infoOverlay').classList.remove('open');
}

// ────────────────────────────────────────────────────
//  DOWNLOAD MODAL
// ────────────────────────────────────────────────────
let currentDlTitle = '';
function showDownloadModal(title) {
  currentDlTitle = title;
  document.getElementById('dlMovieTitle').textContent = title;
  document.getElementById('dlOverlay').classList.add('open');
}
function closeDlModal(e) {
  if (!e || e.target === document.getElementById('dlOverlay'))
    document.getElementById('dlOverlay').classList.remove('open');
}
function startDownload() {
  const q = document.querySelector('input[name="dlq"]:checked').value;
  if (q === 'fhd' || q === '4k') {
    closeDlModal(); toast('⚡ 4K & FHD downloads require Pro. Upgrade to unlock!');
    setTimeout(() => showPage('subscribe'), 1500); return;
  }
  closeDlModal(); toast(`⬇ Downloading "${currentDlTitle}" in HD… Added to My Downloads.`);
}

// ────────────────────────────────────────────────────
//  SUBSCRIBE SUCCESS
// ────────────────────────────────────────────────────
function showSubscribeSuccess() { document.getElementById('successOverlay').classList.add('open'); }
function closeSuccess(e) {
  if (!e || e.target === document.getElementById('successOverlay')) {
    document.getElementById('successOverlay').classList.remove('open');
    showPage('home');
  }
}

// ────────────────────────────────────────────────────
//  TOAST
// ────────────────────────────────────────────────────
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ────────────────────────────────────────────────────
//  KEYBOARD SHORTCUTS
// ────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePlayerDirect(); closeModal(); closeDlModal();
    document.getElementById('successOverlay').classList.remove('open');
  }
  if (e.key === ' ' && document.getElementById('playerOverlay').classList.contains('open')) {
    e.preventDefault(); togglePlay();
  }
});

// ────────────────────────────────────────────────────
//  NAVBAR SCROLL EFFECT
// ────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ────────────────────────────────────────────────────
//  INIT
// ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHomeRows();
  renderMoviesGrid();
  renderSeriesGrid();
  renderDownloads();
});
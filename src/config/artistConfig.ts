import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "Demae",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-video.mp4",
  heroImage: "/hero-poster.jpg",
  profileImage: "/hero-poster.jpg",

  // ============================================================
  // SOCIALS
  // ============================================================
  socials: [
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/1HkWfjmOohAg7lS9bv1QcL?si=k4Ew4dNjTlSh3E05bkhZZw&utm_source=copy-link",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/demae/1503556681",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://youtube.com/@demaemae?si=9LKjXMudHxqnKHp6",
      label: "YouTube"
    },
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/demaemae?dlrf=MTBrZGJtN2o5cjVwZg==",
      label: "Instagram"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@demaemae?_r=1&_t=ZP-9BIpdimDorf",
      label: "TikTok"
    },
    {
      id: "bandcamp",
      platform: "bandcamp",
      url: "https://demae.bandcamp.com",
      label: "Bandcamp",
      isStreaming: true
    },
    {
      id: "soundcloud",
      platform: "soundcloud",
      url: "https://soundcloud.com/bubblerap",
      label: "SoundCloud",
      isStreaming: true
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "steppers-live",
          title: "Steppers (Live Session)",
          type: "single",
          releaseDate: "August 26, 2026",
          coverArt: "/covers/steppers-live.jpg",
          spotifyUrl: "https://open.spotify.com/album/7G0DvTwvpmEoRQzjbG9Gqn",
          appleMusicUrl: "https://music.apple.com/us/album/steppers-live-session-single/6799131764",
          itunesUrl: "https://music.apple.com/us/album/steppers-live-session-single/6799131764",
          deezerUrl: "https://www.deezer.com/album/1048595212",
          youtubeUrl: "https://youtu.be/KlJ28w91iTc",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Demae+Steppers+Live+Session",
          amazonMusicUrl: "https://music.amazon.com/search/Demae+Steppers+Live+Session",
          tidalUrl: "https://listen.tidal.com/search?q=Demae+Steppers+Live+Session",
          bandcampUrl: "https://demae.bandcamp.com/album/steppers-closer",
          soundcloudUrl: "https://soundcloud.com/bubblerap"
        },
        {
          id: "dont-play-the-fool-live",
          title: "Don't Play The Fool (Live Session)",
          type: "single",
          releaseDate: "August 5, 2026",
          coverArt: "/covers/dont-play-the-fool-live.jpg",
          spotifyUrl: "https://open.spotify.com/album/0VOfJBd9Wr2bkqUmEjmWRU",
          appleMusicUrl: "https://music.apple.com/us/album/dont-play-the-fool-live-session-single/6792835260",
          itunesUrl: "https://music.apple.com/us/album/dont-play-the-fool-live-session-single/6792835260",
          deezerUrl: "https://www.deezer.com/album/1033770412",
          youtubeUrl: "https://youtu.be/w8oQYyF4qAI",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Demae+Don%27t+Play+The+Fool+Live+Session",
          amazonMusicUrl: "https://music.amazon.com/search/Demae+Don%27t+Play+The+Fool+Live+Session",
          tidalUrl: "https://listen.tidal.com/search?q=Demae+Don%27t+Play+The+Fool+Live+Session",
          bandcampUrl: "https://demae.bandcamp.com",
          soundcloudUrl: "https://soundcloud.com/bubblerap"
        },
        {
          id: "deep-dive",
          title: "Deep Dive",
          type: "album",
          releaseDate: "November 7, 2025",
          coverArt: "/covers/deep-dive.jpg",
          spotifyUrl: "https://open.spotify.com/album/3wUMCjdTARQcL3bH4VnWUu",
          appleMusicUrl: "https://music.apple.com/us/album/deep-dive/1844328528",
          itunesUrl: "https://music.apple.com/us/album/deep-dive/1844328528",
          deezerUrl: "https://www.deezer.com/album/1057237832",
          youtubeUrl: "https://youtu.be/zFW4xeDbnmg",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Demae+Deep+Dive",
          amazonMusicUrl: "https://music.amazon.com/search/Demae+Deep+Dive",
          tidalUrl: "https://listen.tidal.com/search?q=Demae+Deep+Dive",
          bandcampUrl: "https://demae.bandcamp.com/album/deep-dive",
          soundcloudUrl: "https://soundcloud.com/bubblerap"
        },
        {
          id: "deliver-me",
          title: "Deliver Me",
          type: "ep",
          releaseDate: "September 4, 2024",
          coverArt: "/covers/deliver-me.jpg",
          spotifyUrl: "https://open.spotify.com/album/1loTEiFpkWnWgOEtAavZna",
          appleMusicUrl: "https://music.apple.com/us/album/deliver-me-ep/1761377308",
          itunesUrl: "https://music.apple.com/us/album/deliver-me-ep/1761377308",
          deezerUrl: "https://www.deezer.com/album/625710101",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Demae+Deliver+Me",
          amazonMusicUrl: "https://music.amazon.com/search/Demae+Deliver+Me",
          tidalUrl: "https://listen.tidal.com/search?q=Demae+Deliver+Me",
          bandcampUrl: "https://demae.bandcamp.com/album/deliver-me",
          soundcloudUrl: "https://soundcloud.com/bubblerap"
        },
        {
          id: "life-works-out-usually",
          title: "Life Works Out... Usually",
          type: "album",
          releaseDate: "September 18, 2020",
          coverArt: "/covers/life-works-out-usually.jpg",
          spotifyUrl: "https://open.spotify.com/album/2tJ8tg2tczkqXIspTw8ENP",
          appleMusicUrl: "https://music.apple.com/us/album/life-works-out-usually/1523374365",
          itunesUrl: "https://music.apple.com/us/album/life-works-out-usually/1523374365",
          deezerUrl: "https://www.deezer.com/album/353133727",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Demae+Life+Works+Out+Usually",
          amazonMusicUrl: "https://music.amazon.com/search/Demae+Life+Works+Out+Usually",
          tidalUrl: "https://listen.tidal.com/search?q=Demae+Life+Works+Out+Usually",
          bandcampUrl: "https://demae.bandcamp.com/album/life-works-out-usually",
          soundcloudUrl: "https://soundcloud.com/bubblerap"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "steppers-live-video",
          title: "Demae - Steppers (Live Session)",
          youtubeId: "KlJ28w91iTc",
          thumbnail: "https://i.ytimg.com/vi/KlJ28w91iTc/maxresdefault.jpg"
        },
        {
          id: "dont-play-the-fool-live-video",
          title: "Demae - Don't Play The Fool (Live Session)",
          youtubeId: "w8oQYyF4qAI",
          thumbnail: "https://i.ytimg.com/vi/w8oQYyF4qAI/maxresdefault.jpg"
        },
        {
          id: "thank-you-video",
          title: "Demae - Thank You (feat. Yukimi)",
          youtubeId: "zFW4xeDbnmg",
          thumbnail: "https://i.ytimg.com/vi/zFW4xeDbnmg/maxresdefault.jpg"
        },
        {
          id: "dont-play-the-fool-video",
          title: "Demae - Don't Play The Fool",
          youtubeId: "T9fQEMUMm-U",
          thumbnail: "https://i.ytimg.com/vi/T9fQEMUMm-U/maxresdefault.jpg"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "active",
      url: "https://demaemerch.com/?_su_rec=dMcX7lqYCNodb7UUMbVadCsmYr404ybksZbYBmiP9ikFgxNLX4NZQOeYH11l1JhKX4LBtJGJ4zUst1appZ4HR8ya8Ncu7RkMswGNE1gNeXwcADu_wlj3EeHl0UgbDiW5Iqlj_Q_JUu3D0elXBMvqf0_tIUj3o3BCp7pZbfw88zY1trb17avproQ2d7iZURh2KvemGKg1NdEVh4BJVA8ngIpxyNxAqonnhMYRCw7Unnz9whu14qwoiBdROcJhawosZmhEICheLnKKCavkMSjIC5qPmcihU6IbSPyfQcjfk9ifL1zxbWDV4EG5JmfUlRq1RbfzWrJfDL3-dWVlUR7A2HpLxWu31gTjeXP40eu5YQ&_su_rec_id=5135436b-58f8-450c-b0ee-ee0c903d6d53-1794359346"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};

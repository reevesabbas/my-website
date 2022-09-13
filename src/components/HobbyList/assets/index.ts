import { StaticImageData } from "next/image";

interface Hobby {
  name: string,
  author: string,
  img: string | StaticImageData,
  link: string,
}

const HOBBIES = {
  ALBUMS: [
    { name: 'KIDS SEE GHOSTS',author: 'Kanye West & Kid Cudi',img: '/hobbies/music/ksg.jpg',link: 'https://open.spotify.com/album/6pwuKxMUkNg673KETsXPUV?si=fpZsfE-1QiagZKRDiAINug', },
    { name: 'By Swallow Season', img: '/hobbies/music/bss.jpg', author: 'Shintaro Sakamoto', link: 'https://open.spotify.com/track/1QqSrqSjMqnwOjg2xkHRVM?si=197faa6ce6b149a8' },
    { name: 'Swimming',author: 'Mac Miller',img: '/hobbies/music/swimming.jpg',link: 'https://open.spotify.com/album/5wtE5aLX5r7jOosmPhJhhk?si=4Obax3wJQPCuxNMyFmAEkA', },
    { name: 'The Forever Story',author: 'JID',img: '/hobbies/music/TFS.jpg',link: 'https://open.spotify.com/album/3QVjpIxcksDkJmOnvlOJjg?si=w5AS5gJgRSuzF2NoccKUCQ'},
    { name: 'good kid, m.A.A.d city',author: 'Kendrick Lamar',img: '/hobbies/music/gkmc.jpg',link: 'https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w?si=cndTDW8fTP-KH6IDGcOjQw'},
    { name: 'Call Me If You Get Lost',author: 'Tyler, the Creator',img: '/hobbies/music/getlost.jpg',link: 'https://open.spotify.com/album/45ba6QAtNrdv6Ke4MFOKk9?si=Ug8Nnn71SbWEbN049DO1Jw'},
], 
  GAMES: [
    {name: 'DARK SOULS III',author: 'FromSoftware',img: '/hobbies/games/ds3.jpg',link: 'https://store.steampowered.com/app/374320/DARK_SOULS_III/',},
    {name: 'CS:GO',author: 'Valve',img: '/hobbies/games/csgo.jpg',link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/', },
    {name: 'Risk of Rain 2',author: 'Hopoo Games',img: '/hobbies/games/ror2.jpg',link: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',},
    {name: 'Sekiro: Shadows Die Twice',author: 'FromSoftware',img: '/hobbies/games/sekiro.jpg',link: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/',},
    {name: 'League of Legends',author: 'Riot Games',img: '/hobbies/games/lol.jpg',link: 'https://www.leagueoflegends.com/en-us/',},
    {name: 'Terraria',author: 'Re-Logic',img: '/hobbies/games/terraria.jpg',link: 'https://store.steampowered.com/app/105600/Terraria/',},
  ],
  ANIME: [
    {name: 'Hunter x Hunter (2011)',author: 'Yoshihiro Togashi',img: '/hobbies/anime/hxh.jpg',link: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',},
    {name: 'Mob Psycho 100',author: 'ONE',img: '/hobbies/anime/mp.jpg',link: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',},
    {name: 'One Piece',author: 'Eiichiro Oda',img: '/hobbies/anime/op.jpg',link: 'https://myanimelist.net/anime/21/One_Piece',},
    {name: 'Haikyuu!!',author: 'Haruichi Furudate',img: '/hobbies/anime/haikyuu.jpg',link: 'https://myanimelist.net/anime/20583/Haikyuu',},
    {name: 'Fullmetal Alchemist: Brotherhood',author: 'Hiromu Arakawa',img: '/hobbies/anime/fmab.jpg',link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',},
    {name: 'Jujutsu Kaisen',author: 'Gege Akutami',img: '/hobbies/anime/jjk.jpg',link: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV',},
  ]
}

export { HOBBIES }
export type { Hobby }
import { StaticImageData } from "next/image";

interface Hobby {
  name: string,
  author: string,
  img: string | StaticImageData,
  link: string,
}

const HOBBIES = {
  ALBUMS: [
    { name: 'Mr. Morale & The Big Steppers', img: '/hobbies/music/MrMorale.png', author: 'Kendrick Lamar', link: 'https://open.spotify.com/album/1atjqOZTCdrjxjMyCPZc2g?si=ylYW2pzdTMuPAjSiwCzq5Q' },
    { name: 'Swimming',author: 'Mac Miller',img: '/hobbies/music/Swimming.png',link: 'https://open.spotify.com/album/5wtE5aLX5r7jOosmPhJhhk?si=4Obax3wJQPCuxNMyFmAEkA', },
    { name: 'KIDS SEE GHOSTS',author: 'Kanye West & Kid Cudi',img: '/hobbies/music/KSG.png',link: 'https://open.spotify.com/album/6pwuKxMUkNg673KETsXPUV?si=fpZsfE-1QiagZKRDiAINug', },
    { name: 'Call Me If You Get Lost',author: 'Tyler, the Creator',img: '/hobbies/music/CMIYGL.png',link: 'https://open.spotify.com/album/45ba6QAtNrdv6Ke4MFOKk9?si=Ug8Nnn71SbWEbN049DO1Jw'},
    { name: 'good kid, m.A.A.d city',author: 'Kendrick Lamar',img: '/hobbies/music/GKMC.png',link: 'https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w?si=cndTDW8fTP-KH6IDGcOjQw'},
    { name: 'Graduation',author: 'Kanye West',img: '/hobbies/music/Graduation.png',link: 'https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3?si=263d41067b8a4a16'}
], 
  GAMES: [
    {name: 'DARK SOULS III',author: 'FromSoftware',img: '/hobbies/games/ds3.png',link: 'https://store.steampowered.com/app/374320/DARK_SOULS_III/',},
    {name: 'CS:GO',author: 'Valve',img: '/hobbies/games/csgo.png',link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/', },
    {name: 'Risk of Rain 2',author: 'Hopoo Games',img: '/hobbies/games/ror2.png',link: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',},
    {name: 'Sekiro: Shadows Die Twice',author: 'FromSoftware',img: '/hobbies/games/sekiro.png',link: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/',},
    {name: 'Elden Ring',author: 'FromSoftware',img: '/hobbies/games/eldenring.png',link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',},
    {name: 'Terraria',author: 'Re-Logic',img: '/hobbies/games/terraria.png',link: 'https://store.steampowered.com/app/105600/Terraria/',},
  ],
  ANIME: [
    {name: 'Hunter x Hunter (2011)',author: 'Yoshihiro Togashi',img: '/hobbies/anime/hxh.png',link: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',},
    {name: 'Mob Psycho 100',author: 'ONE',img: '/hobbies/anime/mp100.png',link: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',},
    {name: 'One Piece',author: 'Eiichiro Oda',img: '/hobbies/anime/op.png',link: 'https://myanimelist.net/anime/21/One_Piece',},
    {name: 'Haikyuu!!',author: 'Haruichi Furudate',img: '/hobbies/anime/haikyuu.png',link: 'https://myanimelist.net/anime/20583/Haikyuu',},
    {name: 'Fullmetal Alchemist: Brotherhood',author: 'Hiromu Arakawa',img: '/hobbies/anime/fmab.png',link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',},
    {name: 'Ousama Ranking',author: 'Sousuke Tooka',img: '/hobbies/anime/or.png',link: 'https://myanimelist.net/anime/40834/Ousama_Ranking',},
  ]
}

export { HOBBIES }
export type { Hobby }
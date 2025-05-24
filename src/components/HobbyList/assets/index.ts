import { StaticImageData } from "next/image";

interface Hobby {
  name: string,
  author: string,
  img: string | StaticImageData,
  link: string,
}

const HOBBIES = {
  ALBUMS: [
    { name: 'Swimming',author: 'Mac Miller',img: '/hobbies/music/swimming.jpg',link: 'https://open.spotify.com/album/5wtE5aLX5r7jOosmPhJhhk?si=4Obax3wJQPCuxNMyFmAEkA', },
    { name: 'By Swallow Season', img: '/hobbies/music/bss.jpg', author: 'Shintaro Sakamoto', link: 'https://open.spotify.com/track/1QqSrqSjMqnwOjg2xkHRVM?si=197faa6ce6b149a8' },
    { name: 'To Pimp A Butterfly',author: 'Kendrick Lamar',img: '/hobbies/music/tpab.jpg',link: 'https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP?si=v-mfn1r1SAmxs1o0xyMQXg'},
    { name: 'Luv 4 Rent',author: 'Smino',img: '/hobbies/music/Luv4Rent.jpg',link: 'https://open.spotify.com/album/6dtDTbVBQ9QwsNaqEnjsOT?si=Zt5Oa4UwRROKTXyHN25gOg'},
    { name: 'MM...FOOD', author: 'MF DOOM',img: '/hobbies/music/mmfood.jpg',link: 'https://open.spotify.com/album/1UcS2nqUhxrZjrBZ3tHk2N?si=ZznB3kpBQqGINL48Pix19g', },
    { name: 'Call Me If You Get Lost',author: 'Tyler, the Creator',img: '/hobbies/music/getlost.jpg',link: 'https://open.spotify.com/album/45ba6QAtNrdv6Ke4MFOKk9?si=Ug8Nnn71SbWEbN049DO1Jw'},
], 
  GAMES: [
    {name: 'DARK SOULS III',author: 'FromSoftware',img: '/hobbies/games/ds3.jpg',link: 'https://store.steampowered.com/app/374320/DARK_SOULS_III/',},
    {name: 'Counter Strike 2',author: 'Valve',img: '/hobbies/games/cs2.jpg',link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/', },
    {name: 'Risk of Rain 2',author: 'Hopoo Games',img: '/hobbies/games/ror2.jpg',link: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',},
    {name: 'Sekiro: Shadows Die Twice',author: 'FromSoftware',img: '/hobbies/games/sekiro.jpg',link: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/',},
    {name: 'Devil May Cry 5',author: 'Capcom',img: '/hobbies/games/dmc5.jpg',link: 'https://www.devilmaycry5.com/',},
    {name: 'Terraria',author: 'Re-Logic',img: '/hobbies/games/terraria.jpg',link: 'https://store.steampowered.com/app/105600/Terraria/',},
  ],
  MEDIA: [
    {name: 'Hunter x Hunter (2011)', author: 'Yoshihiro Togashi',img: '/hobbies/media/hxh.jpg',link: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',},
    {name: 'Mob Psycho 100',author: 'ONE',img: '/hobbies/media/mp.jpg',link: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',},
    {name: 'Everything Everywhere All at Once',author: 'Daniel Scheinert, Daniel Kwan',img: '/hobbies/media/eeaao.jpg',link: 'https://www.imdb.com/title/tt6710474/',},
    {name: 'One Piece',author: 'Eiichiro Oda',img: '/hobbies/media/op.jpg',link: 'https://myanimelist.net/anime/21/One_Piece',},
    {name: 'Mr. Robot',author: 'Sam Esmail',img: '/hobbies/media/mrrobot.jpg',link: 'https://www.imdb.com/title/tt4158110/',},
    {name: 'Better Call Saul',author: 'Vince Gilligan',img: '/hobbies/media/bcs.jpg',link: 'https://www.imdb.com/title/tt3032476/',},
  ]
}

export { HOBBIES }
export type { Hobby }
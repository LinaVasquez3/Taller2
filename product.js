//AQUI SE HACEN LOS 20 PRODUCTOS

const products = [

    //SHADOWS

    //1 - Shadows
    {
        id: 1,
        tittle: '35O3 Fierce by - Shadows',
        img: '/img2/shadows/shadows1.jpg',
        description: `Hot to the touch, this scorchin’ palette was born to dominate (just like you). Wild, sizzlin’ reds and hypnotic, flamin’ oranges join forces with vibrant, unexpected greens and a jaw-dropping glitter to create fierce looks that’ll stop everyone in their tracks. So, glow on and fuel that creativity`,
        //filtros (options y variation)
        variations: [
            {
                tittle: 'Row 1:',
                name: 'Trance / matte light peach',
            },
            {
                tittle: 'Row 2:',
                name: 'Temptin’ / matte coral',
            },
            {
                tittle: 'Row 3:',
                name: 'Ball of Fire / matte neon orange',
            }
        ],
        price: $25,
    },

    //2 - Shadows
    {
        id: 2,
        tittle: '24a Artist Pass Artistry - Shadows',
        img: '/img2/shadows/shadows2.jpg',
        description: `This lineup of amped-up pigments and graphic glitters—starring four super-sized shades with special effects—are ready to perform from the first set to sunset. Jaws will drop and heads will turn with every insta-worthy look you create. It’s time to take the main stage, babe.`,
        variations: [
            {
                tittle: 'Row 1 :',
                name: 'Wild Out / iridescent orange glitter',
            },
            {
                tittle: 'Row 2:',
                name: 'Desert Vibes / matte burnt orange',
            },
            {
                tittle: 'Row 3 :',
                name: 'Private Oasis / iridescent silk slip topper',
            }
        ],
        price: $29,
    },

    //3 - Shadows
    {
        id: 3,
        tittle: '35F Fall Into Frost Artistry - Shadows',
        img: '/img2/shadows/shadows3.jpg',
        description: `Featuring 7 highly pigmented matte shades and 28 rich metallic colors, this is the palette your will reach for to wake up your looks with a touch of eye-catching shimmer. The 7 matte colors offer necessary neutrals from flesh toned to black that ensure an effortless, well-blended look every time.`,
        variations: [
            {
                tittle: 'Row 1 :',
                name: 'Champagne / peachy pink shimmer',
            },
            {
                tittle: 'Row 2:',
                name: 'Cabana / shimmering bronze',
            },
            {
                tittle: 'Row 3 :',
                name: 'Magician / shimmering raspberry',
            }
        ],
        price: $16,
    },

    //4 - Shadows
    {
        id: 4,
        tittle: 'Secret Palette - Shadows',
        img: '/img2/shadows2.jpg',
        description: `This elegant array of jeweled hues features super matte, fluid metal, crystal, satin, diamond, and velvet finishes. Highly pigmented and multi-dimensional, each shade adds depth and intensity for rich, sultry looks.`,
        variations: [
            {
                tittle: 'Row 1 :',
                name: 'Aesthetic / hazel-taupe, satin finish',
            },
            {
                tittle: 'Row 2:',
                name: 'Addiction / deep sea green, super matte finish',
            },
            {
                tittle: 'Row 3 :',
                name: 'I Promise / light pink champagne, satin finish',
            }
        ],
        price: $16,
    },

    //5 - Shadows
    {
        id: 5,
        tittle: 'Hill Bling Boss - Shadows',
        img: '/img2/shadows2.jpg',
        description: `Call all the shots during an epic jewel heist of 10 creamy, super-pigmented eyeshadows.`,
        variations: [
            {
                tittle: 'Row 1 :',
                name: 'Hush Hush / matte lilac mauve',
            },
            {
                tittle: 'Row 2:',
                name: 'Glitz & Glam / shimmering rose goldTemptin’ / matte coral',
            },
            {
                tittle: 'Row 3:',
                name: 'Rockstar / matte mulberry',
            }
        ],
        price: $16,
    },
    

    
];

//exportar modulo de productos para que lo lea el servidor
module.exports = products;

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
    

    //BRUSHESSS

    //6 - Brushes
    {
        id: 6,
        tittle: 'The James Charles Brush Set - Brushes',
        img: '/img2/brushes/brushes1.jpg',
        description: `Get all the brushes you need for each step of your makeup routine—plus duplicates of the ones you’ll use the most.James Charles, curated this 34-piece collection of eye and face brushes, plus a beauty sponge and Custom Tubby. It really is the ultimate collection for creating any look you can imagine.`,
        price: $149,
    },

    //7 - Brushes
    {
        id: 7,
        tittle: 'Brittany Bear 360 Nose Contour Collection - Brushes',
        img: '/img2/brushes/brushes2.jpg',
        description: `Get a handle on contouring with the help of Brittany Bear. This makeup artist knows nose contouring and has mastered the art of transformation. Meet her three holy-grail brushes for a sculpted, snatched nose.`,
        price: $20,
    },

    //8 - Brushes
    {
        id: 8,
        tittle: 'The Jeffree Start Brush Collection - Brushes',
        img: '/img2/brushes/brushes3.jpg',
        description: `A jaw-dropping, beat-creating brush collection from our fiercest of fierce babes, Jeffree Star. You’ll live for these seven iconic, custom brushes that kick sass and take names. You. Better. Work.`,
        price: $49,
    },

    //9 - Brushes
    {
        id: 9,
        tittle: 'Jaclyn Hill The Eye Master Collection - Brushes',
        img: '/img2/brushes/brushes4.jpg',
        description: `Jaclyn Hill can rock a killer eye look like no other. Have a staring contest with her using her 8 go-to blending and buffing powerhouses.`,
        price: $39,
    },

    //10 - Brushes
    {
        id: 10,
        tittle: 'The Jeffree Start Eye & Face Brush Collection - Brushes',
        img: '/img2/brushes/brushes5.jpg',
        description: `A ride-or-die, beat-creating brush collection from our one and only, Jeffree Star. You’ll live for these seven sickening brushes that kick sass and take names. You. Better. Work.`,
        price: $49,
    },

    //TOOOLLSSS

    //11 - Tools
    {
        id: 11,
        tittle: 'Brush Cleansing Balm + Scrubber - Lemon Fresh - Tools',
        img: '/img2/tools/tools1.jpg',
        description: `Take your brush game to the next level. This powerful duo gives your brush and beauty sponge besties the ultimate deep clean.`,
        price: $25,
    },

    //12 - Tools 
    {
        id: 12,
        tittle: 'RC2 - Brush Tubby Case - Tools',
        img: '/img2/tools/tools2.png',
        description: `This stylish mega-sized case is big enough to keep even a large brush collection with a soft and sturdy faux leather covering that maintains its shape and is great for travel. The top snaps on and off easily and keeps the brushes in pristine shape and ready for use.`,
        price: $15,
    },

    
    //13 - Tools 
    {
        id: 13,
        tittle: 'Color Switch Solo - Tools',
        img: '/img2/tools/tools3.jpg',
        description: `Color Switch Solo by Vera Mona allows the makeup artist to quickly and efficiently switch between colors on your eyeshadow brushes. It is an essential tool that is extremely helpful while using multiple shades.`,
        price: $30,
    },
    
    //14 - Tools 
    {
        id: 14,
        tittle: 'Lash Book - Tools',
        img: '/img2/tools/tools4.jpg',
        description: `Keep it together, Morphe Babe. Get organized with this sleek, easy-access case that safely stores up to 8 pairs of faux lashes. Each lash style will stay clean, tidy, and in perfect shape—so you’ll always be ready to rock your most flattering flutter.`,
        price: $49,
    },

    //15 - Tools
    {
        id: 15,
        tittle: 'ZMB4 - Loader Set Bag - tools',
        img: '/img2/tools/tools5.jgp',
        description: `This bag is extra-large to hold all the essentials of not only makeup and tools, but tissues, emergency supplies and whatever else might be necessary when unusual situations arise and a pro artist needs to be prepared.`,
        price: $20,
    },

    
    //BOODDYY

    //16 - Body
    {
        id: 16,
        tittle: 'Pro Puff Brush - Body',
        img: '/img2/body/body1.jpg',
        description: `Babes, welcome to a new era in makeup application. A finishing brush with a difference, get your all-over glow on with the super-soft Pro Puff Face and Body Brush. Fitting perfectly into the palm of your hand, this oversized brush allows for effortless head-to-toe application of any powdered bronzer, highlighter, or setting powder.`,
        price: $46,
    },

    //17 - Body 
    {
        id: 17,
        tittle: 'Glamabronze Deluxe Face & Body Brush - Body',
        img: '/img2/body/body2.jpg',
        description: `This bangin’ brush is perfectly shaped so you can lay on color how and where you want it. Pair with our Glamabronze Face & Body Bronzer to tan up and stand out.`,
        price: $16,
    },

    
    //18 - Body 
    {
        id: 18,
        tittle: 'Glamabronze Deluxe Face & Body Brush - Body',
        img: '/img2/body/body3.jpg',
        description: `Go on with your bronze self. This super-sized face and body bronzer delivers a buildable bronze and tan-tastic matte finish with the sweep of a brush. So, go ahead and bask in sunkissed perfection. It’s sexy beach vibes all the way.`,
        price: $12,
    },
    
    //19 - Body 
    {
        id: 19,
        tittle: 'Liquid Luster Mini Highlighter Drops - Body',
        img: '/img2/body/body4.jpg',
        description: `Ready, set, shine. This collection of four mini highlighter drops lets you choose how you wanna get lit. From a Flash of bronze to a Strobe of shimmering pink, there’s light in every drop. Use alone for a killer highlight or mix with your foundation for an illuminating boost.`,
        price: $25,
    },

    //20 - body
    {
        id: 20,
        tittle: 'Liquid frost - Michigan Ice - Body',
        img: '/img2/body/body5.jgp',
        description: `Give your skin some blinding bling. Liquid Frost Liquid Highlighters fuse a metallic liquid formula with glitter to get your glow up from the flo’ up. This crazy-reflective sheen is for every babe who needs a lil’ extra in their lives..`,
        price: $35,
    },

    
];

//exportar modulo de productos para que lo lea el servidor
module.exports = products;

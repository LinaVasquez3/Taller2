//AQUI SE HACEN LOS 20 PRODUCTOS

const products = [

    /*    {
        img:'/img/img2/shop1a.jpg'
    },*/
        
    //SHADOWS

    //1 - Shadows
    {
        tittle: 'Uh-Huh Honey',
        name: 'Shine Shadows',
        img: '/img/img2/shadows/shadows1.jpg',
        rating: 4.2,
        discount: 50,
        description: `Sweet like honey, bright like the sun. 🍯

        This yellow monochromatic palette features every shade of yellow under the sun. 🌞
        
        Super pigmented shadows in bright, fun, happy shades of matte, metallic, and Pressed Glitter finishes are like sunshine in a palette.💛`,
        /*filtros (options y variation)
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
        ],*/
        price: 15,
    },

    //2 - Shadows
    {
        tittle: 'Strawberry Shake',
        name: 'Shine Shadows',
        img: '/img/img2/shadows/shadows2.jpg',
        description: `You’ll want every last drop of this fresh pink palette. 🍓

        This monochromatic palette features bright pinks, bold reds, and fresh peaches to create a look that’s fresh for the picking! Whether you’re into a soft romantic wash of color or a glam cut crease, this baby is a fave for everyone. 😍`,
        price: 20,
    },

    //3 - Shadows
    {
        tittle: 'Orange you glad?',
        name: 'Shine Shadows',
        img: '/img/img2/shadows/shadows3.jpg',
        description: `Orange is the new neutral and we're here for it! 🍊

        Create your own monochromatic orange look with 9 zesty shades and 3 different finishes.
        
        Wear it for your every day look, and add vibrant pops to experiment - this palette is perfect for everyone! 🧡`,
        price: 16,
    },

    //4 - Shadows
    {
        tittle: 'Lilac you a lot',
        name: 'Shine Shadows',
        img: '/img/img2/shadows/shadows4.jpg',
        description: `A whole lotta lilac in our dreamiest palette yet 💜 Create your best looks with our lilac monochromatic palette that features buttery matte shadows and eye catching metallics. One swatch is all it takes to fall in love.`,
        price: 22,
    },

    //5 - Shadows
    {
        tittle: 'Just my luck',
        name: 'Shine Shadows',
        img: '/img/img2/shadows/shadows5.jpg',
        description: `She's so lucky, she’ll be the star of your makeup collection. 🍀

        This green monochromatic palette features 9 richly pigmented shadows in every shade of green you can think of. Bring on the bold chartreuse looks or add an olive touch to your smokey eye, this palette has got it all.`,
        price: 16,
    },


    //LIPSS

    //6 - lips
    {
        tittle: 'Drop a hint',
        name: 'Glow Lips',
        img: '/img/img2/lips/lips1.jpg',
        description: `We love a good pink lip, hint hint! This baby pink duo is velvety soft and pairs perfectly with any look.
        4.8 star rating`,
        price: 25,
    },

    //7 - lips
    {
        tittle: 'What the fluff',
        name: 'Glow Lips',
        img: '/img/img2/lips/lips2.jpg',
        description: `Feel the fluff! This deep plum and berry liquid lip duo is velvety soft and irresistible.`,
        price: 20,
    },

    //8 - lips
    {
        tittle: 'Powder Room',
        name: 'Glow Lips',
        img: '/img/img2/lips/lips3.jpg',
        description: `Get ready in this whipped velvet nude liquid lipstick duo. Wear them alone or mix together to create your perfect nude lip.`,
        price: 25,
    },

    //9 - lips
    {
        tittle: 'Lofty Goals',
        name: 'Glow Lips',
        img: '/img/img2/lips/lips4.jpg',
        rating: 4.0, 
        description: `Sky’s the limit with these fun coral lips! Add the perfect velvet touch of color to your look.`,
        price: 15,
    },

    //10 - lips
    {
        tittle: 'Kiss the dusk',
        name: 'Glow Lips',
        img: '/img/img2/lips/lips5.jpg',
        description: `Excuse me while I kiss the sky in this red lip duo! This hot orange red and classic red pair looks amazing on everyone!`,
        price: 18,
    },

    //SKINNNN

    //11 - skin
    {
        tittle: 'Avocuddle',
        name: 'Radiate Skin',
        img: '/img/img2/skin/skin1.jpg',
        description: `We know the guac is extra! That’s why we made the perfect nourishing avocado duo. Meet the Avocado Superfood Nourishing Mask and Avocado Face Milk.`,
        price: 25,
    },

    //12 - skin 
    {
        tittle: 'Multi-Maske',
        name: 'Radiate Skin',
        img: '/img/img2/skin/skin2.jpg',
        description: `Enjoy multi-masking on-the-go with this power-packed threesome. Replenish deep moisture with Soak It Up Hydrating Hyaluronic Acid Mask, Soften and nourish with Avocado Superfood Nourishing Mask. Reveal brighter, renewed skin with papaya enzymes in A-HA Moment Exfoliating Enzyme Mask. From rich moisture to deep exfoliation, these masks got you covered.`,
        price: 18,
    },


    //13 - skin 
    {
        tittle: 'A-ha moment',
        name: 'Radiate Skin',
        img: '/img/img2/skin/skin3.jpg',
        description: `Has your skin been waiting for an A-HA moment? Our A-HA Moment Exfoliating Enzyme Mask is the must have, at-home facial to instantly resurface skin. Powered by a blend of Alpha Hydroxy Acids (AHA's) and Papaya Enzymes that are known to exfoliate dull skin, instantly revealing a fresh, new, and nourished complexion.`,
        price: 16,
    },

    //14 - skin 
    {
        tittle: 'The daily face',
        name: 'Radiate Skin',
        img: '/img/img2/skin/skin4.jpg',
        description: `Add mega moisture to your skin with The Daily Double! Powered by plant-derived Squalane, the daily facial moisturizer and eye cream nourish for healthy-looking skin. Wears flawlessly alone, or under makeup.`,
        price: 30,
    },

    //15 - skin
    {
        tittle: 'Multi-masking Mask',
        name: 'Radiate Skin',
        img: '/img/img2/skin/skin5.jpg',
        description: `Enjoy multi-masking on-the-go with this power-packed foursome. Replenish deep moisture with Soak It Up hydrating mask. Soften and nourish with Avocado superfood mask. Reveal brighter, renewed skin with papaya enzymes in A-HA Moment exfoliating enzyme mask. Draw out impurities with The Big Detox mud mask. From rich moisture to deep exfoliation, these masks have got you covered.`,
        price: 54,
    },


    //MASCARAAAAAA

    //16 - Mascara
    {
        tittle: 'Lovers Coral',
        name: 'Light Mascara',
        img: '/img/img2/mascara/mascara1.jpg',
        description: `Mascara that instantly volumizes, lifts, and lengthens lashes. What, like it’s hard?`,
        price: 10,
    },

    //17 - Mascara 
    {
        tittle: 'Blue ya mind',
        name: 'Light Mascara',
        img: '/img/img2/mascara/mascara2.jpg',
        description: `Mascara that instantly volumizes, lifts, and lengthens lashes. What, like it’s hard?`,
        price: 8,
    },


    //18 - Mascara 
    {
        tittle: 'Purple prose',
        name: 'Light Mascara',
        img: '/img/img2/mascara/mascara3.jpg',
        description: `Mascara that instantly volumizes, lifts, and lengthens lashes. What, like it’s hard?`,
        price: 12,
    },

    //19 - Mascara 
    {
        tittle: 'Black on black',
        name: 'Light Mascara',
        img: '/img/img2/mascara/mascara4.jpg',
        description: `Mascara that instantly volumizes, lifts, and lengthens lashes. What, like it’s hard?`,
        price: 10,
    },

    //20 - mascara
    {
        tittle: 'Bff lover',
        name: 'Light Mascara',
        img: '/img/img2/mascara/mascara5.jpg',
        description: `Mascara that instantly volumizes, lifts, and lengthens lashes. What, like it’s hard?`,
        price: 12,
    },


];

//exportar modulo de productos para que lo lea el servidor
module.exports = products;

// Data for the website

// Articles
const articlesData = [
  {
    id: 1,
    slug: 'articulo-1',
    title: 'Política exterior 2024 de China: afirmándose para lo que vendrá',
    titleEn: "China's Foreign Policy 2024: Asserting Itself for What's to Come",
    excerpt: 'El despliegue ascendente de China, incluyendo una “diplomacia de la paz” y las prevenciones ante un nuevo gobierno de Donald Trump.',
    excerptEn: "China's increasing deployment, including 'peace diplomacy' and precautions against a new Donald Trump administration.",
    content: `<p>El despliegue ascendente de China, incluyendo una “diplomacia de la paz” y las prevenciones ante un nuevo gobierno de Donald Trump.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 1. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2025-01-15').toISOString(),
    image: 'images/Política exterior 2024 de China.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link: "https://tektonikos.website/politica-exterior-2024-de-china-afirmandose-para-lo-que-vendra/"
  },
  {
    id: 2,
    slug: 'articulo-2',
    title: 'El oxímoron chino: la dictadura democrática',
    titleEn: 'The Chinese oxymoron: the democratic dictatorship',
    excerpt: 'Con recursos comunicativos restringidos, China empieza a plantear la discusión sobre qué es la democracia.',
    excerptEn: 'With limited communication resources, China is beginning to raise the question of what democracy is.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-11-05').toISOString(),
    image: 'images/El oxímoron chino.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/el-oximoron-chino-la-dictadura-democratica/"
  },
  {
    id: 3,
    slug: 'articulo-3',
    title: 'Desmalvinización, un síntoma colonial',
    titleEn: 'De-Malvinization, a colonial symptom',
    excerpt: 'El gobierno argentino encauzó la relación con Gran Bretaña en la cesión de las Malvinas.',
    excerptEn: 'The Argentine government channeled its relationship with Great Britain into the cession of the Malvinas.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-10-17').toISOString(),
    image: 'images/Desmalvinización un síntoma colonial.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/desmalvinizacion-un-sintoma-colonial/"
  },
  {
    id: 4,
    slug: 'articulo-4',
    title: 'China y la afirmación de una modernidad alternativa',
    titleEn: 'China and the affirmation of an alternative modernity',
    excerpt: 'La modernidad propia es concebida como clave y en contraposición con Occidente.',
    excerptEn: 'Modernity itself is conceived as key and in contrast to the West.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-09-06').toISOString(),
    image: 'images/China y la afirmación de una modernidad alternativa.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/china-y-la-afirmacion-de-una-modernidad-alternativa/"
  },
  {
    id: 5,
    slug: 'articulo-5',
    title: 'Las espectaculares elecciones de una democracia socavada',
    titleEn: 'The spectacular elections of an undermined democracy',
    excerpt: 'La frusilería del proceso electoral de EE.UU. evidencia problemas de representatividad.',
    excerptEn: 'The triviality of the US electoral process highlights problems of representativeness.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-08-11').toISOString(),
    image: 'images/Las espectaculares elecciones de una democracia socavada.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/las-espectaculares-elecciones-de-una-democracia-socavada/"
  },
  {
    id: 6,
    slug: 'articulo-6',
    title: 'Arabia Saudita en el declive del dólar global',
    titleEn: 'Saudi Arabia in the decline of the global dollar',
    excerpt: 'El Reino, clave en el mundo petrolero, cada vez teje más alianzas con China.',
    excerptEn: 'The Kingdom, a key player in the oil world, is increasingly forging alliances with China.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-07-10').toISOString(),
    image: 'images/Arabia Saudita en el declive del dólar global.webp',
    category: 'Economía',
    categoryEn: 'Economy',
    source: "Tectónikos",
    link:"https://tektonikos.website/arabia-saudita-en-el-declive-del-dolar-global/"
  },
  {
    id: 7,
    slug: 'articulo-7',
    title: 'Entrevista a Francesca Staiano: “Ante China, la Unión Europea se somete a Estados Unidos”',
    titleEn: 'Interview with Francesca Staiano: "In the face of China, the European Union submits to the United States"',
    excerpt: 'Un posicionamiento marcado por la falta de soberanía y el desbarranco democrático.',
    excerptEn: 'A position marked by a lack of sovereignty and democratic collapse.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-06-09').toISOString(),
    image: 'images/Entrevista a Francesca Staiano.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/entrevista-a-francesca-staiano-ante-china-la-union-europea-se-somete-a-estados-unidos/"
  },
  {
    id: 8,
    slug: 'articulo-8',
    title: 'Guillermo Carmona: “Argentina debe proyectarse hacia el área austral”',
    titleEn: 'Guillermo Carmona: “Argentina must project itself toward the southern region”',
    excerpt: 'El exsecretario argentino del Atlántico Sur analiza el futuro de una región crucial.',
    excerptEn: 'The former Argentine Secretary of the South Atlantic analyzes the future of a crucial region.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2024-02-04').toISOString(),
    image: 'images/Guillermo Carmona.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tectónikos",
    link:"https://tektonikos.website/guillermo-carmona-argentina-debe-proyectarse-hacia-el-area-austral/"
  },
  {
    id: 9,
    slug: 'articulo-9',
    title: 'El arte de la guerra en la civilización latinoamericana',
    titleEn: 'The art of war in Latin American civilization',
    excerpt: 'Análisis del impacto y posibilidades de traducción del clásico “El arte de la guerra” en los países de América Latina.',
    excerptEn: 'Analysis of the impact and translation possibilities of the classic "The Art of War" in Latin American countries.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2025-01-10').toISOString(),
    image: 'images/10.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Revista China Hoy, China",
    link:"https://www.chinahoy.com.cn/2018/wh/202501/t20250110_800389617.html"
  },
  {
    id: 10,
    slug: 'articulo-10',
    title: 'El peronismo y China más allá de la pandemia',
    titleEn: 'Peronism and China beyond the pandemic',
    excerpt: 'La pandemia evidenció la necesidad de un Estado macizo, un escenario que permitió comparar rasgos de la China socialista con la Argentina peronista.',
    excerptEn: 'The pandemic highlighted the need for a massive state, a scenario that allowed us to compare the features of socialist China with Peronist Argentina.',
    content: `<p>Contenido completo del artículo 2. Este es un párrafo de ejemplo para el contenido del artículo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
              <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    contentEn: `<p>Full content of article 2. This is a sample paragraph for the article content.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar felis at mauris maximus, id mattis nibh pulvinar. Curabitur non augue vitae justo molestie tincidunt et sed erat. Nulla facilisi. Vivamus quis tortor ultricies, malesuada libero ac, placerat magna.</p>
               <p>Maecenas vehicula fermentum magna, eu ultricies nisi scelerisque quis. Aenean eget lorem at libero faucibus gravida at eget purus. Nulla sed lacus rhoncus, suscipit augue et, bibendum odio.</p>`,
    date: new Date('2020-04-08').toISOString(),
    image: 'images/El peronismo y China más allá de la pandemia.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/04/08/el-peronismo-y-china-mas-alla-de-la-pandemia/"
  },
  {
    id: 11,
    slug: 'articulo-11',
    title: 'Efectos colaterales del coronavirus',
    titleEn: 'Side effects of the coronavirus',
    excerpt: 'Tanto los atribulados distopistas occidentales como los enérgicos utopistas chinos parecieran tener razones para que el brote de un virus que en sus peores días en China mató a un promedio de 60 personas contra un total de casi 28.000 chinos muertos, tomara una magnitud que aún resta explicar.',
    excerptEn: 'Both the beleaguered Western dystopians and the energetic Chinese utopians seem to have reasons for the outbreak of a virus that in its worst days in China killed an average of 60 people out of a total of nearly 28,000 Chinese dead, to reach a magnitude that remains to be explained.',
    date: new Date('2020-03-17').toISOString(),
    image: 'images/Efectos colaterales del coronavirus.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/03/17/efectos-colaterales-del-coronavirus/"
  },
  {
    id: 12,
    slug: 'articulo-12',
    title: 'China, el dilema de un periodista',
    titleEn: "China, a journalist's dilemma",
    excerpt: 'Las dificultades de los periodistas latinoamericanos para informar sobre China sin derivar hacia la propaganda emitida por el Partido Comunista Chino ni la propaganda de la Secretaría de Estado de los Estados Unidos.',
    excerptEn: 'The difficulties Latin American journalists face in reporting on China without deviating into propaganda issued by the Chinese Communist Party or the U.S. Secretary of State.',
    date: new Date('2021-04-04').toISOString(),
    image: 'images/China el dilema de un periodista.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2021/04/04/china-el-dilema-de-un-periodista/"
  },
  {
    id: 13,
    slug: 'articulo-13',
    title: 'La bandera de los argentinos',
    titleEn: "The flag of the Argentines",
    excerpt: 'Los símbolos patrios cumplen la función de tender un espacio de convivencia entre personas diversas. En el Día de la Bandera argentina, argentinos de origen chino cuentan qué sienten ante el emblema celeste y blanco que los ha adoptado y que ellos adoptaron.',
    excerptEn: 'National symbols serve the purpose of creating a space for coexistence among diverse people. On Argentine Flag Day, Argentines of Chinese origin share their feelings about the blue and white emblem that has adopted them and that they have adopted.',
    date: new Date('2020-06-21').toISOString(),
    image: 'images/La bandera de los argentinos.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/06/23/la-bandera-de-los-argentinos/"
  },
  {
    id: 14,
    slug: 'articulo-14',
    title: 'El Día del Fulgor',
    titleEn: "The Day of Splendor",
    excerpt: 'La celebración del Qīngmíng jié, el Día de los Muertos en China, moviliza fantasmas en tiempos de pandemia.',
    excerptEn: 'The celebration of Qingming Jié, the Day of the Dead in China, mobilizes ghosts in times of pandemic.',
    date: new Date('2020-04-04').toISOString(),
    image: 'images/El Día del Fulgor.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/04/04/el-dia-del-fulgor/"
  },
  {
    id: 15,
    slug: 'articulo-15',
    title: 'Un tango llamado Gaviota',
    titleEn: "A tango called Seagull",
    excerpt: 'La historia de Ou Zhanming, a quien el tango que se le prendó en los años que pasó en Buenos Aires, se bautizó Gaviota, para que en las milongas recordaran su nombre, es traductor de libros de tango, representa a la Academia Nacional del Tango en Beijing y se encarga del tema en la Embajada Argentina.',
    excerptEn: 'The story of Ou Zhanming, who was captivated by the tango that captivated him during the years he spent in Buenos Aires. He baptized himself Gaviota (Seagull) so that his name would be remembered at milongas. He is a translator of tango books, represents the National Tango Academy in Beijing, and is in charge of the subject at the Argentine Embassy.',
    date: new Date('2020-06-09').toISOString(),
    image: 'images/Un tango llamado Gaviota.webp',
    category: 'Cultura',
    categoryEn: 'Culture',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/06/09/un-tango-llamado-gaviota/"
  },
  {
    id: 16,
    slug: 'articulo-16',
    title: 'Hoja de ruta para las relaciones con China',
    titleEn: "Roadmap for relations with China",
    excerpt: 'El nuevo embajador argentino en China, Luis María Kreckler y el Representante Especial ante ese gobierno, Sabino Vaca Narvaja, dan pistas sobre la relación que se busca con el gigante asiático.',
    excerptEn: 'The new Argentine ambassador to China, Luis María Kreckler, and the Special Representative to that government, Sabino Vaca Narvaja, provide clues about the relationship they are seeking with the Asian giant.',
    date: new Date('2020-05-21').toISOString(),
    image: 'images/Hoja de ruta para las relaciones con China.webp',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/hoja-de-ruta-para-las-relaciones-con-china"
  },
  {
    id: 17,
    slug: 'articulo-17',
    title: 'China y las distopías',
    titleEn: "China and the dystopias",
    excerpt: 'China es construida desde los aparatos ideológicos occidentales como una distopía, algo así como lo contrario a una utopía.',
    excerptEn: 'China is constructed by Western ideological apparatuses as a dystopia, something like the opposite of a utopia.',
    date: new Date('2019-11-08').toISOString(),
    image: 'images/2.webp',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/china-y-las-distopias"
  },
  {
    id: 18,
    slug: 'articulo-18',
    title: 'El coronavirus como escenario de disputa',
    titleEn: "Coronavirus as a scenario of dispute",
    excerpt: 'El mundo asiste preocupado a la falta de cooperación entre Estados Unidos y China, o más aún, ante la escalada en la tensión de los dos mayores países de la Tierra en medio de la pandemia más atemorizante en lo que va del siglo.',
    excerptEn: 'The world is concerned about the lack of cooperation between the United States and China, and even more so, the escalating tensions between the two largest countries on Earth amid the most terrifying pandemic of the century.',
    date: new Date('2020-03-21').toISOString(),
    image: 'images/3.webp',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/el-coronavirus-como-escenario-de-disputa"
  },
  {
    id: 19,
    slug: 'articulo-19',
    title: 'La Ruta de la Política para retomar la relación con China',
    titleEn: "The Political Route to Resuming Relations with China",
    excerpt: 'La vigencia de la posición de Cristina en 2015 frente a los lineamientos de la política exterior que anunció Alberto Fernández. de las coincidencias entre Perón y Mao a los acuerdos de cooperación entre ambos países.',
    excerptEn: "The validity of Cristina's 2015 stance on the foreign policy guidelines announced by Alberto Fernández. From the similarities between Perón and Mao to the cooperation agreements between the two countries.",
    date: new Date('2020-01-26').toISOString(),
    image: 'images/4.webp',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Diario Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/la-ruta-de-la-politica-para-retomar-la-relacion-con-china"
  },
  {
    id: 20,
    slug: 'articulo-20',
    title: 'Tweeting Trump y el control de las redes sociales',
    titleEn: "Trump's tweeting and social media control",
    excerpt: 'Las redes sociales son censuradas como creadoras de imbecilidad. Pero no puede ignorárselas.',
    excerptEn: "Social media is criticized for creating stupidity. But it can't be ignored.",
    date: new Date('2020-09-19').toISOString(),
    image: 'images/1.webp',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Contraeditorial",
    link:"https://contraeditorial.com/tweeting-trump-y-el-control-de-las-redes-sociales/"
  },
  {
    id: 21,
    slug: 'articulo-21',
    title: 'El murciélago',
    titleEn: "The bat",
    excerpt: 'La epidemia no afectó de la misma manera a China y a Occidente. Aún estamos lejos de formarnos una imagen planetaria completa que dé cuenta de las razones de la pandemia e integre todas sus dimensiones, desde la biológica y la sanitaria hasta la tecnológica, la financiera, la social, la geopolítica, la cultural y la política interna de cada nación.',
    excerptEn: "The epidemic did not affect China and the West equally. We are still far from forming a complete global picture that accounts for the causes of the pandemic and integrates all its dimensions, from the biological and health-related to the technological, financial, social, geopolitical, cultural, and domestic politics of each nation.",
    date: new Date('2020-03-22').toISOString(),
    image: 'images/El muerciélago.webp',
    category: 'Política', 
    categoryEn: 'Politics',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/03/22/el-murcielago/"
  },
  {
    id: 22,
    slug: 'articulo-22',
    title: 'Los ochocientos',
    titleEn: "The eight hundred",
    excerpt: 'Al cumplirse 75 años del final de la Segunda Guerra Mundial, se estrenó en China la película 八佰, Los ochocientos, que habla de la participación de ese país en la contienda. El tema es abordado en esta nota en un intento de comprender hasta qué punto China se nos presenta como otra realidad.',
    excerptEn: "On the 75th anniversary of the end of World War II, the film 八佰 (The Eight Hundred) was released in China, which tells of that country's participation in the conflict. This article addresses the topic in an attempt to understand the extent to which China is presented to us as a different reality.",
    date: new Date('2020-09-02').toISOString(),
    image: 'images/Los Ochocientos.webp',
    category: 'Cultura', 
    categoryEn: 'Culture',
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/09/03/los-ochocientos/"
  },
  {
    id: 23,
    slug: 'articulo-23',
    title: 'Los argentinos que no pueden volver a China',
    titleEn: "Argentines who cannot return to China",
    excerpt: 'Entre cien y doscientos argentinos que viven en China quedaron varados en Argentina por la cuarentena global que impuso la pandemia de Covid-19. Gustavo Ng entrevistó a varios afectados.',
    excerptEn: "Between 100 and 200 Argentines living in China were stranded in Argentina by the global quarantine imposed by the COVID-19 pandemic. Gustavo Ng interviewed several of those affected.",
    date: new Date('2020-12-16').toISOString(),
    image: 'images/Los argentinos que no pueden volver a China.webp',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/12/16/los-argentinos-que-no-pueden-volver-a-china/"
  },
  {
    id: 24,
    slug: 'articulo-24',
    title: 'Entre el presidente y los chinos, un sabor autopía',
    titleEn: "Between the president and the Chinese, a taste of utopity",
    excerpt: 'La novela distópica Slapstick (Payasadas), del escritor Kurt Vonnegut, profetizó varios rasgos de la pandemia de COVID-19, entre ellos los problemas de Estados Unidos para afrontarla.',
    excerptEn: "Kurt Vonnegut's dystopian novel Slapstick prophesied several features of the COVID-19 pandemic, including America's struggles to cope with it.",
    date: new Date('2020-10-04').toISOString(),
    image: 'images/Entre el presidente y los chinos, un sabor a utopía.webp',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/10/04/entre-el-presidente-y-los-chinos-un-sabor-a-utopia/"
  },
  {
    id: 25,
    slug: 'articulo-25',
    title: 'Carta a la comunidad china en Argentina por el 24 de marzo',
    titleEn: "Letter to the Chinese community in Argentina for March 24th",
    excerpt: 'Informe a la colectividad formada por migrantes chinos sobre la dictadura cívico-militar de 1976 a 1983.',
    excerptEn: "Report to the Chinese migrant community on the civil-military dictatorship from 1976 to 1983.",
    date: new Date('2020-03-24').toISOString(),
    image: 'images/Carta a la comunidad china en Argentina por el 24 de marzo.webp',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Adsina",
    link:"https://adsina.wordpress.com/2020/03/24/carta-a-la-comunidad-china-en-argentina-por-el-24-de-marzo/"
  },
  {
    id: 26,
    slug: 'articulo-26',
    title: 'El fin de la indigencia en China: ¿un hito de la humanidad?',
    titleEn: "The end of homelessness in China: a milestone for humanity?",
    excerpt: 'Oculta por la pandemia, y por el desinterés de gran parte de la prensa occidental, la noticia de la desaparición de la pobreza extrema china tiene dimensiones históricas. Las lecciones que este proceso deja para el mundo.',
    excerptEn: "Obscured by the pandemic and the lack of interest of much of the Western press, the news of the disappearance of extreme poverty in China has historic dimensions. The lessons this process offers for the world.",
    date: new Date('2021-01-02').toISOString(),
    image: 'images/6.webp',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Diario Perfil",
    link:"https://www.perfil.com/noticias/opinion/el-fin-de-la-indigencia-en-china-un-hito-de-la-humanidad.phtml"
  },
  {
    id: 27,
    slug: 'articulo-27',
    title: 'Vacunas en la guerra de la comunicación',
    titleEn: "Vaccines in the communication war",
    excerpt: 'Las encuestas revelan que en los países occidentales crece la imagen negativa de Beijing que, claramente, está perdiendo la batalla de la comunicación con Washington y sus aliados.',
    excerptEn: "Polls reveal that Beijing's negative image is growing in Western countries, and it is clearly losing the battle for communication with Washington and its allies.",
    date: new Date('2021-04-21').toISOString(),
    image: 'images/7.webp',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Diario Perfil",
    link:"https://www.perfil.com/noticias/internacional/vacunas-guerra-comunicacion.phtml"
  },
  {
    id: 28,
    slug: 'articulo-28',
    title: 'Democracia en modo chino',
    titleEn: "Democracy in Chinese mode",
    excerpt: 'El gobierno de Xi Jinping acaba de publicar un documento en el que explica que China es un país democrático. En Occidente, tal afirmación produce un sarcasmo generalizado, que los chinos retrucan haciendo ver que los occidentales se han tragado el cuento de que la única democracia posible es aquella que los países dominantes de Europa y América imponen como universal. “No existe un modelo fijo de democracia, sino que se manifiesta de muchas formas”, dice el informe.',
    excerptEn: "Xi Jinping's government has just published a document explaining that China is a democratic country. In the West, such a statement provokes widespread sarcasm, which the Chinese counter by suggesting that Westerners have bought into the narrative that the only democracy possible is the one imposed as universal by the dominant countries of Europe and America. \"There is no fixed model of democracy, but it manifests itself in many forms\" ​the report states.",
    date: new Date('2021-12-07').toISOString(),
    image: 'images/8.webp',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Radio Gráfica",
    link:"https://radiografica.org.ar/2021/12/07/democracia-en-modo-chino/"
  },
  {
    id: 29,
    slug: 'articulo-29',
    title: 'La riqueza simbólica de la serpiente',
    titleEn: "The symbolic richness of the snake",
    excerpt: 'Leyendas, mitos y simbología de la Serpiente en las antiguas tradiciones de conocimiento de China.',
    excerptEn: "Legends, myths and symbolism of the Snake in the ancient knowledge traditions of China.",
    date: new Date('2024-12-26').toISOString(),
    image: 'images/9.webp',
    category: 'Cultura',
    categoryEn: 'Culture', 
    source: "Revista China Hoy, China",
    link:"https://www.chinahoy.com.cn/2018/tj/202412/t20241226_800388183.html"
  },
  {
    id: 30,
    slug: 'articulo-30',
    title: 'Sabino Vaca Narvaja: retomar un camino con China',
    titleEn: "Sabino Vaca Narvaja: resume a path with China",
    excerpt: 'Heredero de una familia política, el joven especialista quiere dar un nuevo impulso a las relaciones con China.',
    excerptEn: "Heir to a political family, the young specialist wants to give new impetus to relations with China.",
    date: new Date('2020-05-22').toISOString(),
    image: 'images/5.webp',
    category: 'Política',
    categoryEn: 'Politics', 
    source: "Diario Perfil",
    link:"https://www.perfil.com/noticias/politica/sabino-vaca-narvaja-retomar-camino-china.phtml"
  },
  {
    id: 31,
    slug: 'articulo-31',
    title: 'Tras el camino de mi padre',
    titleEn: "Following my father's path",
    excerpt: 'Gustavo Ng cuenta el reencuentro luego de veinte años sin ver a su padre. Trabajo, desarraigo, identidad y las formas del hogar. ¿Qué enseñanzas trae la búsqueda del padre?',
    excerptEn: "Gustavo Ng recounts his reunion after twenty years without seeing his father. Work, displacement, identity, and the ways of homemaking. What lessons does the search for one's father bring?",
    date: new Date('2017-06-16').toISOString(),
    image: 'images/Tras el camino de mi padre.webp',
    category: 'Cultura',
    categoryEn: 'Culture', 
    source: "Revista Anfibia",
    link:"https://www.revistaanfibia.com/tras-camino-padre/"
  },
  {
    id: 32,
    slug: 'articulo-32',
    title: 'China profundiza el camino de la innovación tecnológica',
    titleEn: "China deepens the path of technological innovation",
    excerpt: 'El crecimiento previsto por China para este 2024 es del 5 por ciento. El acento ya no está puesto en la cantidad y sino en la calidad del avance, con eje en los sectores de nuevas energías, equipos de alta gama y biotecnología.',
    excerptEn: "China's projected growth for 2024 is 5 percent. The emphasis is no longer on quantity but on the quality of progress, focusing on the new energy, high-end equipment, and biotechnology sectors.",
    date: new Date('2024-03-31').toISOString(),
    image: 'images/China profundiza el camino de la innovación tecnológica.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Página 12",
    link:"https://www.pagina12.com.ar/724696-china-profundiza-el-camino-de-la-innovacion-tecnologica"
  },
  {
    id: 33,
    slug: 'articulo-33',
    title: 'El PCCh proyecta China hasta el 2028',
    titleEn: "The CCP projects China until 2028",
    excerpt: 'Comenzarán hoy las sesiones del XX Congreso del Partido Comunista Chino (PCCh), el máximo órgano del partido que gobierna el país más poblado y una de las dos mayores economías del mundo.',
    excerptEn: "Sessions of the 20th Congress of the Chinese Communist Party (CCP), the highest body of the party that governs the most populous country and one of the world's two largest economies, will begin today.",
    date: new Date('2022-10-16').toISOString(),
    image: 'images/El PCCh proyecta China hasta el 2028.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/el-pcch-proyecta-china-hasta-el-2028/"
  },
  {
    id: 34,
    slug: 'articulo-34',
    title: 'El desafío: emerger con otros',
    titleEn: "The challenge: emerging with others",
    excerpt: 'El anuncio de que Argentina había entrado en los BRICS fue eufórico. Si bien se había empezado a hablar del tema diez años atrás, hubo altibajos. El anuncio de que se había decidido la inclusión de Argentina pareció sorprender a los analistas y al Gobierno.',
    excerptEn: "The announcement that Argentina had joined the BRICS was euphoric. Although the topic had been discussed for ten years, there were ups and downs. The announcement that Argentina had been included seemed to surprise analysts and the government.",
    date: new Date('2023-08-27').toISOString(),
    image: 'images/El desafío emerger con otros.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/desafio-emerger-con-otros/"
  },
  {
    id: 35,
    slug: 'articulo-35',
    title: 'La época de la longevidad',
    titleEn: "The age of longevity",
    excerpt: 'El país más poblado del mundo es el que tiene una de las tasas de natalidad más bajas. En China, en 1950, habían nacido 6,11 niños por mujer y es necesario que nazcan 2 para que la población se mantenga.',
    excerptEn: "The most populous country in the world has one of the lowest birth rates. In China, in 1950, 6.11 children were born per woman, and two more are needed to maintain the population.",
    date: new Date('2021-11-27').toISOString(),
    image: 'images/La época de la longevidad.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/la-epoca-de-la-longevidad/"
  },
  {
    id: 36,
    slug: 'articulo-36',
    title: 'A 100 años de su fundación, no hay China sin el PCCh',
    titleEn: "100 years after its founding, there is no China without the CCP",
    excerpt: 'No hay China sin gobierno. No hay gobierno chino sin Partido Comunista Chino. No hay China sin Partido Comunista Chino (PCCh).',
    excerptEn: "There is no China without a government. There is no Chinese government without the Chinese Communist Party. There is no China without the Chinese Communist Party (CCP).",
    date: new Date('2021-07-26').toISOString(),
    image: 'images/A 100 años de su fundación, no hay China sin el PCCh.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/a-100-anos-de-su-fundacion-no-hay-china-sin-el-pcch/"
  },
  {
    id: 37,
    slug: 'articulo-37',
    title: 'Argentina y los uigures',
    titleEn: "Argentina and the Uyghurs",
    excerpt: 'En el vacío informativo entre Occidente y China, la problemática de la minoría uigur, que tiene una facción independentista y parte de la jihad, es aprovechada por Estados Unidos para fustigar a China.',
    excerptEn: "In the information vacuum between the West and China, the plight of the Uighur minority, which has an independence faction and is part of the jihad movement, is being exploited by the United States to criticize China.",
    date: new Date('2020-01-05').toISOString(),
    image: 'images/Argentna y los uigures.webp',
    category: 'Política',
    categoryEn: 'Politics',
    source: "Tiempo Argentino",
    link:"https://www.tiempoar.com.ar/ta_article/argentina-y-los-uigures/"
  },
  // Agrega más artículos según sea necesario
];

// Press
const pressData = [
  {
    id: 1,
    title: 'China - La superación de la pobreza',
    titleEn: 'China - Overcoming poverty',
    publication: 'Programa “La Casa Invita”, AM 750',
    date: new Date('2021-06-08').toISOString(),
    summary: 'Entrevista a Gustavo Ng, autor del libro China, “La superación de la pobreza”',
    summaryEn: 'Interview with Gustavo Ng, author of the book China, “Overcoming poverty”',
    link: 'https://ar.radiocut.fm/audiocut/china-superacion-pobreza-casa-invita/',
    image: 'images/Prensa/5.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 2,
    title: 'CERCA Y LEJOS',
    titleEn: 'CLOSE AND FAR',
    publication: 'CGTN Español',
    date: new Date('2017-05-14').toISOString(),
    summary: 'Con la participación de Gustavo Ng, desde una perspectiva objetiva, se muestra un mundo y una China más reales y se analizan en profundidad temas culturales, históricos y políticos, presentando en detalle los constantes cambios y el irrefrenable desarrollo de China y de su pueblo.',
    summaryEn: 'With the participation of Gustavo Ng, from an objective perspective, a more real world and China are shown and cultural, historical and political issues are analyzed in depth, presenting in detail the constant changes and the unstoppable development of China and its people.',
    link: 'https://www.youtube.com/watch?v=uGG4sOrT3dQ',
    image: 'images/Prensa/6.webp',
    type: 'interview',
    typeEn: 'interview',
  
  },
  {
    id: 3,
    title: 'Viaje al Tíbet, ayer y hoy de una frontera caliente',
    titleEn: 'Journey to Tibet, yesterday and today of a hot border',
    publication: 'Programa “Voces del Mundo”, Radio Sputnik',
    date: new Date('2019-06-13').toISOString(),
    summary: 'Con una densidad poblacional de dos personas por kilómetro cuadrado y un territorio casi desértico, el Tíbet es una región remota incluso para los parámetros chinos. "Los monjes budistas tienen una presencia importantísima, pero el gobierno central de China tiene el control político y militar de la zona", dijo el periodista Gustavo Ng.',
    summaryEn: 'With a population density of two people per square kilometer and an almost desert territory, Tibet is a remote region even by Chinese standards. "Buddhist monks have a very important presence, but the central government of China has political and military control of the area," said journalist Gustavo Ng.',
    link: 'https://noticiaslatam.lat/20190713/tibet-region-remota-1088000228.html',
    image: 'images/Prensa/Viaje al Tíbet, ayer y hoy de una frontera caliente.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 4,
    title: 'Redactor jefe de la Revista Argentina DangDai: Estoy difundiendo la cultura china en Argentina',
    titleEn: 'Editor in chief of the Argentine DangDai Magazine: I am spreading Chinese culture in Argentina',
    publication: 'Wuzhou Communication Publising Media',
    date: new Date('2023-11-27').toISOString(),
    summary: 'Gustavo Ng relata su acercamiento a China y su carrera como difusor de la cultura china en Argentina.',
    summaryEn: 'Gustavo Ng recounts his approach to China and his career as a disseminator of Chinese culture in Argentina.',
    link: 'https://mp.weixin.qq.com/s/5l7OuHvijwyVXMq4ueeFSA',
    image: 'images/Prensa/8.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 5,
    title: 'Una misión a través de los libros',
    titleEn: 'A mission through books',
    publication: 'Revista China Hoy',
    date: new Date('2023-11-01').toISOString(),
    summary: 'Gustavo Ng relata cómo dedica su vida a informar sobre China en Argentina a través de los medios de comunicación y de libros.',
    summaryEn: 'Gustavo Ng recounts how he dedicates his life to informing about China in Argentina through the media and books.',
    link: 'https://www.chinahoy.com.cn/2018/tt/202311/t20231101_800347723.html',
    image: 'images/Prensa/9.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 6,
    title: 'China contra la pobreza, una batalla en palabras',
    titleEn: 'China against poverty, a battle in words',
    publication: 'Diario La Prensa, Panamá',
    date: new Date('2024-08-10').toISOString(),
    summary: 'El autor argentino Gustavo Ng, estará en Panamá presentado su obra "Podemos vencer la pobreza - La experiencia de China", donde narra su experiencia conociendo la erradicación de la pobreza en China.',
    summaryEn: 'Argentine author Gustavo Ng will be in Panama presenting his work "We can overcome poverty - The China experience", where he narrates his experience getting to know the eradication of poverty in China.',
    link: 'https://www.prensa.com/vivir/china-contra-la-pobreza-una-batalla-en-palabras/#google_vignette',
    image: 'images/Prensa/10.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 7,
    title: 'Gustavo NG: "Cuando veo a mi viejo imagino la eternidad"',
    titleEn: 'Gustavo NG: "When I see my old man, I imagine eternity"',
    publication: 'Diario Tiempo Argentino',
    date: new Date('2017-08-06').toISOString(),
    summary: 'En su último libro, el escritor propone una suerte de crónica neoyorquina sobre el postergado reencuentro con su padre después de 20 años de indiferencia.',
    summaryEn: 'In his latest book, the writer proposes a sort of New York chronicle about the postponed reunion with his father after 20 years of indifference.',
    link: 'https://www.tiempoar.com.ar/ta_article/gustavo-ng-cuando-veo-a-mi-viejo-imagino-la-eternidad',
    image: 'images/2.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 8,
    title: 'Conferencia del escritor argentino Gustavo NG en Beijing',
    titleEn: 'Conference by Argentine writer Gustavo NG in Beijing',
    publication: 'Embajada Argentina en China',
    date: new Date('2023-05-15').toISOString(),
    summary: 'El 15 de junio tuvo lugar en Beijing una conferencia de Gustavo NG, periodista y escritor especializado en China, Director de la Revista cultural Dang Dai y autor de varias obras relativas al país asiático.',
    summaryEn: 'On June 15, a conference by Gustavo NG, a journalist and writer specializing in China, Director of the cultural magazine Dang Dai and author of several works related to the Asian country, took place in Beijing.',
    link: 'https://echin.cancilleria.gob.ar/es/conferencia-del-escritor-argentino-gustavo-ng-en-beijing',
    image: 'images/Prensa/3.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 9,
    title: '¿Por qué China sólo tuvo 5000 muertos por Covid-19 ?',
    titleEn: 'Why did China only have 5000 deaths from Covid-19?',
    publication: 'Programa Café a la Turca, FM Horizonte',
    date: new Date('2022-01-28').toISOString(),
    summary: 'Entrevista de Café a la Turca a Gustavo Ng, periodista especializado en China, director de la revista DangDai, junto al colega Néstor Restivo, y compilador del libro recientemente publicado "La superación de la pandemia en América Latina", con artículos de diferentes autores sobre el escenario sanitario con que América Latina y Argentina debieron enfrentar la Covid-19 y la incidencia que tuvo en el manejo de la pandemia la cooperación de China.',
    summaryEn: 'Café a la Turca interview with Gustavo Ng, a journalist specializing in China, director of the magazine DangDai, along with colleague Néstor Restivo, and compiler of the recently published book "Overcoming the pandemic in Latin America", with articles by different authors on the health scenario that Latin America and Argentina had to face Covid-19 and the impact that China\'s cooperation had on pandemic management.',
    link: 'https://araziroxana.com.ar/nota/1238/por-que-china-solo-tuvo-5000-muertos-por-covid-19-',
    image: 'images/Prensa/7.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 10,
    title: '“El horóscopo chino es un pequeño Aleph de la cultura de los chinos”',
    titleEn: '"The Chinese horoscope is a small Aleph of Chinese culture"',
    publication: 'Diario Tiempo Argentino',
    date: new Date('2021-02-08').toISOString(),
    summary: 'El periodista y escritor Gustavo Ng, que recoge en un libro sus indagaciones sobre las claves que regirán el 2021 bajo el signo del búfalo de metal.',
    summaryEn: 'Journalist and writer Gustavo Ng, who collects in a book his inquiries about the keys that will govern 2021 under the sign of the metal buffalo.',
    link: 'https://www.tiempoar.com.ar/ta_article/el-horoscopo-chino-es-un-pequeno-aleph-de-la-cultura-de-los-chinos',
    image: 'images/Prensa/1.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 11,
    title: 'El mayor premio de China a escritores extranjeros fue otorgado al argentino Gustavo Ng',
    titleEn: 'China\'s highest award to foreign writers was given to Argentine Gustavo Ng',
    publication: 'Página 12',
    date: new Date('2023-06-16').toISOString(),
    summary: 'El autor de “La intimidad de las islas”, “El regalo del Dios Viento” y “El Tangram de China”, entre otros títulos, es uno de los grandes divulgadores de la cultura del gigante asiático.',
    summaryEn: 'The author of "The Intimacy of the Islands", "The Gift of the Wind God" and "The Tangram of China", among other titles, is one of the great disseminators of the culture of the Asian giant.',
    link: 'https://www.youtube.com/watch?v=uGG4sOrT3dQ',
    image: 'images/Prensa/El mayor premio de China.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 12,
    title: 'Gustavo Ng criticó los polémicos dichos de Diana Mondino',
    titleEn: 'Gustavo Ng criticized the controversial statements of Diana Mondino',
    publication: 'Radio Con Vos 89.9',
    date: new Date('2024-05-03').toISOString(),
    summary: 'Entrevistado por Reynaldo Sietecase, Gustavo Ng analiza desde Beijing los prejuicios y la torpeza de la diplomacia del Gobierno de Javier Milei ante China.',
    summaryEn: 'Interviewed by Reynaldo Sietecase, Gustavo Ng analyzes from Beijing the prejudices and clumsiness of the diplomacy of Javier Milei\'s Government towards China.',
    link: 'https://noticiaslatam.lat/20190713/tibet-region-remota-1088000228.html',
    image: 'images/Prensa/Gustavo Ng criticó los polémicos dichos de Diana Mondino.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 13,
    title: 'Gustavo Ng: “China toma de la cultura argentina lo que encuentra en el bazar de la cultura global”',
    titleEn: 'Gustavo Ng: "China takes from Argentine culture what it finds in the global culture bazaar"',
    publication: 'La Nación',
    date: new Date('2023-06-03').toISOString(),
    summary: 'El escritor y periodista ganó el Special Book Award que otorga el gobierno chino; trabaja en la biografía de un artista cantonés, Lo Yuao, que vivió en San Nicolás de los Arroyos.',
    summaryEn: 'The writer and journalist won the Special Book Award given by the Chinese government; he is working on the biography of a Cantonese artist, Lo Yuao, who lived in San Nicolás de los Arroyos.',
    link: 'https://www.lanacion.com.ar/cultura/gustavo-ng-china-toma-de-la-cultura-argentina-lo-que-encuentra-en-el-bazar-de-la-cultura-global-nid03072023/',
    image: 'images/Prensa/Gustavo Ng China toma de la cultura argentina.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 14,
    title: 'Gustavo Ng: "Para los chinos somos un tesoro de recursos naturales y humanos"',
    titleEn: 'Gustavo Ng: "For the Chinese, we are a treasure trove of natural and human resources"',
    publication: 'Perfil, programa “Modo Fontevecchia”',
    date: new Date('2023-05-30').toISOString(),
    summary: 'Uno de los fundadores de Dang Dai afirmó que China se comporta, en el terreno externo, de manera neoliberal, pero podría favorecer el desarrollo de países de Latinoamérica.',
    summaryEn: 'One of the founders of Dang Dai stated that China behaves, in the external field, in a neoliberal way, but could favor the development of Latin American countries.',
    link: 'https://www.perfil.com/noticias/modo-fontevecchia/gustavo-ng-para-los-chinos-somos-un-tesoro-de-recursos-naturales-y-humanos-modof.phtml',
    image: 'images/Prensa/Gustavo Ng Para los chinos somos.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 15,
    title: 'Gustavo Ng ganó el premio mayor de China para escritores extranjeros',
    titleEn: 'Gustavo Ng won China\'s top prize for foreign writers',
    publication: 'Infobae',
    date: new Date('2023-06-15').toISOString(),
    summary: 'El periodista y editor argentino recibió en Beijing el Special Book Award, por su labor de difusión cultural. “Necesitamos que nuestras relaciones vayan más allá de la venta de recursos naturales e involucren al arte y la ciencia”, afirmó.',
    summaryEn: 'The Argentine journalist and editor received the Special Book Award in Beijing for his cultural dissemination work. "We need our relationships to go beyond the sale of natural resources and involve art and science," he said.',
    link: 'https://www.infobae.com/cultura/2023/06/15/gustavo-ng-gano-el-premio-mayor-de-china-para-escritores-extranjeros/',
    image: 'images/Prensa/Gustavo Ng ganó el premio mayor.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 16,
    title: '"China tiene una política específica hacia una nueva configuración del mundo" - Una entrevista con Gustavo Ng',
    titleEn: '"China has a specific policy towards a new world configuration" - An interview with Gustavo Ng',
    publication: 'Jacobin',
    date: new Date('2022-10-22').toISOString(),
    summary: 'Hasta ahora China se atuvo a las reglas de juego mundiales, pero este XX Congreso del PCCh puede empezar a marcar el punto de inflexión hacia un momento de mayor injerencia en la política global.',
    summaryEn: 'So far, China has adhered to global rules of the game, but this 20th Congress of the CCP could begin to mark the turning point towards a moment of greater interference in global politics.',
    link: 'https://jacobinlat.com/2022/10/china-tiene-una-politica-especifica-hacia-una-nueva-configuracion-del-mundo/',
    image: 'images/Prensa/China tiene una política específica.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 17,
    title: 'Gustavo Ng: “China es inevitable para toda América Latina y hasta para los Estados Unidos”',
    titleEn: 'Gustavo Ng: "China is inevitable for all of Latin America and even for the United States"',
    publication: 'CNN Radio Argentina',
    date: new Date('2024-10-14').toISOString(),
    summary: 'Gustavo Ng, editor de la revista DangDai, afirmó que “China es inevitable. La dimensión que ganó y la aceleración económica que tiene, hace que sea inevitable para toda América Latina, así como lo es para los Estados Unidos”.',
    summaryEn: 'Gustavo Ng, editor of the DangDai magazine, stated that "China is inevitable. The dimension it has gained and the economic acceleration it has, makes it inevitable for all of Latin America, as it is for the United States".',
    link: 'https://cnnespanol.cnn.com/radio/2024/10/14/gustavo-ng-china-es-inevitable-para-toda-america-latina-y-hasta-para-los-estados-unidos',
    image: 'images/Prensa/Gustavo Ng China es inevitable.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 18,
    title: 'Dice el periodista argentino que más sabe de China: "Como uno ve que Mondino es rica, piensa que es culta"',
    titleEn: 'Says the Argentine journalist who knows the most about China: "When you see that Mondino is rich, you think she is cultured"',
    publication: 'Perfil, programa “Modo Fontevecchia”',
    date: new Date('2024-05-03').toISOString(),
    summary: 'El periodista Gustavo Ng se refirió a los dichos de la Canciller, que dijo que "los chinos son todos iguales", y los comparó con "hablar con alguien y que se saque los mocos delante tuyo". "Cuando se habla de negocios estos son pequeños gestos de mala educación".',
    summaryEn: 'Journalist Gustavo Ng referred to the statements of the Chancellor, who said that "the Chinese are all the same", and compared them to "talking to someone and having them pick their nose in front of you". "When it comes to business, these are small gestures of bad manners".',
    link: 'https://www.perfil.com/noticias/modo-fontevecchia/dice-el-periodista-argentino-que-mas-sabe-de-china-como-uno-ve-que-mondino-es-rica-piensa-que-es-culta-modof.phtml',
    image: 'images/Prensa/Dice el periodista argentino que más.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 19,
    title: 'La China profunda vista con ojos del argentino Gustavo Ng',
    titleEn: 'Deep China seen through the eyes of Argentine Gustavo Ng',
    publication: 'Tiempo Argentino',
    date: new Date('2023-07-09').toISOString(),
    summary: 'Premiado por la difusión de la cultura del milenario país asiático, el codirector de la revista Dang Dai cuenta sus experiencias entre pueblos y territorios donde Occidente tiene la demonización fácil.',
    summaryEn: 'Awarded for the dissemination of the culture of the ancient Asian country, the co-director of the Dang Dai magazine recounts his experiences among peoples and territories where the West has easy demonization.',
    link: 'https://www.tiempoar.com.ar/ta_article/la-china-profunda-vista-con-ojos-del-argentino-gustavo-ng/',
    image: 'images/Prensa/La China profunda vista con.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 20,
    title: 'Gustavo Ng: "Salta tiene una oportunidad enorme con China"',
    titleEn: 'Gustavo Ng: "Salta has a huge opportunity with China"',
    publication: 'Radio Nacional Salta',
    date: new Date('2022-07-14').toISOString(),
    summary: 'Lo indicó el periodista Gustavo Ng, especializado en las relaciones de Argentina y China, en el marco de su visita a Radio Nacional Salta, donde habló de la incidencia de los negocios del país asiático en Argentina y de las oportunidades.',
    summaryEn: 'This was indicated by journalist Gustavo Ng, specialized in the relations between Argentina and China, during his visit to Radio Nacional Salta, where he spoke about the impact of Asian country\'s business in Argentina and the opportunities.',
    link: 'https://www.radionacional.com.ar/gustavo-ng-salta-tiene-una-oportunidad-enorme-con-china/',
    image: 'images/Prensa/Gustavo Ng Salta tiene una.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 21,
    title: 'Gustavo Ng participó en el Foro Especial con Argentina de "China en la nueva expedición y el mundo"',
    titleEn: 'Gustavo Ng participated in the Special Forum with Argentina of "China in the new expedition and the world"',
    publication: 'CGTN Español',
    date: new Date('2022-11-02').toISOString(),
    summary: 'El Foro Especial con Argentina en el marco de la serie de coloquios televisivos "China en la nueva expedición y el mundo" se celebró el 31 de octubre, organizado por CGTN. Participó en el debate de forma virtual Gustavo Ng, el editor de Revista DangDai.',
    summaryEn: 'The Special Forum with Argentina within the framework of the television colloquium series "China in the new expedition and the world" was held on October 31, organized by CGTN. Gustavo Ng, the editor of DangDai Magazine, participated in the debate virtually.',
    link: 'https://www.youtube.com/watch?v=cPQ8nBXPSRghttps://www.youtube.com/watch?v=cPQ8nBXPSRg',
    image: 'images/Prensa/Gustavo Ng participó en el Foro.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 22,
    title: 'Gustavo Ng: “Con mi viaje le resolví a mi papá la contradicción de querer dejar China atrás, pero a la vez ser chino”',
    titleEn: 'Gustavo Ng: "With my trip, I solved for my dad the contradiction of wanting to leave China behind, but at the same time being Chinese"',
    publication: 'Medium',
    date: new Date('2017-07-31').toISOString(),
    summary: 'En Mariposa de otoño el autor esboza con sutileza trazos de un pasado que lo llevó a reencontrarse con su padre y con la cultura de China. Un viaje a Nueva York que fue además iniciativa para reconstruir la propia identidad.',
    summaryEn: 'In "Mariposa de otoño", the author subtly outlines traces of a past that led him to reunite with his father and with Chinese culture. A trip to New York that was also an initiative to rebuild one\'s own identity.',
    link: 'https://medium.com/@mariasingla/gustavo-ng-con-mi-viaje-le-resolv%C3%AD-a-mi-pap%C3%A1-la-contradicci%C3%B3n-de-querer-dejar-china-atr%C3%A1s-pero-c628328e86e6',
    image: 'images/Prensa/Gustavo Ng Con mi viaje le resolví.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 23,
    title: 'La oportunidad de Sam',
    titleEn: 'Sam\'s opportunity',
    publication: 'CGTN',
    date: new Date('2022-10-02').toISOString(),
    summary: 'Dice Gustavo Ng en un artículo, “China da oportunidades, o más bien habría que decir que ofrece oportunidades que pueden ser tomadas por quienes trabajan intensamente para aprovecharlas”.',
    summaryEn: 'Gustavo Ng says in an article, "China provides opportunities, or rather it should be said that it offers opportunities that can be taken by those who work hard to take advantage of them".',
    link: 'https://espanol.cgtn.com/news/2022-10-02/1575312192947163137/index.html?fbclid=IwZXh0bgNhZW0CMTEAAR2BTDFAQUPNHjAUFOEOdTITeqqqagEVo6L-mDLZzDi0QIUFXc9Qfk8lq6Q_aem_qrHURRT89rDCqY-HXA43ZQ',
    image: 'images/Prensa/La oportunidad de Sam.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 24,
    title: 'Cerca y Lejos: Gustavo NG, fundador de la revista Dangdai',
    titleEn: 'Close and Far: Gustavo NG, founder of Dangdai magazine',
    publication: 'CGTN Español',
    date: new Date('2022-02-28').toISOString(),
    summary: 'Gustavo NG, es un periodista argentino, descendiente de chinos. Hace 10 años con Néstor Restivo hicieron la revista DangDai para el intercambio cultural con China, la única revista de Hispanoamérica dedicada al intercambio cultural.',
    summaryEn: 'Gustavo NG, is an Argentine journalist, descendant of Chinese. 10 years ago with Néstor Restivo they made the DangDai magazine for cultural exchange with China, the only magazine in Hispanic America dedicated to cultural exchange.',
    link: 'https://www.youtube.com/watch?v=ReARKTqlfaE',
    image: 'images/Prensa/Cerca y Lejos Gustavo NG, fundador de la revista Dangdai.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 25,
    title: 'Discurso de Gustavo Ng, editor de Revista DangDai en el Foro de Hongqiao',
    titleEn: 'Speech by Gustavo Ng, editor of DangDai Magazine at the Hongqiao Forum',
    publication: 'CGTN Español',
    date: new Date('2022-11-14').toISOString(),
    summary: 'Gustavo Ng, editor de Revista DangDai, dio un discurso en línea para el Foro de Hongqiao, hablando del mismo objetivo que tienen China y Argentina. Según Gustavo Ng, la equidad social que busca el socialismo también es un principio y un sueño del pueblo argentino, en Argentina lo llaman justicia social.',
    summaryEn: 'Gustavo Ng, editor of DangDai Magazine, gave an online speech for the Hongqiao Forum, speaking of the same objective that China and Argentina have. According to Gustavo Ng, the social equity sought by socialism is also a principle and a dream of the Argentine people, in Argentina they call it social justice.',
    link: 'https://www.youtube.com/watch?v=RQU3X1KZr_A&t=6s',
    image: 'images/Prensa/Discurso de Gustavo Ng.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 26,
    title: 'El libro "Mariposa de otoño" fue distinguido por la Legislatura de Buenos Aires',
    titleEn: 'The book "Mariposa de otoño" was distinguished by the Legislature of Buenos Aires',
    publication: 'CGTN Español',
    date: new Date('2019-05-06').toISOString(),
    summary: 'En Argentina se ha publicado el primer libro redactado por un argentino de origen chino, Gustavo Ng, quien habla sobre la inmigración del gigante asiático al país del fin del mundo. Ng, recibió una distinción oficial por su obra “Mariposa de otoño.”',
    summaryEn: 'In Argentina, the first book written by an Argentine of Chinese origin, Gustavo Ng, has been published, who talks about the',
    link: 'https://www.youtube.com/watch?v=WCrqkMH9DVY&t=90s',
    image: 'images/Prensa/El libro Mariposa de otoño.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 27,
    title: 'Gustavo Ng: “Es posible que éste sea el punto de cruce entre el declive de Estados Unidos y el alza de China”',
    titleEn: 'Gustavo Ng: "This may be the crossroads between the decline of the United States and the rise of China"',
    publication: 'Radio UNAJ FM 88.5',
    date: new Date('2020-04-15').toISOString(),
    summary: 'Entrevistamos a Gustavo Ng, periodista especializado en China y director Ejecutivo del Proyecto Dang Dai de Intercambio Cultural entre Argentina y China.',
    summaryEn: 'We interviewed Gustavo Ng, a journalist specializing in China and Executive Director of the Dang Dai Cultural Exchange Project between Argentina and China.',
    link: 'https://radio.unaj.edu.ar/gustavo-ng-es-posible-que-este-sea-el-punto-de-cruce-entre-el-declive-de-estados-unidos-y-el-alza-de-china/',
    image: 'images/Prensa/Gustavo Ng Es posible que éste.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 28,
    title: 'Argentine journalist: China contributes Chinese wisdom to the world',
    titleEn: 'Argentine journalist: China contributes Chinese wisdom to the world',
    publication: 'People\’s Daily',
    date: new Date('2022-10-27').toISOString(),
    summary: 'An Argentine journalist covering the 20th National Congress of the CPC has spoken highly of its significance, saying China’s development is changing the shape of the world.',
    summaryEn: 'An Argentine journalist covering the 20th National Congress of the CPC has spoken highly of its significance, saying China’s development is changing the shape of the world.',
    link: 'http://en.people.cn/n3/2022/1027/c90000-10164385.html',
    image: 'images/Prensa/Periodista argentino China aporta.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 29,
    title: 'Gustavo Ng: “Escribo para tomar conciencia plena de las cosas”',
    titleEn: 'Gustavo Ng: "I write to become fully aware of things"',
    publication: 'Enredacción',
    date: new Date('2022-06-30').toISOString(),
    summary: 'En “La intimidad de las islas”, el periodista y escritor Gustavo Ng retoma y potencia algunos de los temas que transitó en su libro anterior “Mariposa de otoño”: la paternidad, la búsqueda del origen, la identidad y la propia vida convertida en literatura.',
    summaryEn: 'In "La intimidad de las islas", journalist and writer Gustavo Ng takes up and enhances some of the themes he explored in his previous book "Mariposa de otoño": fatherhood, the search for origin, identity, and one\'s own life turned into literature.',
    link: 'https://enredaccion.com.ar/gustavo-ng-escribo-para-tomar-conciencia-plena-de-las-cosas/',
    image: 'images/Prensa/Gustavo Ng Escribo para tomar.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 30,
    title: 'Gustavo Ng: Building a bridge between China and Argentina',
    titleEn: 'Gustavo Ng: Building a bridge between China and Argentina',
    publication: 'Chinese Social Sciences Today',
    date: new Date('2022-10-30').toISOString(),
    summary: 'Gustavo Ng is a renowned Argentine expert on Chinese issues, writer, journalist, editor-in-chief of Dang Dai magazine, and a researcher at the University of Congress (Universidad de Congreso) in Argentina. Born in Argentina in 1962, Ng is a descendant of early Chinese immigrants. His father is Chinese and his mother is Argentine.',
    summaryEn: 'Gustavo Ng is a renowned Argentine expert on Chinese issues, writer, journalist, editor-in-chief of Dang Dai magazine, and a researcher at the University of Congress (Universidad de Congreso) in Argentina. Born in Argentina in 1962, Ng is a descendant of early Chinese immigrants. His father is Chinese and his mother is Argentine.',
    link: 'http://english.cssn.cn/skw_dialogue/202211/t20221103_5654063.shtml',
    image: 'images/Prensa/Gustavo Ng Building a bridge.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 31,
    title: 'Senadores recibieron información sobre la actualidad de China',
    titleEn: 'Senators received information on the current situation in China',
    publication: 'PRENSA SENADO SALTA',
    date: new Date('2023-08-18').toISOString(),
    summary: 'Gustavo Ng presentó ante el Senado de la provincia de Salta un informe sobre la planificación, implementación y resultados del plan de China para suprimir la pobreza extrema.',
    summaryEn: 'Gustavo Ng presented a report to the Senate of the province of Salta on the planning, implementation, and results of China\'s plan to eliminate extreme poverty.',
    link: 'https://www.youtube.com/watch?v=5QYikXVRioA',
    image: 'images/Prensa/Senadores recibieron información.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 32,
    title: 'Gustavo Ng, experto argentino en temas chinos, descifra la lucha de China contra la pobreza',
    titleEn: 'Gustavo Ng, Argentine expert on Chinese issues, deciphers China\'s fight against poverty',
    publication: 'CRI en línea',
    date: new Date('2024-06-20').toISOString(),
    summary: 'El experto argentino en temas chinos Gustavo Ng descifra la lucha de China contra la pobreza Gustavo Ng.',
    summaryEn: 'Argentine expert on Chinese issues Gustavo Ng deciphers China\'s fight against poverty Gustavo Ng.',
    link: 'https://www.youtube.com/watch?v=PMcxjFPDzik',
    image: 'images/Prensa/Gustavo Ng experto argentino en.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 33,
    title: 'Entrevista a Gustavo Ng Dir. Ejecutivo en Proyecto Dang Dai',
    titleEn: 'Interview with Gustavo Ng Executive Director at Dang Dai Project',
    publication: 'Tv Canal 2 Salta, programa De Buena Fuente',
    date: new Date('2022-07-15').toISOString(),
    summary: 'Entrevista a Gustavo Ng Director Ejecutivo en Proyecto Dang Dai - Intercambio Cultural entre Argentina y China, en De Buena Fuente con Marcela Jesús.',
    summaryEn: 'Interview with Gustavo Ng Executive Director at Dang Dai Project - Cultural Exchange between Argentina and China, on De Buena Fuente with Marcela Jesús.',
    link: 'https://www.youtube.com/watch?v=q294hAKcnP0',
    image: 'images/Prensa/Entrevista a Gustavo Ng Dir.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 34,
    title: 'A los 8 años, mi papá escapó de China. 70 años después viajé a conocer su casa y a saber quién soy',
    titleEn: 'At 8 years old, my dad escaped from China. 70 years later I traveled to know his house and to know who I am',
    publication: 'Clarín',
    date: new Date('2017-01-21').toISOString(),
    summary: 'Es hijo de un cantonés que se radicó en la Argentina y formó familia. Luego, sin embargo, volvió con los suyos que vivían en Chinatown, Nueva York. El autor estuvo con ellos un tiempo pero no se adaptó.',
    summaryEn: 'He is the son of a Cantonese father who settled in Argentina and started a family. Later, however, he returned to his family, who lived in Chinatown, New York. The author stayed with them for a while but didn\'t adapt.',
    link: 'https://www.clarin.com/sociedad/mundos-ntimos-pap-escap-china-70-despu-viaj-conocer-casa-saber-qui_0_ryXvx9THe.html?srsltid=AfmBOoqN-VXb3o1pZ4OopPFYCC4hKawTM2npjrLWsZfC10zQcicNvhn7',
    image: 'images/Prensa/A los 8 años mi papá escapó.webp',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 35,
    title: 'Periodista argentino: China aporta su sabiduría al mundo',
    titleEn: 'Argentine journalist: China contributes its wisdom to the world',
    publication: 'CGTN Español',
    date: new Date('2022-11-17').toISOString(),
    summary: 'Un periodista argentino que cubrió el XX Congreso Nacional del Partido Comunista de China ha valorado mucho su importancia, afirmando que el desarrollo de China está cambiando la forma del mundo.',
    summaryEn: 'An Argentine journalist who covered the 20th National Congress of the Communist Party of China has highly praised its significance, stating that China\'s development is changing the shape of the world.',
    link: 'https://espanol.cgtn.com/news/2022-11-17/1593148643468173313/index.html',
    image: 'images/Prensa/Periodista argentino China aporta.webp',
    type: 'interview',
    typeEn: 'interview',
  },
 /*  {
    id: 36,
    title: '',
    titleEn: '',
    publication: '',
    date: new Date('2023-05-15').toISOString(),
    summary: '',
    summaryEn: '',
    link: '',
    image: '',
    type: 'interview',
    typeEn: 'interview',
  },
  {
    id: 37,
    title: '',
    titleEn: '',
    publication: '',
    date: new Date('2023-05-15').toISOString(),
    summary: '',
    summaryEn: '',
    link: '',
    image: '',
    type: 'interview',
    typeEn: 'interview',
  },
*/

  // Agrega más artículos de prensa según sea necesario
];

// Books
const booksData = [
  {
    id: 10,
    title: 'Todo lo que necesitás saber sobre China',
    titleEn: 'Everything you need to know about China',
    description: 'Con Néstor Restivo. Introducción a un país que es un Estado-Civilización. Su continuidad histórica desde los inicios: dinastías, épocas de esplendor y de decadencia, las guerras del opio, el fin de las monarquías, la guerra civil del siglo XX, el rechazo a la invasión japonesa, la revolución socialista, la expansión actual. La sociedad china actual, su cultura, su ciencia y tecnología, su arte. ',
    descriptionEn: 'With Néstor Restivo. Introduction to a country that is a State-Civilization. Its historical continuity from the beginning: dynasties, periods of splendor and decline, the Opium Wars, the end of the monarchies, the 20th-century Civil War, the rejection of the Japanese invasion, the socialist revolution, and current expansion. Contemporary Chinese society, its culture, its science and technology, its art.',
    cover: 'images/libros/todo-sobre-china.webp',
    publishDate: 'Buenos Aires, 2016',
    publisher: 'Paidós',
  
  },
  {
    id: 9,
    title: '10.134 kilómetros a través de China',
    titleEn: '10,134 Kilometers through China',
    description: 'Un viaje en tren de dos meses por más de 20 ciudades, grandes urbes, desiertos, tierras de cultivo, montañas, yacimientos arqueológicos y pueblos de China. Y el encuentro con la aldea donde vivieron sus antepasados.',
    descriptionEn: 'A two-month train journey through more than 20 cities, major metropolises, deserts, farmlands, mountains, archaeological sites, and villages in China. And a visit to the village where their ancestors lived.',
    cover: 'images/libros/IMG_3115.webp',
    publishDate: 'Beijing, 2021',
    publisher: 'Blossom Press',
  
  },
  {
    id: 5,
    title: 'China -  La superación la pobreza',
    titleEn: 'China - Overcoming Poverty',
    description: 'Con Néstor Restivo. La lucha contra la pobreza extrema llevada a cabo con éxito por China, el país más poblado del mundo, como parte de su misión socialista.',
    descriptionEn: 'With Néstor Restivo. The fight against extreme poverty is being successfully carried out by China, the world\'s most populous country, as part of its socialist mission.',
    cover: 'images/libros/TAPA China, la superación de la pobreza.webp',
    publishDate: 'Mendoza, 2021',
    publisher: 'Universidad de Congreso',
  
  },
  {
    id: 4,
    title: 'El regalo del Dios Viento – Viaje al país de los budistas tibetanos',
    titleEn: 'The Gift of the Wind God - Journey to the Land of the Tibetan Buddhists',
    description: 'La vida de los tibetanos en las provincias de Sichuan, Qinghai y Gansu, y en la Región Autónoma del Tíbet. Historias de cinco visitas, desde vivir en tiendas de campaña en las montañas con pastores nómadas hasta participar en un foro global sobre el desarrollo de la región.',
    descriptionEn: 'The lives of Tibetans in Sichuan, Qinghai, and Gansu provinces, and in the Tibet Autonomous Region. Stories of five visits, from living in tents in the mountains with nomadic herders to participating in a global forum on the region\'s development.',
    cover: 'images/libros/Tapa Plana.webp',
    publishDate: 'Buenos Aires, 2022',
    publisher: 'El Bien del Sauce',
  
  },
  {
    id: 7,
    title: 'El tangram de China - ¿Qué ve América Latina cuando mira al gigante de Asia?',
    titleEn: 'China\'s Tangram - What does Latin America sees when they look at the Asian Giant?',
    description: 'Ensayo sobre las complejas percepciones que argentinos y latinoamericanos tienen sobre China, país con el que están cada vez más en contacto en un intercambio que sólo tiene como destino un mayor desarrollo',
    descriptionEn: 'An essay on the complex perceptions that Argentines and Latin Americans have about China, a country with which they are increasingly in contact in an exchange that only leads to greater development.',
    cover: 'images/libros/TAPA para difusión.webp',
    publishDate: 'Buenos Aires, 2022',
    publisher: 'El Bien del Sauce',
  
  },
  {
    id: 6,
    title: 'Podemos vencer la pobreza - La experiencia de China',
    titleEn: 'We can Overcome Poverty - The Chinese Experience',
    description: 'Con Néstor Restivo. Ensayo que recoge ocho años de investigación teórica y en el campo sobre el diseño e implementación de múltiples estrategias por parte de China para lograr la hazaña de sacar a 800 millones de personas de la pobreza extrema.',
    descriptionEn: 'With Néstor Restivo. An essay that compiles eight years of theoretical and field research on the design and implementation of multiple strategies by China to achieve the feat of lifting 800 million people out of extreme poverty.',
    cover: 'images/libros/Tapa Podemos vencer la pobreza.webp',
    publishDate: 'Beijing, 2023',
    publisher: 'China Interncontinental Press',
  },
  {
    id: 'mariposa-de-otono',
    title: 'Mariposa de Otoño',
    titleEn: 'Autumn Butterfly', 
    description: 'Con dibujos de Silvana Perl y editado por Camilo Sánchez. Una novela que el lector construye con anotaciones del autor sobre diferentes escenas entre San Nicolás y Nueva York, desde una Navidad que pasa con su familia china en Brooklyn, hasta una partida de ajedrez con su maestro de caligrafía en el barrio de Tribunales, el lugar del Central Park donde su madre se cruzaba con John Lennon, la cocina donde prepara un pollo con una tía que estaba más allá de este mundo y el nombre cantonés de su hermana, Mariposa de Otoño.',
    descriptionEn: 'With drawings by Silvana Perl and edited by Camilo Sánchez. A novel that the reader constructs with the author\'s notes about different scenes between Saint Nicholas and New York, from a Christmas spent with his Chinese family in Brooklyn, to a game of chess with his calligraphy teacher in the Tribunales neighborhood, the place in Central Park where his mother crossed paths with John Lennon, the kitchen where he prepares a chicken with an aunt who was beyond this world, and the Cantonese name of his sister, Autumn Butterfly.',
    cover: 'images/libros/mariposa-de-otono.webp',
    publishDate: 'Buenos Aires, 2020',
    publisher: 'El Bien del Sauce',
  },
  {
    id: 12,
    title: 'La intimidad de las islas',
    titleEn: 'The Intimacy of the Islands',
    description: 'Con dibujos de Juan Pablo Aiello y editado por Camilo Sánchez. Las islas del delta son aisladas y conectadas. Pueden ser un hombre y una mujer que giran uno torno del otro toda la vida sin que se atreverse a tocarse; pueden ser un padre y su hijo, que no son padre e hijo pero son padre e hijo: puede ser un cura irlandés y un joven poeta; puede ser un inocente que se marcha a vivir solo y es salvado de la soledad por un perro.',
    descriptionEn: 'With drawings by Juan Pablo Aiello and edited by Camilo Sánchez. The islands of the delta are both isolated and connected. They may be a man and a woman who revolve around each other their entire lives without daring to touch; they may be a father and son, who are not father and son but are father and son; they may be an Irish priest and a young poet; they may be an innocent man who goes off to live alone and is saved from loneliness by a dog.',
    cover: 'images/libros/intimidad-islas.webp',
    publishDate: 'Buenos Aires, 2022',
    publisher: 'El Bien del Sauce',
  },
  {
    id: 1,
    title: 'El Año del Gallo de Fuego',
    titleEn: 'The Year of the Fire Rooster',
    description: 'Estudio sobre la mitología china que asigna al totem Gallo uno de los doce lugares en la regencia de los años en su calendario tradicional.',
    descriptionEn: 'Study on Chinese mythology that assigns the Rooster totem one of the twelve places in the regency of the years in its traditional calendar.',
    cover: 'images/libros/TAPA El Año del Gallo de Fuego.webp',
    publishDate: 'Buenos Aires, 2016',
    publisher: 'Atlántida',
    
  },
  {
    id: 2,
    title: 'El Año del Perro de Tierra',
    titleEn: 'The Year of the Earth Dog',
    description: 'El Perro es uno de los arquetipos de la tradición de conocimiento que encierra el milenario zodíaco de los chinos, que integra mitología, literatura, realidades étnicas y filosofía.',
    descriptionEn: 'The Dog is one of the archetypes of the tradition of knowledge contained in the ancient Chinese zodiac, which integrates mythology, literature, ethnic realities, and philosophy.',
    cover: 'images/libros/Tapa Perro.webp',
    publishDate: 'Buenos Aires, 2017',
    publisher: 'Atlántida',
   
  },
  {
    id: 8,
    title: 'El Año del Búfalo',
    titleEn: 'The Year of the Buffalo',
    description: 'Leyendas, conocimientos e historias antiguas sobre uno de los 12 animales de la astrología china, una tradición de conocimiento que giró en torno a los emperadores en la antigüedad y que aún sigue vigente en la actualidad.',
    descriptionEn: 'Legends, knowledge, and ancient stories about one of the 12 animals of Chinese astrology, a tradition of knowledge that revolved around emperors in ancient times and is still prevalent today.',
    cover: 'images/libros/tapa Horoscopo Chino 2021 081220.webp',
    publishDate: 'Córdoba, 2020',
    publisher: 'Enredacción',
  
  },
  {
    id: 3,
    title: 'El Zoodíaco Chino – Un viaje a través de los sueños del despertar',
    titleEn: 'The Chinese Zodiac - A Journey Through the Dreams of Awakening',
    description: 'Con ilustración de tapa de Rocambole. Un análisis del sistema de lógicas articulado en el conjunto de los 12 tótems que convergieron en la historia de las relaciones entre los pueblos que formaron la actual China.',
    descriptionEn: 'With a cover illustration by Rocambole. An analysis of the system of logic articulated in the set of 12 totems that converged in the history of relations between the peoples that formed present-day China.',
    cover: 'images/libros/TAPA El Zoodíaco Chino 2023.webp',
    publishDate: 'Buenos Aires, 2023',
    publisher: 'El Bien del Sauce',
  
  },
  /*{
    id: 13,
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    cover: '',
    publishDate: '',
    publisher: '',
  
  }*/ // Agrega más libros según sea necesario
];

// Photo Galleries
const galleries = [
  {
    id: 'china',
    title: 'Viajes a China',
    titleEn: 'China Travels',
    description: 'Una colección de fotografías tomadas durante diez años de viajes a diferentes regiones de China, un país tan diverso como una biblioteca infinita.',
    descriptionEn: 'A collection of photographs taken over ten years of travel to different regions of China, a country as diverse as an endless library.',
    coverImage: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4112.webp',
    photos: [
      
    ],
    subGalleries: [
      {
        id: 'beijing2016',
        title: 'Beijing 2016',
        titleEn: 'Beijing 2016',
        description: 'Viaje a Beijing en 2016.',
        descriptionEn: 'Trip to Beijing in 2016.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2086.webp',
        photos: [
          {
            id: 'beijing2016-1',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2086.webp'
          },
          {
            id: 'beijing2016-2',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2210.webp'
          },
          {
            id: 'beijing2016-3',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2016',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2212.webp'
          },
          {
            id: 'beijing2016-4',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2016',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2245.webp'
          },
          {
            id: 'beijing2016-5',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2016',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2253.webp'
          },
          {
            id: 'beijing2016-6',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2016',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2255.webp'
          },
          {
            id: 'beijing2016-7',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2016',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2507.webp'
          },
          {
            id: 'beijing2016-8',
            title: 'Beijing 2016',
            titleEn: 'Beijing 2016',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2026/IMG_2657.webp'
          },
         
          // Más fotos...
        ]
      },
      {
        id: 'beijing2017',
        title: 'Beijing 2017',
        titleEn: 'Beijing 2017',
        description: 'Viaje a Beijing en 2017.',
        descriptionEn: 'Trip to Beijing in 2017.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3121.webp',
        photos: [
          {
            id: 'beijing2017-1',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3121.webp'
          },
          {
            id: 'beijing2017-2',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3123.webp'
          },
          {
            id: 'beijing2017-3',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3136.webp'
          },
          {
            id: 'beijing2017-4',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3313.webp'
          },
          {
            id: 'beijing2017-5',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3733.webp'
          },
          {
            id: 'beijing2017-6',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3765.webp'
          },
          {
            id: 'beijing2017-7',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3773.webp'
          },
          {
            id: 'beijing2017-8',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3776.webp'
          },
          {
            id: 'beijing2017-9',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_3892.webp'
          },
          {
            id: 'beijing2017-10',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_4023.webp'
          },
          {
            id: 'beijing2017-11',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_4029.webp'
          },
          {
            id: 'beijing2017-12',
            title: 'Beijing 2017',
            titleEn: 'Beijing 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing, 2017/IMG_4589.webp'
          },
          // Más fotos...
        ]
      },

      {
        id: 'Panjiyuan',
        title: 'Mercado Panjiyuan, Beijing, 2017',
        titleEn: 'Panjiyuan Market, Beijing, 2017',
        description: 'Viaje a Beijing en 2017.',
        descriptionEn: 'Trip to Beijing in 2017.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3527.webp',
        photos: [
          {
            id: 'Panjiyuan-1',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3512.webp'
          },
          {
            id: 'Panjiyuan-2',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3527.webp'
          },
          {
            id: 'Panjiyuan-3',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3534.webp'
          },
          {
            id: 'Panjiyuan-4',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3541.webp'
          },
          {
            id: 'Panjiyuan-5',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3561.webp'
          },
          {
            id: 'Panjiyuan-6',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3568.webp'
          },
          {
            id: 'Panjiyuan-7',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3586.webp'
          },
          {
            id: 'Panjiyuan-8',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3612.webp'
          },
          {
            id: 'Panjiyuan-9',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3623.webp'
          },
          {
            id: 'Panjiyuan-10',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3626.webp'
          },
          {
            id: 'Panjiyuan-11',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3631.webp'
          },
          {
            id: 'Panjiyuan-12',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3638.webp'
          },
          {
            id: 'Panjiyuan-13',
            title: 'Mercado Panjiyuan, Beijing, 2017',
            titleEn: 'Panjiyuan Market, Beijing, 2017',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Mercado Panjiyuan, Beijing, 2017/IMG_3687.webp'
          },  
        ]},
      {
        id: 'beijing2019',
        title: 'Beijing 2019',
        titleEn: 'Beijing 2019',
        description: 'Viaje a Beijing en 2019.',
        descriptionEn: 'Trip to Beijing in 2019.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/IMG_8207.webp',
        photos: [
          {
            id: 'beijing2019-1',
            title: 'Beijing 2019',
            titleEn: 'Beijing 2019',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/Chinita rubia.webp'
          },
          {
            id: 'beijing2019-2',
            title: 'Beijing 2019',
            titleEn: 'Beijing 2019',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/IMG_7461.webp'
          },
          {
            id: 'beijing2019-3',
            title: 'Beijing 2019',
            titleEn: 'Beijing 2019',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/IMG_7535.webp'
          },
          {
            id: 'beijing2019-4',
            title: 'Beijing 2019',
            titleEn: 'Beijing 2019',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/IMG_8182.webp'
          },
          {
            id: 'beijing2019-5',
            title: 'Beijing 2019',
            titleEn: 'Beijing 2019',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/IMG_8207.webp'
          },
          {
            id: 'beijing2019-6',
            title: 'Beijing 2019',
            titleEn: 'Beijing 2019',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/IMG_8215.webp'
          },
          {
            id: 'beijing2019-7',
            title: 'Beijing 2019',
            titleEn: 'Beijing 2019',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2019/IMG_8236.webp'
          },

    ]},
    {
      id: 'beijing2024',
      title: 'Beijing 2024',
      titleEn: 'Beijing 2024',
      description: 'Viaje a Beijing en 2024.',
      descriptionEn: 'Trip to Beijing in 2024.',
      coverImage: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/Screenshot 2025-03-25 at 11.27.14.webp',
      photos: [
        {
          id: 'beijing2024-1',
          title: 'Beijing 2024',
          titleEn: 'Beijing 2024',
          location: 'Beijing, China',
           locationEn: 'Beijing, China',
          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/ADYA7381.webp'
        },
        {
          id: 'beijing2024-2',
          title: 'Beijing 2024',
          titleEn: 'Beijing 2024',
          location: 'Beijing, China',
           locationEn: 'Beijing, China',
          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/IMG_1535.webp'
        },
        {
          id: 'beijing2024-3',
          title: 'Beijing 2024',
          titleEn: 'Beijing 2024',
          location: 'Beijing, China',
           locationEn: 'Beijing, China',
          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/IMG_1779.webp'
        },
        {
          id: 'beijing2024-4',
          title: 'Beijing 2024',
          titleEn: 'Beijing 2024',
          location: 'Beijing, China',
           locationEn: 'Beijing, China',
          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/IMG_3160.webp'
        },
        {
          id: 'beijing2024-5',
          title: 'Beijing 2024',
          titleEn: 'Beijing 2024',
          location: 'Beijing, China',
           locationEn: 'Beijing, China',
          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/IMG_3162.webp'
        },
        {
          id: 'beijing2024-6',
          title: 'Beijing 2024',
          titleEn: 'Beijing 2024',
          location: 'Beijing, China',
           locationEn: 'Beijing, China',
          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/IMG_3178.webp'
        },
        {
          id: 'beijing2024-7',
          title: 'Beijing 2024',
          titleEn: 'Beijing 2024',
          location: 'Beijing, China',
           locationEn: 'Beijing, China',
          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Beijing 2024/IMG_E1543.webp'
        },
      ]},
      {
        id: 'Songzhuang',
        title: 'Songzhuang, Beijing 2024',
        titleEn: 'Songzhuang, Beijing 2024',
        description: 'Viaje a Songzhuang en 2024.',
        descriptionEn: 'Trip to Songzhuang in 2024.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1040.webp',
        photos: [
          {
            id: 'Songzhuang-1',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/ERQK7797.webp'
          },
          {
            id: 'Songzhuang-2',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0813.webp'
          },
          {
            id: 'Songzhuang-3',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0814.webp'
          },
          {
            id: 'Songzhuang-4',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0817.webp'
          },
          {
            id: 'Songzhuang-5',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0827.webp'
          },
          {
            id: 'Songzhuang-6',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0828.webp'
          },
          {
            id: 'Songzhuang-7',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0883.webp'
          },
          {
            id: 'Songzhuang-8',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0926.webp'
          },
          {
            id: 'Songzhuang-9',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0929.webp'
          },
          {
            id: 'Songzhuang-10',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0969.webp'
          },
          {
            id: 'Songzhuang-11',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_0980.webp'
          },
          {
            id: 'Songzhuang-12',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1029.webp'
          },
          {
            id: 'Songzhuang-13',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1040.webp'
          },
          {
            id: 'Songzhuang-14',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1049.webp'
          },
          {
            id: 'Songzhuang-15',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1349.webp'
          },
          {
            id: 'Songzhuang-16',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1390.webp'
          },
          {
            id: 'Songzhuang-17',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1395.webp'
          },
          {
            id: 'Songzhuang-18',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1402.webp'
          },
          {
            id: 'Songzhuang-19',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1410.webp'
          },
          {
            id: 'Songzhuang-20',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1415.webp'
          },
          {
            id: 'Songzhuang-21',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1421.webp'
          },
          {
            id: 'Songzhuang-22',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1427.webp'
          },
          {
            id: 'Songzhuang-23',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1435.webp'
          },
          {
            id: 'Songzhuang-24',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1453.webp'
          },
          {
            id: 'Songzhuang-25',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1575.webp'
          },
          {
            id: 'Songzhuang-26',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1611.webp'
          },
          {
            id: 'Songzhuang-27',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1671.webp'
          },
          {
            id: 'Songzhuang-28',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1687.webp'
          },
          {
            id: 'Songzhuang-29',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1714.webp'
          },
          {
            id: 'Songzhuang-30',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1759.webp'
          },
          {
            id: 'Songzhuang-31',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1821.webp'
          },
          {
            id: 'Songzhuang-32',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1919.webp'
          },
          {
            id: 'Songzhuang-33',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_1926.webp'
          },
          {
            id: 'Songzhuang-34',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2125.webp'
          },
          {
            id: 'Songzhuang-35',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2163.webp'
          },
          {
            id: 'Songzhuang-36',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2264.webp'
          },
          {
            id: 'Songzhuang-37',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2269.webp'
          },
          {
            id: 'Songzhuang-38',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2379.webp'
          },
          {
            id: 'Songzhuang-39',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2385.webp'
          },
          {
            id: 'Songzhuang-40',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2389.webp'
          },
          {
            id: 'Songzhuang-41',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2405.webp'
          },
          {
            id: 'Songzhuang-42',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2486.webp'
          },
          {
            id: 'Songzhuang-43',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_2490.webp'
          },
          {
            id: 'Songzhuang-44',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_E1602.webp'
          },
          {
            id: 'Songzhuang-45',
            title: 'Songzhuang, 2024',
            titleEn: 'Songzhuang, 2024',
            location: 'Beijing, China',
             locationEn: 'Beijing, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Songzhuang, 2024/IMG_E2414.webp'
          },
        ]},
      {
        id: 'shanghai2015',
        title: 'Shanghai 2015',
        titleEn: 'Shanghai 2015',
        description: 'Viaje a Shanghai en 2015.',
        descriptionEn: 'Trip to Shanghai in 2015.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5037.webp',
        photos: [
          {
            id: 'shanghai2015-1',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5037.webp'
          },
          {
            id: 'shanghai2015-2',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5071.webp'
          },
          {
            id: 'shanghai2015-3',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5124.webp'
          },
          {
            id: 'shanghai2015-4',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5165.webp'
          },
          {
            id: 'shanghai2015-6',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5202.webp'
          },
          {
            id: 'shanghai2015-7',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5260.webp'
          },
          {
            id: 'shanghai2015-8',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5279.webp'
          },
          {
            id: 'shanghai2015-9',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5357.webp'
          },
          {
            id: 'shanghai2015-10',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5367.webp'
          },
          {
            id: 'shanghai2015-11',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_6171.webp'
          },
          {
            id: 'shanghai2015-12',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5374.webp'
          },
          {
            id: 'shanghai2015-13',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5391.webp'
          },
          {
            id: 'shanghai2015-14',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5440.webp'
          },
          {
            id: 'shanghai2015-15',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5444.webp'
          },
          {
            id: 'shanghai2015-16',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5480.webp'
          },
          {
            id: 'shanghai2015-17',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5496.webp'
          },
          {
            id: 'shanghai2015-18',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5507.webp'
          },
          {
            id: 'shanghai2015-19',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_5564.webp'
          },
          {
            id: 'shanghai2015-20',
            title: 'Shanghai 2015',
            titleEn: 'Shanghai 2015',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, China 2015/IMG_6120.webp'
          },
        ]},
      {
        id: 'shanghai2019',
        title: 'Shanghai 2019',
        titleEn: 'Shanghai 2019',
        description: 'Viaje a Shanghai en 2019.',
        descriptionEn: 'Trip to Shanghai in 2019.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Shanghai, 2019/IMG_1916.webp',
        photos: [
          {
            id: 'shanghai2019-1',
            title: 'Shanghai 2019',
            titleEn: 'Shanghai 2019',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, 2019/IMG_1643.webp'
          },
          {
            id: 'shanghai2019-2',
            title: 'Shanghai 2019',
            titleEn: 'Shanghai 2019',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, 2019/IMG_1916.webp'
          },
          {
            id: 'shanghai2019-3',
            title: 'Shanghai 2019',
            titleEn: 'Shanghai 2019',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, 2019/IMG_2018.webp'
          },
          {
            id: 'shanghai2019-4',
            title: 'Shanghai 2019',
            titleEn: 'Shanghai 2019',
            location: 'Shanghai, China',
            locationEn: 'Shanghai, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Shanghai, 2019/IMG_2191.webp'
          },
          // Más fotos...
        ]
      },
      {
        id: 'AldeasQuiang',
        title: 'Aldeas Qiang, provincia de Sichuan',
        titleEn: 'Qiang Villages, Sichuan Province',
        description: 'Viaje a las aldeas Qiang, provincia de Sichuan en 2015.',
        descriptionEn: 'Trip to Qiang Villages, Sichuan province in 2015.',
        coverImage: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4112.webp',
        photos: [
          {
            id: 'AldeasQuiang-1',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4112.webp'
          },
          {
            id: 'AldeasQuiang-2',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4129.webp'
          },
          {
            id: 'AldeasQuiang-3',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4132.webp'
          },
          {
            id: 'AldeasQuiang-4',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4133.webp'
          },
          {
            id: 'AldeasQuiang-5',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4166.webp'
          },
          {
            id: 'AldeasQuiang-6',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4168.webp'
          },
          {
            id: 'AldeasQuiang-7',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4174.webp'
          },
          {
            id: 'AldeasQuiang-8',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4175.webp'
          },
          {
            id: 'AldeasQuiang-9',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4186.webp'
          },
          {
            id: 'AldeasQuiang-10',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4191.webp'
          },
          {
            id: 'AldeasQuiang-11',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4212.webp'
          },
          {
            id: 'AldeasQuiang-12',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4213.webp'
          },
          {
            id: 'AldeasQuiang-13',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4231.webp'
          },
          {
            id: 'AldeasQuiang-14',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4792.webp'
          },
          {
            id: 'AldeasQuiang-15',
            title: 'Aldeas Qiang, provincia de Sichuan, 2015',
            titleEn: 'Qiang Villages, Sichuan Province, 2015',
            location: 'Sichuan, China',
            locationEn: 'Sichuan, China',
            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Aldeas Qiang, provincia de Sichuan, China 2015/IMG_4794.webp'
          },
        ]},
        {
          id: 'Chengdu',
          title: 'Chengdu, provincia de Sichuan, 2015',
          titleEn: 'Chengdu, provincia de Sichuan, 2015',
          description: 'Viaje Chengdu, provincia de Sichuan en 2015.',
          descriptionEn: 'Trip to Chengdu, Sichuan province in 2015.',
          coverImage: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3793.webp',
          photos: [
            {
              id: 'Chengdu-1',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3793.webp'
            },
            {
              id: 'Chengdu-2',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3815.webp'
            },
            {
              id: 'Chengdu-3',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3840.webp'
            },
            {
              id: 'Chengdu-4',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3844.webp'
            },
            {
              id: 'Chengdu-5',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3857.webp'
            },
            {
              id: 'Chengdu-6',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3860.webp'
            },
            {
              id: 'Chengdu-7',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3862.webp'
            },
            {
              id: 'Chengdu-8',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3949.webp'
            },
            {
              id: 'Chengdu-9',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3960.webp'
            },
            {
              id: 'Chengdu-10',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3971.webp'
            },
            {
              id: 'Chengdu-11',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3980.webp'
            },
            {
              id: 'Chengdu-12',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3985.webp'
            },
            {
              id: 'Chengdu-13',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_3990.webp'
            },
            {
              id: 'Chengdu-14',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_4242.webp'
            },
            {
              id: 'Chengdu-15',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_4244.webp'
            },
            {
              id: 'Chengdu-16',
              title: 'Chengdu, provincia de Sichuan, 2015',
              titleEn: 'Chengdu, Sichuan Province, 2015',
              location: 'Sichuan, China',
              locationEn: 'Sichuan, China',
              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chengdu, provincia de Sichuan, China 2015/IMG_4673.webp'
            },

          ]},
          {
            id: 'Foyer',
            title: 'Foyer, provincia de Guangdong, 2015',
            titleEn: 'Foyer, Guangdong Province, 2015',
            description: 'Viaje a Foyer, provincia de Guangdong en 2015.',
            descriptionEn: 'Trip to Foyer, Guangdong province in 2015.',
            coverImage: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_2539.webp',
            photos: [
              {
                id: 'Foyer-1',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_2492.webp'
              },
              {
                id: 'Foyer-2',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_2497.webp'
              },
              {
                id: 'Foyer-3',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_2518.webp'
              },
              {
                id: 'Foyer-4',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_2539.webp'
              },
              {
                id: 'Foyer-5',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_2542.webp'
              },
              {
                id: 'Foyer-6',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_4066.webp'
              },
              {
                id: 'Foyer-7',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_4076.webp'
              },
              {
                id: 'Foyer-8',
                title: 'Foyer, provincia de Guangdong, 2015',
                titleEn: 'Foyer, Guangdong Province, 2015',
                location: 'Guangdong, China',
                locationEn: 'Guangdong, China',
                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Foyer, provincia de Guangdong, 2015/IMG_4080.webp'
              },
            ]},
            {
              id: 'Guangzhou',
              title: 'Guangzhou, provincia de Guangdong, 2015',
              titleEn: 'Guangzhou, Guangdong Province, 2015',
              description: 'Viaje a Guangzhou, provincia de Guangdong en 2015.',
              descriptionEn: 'Trip to Guangzhou, Guangdong province in 2015.',
              coverImage: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3058.webp',
              photos: [
                {
                  id: 'Guangzhou-1',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2903.webp'
                },
                {
                  id: 'Guangzhou-2',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2914.webp'
                },
                {
                  id: 'Guangzhou-3',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2918.webp'
                },
                {
                  id: 'Guangzhou-4',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2933.webp'
                },
                {
                  id: 'Guangzhou-5',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2939.webp'
                },
                {
                  id: 'Guangzhou-6',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2970.webp'
                },
                {
                  id: 'Guangzhou-7',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2974.webp'
                },
                {
                  id: 'Guangzhou-8',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_2987.webp'
                },
                {
                  id: 'Guangzhou-9',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3003.webp'
                },
                {
                  id: 'Guangzhou-10',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3007.webp'
                },
                {
                  id: 'Guangzhou-11',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3011.webp'
                },
                {
                  id: 'Guangzhou-12',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3028.webp'
                },
                {
                  id: 'Guangzhou-13',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3058.webp'
                },
                {
                  id: 'Guangzhou-14',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3040.webp'
                },
                {
                  id: 'Guangzhou-15',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3046.webp'
                },
                {
                  id: 'Guangzhou-16',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3051.webp'
                },
                {
                  id: 'Guangzhou-17',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3054.webp'
                },
                {
                  id: 'Guangzhou-18',
                  title: 'Guangzhou, provincia de Guangdong, 2015',
                  titleEn: 'Guangzhou, Guangdong Province, 2015',
                  location: 'Guangdong, China',
                  locationEn: 'Guangdong, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guangzhou, provincia de Guangdong, 2015/IMG_3055.webp'
                },
                
              ]},
              {
              id: 'Xi_An',
              title: 'Guerreros de terracota, Xi\'An, 2015',
              titleEn: 'Terracotta Warriors, Xi\'An, 2015',
              description: 'Viaje a Xi\'An, provincia de Shaanxi en 2015.',
              descriptionEn: 'Trip to Xi\'An, Shaanxi province in 2015.',
              coverImage: 'images/Fotos/FOTOS WEB GN/China/Guerreros de terracota, Xi_An, 2015/IMG_5546.webp',
              photos: [
                {
                  id: 'Xi-An-1',
                  title: 'Guerreros de terracota, Xi\'An, 2015',
                  titleEn: 'Terracotta Warriors, Xi\'An, 2015',
                  location: 'Shaanxi, China',
                  locationEn: 'Shaanxi, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guerreros de terracota, Xi_An, 2015/IMG_5546.webp'
                },
                {
                  id: 'Xi-An-2',
                  title: 'Guerreros de terracota, Xi\'An, 2015',
                  titleEn: 'Terracotta Warriors, Xi\'Ann, 2015',
                  location: 'Shaanxi, China',
                  locationEn: 'Shaanxi, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guerreros de terracota, Xi_An, 2015/IMG_5556.webp'
                },
                {
                  id: 'Xi-An-3',
                  title: 'Guerreros de terracota, Xi\'An, 2015',
                  titleEn: 'Terracotta Warriors, Xi\'An, 2015',
                  location: 'Shaanxi, China',
                  locationEn: 'Shaanxi, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guerreros de terracota, Xi_An, 2015/IMG_5561.webp'
                },
                {
                  id: 'Xi-An-4',
                  title: 'Guerreros de terracota, Xi\'An, 2015',
                  titleEn: 'Terracotta Warriors, Xi\'An, 2015',
                  location: 'Shaanxi, China',
                  locationEn: 'Shaanxi, China',
                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Guerreros de terracota, Xi_An, 2015/IMG_5567.webp'
                }

              ]},
              {
                id: 'Kashgar',
                title: 'Kashgar, Xinjiang, 2015',
                titleEn: 'Kashgar, Xinjiang, 2015',
                description: 'Viaje a Kashgar, Xinjiang en 2015.',
                descriptionEn: 'Trip to Kashgar, Xinjiang in 2015.',
                coverImage: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4471.webp',
                photos: [
                  {
                    id: 'Kashgar-1',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4279.webp'
                  },
                  {
                    id: 'Kashgar-2',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4309.webp'
                  },
                  {
                    id: 'Kashgar-3',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4310.webp'
                  },
                  {
                    id: 'Kashgar-4',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4324.webp'
                  },
                  {
                    id: 'Kashgar-5',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4339.webp'
                  },
                  {
                    id: 'Kashgar-6',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4348.webp'
                  },
                  {
                    id: 'Kashgar-7',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4351.webp'
                  },
                  {
                    id: 'Kashgar-8',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4352.webp'
                  },
                  {
                    id: 'Kashgar-9',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4368.webp'
                  },
                  {
                    id: 'Kashgar-10',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4384.webp'
                  },
                  {
                    id: 'Kashgar-11',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4388.webp'
                  },
                  {
                    id: 'Kashgar-12',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4428.webp'
                  },
                  {
                    id: 'Kashgar-13',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4441.webp'
                  },
                  {
                    id: 'Kashgar-14',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4457.webp'
                  },
                  {
                    id: 'Kashgar-15',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4460.webp'
                  },
                  {
                    id: 'Kashgar-16',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4465.webp'
                  },
                  {
                    id: 'Kashgar-17',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4471.webp'
                  },
                  {
                    id: 'Kashgar-18',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4490.webp'
                  },
                  {
                    id: 'Kashgar-19',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4496.webp'
                  },
                  {
                    id: 'Kashgar-20',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4509.webp'
                  },
                  {
                    id: 'Kashgar-21',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4527.webp'
                  },
                  {
                    id: 'Kashgar-22',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4532.webp'
                  },
                  {
                    id: 'Kashgar-23',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4547.webp'
                  },
                  {
                    id: 'Kashgar-24',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4548.webp'
                  },
                  {
                    id: 'Kashgar-25',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4552.webp'
                  },
                  {
                    id: 'Kashgar-26',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4593.webp'
                  },
                  {
                    id: 'Kashgar-27',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4634.webp'
                  },
                  {
                    id: 'Kashgar-28',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4637.webp'
                  },
                  {
                    id: 'Kashgar-29',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4644.webp'
                  },
                  {
                    id: 'Kashgar-30',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4645.webp'
                  },
                  {
                    id: 'Kashgar-31',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4653.webp'
                  },
                  {
                    id: 'Kashgar-32',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4663.webp'
                  },
                  {
                    id: 'Kashgar-33',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4674.webp'
                  },
                  {
                    id: 'Kashgar-34',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4693.webp'
                  },
                  {
                    id: 'Kashgar-35',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4878.webp'
                  },
                  {
                    id: 'Kashgar-36',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4881.webp'
                  },
                  {
                    id: 'Kashgar-37',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4900.webp'
                  },
                  {
                    id: 'Kashgar-38',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4984.webp'
                  },
                  {
                    id: 'Kashgar-39',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_4999.webp'
                  },
                  {
                    id: 'Kashgar-40',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_5009.webp'
                  },
                  {
                    id: 'Kashgar-41',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_5016.webp'
                  },
                  {
                    id: 'Kashgar-42',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_5021.webp'
                  },
                  {
                    id: 'Kashgar-43',
                    title: 'Kashgar, Xinjiang, 2015',
                    titleEn: 'Kashgar, Xinjiang, 2015',
                    location: 'Xinjiang, China',
                    locationEn: 'Xinjiang, China',
                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Kashgar, Xinjiang, 2015/IMG_5037.webp'
                  }, 
                ]},
                {
                  id: 'Naqin',
                  title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                  titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                  description: 'Viaje a Naqin Geological Park, provincia de Guangdong en 2015.',
                  descriptionEn: 'Trip to Naqin Geological Park, Guangdong province in 2015.',
                  coverImage: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2727.webp',
                  photos: [
                    {
                      id: 'Naqin-1',
                      title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                      titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                      location: 'Guangdong, China',
                      locationEn: 'Guangdong, China',
                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2608.webp'
                    },
                    {
                      id: 'Naqin-2',
                      title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                      titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                      location: 'Guangdong, China',
                      locationEn: 'Guangdong, China',
                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2609.webp'
                    },
                    {
                      id: 'Naqin-3',
                      title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                      titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                      location: 'Guangdong, China',
                      locationEn: 'Guangdong, China',
                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2619.webp'
                    },
                    {
                      id: 'Naqin-4',
                      title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                      titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                      location: 'Guangdong, China',
                      locationEn: 'Guangdong, China',
                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2619.webp'
                    },
                    {
                      id: 'Naqin-5',
                      title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                      titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                      location: 'Guangdong, China',
                      locationEn: 'Guangdong, China',
                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2717.webp'
                    },
                    {
                      id: 'Naqin-6',
                      title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                      titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                      location: 'Guangdong, China',
                      locationEn: 'Guangdong, China',
                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2725.webp'
                    },
                    {
                      id: 'Naqin-7',
                      title: 'Parque Geológico Naqin, provincia de Guangdong, 2015',
                      titleEn: 'Naqin Geological Park, Guangdong Province, 2015',
                      location: 'Guangdong, China',
                      locationEn: 'Guangdong, China',
                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Parque Geológico Naqin, provincia de Guangdong, 2015/IMG_2727.webp'
                    },
                  ]},
                  {
                    id: 'Sanxindui',
                    title: 'Sanxindui, provincia de Sichuan, 2015',
                    titleEn: 'Sanxindui, Sichuan Province, 2015',
                    description: 'Viaje a Sanxindui, provincia de Sichuan en 2015.',
                    descriptionEn: 'Trip to Sanxindui, Sichuan province in 2015.',
                    coverImage: 'images/Fotos/FOTOS WEB GN/China/Sanxindui, provincia de Sichuan, 2015/IMG_3911.webp',
                    photos: [
                      {
                        id: 'Sanxindui-1',
                        title: 'Sanxindui, provincia de Sichuan, 2015',
                        titleEn: 'Sanxindui, Sichuan Province, 2015',
                        location: 'Sichuan, China',
                        locationEn: 'Sichuan, China',
                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Sanxindui, provincia de Sichuan, 2015/IMG_3895.webp'
                      },
                      {
                        id: 'Sanxindui-2',
                        title: 'Sanxindui, provincia de Sichuan, 2015',
                        titleEn: 'Sanxindui, Sichuan Province, 2015',
                        location: 'Sichuan, China',
                        locationEn: 'Sichuan, China',
                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Sanxindui, provincia de Sichuan, 2015/IMG_3911.webp'
                      },
                      {
                        id: 'Sanxindui-3',
                        title: 'Sanxindui, provincia de Sichuan, 2015',
                        titleEn: 'Sanxindui, Sichuan Province, 2015',
                        location: 'Sichuan, China',
                        locationEn: 'Sichuan, China',
                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Sanxindui, provincia de Sichuan, 2015/IMG_3919.webp'
                      },
                    ]},
                    {
                      id: 'Taishan',
                      title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                      titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                      description: 'Viaje a Taishan, aldea natal de la estirpe Ng, provincia de Guangdong en 2017.',
                      descriptionEn: 'Trip to Taishan, Ng clan ancestral village, Guangdong province in 2017.',
                      coverImage: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4261.webp',
                      photos: [
                        {
                          id: 'Taishan-1',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4261.webp'
                        },
                        {
                          id: 'Taishan-2',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4280.webp'
                        },
                        {
                          id: 'Taishan-3',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4283.webp'
                        },
                        {
                          id: 'Taishan-4',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4290.webp'
                        },
                        {
                          id: 'Taishan-5',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4302.webp'
                        },
                        {
                          id: 'Taishan-6',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4343.webp'
                        },
                        {
                          id: 'Taishan-7',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4364.webp'
                        },
                        {
                          id: 'Taishan-8',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4390.webp'
                        },
                        {
                          id: 'Taishan-9',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4398.webp'
                        },
                        {
                          id: 'Taishan-10',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4402.webp'
                        },
                        {
                          id: 'Taishan-11',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4408.webp'
                        },
                        {
                          id: 'Taishan-12',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4410.webp'
                        },
                        {
                          id: 'Taishan-13',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4423.webp'
                        },
                        {
                          id: 'Taishan-14',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4427.webp'
                        },
                        {
                          id: 'Taishan-15',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4428.webp'
                        },
                        {
                          id: 'Taishan-16',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4432.webp'
                        },
                        {
                          id: 'Taishan-17',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4454.webp'
                        },
                        {
                          id: 'Taishan-18',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4457.webp'
                        },
                        {
                          id: 'Taishan-19',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4469.webp'
                        },
                        {
                          id: 'Taishan-20',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4470.webp'
                        },
                        {
                          id: 'Taishan-21',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4494.webp'
                        },
                        {
                          id: 'Taishan-22',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4499.webp'
                        },
                        {
                          id: 'Taishan-23',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4515.webp'
                        },
                        {
                          id: 'Taishan-24',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4521.webp'
                        },
                        {
                          id: 'Taishan-25',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4529.webp'
                        },
                        {
                          id: 'Taishan-26',
                          title: 'Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017',
                          titleEn: 'Taishan, Ng clan ancestral village, Guangdong Province, 2017',
                          location: 'Guangdong, China',
                          locationEn: 'Guangdong, China',
                          imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taishan, aldea natal de la estirpe Ng, provincia de Guangdong, 2017/IMG_4565.webp'
                        },
                      ]},
                      {
                        id: 'Taiyuan',
                        title: 'Taiyuan, Provincia de Shanxi, 2019',
                        titleEn: 'Taiyuan, Shanxi Province, 2019',
                        description: 'Viaje a Taiyuan, provincia de Shanxi en 2019.',
                        descriptionEn: 'Trip to Taiyuan, Shanxi province in 2019.',
                        coverImage: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7831.webp',
                        photos: [
                          {
                            id: 'Taiyuan-1',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7473.webp'
                          },
                          {
                            id: 'Taiyuan-2',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7492.webp'
                          },
                          {
                            id: 'Taiyuan-3',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7500.webp'
                          },
                          {
                            id: 'Taiyuan-4',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7831.webp'
                          },
                          {
                            id: 'Taiyuan-5',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7843.webp'
                          },
                          {
                            id: 'Taiyuan-6',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7856.webp'
                          },
                          {
                            id: 'Taiyuan-7',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7858.webp'
                          },
                          {
                            id: 'Taiyuan-8',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7876.webp'
                          },
                          {
                            id: 'Taiyuan-9',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7881.webp'
                          },
                          {
                            id: 'Taiyuan-10',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7886.webp'
                          },
                          {
                            id: 'Taiyuan-11',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7918.webp'
                          },
                          {
                            id: 'Taiyuan-12',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7961.webp'
                          },
                          {
                            id: 'Taiyuan-13',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_7967.webp'
                          },
                          {
                            id: 'Taiyuan-14',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_8001.webp'
                          },
                          {
                            id: 'Taiyuan-15',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_8007.webp'
                          },
                          {
                            id: 'Taiyuan-16',
                            title: 'Taiyuan, Provincia de Shanxi, 2019',
                            titleEn: 'Taiyuan, Shanxi Province, 2019',
                            location: 'Shanxi, China',
                            locationEn: 'Shanxi, China',
                            imageUrl: 'images/Fotos/FOTOS WEB GN/China/Taiyuan, Provincia de Shanxi, 2019/IMG_8009.webp'
                          },
                        ]},
                          {
                            id: 'Tibet',
                            title: 'Tibet, 2019',
                            titleEn: 'Tibet, 2019',
                            description: 'Viaje a Tibet en 2019.',
                            descriptionEn: 'Trip to Tibet in 2019.',
                            coverImage: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4854.webp',
                            photos: [
                              {
                                id: 'Tibet-1',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/ATGW7215.webp'
                              },
                              {
                                id: 'Tibet-2',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4631.webp'
                              },
                              {
                                id: 'Tibet-3',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4726.webp'
                              },
                              {
                                id: 'Tibet-4',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4727.webp'
                              },
                              {
                                id: 'Tibet-5',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4729.webp'
                              },
                              {
                                id: 'Tibet-6',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4739.webp'
                              },
                              {
                                id: 'Tibet-7',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4759.webp'
                              },
                              {
                                id: 'Tibet-8',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4790.webp'
                              },
                              {
                                id: 'Tibet-9',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4818.webp'
                              },
                              {
                                id: 'Tibet-10',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4823.webp'
                              },
                              {
                                id: 'Tibet-11',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4854.webp'
                              },
                              {
                                id: 'Tibet-12',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4855.webp'
                              },
                              {
                                id: 'Tibet-13',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4914.webp'
                              },
                              {
                                id: 'Tibet-14',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_4973.webp'
                              },
                              {
                                id: 'Tibet-15',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5005.webp'
                              },
                              {
                                id: 'Tibet-16',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5026.webp'
                              },
                              {
                                id: 'Tibet-17',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5040.webp'
                              },
                              {
                                id: 'Tibet-18',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5153.webp'
                              },
                              {
                                id: 'Tibet-19',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5216.webp'
                              },
                              {
                                id: 'Tibet-20',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5256.webp'
                              },
                              {
                                id: 'Tibet-21',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5272.webp'
                              },
                              {
                                id: 'Tibet-22',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5287.webp'
                              },
                              {
                                id: 'Tibet-23',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5298.webp'
                              },
                              {
                                id: 'Tibet-24',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5305.webp'
                              },
                              {
                                id: 'Tibet-25',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5313.webp'
                              },
                              {
                                id: 'Tibet-26',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5361.webp'
                              },
                              {
                                id: 'Tibet-27',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5392.webp'
                              },
                              {
                                id: 'Tibet-28',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5404.webp'
                              },
                              {
                                id: 'Tibet-29',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5464.webp'
                              },
                              {
                                id: 'Tibet-30',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5466.webp'
                              },
                              {
                                id: 'Tibet-31',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5542.webp'
                              },
                              {
                                id: 'Tibet-32',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5548.webp'
                              },
                              {
                                id: 'Tibet-33',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5602.webp'
                              },
                              {
                                id: 'Tibet-34',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5614.webp'
                              },
                              {
                                id: 'Tibet-35',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5657.webp'
                              },
                              {
                                id: 'Tibet-36',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5660.webp'
                              },
                              {
                                id: 'Tibet-37',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5676.webp'
                              },
                              {
                                id: 'Tibet-38',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5706.webp'
                              },
                              {
                                id: 'Tibet-39',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5707.webp'
                              },
                              {
                                id: 'Tibet-40',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5734.webp'
                              },
                              {
                                id: 'Tibet-41',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5753.webp'
                              },
                              {
                                id: 'Tibet-42',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5773.webp'
                              },
                              {
                                id: 'Tibet-43',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5793.webp'
                              },
                              {
                                id: 'Tibet-44',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5858.webp'
                              },
                              {
                                id: 'Tibet-45',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5877.webp'
                              },
                              {
                                id: 'Tibet-46',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5923.webp'
                              },
                              {
                                id: 'Tibet-48',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5957.webp'
                              },
                              {
                                id: 'Tibet-49',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5961.webp'
                              },
                              {
                                id: 'Tibet-50',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5966.webp'
                              },
                              {
                                id: 'Tibet-51',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_5989.webp'
                              },
                              {
                                id: 'Tibet-52',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6026.webp'
                              },
                              {
                                id: 'Tibet-53',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6049.webp'
                              },
                              {
                                id: 'Tibet-54',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6068.webp'
                              },
                              {
                                id: 'Tibet-55',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6103.webp'
                              },
                              {
                                id: 'Tibet-56',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6111.webp'
                              },
                              {
                                id: 'Tibet-57',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6120.webp'
                              },
                              {
                                id: 'Tibet-58',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6140.webp'
                              },
                              {
                                id: 'Tibet-59',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6162.webp'
                              },
                              {
                                id: 'Tibet-60',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6184.webp'
                              },
                              {
                                id: 'Tibet-61',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6251.webp'
                              },
                              {
                                id: 'Tibet-62',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6258.webp'
                              },
                              {
                                id: 'Tibet-63',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6758.webp'
                              },
                              {
                                id: 'Tibet-64',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6767.webp'
                              },
                              {
                                id: 'Tibet-66',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6772.webp'
                              },
                              {
                                id: 'Tibet-67',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6776.webp'
                              },
                              {
                                id: 'Tibet-68',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6808.webp'
                              },
                              {
                                id: 'Tibet-69',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6831.webp'
                              },
                              {
                                id: 'Tibet-70',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6837.webp'
                              },
                              {
                                id: 'Tibet-71',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6848.webp'
                              },
                              {
                                id: 'Tibet-72',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6852.webp'
                              },
                              {
                                id: 'Tibet-73',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6857.webp'
                              },
                              {
                                id: 'Tibet-74',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6879.webp'
                              },
                              {
                                id: 'Tibet-75',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6890.webp'
                              },
                              {
                                id: 'Tibet-76',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6892.webp'
                              },
                              {
                                id: 'Tibet-77',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6894.webp'
                              },
                              {
                                id: 'Tibet-78',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6928.webp'
                              },
                              {
                                id: 'Tibet-79',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6970.webp'
                              },
                              {
                                id: 'Tibet-80',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6984.webp'
                              },
                              {
                                id: 'Tibet-81',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_6993.webp'
                              },
                              {
                                id: 'Tibet-82',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7037.webp'
                              },
                              {
                                id: 'Tibet-83',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7084.webp'
                              },
                              {
                                id: 'Tibet-84',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7139.webp'
                              },
                              {
                                id: 'Tibet-85',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7155.webp'
                              },
                              {
                                id: 'Tibet-86',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7161.webp'
                              },
                              {
                                id: 'Tibet-87',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7193.webp'
                              },
                              {
                                id: 'Tibet-88',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7196.webp'
                              },
                              {
                                id: 'Tibet-89',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7239.webp'
                              },
                              {
                                id: 'Tibet-90',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7246.webp'
                              },
                              {
                                id: 'Tibet-91',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7258.webp'
                              },
                              {
                                id: 'Tibet-92',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn: 'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7276.webp'
                              },
                              {
                                id: 'Tibet-93',
                                title: 'Tibet, 2019',
                                titleEn: 'Tibet, 2019',
                                location: 'Tibet, China',
                                locationEn:'Tibet, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Tibet, 2019/IMG_7331.webp'
                              },
                        ]},
                        {
                          id: 'Wenchuan',
                          title: 'Wenchuan, provincia de Sichuan, 2015',
                          titleEn: 'Wenchuan, Sichuan Province, 2015',
                          description: 'Viaje a Wenchuan en 2015.',
                          descriptionEn: 'Trip to Wenchuan in 2015.',
                          coverImage: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4755.webp',
                          photos: [
                            {
                              id: 'Wenchuan-1',
                              title: 'Wenchuan, 2015',
                              titleEn: 'Wenchuan, 2015',
                              location: 'Wenchuan, Sichuan, China',
                              locationEn: 'Wenchuan, Sichuan, China',
                              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4013.webp'
                            },
                            {
                              id: 'Wenchuan-2',
                              title: 'Wenchuan, 2015',
                              titleEn: 'Wenchuan, 2015',
                              location: 'Wenchuan, Sichuan, China',
                              locationEn: 'Wenchuan, Sichuan, China',
                              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4016.webp'
                            },
                            {
                              id: 'Wenchuan-3',
                              title: 'Wenchuan, 2015',
                              titleEn: 'Wenchuan, 2015',
                              location: 'Wenchuan, Sichuan, China',
                              locationEn: 'Wenchuan, Sichuan, China',
                              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4022.webp'
                            },
                            {
                              id: 'Wenchuan-4',
                              title: 'Wenchuan, 2015',
                              titleEn: 'Wenchuan, 2015',
                              location: 'Wenchuan, Sichuan, China',
                              locationEn: 'Wenchuan, Sichuan, China',
                              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4025.webp'
                            },
                            {
                              id: 'Wenchuan-5',
                              title: 'Wenchuan, 2015',
                              titleEn: 'Wenchuan, 2015',
                              location: 'Wenchuan, Sichuan, China',
                              locationEn: 'Wenchuan, Sichuan, China',
                              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4044.webp'
                            },
                            {
                              id: 'Wenchuan-6',
                              title: 'Wenchuan, 2015',
                              titleEn: 'Wenchuan, 2015',
                              location: 'Wenchuan, Sichuan, China',
                              locationEn: 'Wenchuan, Sichuan, China',
                              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4053.webp'
                            },
                            {
                              id: 'Wenchuan-7',
                              title: 'Wenchuan, 2015',
                              titleEn: 'Wenchuan, 2015',
                              location: 'Wenchuan, Sichuan, China',
                              locationEn: 'Wenchuan, Sichuan, China',
                              imageUrl: 'images/Fotos/FOTOS WEB GN/China/Wenchuan, provincia de Sichuan, 2015/IMG_4755.webp'
                            },
                          ]},
                          {
                            id: 'Xi_An2015',
                            title: 'Xi\'An, provincia de Shaanxi, 2015',
                            titleEn: 'Xi\'An, Shaanxi Province, 2015',
                            description: 'Viaje a Xi_An en 2015.',
                            descriptionEn: 'Trip to Xi_An in 2015.',
                            coverImage: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5430.webp',
                            photos: [
                              {
                                id: 'Xi_An2015-1',
                                title: 'Xi\'An, 2015',
                                titleEn: 'Xi\'An, 2015',
                                location: 'Xi\'An, Shaanxi, China',
                                locationEn: 'Xi\'An, Shaanxi, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5430.webp'
                              },
                              {
                                id: 'Xi_An2015-2',
                                title: 'Xi\'An, 2015',
                                titleEn: 'Xi\'An, 2015',
                                location: 'Xi\'An, Shaanxi, China',
                                locationEn: 'Xi\'An, Shaanxi, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5532.webp'
                              },
                              {
                                id: 'Xi_An2015-3',
                                title: 'Xi\'An, 2015',
                                titleEn: 'Xi\'An, 2015',
                                location: 'Xi\'An, Shaanxi, China',
                                locationEn: 'Xi\'An, Shaanxi, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5589.webp'
                              },
                              {
                                id: 'Xi_An2015-4',
                                title: 'Xi\'An, 2015',
                                titleEn: 'Xi\'An, 2015',
                                location: 'Xi\'An, Shaanxi, China',
                                locationEn: 'Xi\'An, Shaanxi, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5594.webp'
                              },
                              {
                                id: 'Xi_An2015-5',
                                title: 'Xi\'An, 2015',
                                titleEn: 'Xi\'An, 2015',
                                location: 'Xi\'An, Shaanxi, China',
                                locationEn: 'Xi\'An, Shaanxi, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5600.webp'
                              },
                              {
                                id: 'Xi_An2015-6',
                                title: 'Xi\'An, 2015',
                                titleEn: 'Xi\'An, 2015',
                                location: 'Xi\'An, Shaanxi, China',
                                locationEn: 'Xi\'An, Shaanxi, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5601.webp'
                              },
                              {
                                id: 'Xi_An2015-7',
                                title: 'Xi\'An, 2015',
                                titleEn: 'Xi\'An, 2015',
                                location: 'Xi\'An, Shaanxi, China',
                                locationEn: 'Xi\'An, Shaanxi, China',
                                imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xi_An, provincia de Shaanxi, 2015/IMG_5625.webp'
                              },
                            ]},
                            {
                              id: 'Xiahe2015',
                              title: 'Xiahe, provincia de Gansu, 2015',
                              titleEn: 'Xiahe, Gansu Province, 2015',
                              description: 'Viaje a Xiahe en 2015.',
                              descriptionEn: 'Trip to Xiahe in 2015.',
                              coverImage: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5253.webp',
                              photos: [
                                {
                                  id: 'Xiahe2015-1',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5248.webp'
                                },
                                {
                                  id: 'Xiahe2015-2',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5253.webp'
                                },
                                {
                                  id: 'Xiahe2015-3',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5258.webp'
                                },
                                {
                                  id: 'Xiahe2015-4',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5266.webp'
                                },
                                {
                                  id: 'Xiahe2015-5',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5273.webp'
                                },
                                {
                                  id: 'Xiahe2015-6',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5304.webp'
                                },
                                {
                                  id: 'Xiahe2015-7',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5311.webp'
                                },
                                {
                                  id: 'Xiahe2015-8',
                                  title: 'Xiahe, 2015',
                                  titleEn: 'Xiahe, 2015',
                                  location: 'Xiahe, Gansu, China',
                                  locationEn: 'Xiahe, Gansu, China',
                                  imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiahe, provincia de Gansu, 2015/IMG_5341.webp'
                                },
                              ]},
                              {
                                id: 'Xiamen2019',
                                title: 'Xiamen, provincia de Fujian, 2019',
                                titleEn: 'Xiamen, Fujian Province, 2019',
                                description: 'Viaje a Xiamen en 2019.',
                                descriptionEn: 'Trip to Xiamen in 2019.',
                                coverImage: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7795.webp',
                                photos: [
                                  {
                                    id: 'Xiamen2019-1',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7558.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-2',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7577.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-3',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7594.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-4',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7690.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-5',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7721.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-6',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7734.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-7',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7747.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-8',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7765.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-9',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7783.webp'
                                  },
                                  {
                                    id: 'Xiamen2019-10',
                                    title: 'Xiamen, 2019',
                                    titleEn: 'Xiamen, 2019',
                                    location: 'Xiamen, Fujian, China',
                                    locationEn: 'Xiamen, Fujian, China',
                                    imageUrl: 'images/Fotos/FOTOS WEB GN/China/Xiamen, provincia de Fujian, 2019/IMG_7795.webp'
                                  },
                                ]},
                                {
                                  id: 'Zhuhai2015',
                                  title: 'Zhuhai, provincia de Guangdong, 2015',
                                  titleEn: 'Zhuhai, Guangdong Province, 2015',
                                  description: 'Viaje a Zhuhai en 2015.',
                                  descriptionEn: 'Trip to Zhuhai in 2015.',
                                  coverImage: 'images/Fotos/FOTOS WEB GN/China/Zhuhai, provincia de Guangdong, 2015/IMG_3957.webp',
                                  photos: [
                                    {
                                      id: 'Zhuhai2015-1',
                                      title: 'Zhuhai, 2015',
                                      titleEn: 'Zhuhai, 2015',
                                      location: 'Zhuhai, Guangdong, China',
                                      locationEn: 'Zhuhai, Guangdong, China',
                                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Zhuhai, provincia de Guangdong, 2015/IMG_3927.webp'
                                    },
                                    {
                                      id: 'Zhuhai2015-2',
                                      title: 'Zhuhai, 2015',
                                      titleEn: 'Zhuhai, 2015',
                                      location: 'Zhuhai, Guangdong, China',
                                      locationEn: 'Zhuhai, Guangdong, China',
                                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Zhuhai, provincia de Guangdong, 2015/IMG_3957.webp'
                                    },
                                    {
                                      id: 'Zhuhai2015-3',
                                      title: 'Zhuhai, 2015',
                                      titleEn: 'Zhuhai, 2015',
                                      location: 'Zhuhai, Guangdong, China',
                                      locationEn: 'Zhuhai, Guangdong, China',
                                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Zhuhai, provincia de Guangdong, 2015/IMG_3958.webp'
                                    },
                                    {
                                      id: 'Zhuhai2015-4',
                                      title: 'Zhuhai, 2015',
                                      titleEn: 'Zhuhai, 2015',
                                      location: 'Zhuhai, Guangdong, China',
                                      locationEn: 'Zhuhai, Guangdong, China',
                                      imageUrl: 'images/Fotos/FOTOS WEB GN/China/Zhuhai, provincia de Guangdong, 2015/IMG_3969.webp'
                                    },
                                  ]},
                                  {
                                    id: 'argentinafans',
                                    title: 'Chinos fans de Argentina',
                                    titleEn: 'Chinese Argentina fans',
                                    description: 'Chinos fans de Argentina',
                                    descriptionEn: 'Chinese Argentina fans',
                                    coverImage: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8334.webp',
                                    photos: [
                                      {
                                        id: 'argentinafans-1',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_0765.webp'
                                      },
                                      {
                                        id: 'argentinafans-2',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_1063.webp'
                                      },
                                      {
                                        id: 'argentinafans-3',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_6862.webp'
                                      },
                                      {
                                        id: 'argentinafans-4',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_6900.webp'
                                      },
                                      {
                                        id: 'argentinafans-5',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_6901.webp'
                                      },
                                      {
                                        id: 'argentinafans-6',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8229.webp'
                                      },
                                      {
                                        id: 'argentinafans-7',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8259.webp'
                                      },
                                      {
                                        id: 'argentinafans-8',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8261.webp'
                                      },
                                      {
                                        id: 'argentinafans-9',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8334.webp'
                                      },
                                      {
                                        id: 'argentinafans-10',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8290.webp'
                                      },
                                      {
                                        id: 'argentinafans-11',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8331.webp'
                                      },
                                      {
                                        id: 'argentinafans-12',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8336.webp'
                                      },
                                      {
                                        id: 'argentinafans-13',
                                        title: 'Chinos fans de Argentina',
                                        titleEn: 'Chinese Argentina fans',
                                        location: 'China',
                                        locationEn: 'China',
                                        imageUrl: 'images/Fotos/FOTOS WEB GN/China/Chinos fans de Argentina/IMG_8384.webp'
                                      },
                                    ]},
      
                    



      // Agrega más sub-galerías según sea necesario
    ]

  },






  {
    id: 'Estambul',
    title: 'Estambul 2017',
    titleEn: 'Istanbul 2017',
    description: 'La capital de Turquía, nodo de Oriente y Occidente.',
    descriptionEn: 'The capital of Türkiye, hub of East and West.',
    coverImage: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4784.webp',
    photos: [
      {
        id: 'Estambul-1',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4753.webp'
      },
      {
        id: 'Estambul-2',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4754.webp'
      },
      {
        id: 'Estambul-3',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4766.webp'
      },
      {
        id: 'Estambul-4',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4771.webp'
      },
      {
        id: 'Estambul-5',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4784.webp'
      },
      {
        id: 'Estambul-6',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4795.webp'
      },
      {
        id: 'Estambul-7',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4805.webp'
      },
      {
        id: 'Estambul-8',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4808.webp'
      },
      {
        id: 'Estambul-9',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4858.webp'
      },
      {
        id: 'Estambul-10',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4864.webp'
      },
      {
        id: 'Estambul-11',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4873.webp'
      },
      {
        id: 'Estambul-12',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4879.webp'
      },
      {
        id: 'Estambul-13',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4884.webp'
      },
      {
        id: 'Estambul-14',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4917.webp'
      },
      {
        id: 'Estambul-15',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4924.webp'
      },
      {
        id: 'Estambul-16',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4934.webp'
      },
      {
        id: 'Estambul-17',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4985.webp'
      },
      {
        id: 'Estambul-18',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_4992.webp'
      },
      {
        id: 'Estambul-19',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5013.webp'
      },
      {
        id: 'Estambul-20',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5056.webp'
      },
      {
        id: 'Estambul-21',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5107.webp'
      },
      {
        id: 'Estambul-22',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5115.webp'
      },
      {
        id: 'Estambul-23',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5124.webp'
      },
      {
        id: 'Estambul-24',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5130.webp'
      },
      {
        id: 'Estambul-25',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5163.webp'
      },
      {
        id: 'Estambul-26',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5274.webp'
      },
      {
        id: 'Estambul-27',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5276.webp'
      },
      {
        id: 'Estambul-28',
        title: 'Estambul, 2017',
        titleEn: 'Istanbul, 2017',
        location: 'Estambul, Turquía',
        locationEn: 'Istanbul, Turkey',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Estambul 2017/IMG_5296.webp'
      },
    ]
  },
  {
    id: 'newyork',
    title: 'Nueva York',
    titleEn: 'New York',
    description: 'Metrópolis planetaria, a la vez familiar y fantástica. Construida con diseño sofisticado, energía salvaje y gente llegada de lugares insospechados.',
    descriptionEn: 'A planetary metropolis, both familiar and fantastical. Built with sophisticated design, wild energy, and people from unlikely places.',
    coverImage: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 19.webp',
    photos: [
      {
        id: 'newyork-1',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 4.webp'
      },
      {
        id: 'newyork-2',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 18.webp'
      },
      {
        id: 'newyork-3',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 19.webp'
      },
      {
        id: 'newyork-4',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 30.webp'
      },
      {
        id: 'newyork-5',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 32.webp'
      },
      {
        id: 'newyork-6',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 35.webp'
      },
      {
        id: 'newyork-7',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/Chaquichan en NovaYol 40.webp'
      },
      {
        id: 'newyork-8',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/IMG_5983.webp'
      },
      {
        id: 'newyork-9',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/IMG_6014.webp'
      },
      {
        id: 'newyork-10',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/IMG_6028.webp'
      },
      {
        id: 'newyork-11',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/IMG_6066.webp'
      },
      {
        id: 'newyork-12',
        title: 'Nueva York',
        titleEn: 'New York',
        location: 'Nueva York, Estados Unidos',
        locationEn: 'New York, United States',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Nueva York, 2015-2025/IMG_6199.webp'
      }

    ]},
    {
      id: 'Patagonia',
      title: 'Patagonia Argentina',
      titleEn: 'Argentinian Patagonia',
      description: 'Los paisajes más hermosos de la Tierra, allí donde el planeta aún está desnudo.',
      descriptionEn: 'The most beautiful landscapes on Earth, where the planet is still bare.',
      coverImage: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_1575.webp',
      photos: [
        {
          id: 'Patagonia-1',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_1569.webp'
        },
        {
          id: 'Patagonia-2',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_1575.webp'
        },
        {
          id: 'Patagonia-3',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_1599.webp'
        },
        {
          id: 'Patagonia-4',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_2636.webp'
        },
        {
          id: 'Patagonia-5',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_2683.webp'
        },
        {
          id: 'Patagonia-6',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_2710.webp'
        },
        {
          id: 'Patagonia-7',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_3604.webp'
        },
        {
          id: 'Patagonia-8',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_3616.webp'
        },
        {
          id: 'Patagonia-9',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_3703.webp'
        },
        {
          id: 'Patagonia-10',
          title: 'Patagonia',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_3779.webp'
        },
        {
          id: 'Patagonia-11',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_3929.webp'
        },
        {
          id: 'Patagonia-12',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_3948.webp'
        },
        {
          id: 'Patagonia-13',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_4250.webp'
        },
        {
          id: 'Patagonia-14',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_4324.webp'
        },
        {
          id: 'Patagonia-15',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_4345.webp'
        },
        {
          id: 'Patagonia-16',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_4350.webp'
        },
        {
          id: 'Patagonia-17',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_7884.webp'
        },
        {
          id: 'Patagonia-18',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_9498.webp'
        },
        {
          id: 'Patagonia-19',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_9584.webp'
        },
        {
          id: 'Patagonia-20',
          title: 'Patagonia Argentina',
          titleEn: 'Argentinian Patagonia',
          location: 'Patagonia, Argentina',
          locationEn: 'Patagonia, Argentina',
          imageUrl: 'images/Fotos/FOTOS WEB GN/Patagonia argentina/IMG_9636.webp'
        }
      ]},
  
  {
    id: 'GustavoNg',
    title: 'Gustavo Ng',
    titleEn: 'Gustavo Ng',
    description: 'Retratos.',
    descriptionEn: 'Portraits.',
    coverImage: 'images/Fotos/prensa-gustavo-Ng-3.webp',
    photos: [
      {
        id: 'GustavoNg-1',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.37.webp'
      },
      {
        id: 'GustavoNg-2',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.37 (2).webp'
      },
      {
        id: 'GustavoNg-46',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/gustavo-ng.webp'
      },
      {
        id: 'GustavoNg-3',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.37 (1).webp'
      },
      {
        id: 'GustavoNg-4',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.49.38.webp'
      },
      {
        id: 'GustavoNg-5',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.51.07 (1).webp'
      },
      {
        id: 'GustavoNg-6',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.51.07.webp'
      },
      {
        id: 'GustavoNg-7',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.51.08.webp'
      },
      {
        id: 'GustavoNg-8',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.52.25 (1).webp'
      },
      {
        id: 'GustavoNg-9',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.52.25.webp'
      },
      {
        id: 'GustavoNg-10',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/WhatsApp Image 2025-02-19 at 14.57.59.webp'
      },
      {
        id: 'GustavoNg-13',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_0822.webp'
      },
      {
        id: 'GustavoNg-14',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_1641.webp'
      },
      {
        id: 'GustavoNg-15',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_1814.webp'
      },
      {
        id: 'GustavoNg-16',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_1925.webp'
      },
      {
        id: 'GustavoNg-17',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_1960.webp'
      },
      {
        id: 'GustavoNg-18',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_2055.webp'
      },
      {
        id: 'GustavoNg-19',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_2399.webp'
      },
      {
        id: 'GustavoNg-20',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_2916.webp'
      },
      {
        id: 'GustavoNg-21',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_2946.webp'
      },
      {
        id: 'GustavoNg-22',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_2984.webp'
      },
      {
        id: 'GustavoNg-23',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_3004.webp'
      },
      {
        id: 'GustavoNg-24',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_3073.webp'
      },
      {
        id: 'GustavoNg-25',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_3421.webp'
      },
      {
        id: 'GustavoNg-26',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_3423.webp'
      },
      {
        id: 'GustavoNg-27',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_3936.webp'
      },
      {
        id: 'GustavoNg-28',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_3971.webp'
      },
      {
        id: 'GustavoNg-29',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_3992.webp'
      },
      {
        id: 'GustavoNg-30',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_4398.webp'
      },
      {
        id: 'GustavoNg-31',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_4935.webp'
      },
      {
        id: 'GustavoNg-32',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_5459.webp'
      },
      {
        id: 'GustavoNg-33',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_5490.webp'
      },
      {
        id: 'GustavoNg-34',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_5570.webp'
      },
      {
        id: 'GustavoNg-35',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_6866.webp'
      },
      {
        id: 'GustavoNg-36',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_6911.webp'
      },
      {
        id: 'GustavoNg-37',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_6917.webp'
      },
      {
        id: 'GustavoNg-38',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_6951.webp'
      },
      {
        id: 'GustavoNg-39',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_6999.webp'
      },
      {
        id: 'GustavoNg-40',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_7111.webp'
      },
      {
        id: 'GustavoNg-41',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_7126.webp'
      },
      {
        id: 'GustavoNg-42',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_7336.webp'
      },
      {
        id: 'GustavoNg-43',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_8081.webp'
      },
      {
        id: 'GustavoNg-44',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_8357.webp'
      },
      {
        id: 'GustavoNg-45',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/FOTOS WEB GN/Gustavo Ng/IMG_8426.webp'
      },
      {
        id: 'GustavoNg-49',
        title: 'Gustavo Ng',
        titleEn: 'Gustavo Ng',
        location: 'Varios lugares',
        locationEn: 'Various locations',
        imageUrl: 'images/Fotos/prensa-gustavo-Ng-3.webp'
      },
    ]
  }
];

// Biography Content
const biographyContent = {
  es: `
    <p>
     Periodista y comunicador argentino desde 1981. Colaboró con los diarios Tiempo Argentino, Clarín, Perfil y otros, la televisora BVC (Bariloche Visión Codificada) la revista Convivimos y otros medios argentinos; las revistas Maxim y Siete Leguas y el diario El Mundo, de España; el diario Yomiuri Shimbún y las redes de televisión NHK y Asahi, de Japón; la revista China Hoy y otros medios de China.</p>

    <p>Tuvo a cargo el área de Comunicación de la Facultad de Filosofía y Letras de la Universidad de Buenos Aires, el Colegio de Graduados de Antropología, el CAPI (Componente de Atención a la Población Indígena), el Ente de Higiene Urbana y la Dirección General de Atención Inmediata del Gobierno de la Ciudad de Buenos Aires y fue director de contenidos en SERSAT.</p>

    <p>Fue uno de los creadores de Gaceta Universitaria y del proyecto de comunicación Revista DangDai, del cual es su actual coeditor en los segmentos website de noticias, newsletter y versión impresa. Es creador y editor del medio de análisis de temas internacionales Tektónikos.</p>
    
    <h2>Libros</h2>
    
    <p>
      Especializado en las relaciones entre Argentina y China desde 2011, es autor o coautor de los libros:</p>

      <ul class="libros-bio">
        <li>“10.134 kilómetros a través de China” (Blossom Press, 2021)</li>
        <li>“El regalo del Dios Viento – Viaje al país de los budistas tibetanos” (Ediciones El Bien del Sauce, 2023)</li>
        <li>El Tangram de China - ¿Qué ve América Latina cuando mira al gigante de Asia? (Ediciones El Bien del Sauce, 2023)</li>
        <li>“Todo lo que necesitás saber sobre China” con Néstor Restivo (Editorial Paidós, 2016)</li>
        <li>“Podemos vencer la pobreza - La experiencia de China” —con Néstor Restivo (China Intercontinental Press, 2024)</li>
        <li>“China – La superación la pobreza” —editor (Ediciones Universidad de Congreso, Mendoza, 2020)</li>
        <li>“China – Democracia, representación política y legitimidad social – Un balance a los 100 años de la fundación del PCC” —editor (Ediciones Universidad de Congreso, Mendoza, 2021)</li>
        <li>“Organizaciones de inmigrantes chinos en Argentina” —con Luciana Denardi y Alejandro Grimson (Red Internacional sobre Migración y Desarrollo, México, 2016)</li>
        <li>“Nosotros: Crónicas de la proximidad cultural entre China y Argentina” —editor (China Intercontinental Press, Beijing, 2018)</li>
        <li>“Historia oral: Testigos del intercambio cultural entre China y América Latina” —editor (Blossom Press, Beijing, 2019)</li>
        <li>“Superando la Pandemia en América Latina” —compilador (Ediciones Continente, 2021)</li>
        <li>“El libro celeste y blanco de notas sobre China en los medios argentinos” —con Eva Blanco y Néstor Restivo (Eva Blanco, 2022)</li>
        <li>“El Año del Gallo de Fuego” (Editorial Atlántida, Buenos Aires, 2017)</li>
        <li>“El Año del Perro de Tierra” (Editorial Atlántida, Buenos Aires, 2017)</li>
        <li>“El Año del Búfalo” (Enredacción, Córdoba, 2021)/li>
        <li>“El Zoodíaco Chino – Un viaje a través de los sueños del despertar” (Ediciones El Bien del Sauce, 2023)</li>
        </ul>

    <p></p>    
    
    <p>
      Es autor también de los libros de ficción:
      </p>
    
    <ul class="libros-bio">
      <li>“Mariposa de Otoño”, ilustrado por Silvana Perl (Ediciones El Bien del Sauce, 2016)</li>
      <li>“La intimidad de las islas”, ilustrado por Juan Pablo Aiello (Ediciones El Bien del Sauce, 2022)</li>
    </ul>
    
    <h2>Distinciones</h2>
    
    <p>Su libro “Mariposa de Otoño” fue declarado de Interés Cultural por la Legislatura de la Ciudad Autónoma de Buenos Aires y su libro “10.134 kilómetros a través de China” fue distinguido por la organización China Culture Translation Studies Support (CCTSS).y le valió el Special Book Award por parte del Ministerio de Cultura del Gobierno de la República Popular China. </p>
   
    <h2>Reuniones</h2>

    <p>Participó en el 2016 Sino-Foreign Literature Translation & Publishing Workshop (SFLTP 2016, Beijing), 2019 Forum on the Development  of Tibet (China, 2019), International Forum on Democracy: the Shared Human Values (China, 2021), 2022 Beijing Forum on Human Rights (China, 2022), coloquio "China en la nueva expedición y el mundo" (China, 2022), “Conference 70th. Anniversary of the Five Principles of Peaceful Coexistence” (China, 2025).</p>
   
    <h2>Cursos y conferencias</h2>

    <p>Ha dado cursos y conferencias sobre la relación entre Argentina y China en la Universidad de Buenos Aires, la Universidad Nacional de La Plata, la Universidad de Congreso, el Sindicato de Prensa de Buenos Aires, la Beijing Culture and Language University, la Renmin University, la Shanghai International Studies University, la Xi’An International Studies University, la Universidad Torcuato Di Tella, el Instituto Universitario de la Cooperación, la Minzu University, el CONICET y la Academia China de Ciencias Sociales.</p>

    <h2>Redes</h2>

    <p>Es miembro del Grupo China del Consejo Argentino de Relaciones Internacionales (CARI), la Red Argentina de Profesionales para la Política Exterior (REDAPPE), la CCTSS (China Culture Translation Studies Support), la Red China y América Latina: Enfoques Multidisciplinarios – REDCAEM y el grupo Chaquichán.</p>

    <h2>Personal</h2>

    <p>Nacido en San Nicolás, provincia de Buenos Aires, en 1962, es descendiente de chinos y también de gallegos, vascos y piamonteses. 
Tuvo formación en Argentina y Estados Unidos. Estudió Periodismo y Ciencias Antropológicas.
Vivió en Argentina, Estados Unidos, Brasil, Perú y Cuba.
Es padre de cuatro hijos.</p>
    `,
  en: `
    <p>An Argentine journalist and communicator since 1981, he’s been freelancer for the newspapers Tiempo Argentino, Clarín, Perfil, and others; the television station BVC (Bariloche Visión Codificada); the magazine Convivimos; and other Argentine media; the magazines Maxim and Siete Leguas and the newspaper El Mundo, all Spanish; the Yomiuri Shimbún newspaper and the NHK and Asahi television networks in Japan; the magazine China Hoy and other Chinese media.</p>
    
    <p>He has been in charge of the Communications Department of the Facultad de Filosofía y Letras of the Universidad de Buenos Aires, the Colegio de Antropología, the CAPI (Indigenous Population Assistance Component), the Ente de Higiene Urbana, and the General Directorate of Immediate Assistance of the Government of the City of Buenos Aires: He was the Contents Director at SERSAT.</p>
    
    <p>He was one of the founders of Gaceta Universitaria and the communications project Revista DangDai, of which he is currently the news website, newsletter, and print versions co-editor. He is the creator and editor of the international affairs analysis media Tektónikos.</p>
    
    
    <h2>Books</h2>
    
    <p>Specializing in Argentina-China relations since 2011, he is the author or co-author of the books:</p>

      <ul class="libros-bio">
        <li>"10,134 Kilometers through China" (Blossom Press, 2021)</li>
        <li>“The Gift of the Wind God – Journey to the Land of Tibetan Buddhists” (Ediciones El Bien del Sauce, 2023)</li>
        <li>“The China Tangram - What does Latin America See When It Looks at the Asian Giant?” (Ediciones El Bien del Sauce, 2023)</li>
        <li>“Everything You Need to Know About China” with Néstor Restivo (Editorial Paidós, 2016)</li>
        <li>“We Can Defeat Poverty - China’s Experience” with Néstor Restivo (China Intercontinental Press, 2024)</li>
        <li>“China – Overcoming Poverty” (Ediciones Universidad de Congreso, Mendoza, 2020)</li>
        <li>“China – Democracy, Political Representation, and Social Legitimacy – An Assessment at 100 Years of the CPC’s Founding” (Ediciones Universidad de Congreso, Mendoza, 2021)</li>
        <li>“Chinese Immigrant Organizations in Argentina,” with Luciana Denardi and Alejandro Grimson (International Network on Migration and Development, Mexico, 2016)</li>
        <li>“Us - Chronicles of the Cultural Proximity Between China and Argentina” (China Intercontinental Press, Beijing, 2018)</li>
        <li>“Oral History: Witnesses of Cultural Exchange Between China and Latin America” (Blossom Press, Beijing, 2019)</li>
        <li>“Overcoming the Pandemic in Latin America,” compilator (Ediciones Continente, 2021)</li>
        <li>““The Blue and White Book of Notes on China in Argentine Media” with Eva Blanco and Néstor Restivo (Eva Blanco, 2022)</li>
        <li>“The Year of the Fire Rooster” (Editorial Atlántida, Buenos Aires, 2017)</li>
        <li>“The Year of the Earth Dog” (Editorial Atlántida, Buenos Aires, 2017)</li>
        <li>“The Year of the Buffalo” (Enredacción, Córdoba, 2021)</li>
        <li>“The Chinese Zoodiac – A Journey Through the Dreams of Awakening” (Ediciones El Bien del Sauce, 2023)</li>
        </ul>

    <p></p>    
    
    <p>
      He also wrote the fiction books:
      </p>
    
    <ul class="libros-bio">
      <li>“Autumn Butterfly,” illustrated by Silvana Perl (Ediciones El Bien del Sauce, 2016)</li>
      <li>“The Intimacy of the Islands,” illustrated by Juan Pablo Aiello (Ediciones El Bien del Sauce, 2022)</li>
    </ul>
    
    <h2>Distinctions</h2>
    
    <p>His book “Autumn Butterfly” was declared of Cultural Interest by the Legislature of the Autonomous City of Buenos Aires, and his book “10,134 Kilometers Across China” was recognized by the China Culture Translation Studies Support (CCTSS) organization and earned him the Special Book Award from the Ministry of Culture of the Government of the People's Republic of China.</p>
   
    <h2>Meetings</h2>

    <p>He participated in the 2016 Sino-Foreign Literature Translation & Publishing Workshop (SFLTP 2016, Beijing), 2019 Forum on the Development of Tibet (China, 2019), International Forum on Democracy: The Shared Human Values (China, 2021), 2022 Beijing Forum on Human Rights (China, 2022), the colloquium "China in the New Expedition and the World" (China, 2022), and the “Conference on the 70th Anniversary of the Five Principles of Peaceful Coexistence” (China, 2025).</p>
   
    <h2>Courses and Lectures</h2>

    <p>He has given courses and lectures on the relationship between Argentina and China at the University of Buenos Aires, the National University of La Plata, the University of Congreso, the Buenos Aires Press Union, the Beijing Culture and Language University, Renmin University, Shanghai International Studies University, Xi’An International Studies University, Torcuato Di Tella University, the University Institute of Cooperation, Minzu University, CONICET, and the Chinese Academy of Social Sciences.</p>

    <h2>Networks</h2>

    <p>He is a member of the China Group of the Argentine Council on International Relations (CARI), the Argentine Network of Professionals for Foreign Policy (REDAPPE), CCTSS (China Culture Translation Studies Support), the China and Latin America Network: Multidisciplinary Approaches – REDCAEM, and the Chaquichán group.</p>

    <h2>Personal</h2>

    <p>Born in San Nicolás, Buenos Aires Province, in 1962, he is a Chinese, Galician, Basque, and Piedmontese descendant. He was educated in Argentina and the United States. He studied Journalism and Anthropology. He has lived in Argentina, the United States, Brazil, Peru, and Cuba. He is the father of four children.</p>

    
   
  `
};

// Helper functions to get data
function getArticleBySlug(slug) {
  return articlesData.find(article => article.slug === slug);
}

function getArticleCategories() {
  return [...new Set(articlesData.map(article => article.category))];
}

function getArticleCategoriesEn() {
  return [...new Set(articlesData.map(article => article.categoryEn))];
}

function getFeaturedArticles() {
  return articlesData.slice(0, 3);
}

function getPressMentions() {
  return pressData.filter(item => item.type === 'mention' || item.type === 'review');
}

function getPressInterviews() {
  return pressData.filter(item => item.type === 'interview');
}

function getFeaturedPress() {
  return pressData.slice(0, 3);
}

function getFeaturedBook() {
  return booksData[0];
}

function getGalleryById(id) {
  if (!galleries || !Array.isArray(galleries)) {
      console.error("Error: galleries no está definido o no es un array.", galleries);
      return null;
  }

  let gallery = galleries.find(g => g.id === id);
  
  if (!gallery) {
      // Si no encuentra la galería principal, buscar en las subgalerías
      for (let g of galleries) {
          if (g.subGalleries) {
              let subGallery = g.subGalleries.find(sub => sub.id === id);
              if (subGallery) return subGallery;
          }
      }
  }

  return gallery;
}



function getFeaturedGallery() {
  return galleries[0];
}

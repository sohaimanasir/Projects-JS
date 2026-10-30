const dramas = [
    {
        id: 1,
        title: "I'm Not a Robot",
        originalTitle: "로봇이 아니야",
        year: 2017,
        premiereDate: "6 December 2017",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Comedy", "Science Fiction"],
        cast: [
            { actor: "Yoo Seung-ho", character: "Kim Min-kyu" },
            { actor: "Chae Soo-bin", character: "Jo Ji-ah / Aji 3" },
            { actor: "Uhm Ki-joon", character: "Hong Baek-gyun" }
        ],
        synopsis: "A wealthy man with a severe allergy to human contact receives what he believes is an advanced humanoid robot. He doesn't know that a real woman is secretly pretending to be the machine.",
        poster: "assets/img0.jpg"
    },
    {
        id: 2,
        title: "Strong Woman Do Bong-soon",
        originalTitle: "힘쎈여자 도봉순",
        year: 2017,
        premiereDate: "24 February 2017",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Comedy", "Action", "Fantasy"],
        cast: [
            { actor: "Park Bo-young", character: "Do Bong-soon" },
            { actor: "Park Hyung-sik", character: "Ahn Min-hyuk" },
            { actor: "Ji Soo", character: "In Guk-doo" }
        ],
        synopsis: "A young woman born with extraordinary strength becomes the bodyguard of an eccentric gaming company CEO. Meanwhile, a series of kidnappings in her neighbourhood draws her into a dangerous investigation.",
        poster: "assets/img1.jpg"
    },
    {
        id: 3,
        title: "Weightlifting Fairy Kim Bok-joo",
        originalTitle: "역도요정 김복주",
        year: 2016,
        premiereDate: "16 November 2016",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Comedy", "Sports", "Coming-of-Age"],
        cast: [
            { actor: "Lee Sung-kyung", character: "Kim Bok-joo" },
            { actor: "Nam Joo-hyuk", character: "Jung Joon-hyung" },
            { actor: "Lee Jae-yoon", character: "Jung Jae-yi" },
            { actor: "Kyung Soo-jin", character: "Song Shi-ho" }
        ],
        synopsis: "A university weightlifter pursues her sporting ambitions while navigating friendship, family and first love. An unexpected connection helps her discover more about herself.",
        poster: "assets/img2.jpg"
    },
    {
        id: 4,
        title: "My Love from the Star",
        originalTitle: "별에서 온 그대",
        year: 2013,
        premiereDate: "18 December 2013",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Comedy", "Fantasy"],
        cast: [
            { actor: "Kim Soo-hyun", character: "Do Min-joon" },
            { actor: "Jun Ji-hyun", character: "Cheon Song-yi" },
            { actor: "Park Hae-jin", character: "Lee Hwi-kyung" },
            { actor: "Yoo In-na", character: "Yoo Se-mi" }
        ],
        synopsis: "An alien who has lived on Earth for 400 years is approaching the time of his departure. His plans change when he becomes involved with a famous actress who moves in next door.",
        poster: "assets/img3.jpg"
    },
    {
        id: 5,
        title: "Descendants of the Sun",
        originalTitle: "태양의 후예",
        year: 2016,
        premiereDate: "24 February 2016",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Action", "Drama", "Medical"],
        cast: [
            { actor: "Song Joong-ki", character: "Yoo Si-jin" },
            { actor: "Song Hye-kyo", character: "Kang Mo-yeon" },
            { actor: "Jin Goo", character: "Seo Dae-young" },
            { actor: "Kim Ji-won", character: "Yoon Myung-joo" }
        ],
        synopsis: "A special forces captain and a talented surgeon meet again while serving in a fictional conflict-stricken country. Their relationship is tested by dangerous missions, medical emergencies and their different responsibilities.",
        poster: "assets/img4.jpg"
    },
    {
        id: 6,
        title: "Crash Landing on You",
        originalTitle: "사랑의 불시착",
        year: 2019,
        premiereDate: "14 December 2019",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Comedy", "Drama"],
        cast: [
            { actor: "Hyun Bin", character: "Ri Jeong-hyeok" },
            { actor: "Son Ye-jin", character: "Yoon Se-ri" },
            { actor: "Seo Ji-hye", character: "Seo Dan" },
            { actor: "Kim Jung-hyun", character: "Gu Seung-jun" }
        ],
        synopsis: "A South Korean businesswoman is swept across the border into North Korea during a paragliding accident. A North Korean army officer decides to protect her while searching for a way to help her return home.",
        poster: "assets/img5.jpg"
    },
    {
        id: 7,
        title: "Start-Up",
        originalTitle: "스타트업",
        year: 2020,
        premiereDate: "17 October 2020",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Drama", "Comedy", "Business"],
        cast: [
            { actor: "Bae Suzy", character: "Seo Dal-mi" },
            { actor: "Nam Joo-hyuk", character: "Nam Do-san" },
            { actor: "Kim Seon-ho", character: "Han Ji-pyeong" },
            { actor: "Kang Han-na", character: "Won In-jae" }
        ],
        synopsis: "Young entrepreneurs enter a competitive startup environment hoping to turn their ideas into successful businesses. Their ambitions, relationships and complicated pasts become intertwined along the way.",
        poster: "assets/img6.jpg"
    },
    {
        id: 8,
        title: "Extraordinary You",
        originalTitle: "어쩌다 발견한 하루",
        year: 2019,
        premiereDate: "2 October 2019",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Comedy", "Fantasy", "School"],
        cast: [
            { actor: "Kim Hye-yoon", character: "Eun Dan-oh" },
            { actor: "Rowoon", character: "Ha-ru" },
            { actor: "Lee Jae-wook", character: "Baek Kyung" },
            { actor: "Lee Na-eun", character: "Yeo Joo-da" }
        ],
        synopsis: "A high school student discovers that she and the people around her are characters in a comic book. Determined to change her predetermined story, she begins searching for a way to control her own fate.",
        poster: "assets/img7.jpg"
    },
    {
        id: 9,
        title: "Extraordinary Attorney Woo",
        originalTitle: "이상한 변호사 우영우",
        year: 2022,
        premiereDate: "29 June 2022",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Legal", "Drama", "Comedy", "Romance"],
        cast: [
            { actor: "Park Eun-bin", character: "Woo Young-woo" },
            { actor: "Kang Tae-oh", character: "Lee Jun-ho" },
            { actor: "Kang Ki-young", character: "Jung Myung-seok" },
            { actor: "Ha Yoon-kyung", character: "Choi Su-yeon" }
        ],
        synopsis: "A brilliant rookie lawyer on the autism spectrum joins a major law firm. With her remarkable memory and unique way of thinking, she approaches challenging legal cases while navigating professional and personal relationships.",
        poster: "assets/img8.jpg"
    },
    {
        id: 10,
        title: "Suspicious Partner",
        originalTitle: "수상한 파트너",
        year: 2017,
        premiereDate: "10 May 2017",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Legal", "Crime", "Comedy", "Thriller"],
        cast: [
            { actor: "Ji Chang-wook", character: "Noh Ji-wook" },
            { actor: "Nam Ji-hyun", character: "Eun Bong-hee" },
            { actor: "Choi Tae-joon", character: "Ji Eun-hyuk" },
            { actor: "Kwon Nara", character: "Cha Yoo-jung" }
        ],
        synopsis: "A prosecutor trainee becomes involved in a murder case that threatens her future. Working alongside a prosecutor, she tries to uncover the truth while their professional relationship grows increasingly complicated.",
        poster: "assets/img9.jpg"
    },
    {
        id: 11,
        title: "Business Proposal",
        originalTitle: "사내맞선",
        year: 2022,
        premiereDate: "28 February 2022",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Comedy"],
        cast: [
            { actor: "Ahn Hyo-seop", character: "Kang Tae-moo" },
            { actor: "Kim Se-jeong", character: "Shin Ha-ri" },
            { actor: "Kim Min-kyu", character: "Cha Sung-hoon" },
            { actor: "Seol In-ah", character: "Jin Young-seo" }
        ],
        synopsis: "A woman agrees to attend a blind date in place of her friend, intending to scare the potential match away. Her plan takes an unexpected turn when she discovers that her date is her company's CEO.",
        poster: "assets/img10.jpg"
    },
    {
        id: 12,
        title: "The Devil Judge",
        originalTitle: "악마판사",
        year: 2021,
        premiereDate: "3 July 2021",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Legal", "Crime", "Thriller", "Drama"],
        cast: [
            { actor: "Ji Sung", character: "Kang Yo-han" },
            { actor: "Kim Min-jung", character: "Jung Sun-ah" },
            { actor: "Park Jin-young", character: "Kim Ga-on" },
            { actor: "Park Gyu-young", character: "Yoon Soo-hyun" }
        ],
        synopsis: "In a dystopian version of South Korea, a judge turns court trials into televised events where the public participates in deciding verdicts. His methods and hidden motives raise questions about justice and power.",
        poster: "assets/img11.jpg"
    },
    {
        id: 13,
        title: "Death's Game",
        originalTitle: "이재, 곧 죽습니다",
        year: 2023,
        premiereDate: "15 December 2023",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Fantasy", "Thriller", "Drama"],
        cast: [
            { actor: "Seo In-guk", character: "Choi Yi-jae" },
            { actor: "Park So-dam", character: "Death" },
            { actor: "Kim Ji-hoon", character: "Park Tae-woo" },
            { actor: "Choi Si-won", character: "Park Jin-tae" }
        ],
        synopsis: "After reaching a desperate point in his life, a man encounters Death and receives an unusual punishment. He must experience a series of different lives and confront the consequences of his choices.",
        poster: "assets/img12.jpg"
    },
    {
        id: 14,
        title: "Doom at Your Service",
        originalTitle: "어느 날 우리 집 현관으로 멸망이 들어왔다",
        year: 2021,
        premiereDate: "10 May 2021",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Romance", "Fantasy", "Drama"],
        cast: [
            { actor: "Park Bo-young", character: "Tak Dong-kyung" },
            { actor: "Seo In-guk", character: "Myul Mang" },
            { actor: "Lee Soo-hyuk", character: "Cha Joo-ik" },
            { actor: "Kang Tae-oh", character: "Lee Hyun-kyu" }
        ],
        synopsis: "A young woman facing a life-changing diagnosis makes a desperate wish that brings her into contact with a mysterious supernatural being. Their unusual agreement changes both of their lives.",
        poster: "assets/img13.jpg"
    },
    {
        id: 15,
        title: "Tomorrow",
        originalTitle: "내일",
        year: 2022,
        premiereDate: "1 April 2022",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Fantasy", "Drama", "Action"],
        cast: [
            { actor: "Kim Hee-sun", character: "Goo Ryeon" },
            { actor: "Rowoon", character: "Choi Joon-woong" },
            { actor: "Lee Soo-hyuk", character: "Park Joong-gil" },
            { actor: "Yoon Ji-on", character: "Im Ryung-gu" }
        ],
        synopsis: "A job seeker unexpectedly becomes part of an afterlife crisis-management team. Alongside a group of grim reapers, he takes on missions to help people facing difficult moments in their lives.",
        poster: "assets/img14.jpg"
    },
    {
        id: 16,
        title: "Vincenzo",
        originalTitle: "빈센조",
        year: 2021,
        premiereDate: "20 February 2021",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Crime", "Comedy", "Drama", "Legal", "Action"],
        cast: [
            { actor: "Song Joong-ki", character: "Vincenzo Cassano" },
            { actor: "Jeon Yeo-been", character: "Hong Cha-young" },
            { actor: "Ok Taec-yeon", character: "Jang Jun-woo" },
            { actor: "Kim Yeo-jin", character: "Choi Myung-hee" }
        ],
        synopsis: "An Italian-Korean lawyer and mafia consigliere returns to South Korea after a conflict with his former organization. He joins forces with a determined lawyer to take on a powerful and corrupt corporation.",
        poster: "assets/img15.jpg"
    },
    {
        id: 17,
        title: "Welcome to Waikiki",
        originalTitle: "으라차차 와이키키",
        year: 2018,
        premiereDate: "5 February 2018",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Comedy", "Drama", "Slice of Life"],
        cast: [
            { actor: "Kim Jung-hyun", character: "Kang Dong-goo" },
            { actor: "Lee Yi-kyung", character: "Lee Joon-ki" },
            { actor: "Son Seung-won", character: "Bong Doo-sik" },
            { actor: "Jung In-sun", character: "Han Yoon-ah" }
        ],
        synopsis: "Three friends struggling to achieve their dreams run a guesthouse called Waikiki. Their already chaotic lives become even more unpredictable when a young single mother and her baby enter the picture.",
        poster: "assets/img16.jpg"
    },
    {
        id: 18,
        title: "Revenant",
        originalTitle: "악귀",
        year: 2023,
        premiereDate: "23 June 2023",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Mystery", "Thriller", "Horror", "Fantasy"],
        cast: [
            { actor: "Kim Tae-ri", character: "Gu San-young" },
            { actor: "Oh Jung-se", character: "Yeom Hae-sang" },
            { actor: "Hong Kyung", character: "Lee Hong-sae" }
        ],
        synopsis: "A young woman becomes connected to a mysterious spirit after receiving an unusual object from her deceased father. Together with a folklore professor, she investigates a series of strange deaths and supernatural events.",
        poster: "assets/img17.jpg"
    },
    {
        id: 19,
        title: "Mouse",
        originalTitle: "마우스",
        year: 2021,
        premiereDate: "3 March 2021",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Thriller", "Crime", "Mystery", "Science Fiction"],
        cast: [
            { actor: "Lee Seung-gi", character: "Jung Ba-reum" },
            { actor: "Lee Hee-joon", character: "Go Moo-chi" },
            { actor: "Park Ju-hyun", character: "Oh Bong-yi" },
            { actor: "Kyung Soo-jin", character: "Choi Hong-joo" }
        ],
        synopsis: "A seemingly upright young police officer becomes involved in the search for a terrifying serial killer. As the investigation develops, questions about human nature and the origins of criminal behaviour emerge.",
        poster: "assets/img18.jpg"
    },
    {
        id: 20,
        title: "Big Mouth",
        originalTitle: "빅마우스",
        year: 2022,
        premiereDate: "29 July 2022",
        rating: null,
        ratingSource: "IMDb",
        genres: ["Crime", "Legal", "Mystery", "Thriller", "Drama"],
        cast: [
            { actor: "Lee Jong-suk", character: "Park Chang-ho" },
            { actor: "Im Yoon-ah", character: "Go Mi-ho" },
            { actor: "Kim Joo-hun", character: "Choi Do-ha" },
            { actor: "Yang Kyung-won", character: "Gong Ji-hoon" }
        ],
        synopsis: "A struggling lawyer with a low success rate becomes entangled in a high-profile murder case. When he is mistaken for a notorious con artist, he must fight to survive and uncover a conspiracy involving powerful people.",
        poster: "assets/img19.jpg"
    }
];
import React, { createContext, useState } from "react";

export const ContexStore = createContext();
export const ContextFunction = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      ide: 1,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A7SobaUTvb6d5Z3dpOhFxPG0RQf.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
    {
      id: 2,
      ide: 2,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
    {
      id: 3,
      ide: 3,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
    {
      id: 4,
      ide: 4,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },

    {
      id: 5,
      ide: 5,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://i4.extraimage.xyz/pix/2023/05/26/uoBErA.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },

    {
      id: 6,
      ide: 6,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://i3.extraimage.xyz/pix/2023/05/18/umtQcu.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },

    {
      id: 7,
      ide: 7,
      cat: "TopPost",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://i3.extraimage.xyz/pix/2023/05/10/uwFNZB.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },

    {
      id: 8,
      ide: 8,
      cat: "TopPost",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://i4.extraimage.xyz/pix/2023/05/24/uoZczm.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
    {
      id: 9,
      ide: 9,
      cat: "TopPost",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://i4.extraimage.xyz/pix/2023/05/24/uoZczm.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },

    {
      id: 20,
      ide: 9,
      cat: "Bollywood",
      for: "TheTopList",
      sp: "home-Toplist",
      date: "14 April, 2022 ",
      img: " https://media5.bollywoodhungama.in/wp-content/uploads/2019/03/KGF-19-306x393.jpg",
      title: "K.G.F – Chapter 2 ",
      Overview:
        "KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra...",
      description:
        " KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra Desai (Lakki Lakshman). They had expected to rule KGF and take over its immense wealth. However, Rocky, with the help of the slaves who consider him a messiah, usurps the throne. He even kills Virat (Vinay Bidappa), brother of Garuda and the heir apparent to the KGF throne. Rocky however spares Vanaram (Ayyappa P Sharma), the commander of the army at KGF. Vanaram, angry at first, joins Rocky and trains young kids who become the new guards of the territory. Rocky discovers that there are several unexcavated mines in the area and he orders the men to start extracting gold from these places. The idea is to discover as much gold as possible in the shortest possible time. Meanwhile, Adheera (Sanjay Dutt), brother of Suryavardhan, the founder of KGF, was presumed dead. However, he is alive and arrives at KGF for revenge and to claim ownership. He smartly gets Rocky out of KGF and shoots him. He allows Rocky to survive so that the word is spread in KGF that the terrifying Adheera is here. Rocky recuperates but realizes that no one is able to move out of KGF as Adheera’s men have surrounded the mines. Meanwhile, Shetty (Dinesh Mangaluru), Rocky’s ex-boss in Bombay, has tied up with fellow gangsters across West and South India, and plans to act against Rocky. They are also dealing with Inayat Khalil (Balakrishna), a dreaded gangster from Dubai. How Rocky fights all these elements forms the rest of the film.",
    },
    {
      id: 21,
      ide: 10,
      cat: "Bollywood",
      for: "TopList",
      date: " 25 December, 2009 ",
      img: " https://stat5.bollywoodhungama.in/wp-content/uploads/2016/05/439543855-306x393.jpg",
      title: "3 Idiots",
      Overview:
        "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
      description:
        " 3 IDIOTS belongs to everyone. But, yes, there's no denying that Aamir makes you forget all his past achievements as you watch the amazing actor play Rancho. To state that this ranks amongst his finest works would be an understatement. Madhavan is incredible, especially in the sequence when he explains his point of view to his father [Pareekshit Sahani]. Sharman is outstanding from start to end. This was a difficult role to portray and only an actor of calibre could've pulled it off. Boman is superb as the vicious head of the institute. The scenes between Aamir and Boman are extra-ordinary and it's a treat to watch these two powerful actors clash on the big screen, without getting overdramatic. Boman's appearance, mannerisms and dialogue delivery are exemplary.\n\nThe length of Kareena's role may not be as much as Aamir, Madhavan and Sharman, but she registers a strong impact nonetheless. Omi is excellent and the viewers are sure to love his acidic tongue and gestures in the movie. Mona Singh doesn't get much scope. Jaaved Jaffery is competent. Pareekshit Sahani is decent.\n\nOn the whole, 3 IDIOTS easily ranks amongst Aamir, Rajkumar Hirani and Vidhu Vinod Chopra's finest films. Do yourself and your family a favour: Watch 3 IDIOTS. It's emotional, it's entertaining, it's enlightening. The film has tremendous youth appeal and feel-good factor to work in a big way.",
    },

    {
      id: 21,
      ide: 10,
      cat: "Bollywood",
      for: "Hollywood",
      date: " 25 December, 2009 ",
      img: " https://stat5.bollywoodhungama.in/wp-content/uploads/2016/05/439543855-306x393.jpg",
      title: "3 Idiots",
      Overview:
        "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
      description:
        " 3 IDIOTS belongs to everyone. But, yes, there's no denying that Aamir makes you forget all his past achievements as you watch the amazing actor play Rancho. To state that this ranks amongst his finest works would be an understatement. Madhavan is incredible, especially in the sequence when he explains his point of view to his father [Pareekshit Sahani]. Sharman is outstanding from start to end. This was a difficult role to portray and only an actor of calibre could've pulled it off. Boman is superb as the vicious head of the institute. The scenes between Aamir and Boman are extra-ordinary and it's a treat to watch these two powerful actors clash on the big screen, without getting overdramatic. Boman's appearance, mannerisms and dialogue delivery are exemplary.\n\nThe length of Kareena's role may not be as much as Aamir, Madhavan and Sharman, but she registers a strong impact nonetheless. Omi is excellent and the viewers are sure to love his acidic tongue and gestures in the movie. Mona Singh doesn't get much scope. Jaaved Jaffery is competent. Pareekshit Sahani is decent.\n\nOn the whole, 3 IDIOTS easily ranks amongst Aamir, Rajkumar Hirani and Vidhu Vinod Chopra's finest films. Do yourself and your family a favour: Watch 3 IDIOTS. It's emotional, it's entertaining, it's enlightening. The film has tremendous youth appeal and feel-good factor to work in a big way.",
    },

    {
      id: 23,
      ide: 1,
      cat: "Food",
      for: "FoodArticle",
      date: " MAY 15, 2023",
      img: "https://media.istockphoto.com/id/614313140/photo/soft-beef-tacos-with-fries.jpg?s=612x612&w=0&k=20&c=KxBKdcWFKWCQwLWiil-Rgvlpl9l8SZXwkvjnCiWcia8=",
      title: "Salmon Tacos with Mango Corn Salsa",
      Overview:
        "Super easy salmon tacos loaded with a mango, sweet corn, and cucumber salsa!",
      description:
        "These tacos are THE dinner for me right now! \n\n A few nights ago, I made them (again), and I set the sheet pan of salmon down on the table and my whole family literally descended upon it and started grabbing at the salmon with their hands and forks as I stood by watching in half shock, half pride. It was a feeding frenzy. \n\n Of course, we love salmon. It’s a great source of nutrition and protein and, when cooked well, it gently slides apart into buttery, juicy, delightful little flakes.\n\n But I’m not going to lie to you: the main event here is that mango corn salsa. \n\n The salmon itself is completely SOS (taco seasoning and THAT’S IT), which is why I think it makes sense to put all your effort and energy into the salsa. This salsa is also the thing that’s going to keep you sitting at the table long after you’re done eating tacos, just scooping some extra salsa bites all on its own and suddenly thinking of it as more of a salad? It can be a salad, right? I would totally eat this salsa on its own as a salad. \n\n Each bite is extra crispy and unexpected from the raw sweet corn and cucumber with a little burst of juicy flavor. But it’s also mainstream enough with the mango that my two young kids are usually happy to devour it right along with us. \n\n I love a million sauces on my tacos (okay, fine, on every recipe). But with this one, all it needs is a bit of extra lime and honey to finish it off. Simple, minimal effort, max deliciousness.",
    },
    {
      id: 24,
      ide: 2,
      cat: "Food",
      for: "FoodArticle",
      date: "MAY 8, 2023 ",
      sp: "home-latest",
      img: "https://c4.wallpaperflare.com/wallpaper/1016/528/45/cuisine-food-india-indian-wallpaper-preview.jpg",
      title: "Chili Garlic Pappardelle with Smashed Broccoli and Soft Eggs",
      Overview:
        "Slippery, spicy, bossy noodles with a minimal-ingredient sauce, topped with a pile of roasty smashed broccoli and a perfectly messy soft egg. Yes, please.",
      description:
        "Oh man, these slippery, spicy noodles are a TREAT. Silky, rich, full of deep flavor and a flash of heat! \n\n I would say this recipe belongs less in the “normal family dinner” category and more in the “hangry / hardcore craving / last minute meal” category.\n\nThe big flavors end up being a bit much for my kids, so I make this for a need-it-right-now hungry mom moment that calls for something ultra-satisfying, silky, and spicy. I often end up eating it right over the stove in a moment of pure and absolute joy. \n\nAnd luckily, the components can work for everybody (buttered noodles is always a kid win, plus eggs and broccoli!), so it can be easily worked into something family-friendly or meal-prep friendly if you batch some extra broccoli and eggs to throw into other meals throughout the week. SOS at its finest. \n\n The miso just does something magical to this whole thing – if you don’t have it I think you’ll still end up just fine. But if you have it (hopefully I already convinced you to buy some with the Miso Crunch Salad!) it will elevate the flavor and add a depth that’s just really amazing for such a fast and easy recipe.",
    },

    {
      id: 25,
      ide: 3,
      cat: "Food",
      for: "FoodArticle",
      date: " MAY 1, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Stephs-Chickpea-Curry-Square-960x960.png",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 15,
      ide: 4,
      cat: "Food",
      for: "FoodArticle",
      date: " MAY 1, 2023",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    // {
    //   id: 16,
    //   ide: 4,
    //   cat: "Food",
    //   for: "FoodArticle",
    //   date: " MAY 1, 2023",
    //   img: "https://cdn.tasteatlas.com/images/toplistarticles/9b66fcce6cc04ec59acbc4ce78e2ca23.jpg?m=facebook",
    //   title: "Steph’s Chickpea Curry with Spinach and Rice",
    //   Overview:
    //     "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
    //   description:
    //     "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    // },

    {
      id: 17,
      ide: 5,
      cat: "Food",
      for: "TopFood",
      date: " MAY 1, 2023",
      img: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6054.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 17,
      ide: 5,
      cat: "Food",
      for: "TopFood",
      date: " MAY 1, 2023",
      img: "https://www.foodandwine.com/thmb/ue_WDjrF9DKAnIpCfRD83lL2Zmg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Longevity-Noodles-FT-RECIPE1122-7844eba95b8a4094b41fa1153cefc3e3.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 17,
      ide: 5,
      cat: "Food",
      for: "TopFood",
      date: " MAY 1, 2023",
      img: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQSFqbWlV7IqvASUvK-OTW9ljoDeJa1lCkSKYSXH7YY1SAQ-y1ZIYIYCUcPyHsYsRaBO5SoNZNmxAMTWmo",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "Latest",
      date: " MAY 1, 2023",
      img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH",

      title: "Avatar",
      Overview:
        " Avatar: The Way of Water | The Banner Visually Spellbinding! We havehere a science-fiction epic set on an alien world. It's a classicstory of a good-guy hero who must overcome a battle within himselfto do what is right.",

      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },
    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "Latest",
      date: " MAY 1, 2023",
      img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH",

      title: "Avatar",
      Overview:
        " Avatar: The Way of Water | The Banner Visually Spellbinding! We havehere a science-fiction epic set on an alien world. It's a classicstory of a good-guy hero who must overcome a battle within himselfto do what is right.",

      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },

    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "Latest",
      date: " MAY 1, 2023",
      img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH",

      title: "Avatar",
      Overview:
        " Avatar: The Way of Water | The Banner Visually Spellbinding! We havehere a science-fiction epic set on an alien world. It's a classicstory of a good-guy hero who must overcome a battle within himselfto do what is right.",

      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },
    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "Latest",
      date: " MAY 1, 2023",
      img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH",

      title: "Avatar",
      Overview:
        " Avatar: The Way of Water | The Banner Visually Spellbinding! We havehere a science-fiction epic set on an alien world. It's a classicstory of a good-guy hero who must overcome a battle within himselfto do what is right.",
      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },

    {
      id: 31,
      ide: 92,
      cat: "Home",
      for: "LatestArticle ",
      date: "Bollywood / April 08 2023",
      img: "https://m.media-amazon.com/images/M/MV5BZGM0MTI2NjAtNjZmNC00YzQ0LTljZDgtMjdjMTMyNjUyOTUwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg",

      title: "Kanjos Makhichoos",
      Overview:
        "Kanjos Makhichoos Kanjoos Makhichoos is a black comedy about a miserly person named Jamnaprasad Pandey who saves money to send his parents on a pilgrimage.",

      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },

    {
      id: 31,
      ide: 92,
      cat: "Home",
      for: "LatestArticle ",
      date: "Bollywood / April 08 2023",
      img: "https://m.media-amazon.com/images/M/MV5BZGM0MTI2NjAtNjZmNC00YzQ0LTljZDgtMjdjMTMyNjUyOTUwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg",

      title: "Kanjos Makhichoos",
      Overview:
        "Kanjos Makhichoos Kanjoos Makhichoos is a black comedy about a miserly person named Jamnaprasad Pandey who saves money to send his parents on a pilgrimage.",

      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },
    {
      id: 31,
      ide: 92,
      cat: "Home",
      for: "LatestArticle ",
      date: "Bollywood / April 08 2023",
      img: "https://m.media-amazon.com/images/M/MV5BZGM0MTI2NjAtNjZmNC00YzQ0LTljZDgtMjdjMTMyNjUyOTUwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg",

      title: "Kanjos Makhichoos",
      Overview:
        "Kanjos Makhichoos Kanjoos Makhichoos is a black comedy about a miserly person named Jamnaprasad Pandey who saves money to send his parents on a pilgrimage.",

      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },
    {
      id: 31,
      ide: 92,
      cat: "Home",
      for: "LatestArticle ",
      date: "Bollywood / April 08 2023",
      img: "https://m.media-amazon.com/images/M/MV5BZGM0MTI2NjAtNjZmNC00YzQ0LTljZDgtMjdjMTMyNjUyOTUwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg",

      title: "Kanjos Makhichoos",
      Overview:
        "Kanjos Makhichoos Kanjoos Makhichoos is a black comedy about a miserly person named Jamnaprasad Pandey who saves money to send his parents on a pilgrimage.",

      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },

    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "HomeTop",
      date: " MAY 1, 2023",
      img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH",

      title: "Avatar",
      Overview:
        " Avatar: The Way of Water | The Banner Visually Spellbinding! We havehere a science-fiction epic set on an alien world. It's a classicstory of a good-guy hero who must overcome a battle within himselfto do what is right.",
      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },

    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "HomeTop",
      date: " MAY 1, 2023",
      img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH",

      title: "Avatar",
      Overview:
        " Avatar: The Way of Water | The Banner Visually Spellbinding! We havehere a science-fiction epic set on an alien world. It's a classicstory of a good-guy hero who must overcome a battle within himselfto do what is right.",
      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },

    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "HomeTop",
      date: " MAY 1, 2023",
      img: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH",

      title: "Avatar",
      Overview:
        " Avatar: The Way of Water | The Banner Visually Spellbinding! We havehere a science-fiction epic set on an alien world. It's a classicstory of a good-guy hero who must overcome a battle within himselfto do what is right.",
      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },

    {
      id: 26,
      ide: 5,
      cat: "Technology",
      for: "TechArt",
      date: " MAY 1, 2023",
      img: "https://www.nitorinfotech.com/wp-content/uploads/2022/07/No-code-low-code-ML-Nitor-Infotech.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 27,
      ide: 6,
      cat: "Technology",
      for: "TechArt",
      date: " MAY 1, 2023",
      img: "https://media.nationthailand.com/uploads/images/md/2023/02/LnHGoajYyVef4oiO3bbg.webp?x-image-process=style/lg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 28,
      ide: 7,
      cat: "Technology",
      for: "TechArt",
      date: " MAY 1, 2023",
      img: "https://etfdb.com/media/W1siZiIsIjIwMjEvMDkvMjIvbm9od2lmdmZmX0dyZWVuX1RlY2hub2xvZ3lfYW5kX1N1c3RhaW5hYmlsaXR5X01hcmtldF9Gb3JlY2FzdF9mb3JfQ29udGludWVkX0dyb3d0aC5qcGciXSxbInAiLCJ0aHVtYiIsIjMwMHg1NjBeIl1d/Green-Technology-and-Sustainability-Market-Forecast-for-Continued-Growth.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 29,
      ide: 8,
      cat: "Technology",
      for: "TechArt",
      date: " MAY 1, 2023",
      img: "https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/metaverse-shopping.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 30,
      ide: 9,
      cat: "Home",
      for: "Banner",
      date: " MAY 1, 2023",
      img: "https://static.toiimg.com/photo/92491435.jpeg",

      title: "Sita Raman Movie",
      Overview:
        "Afreen (Rashmika Mandanna) is a student president of Pakistan at a university in London. She takes up the job of delivering a letter to Sita Mahalakshmi (Mrunal Thakur) at the insistence of her grandfather’s will. Though she doesn’t like the job, she agrees to do it to get her share of her grandfather’s property..",
      description:
        "Unrequited love, bonds that know no border, and the charm that resembles the world where love was in letters, these might look like elements from the cinema of the past. But time and again when storytellers of our generation crack it right, it only makes me immensely happy. Welcome, Sita Ramam, a musical saga that blends love and tragedy with its tune so well that you kind of ignores the flaws. But I can’t. Story by Hanu Raghavapudi, Sita Ramam in a way is packed like the amazing Mahanati. A youngster is forced to get into a story to reach a goal and they discover not just the tragedy but themselves. But that is not where you cancel the Dulquer starrer for, because the content inside is entirely different. Divided into two time zones, the 1960s and the 80s, the film constantly keeps juggling between the two. While the present seems to be a bit shaky, it is the flashback where all the power lies. Shaping it like a fairy tale, Hanu sets his story in the immaculate whites of the snow, and the lush greens of the forest and between this are his Star crossed lovers who were never meant to be together. There is a mystery for everyone to solve and that’s how Raghavapudi keeps us invested. There is an orphan who has no one, and a queen who is lonely even with a family. They come together to become one and that is a very beautiful thought. The emotion of Sita Ramam stays at the right place at every moment and that is what sails the boat for this movie that does get too predictable and branched out at a.",
    },
    {
      id: 30,
      ide: 10,
      cat: "Home",
      for: "Banner1",
      date: " MAY 1, 2023",

      img: "https://i3.extraimage.xyz/pix/2023/04/27/uSiXTk.jpg",

      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 30,
      ide: 10,
      cat: "Home",
      for: "Banner1",
      date: " MAY 1, 2023",
      // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTR1ecvwQ8cKMPIPPrJBOW77h-Bk0yVdF2f_n0W5BAj-BB622",
      img: "https://i3.extraimage.xyz/pix/2023/05/19/unKuoQ.jpg",

      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 31,
      ide: 13,
      cat: "TechTop",
      for: "TechArt",
      date: " MAY 1, 2023",
      img: "https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/metaverse-shopping.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 31,
      ide: 13,
      cat: "TechTop",
      for: "TechArt",
      date: " MAY 1, 2023",
      img: "https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/metaverse-shopping.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 31,
      ide: 13,
      cat: "TechTop",
      for: "TechArt",
      date: " MAY 1, 2023",
      img: "https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/metaverse-shopping.jpg",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 29,
      ide: 8,
      cat: "Hollywood",
      for: "HollywoodArticle",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDpzRZ5cROWYHDz0e0kvi_yTOi_-ot_XpTnZaRspRCqtchtJK7",
      title: "The Little Mermaid",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 29,
      ide: 8,
      cat: "Hollywood",
      for: "HollywoodArticle",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDpzRZ5cROWYHDz0e0kvi_yTOi_-ot_XpTnZaRspRCqtchtJK7",
      title: "The Little Mermaid",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 29,
      ide: 8,
      cat: "Hollywood",
      for: "HollywoodArticle",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDpzRZ5cROWYHDz0e0kvi_yTOi_-ot_XpTnZaRspRCqtchtJK7",
      title: "The Little Mermaid",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 29,
      ide: 8,
      cat: "Hollywood",
      for: "HollywoodArticle",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDpzRZ5cROWYHDz0e0kvi_yTOi_-ot_XpTnZaRspRCqtchtJK7",
      title: "The Little Mermaid",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 35,
      ide: 33,
      cat: "TechTop",
      for: "HollywoodTop",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",

      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 35,
      ide: 33,
      cat: "TechTop",
      for: "HollywoodTop",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",

      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 35,
      ide: 33,
      cat: "TechTop",
      for: "HollywoodTop",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",

      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 35,
      ide: 33,
      cat: "Fitness",
      for: "FitArticle",
      date: " MAY 1, 2023",
      img: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?cs=srgb&dl=pexels-zakaria-boumliha-2827392.jpg&fm=jpg",
      // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",
      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 35,
      ide: 33,
      cat: "Fitness",
      for: "FitArticle",
      date: " MAY 1, 2023",
      // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",
      img: "https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg",
      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 35,
      ide: 33,
      cat: "Fitness",
      for: "FitArticle",
      date: " MAY 1, 2023",
      // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 35,
      ide: 33,
      cat: "Fitness",
      for: "FitArticle",
      date: " MAY 1, 2023",
      // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",
      img: "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg",
      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 35,
      ide: 33,
      cat: "Fitness",
      for: "TopFit",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",
      img: "https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg",
      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 35,
      ide: 33,
      cat: "Fitness",
      for: "TopFit",
      date: " MAY 1, 2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",
      img: "https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg",
      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
    {
      id: 35,
      ide: 33,
      cat: "Fitness",
      for: "TopFit",
      date: " MAY 1, 2023",
      // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPf2pqYP2T5S4me0ioj-RGa-3Pqgh0dg5to0DoPvYMln3HOLu",
      img: "https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg",
      title: "We Have a Ghost",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },
  ]);
  return (
    <>
      <ContexStore.Provider value={[data, setData]}>
        {props.children}
      </ContexStore.Provider>
    </>
  );
};

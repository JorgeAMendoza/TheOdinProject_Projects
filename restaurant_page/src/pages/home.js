function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("class", "home-header");

  // Header Content
  const headerContent = document.createElement("div");
  headerContent.setAttribute("class", "header-content container");

  // Insert header Title
  const headerTitle = document.createElement("p");
  headerTitle.setAttribute("class", "header-content-title");
  headerTitle.textContent = "The Family Platter";

  //INsert Header Subtitle
  const headerSubtitle = document.createElement("p");
  headerSubtitle.setAttribute("class", "header-content-subtitle");
  headerSubtitle.textContent =
    "16 Tacos, 4 types of meat, Your choice of Sauces, something thewhole family can enjoy.";

  //Insert Button
  const headerButton = document.createElement("button");
  headerButton.textContent = "Order Now";
  headerButton.setAttribute("class", "header-content-order-button");

  headerContent.append(headerTitle, headerSubtitle, headerButton);

  //   Bring it all together and return;
  header.appendChild(headerContent);
  return header;
}

function createTypes() {
  const tileSection = document.createElement("section");
  tileSection.setAttribute("class", "food-type container");
  const tileTitles = ["Tacos", "Burritos", "Quesadillias", "Desserts"];
  const tiles = tileTitles.map((text) => {
    const newTile = document.createElement("div");
    const tileText = document.createElement("p");
    newTile.setAttribute("class", "food-tile");
    tileText.textContent = `${text}`;
    newTile.append(tileText);
    return newTile;
  });
  tileSection.append(...tiles);
  return tileSection;
}

function createFamilySection() {
  //Food data for this section
  const food = [
    {
      name: "The Three Giant Tacos",
      description:
        "These are even too much for us to handle! 3 Giant tacos with your choice of meat, also includes onion and sauces of your choice. ",
      price: "$25.00",
      imageLink: "imgs/food/tacos/tacoLarge.jpg",
      imageAlt: "Giant Taco Platter",
    },
    {
      name: "The Supreme Spicy Taco Platter",
      description:
        "One of those families that enjoy hot stuff? Take on our 12 taco platter that comes loaded with our speciality hot sauce, your choice of meat and sauces. ",
      price: "$20.00",
      imageLink: "imgs/food/tacos/spicy.jpg",
      imageAlt: "Spicy Taco Platter",
    },
    {
      name: "The Jorge Burrito Special",
      description:
        "Got a family? These Burritos got one too. A 6 pack of medium-size burritos with your choice of meat and sauces.  ",
      price: "$30.00",
      imageLink: "imgs/food/burritos/burritos.jpg",
      imageAlt: "Family Burrito Speical",
    },
  ];

  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Family Favorites";
  sectionDom.append(sectionTitle);

  // Food Tiles
  const mealCardDom = food.map((meal) => {
    const mealCard = document.createElement("div");
    mealCard.setAttribute("class", "meal");

    const mealCardImage = document.createElement("img");
    mealCardImage.setAttribute("src", `${meal.imageLink}`);
    mealCardImage.setAttribute("alt", `${meal.imageAlt}`);
    mealCardImage.setAttribute("class", "meal-image");

    const mealCardTitle = document.createElement("h3");
    mealCardTitle.setAttribute("class", "meal-name");
    mealCardTitle.textContent = `${meal.name}`;

    const mealCardDescription = document.createElement("p");
    mealCardDescription.setAttribute("class", "meal-desc");
    mealCardDescription.textContent = `${meal.description}`;

    const mealCardPrice = document.createElement("p");
    mealCardPrice.setAttribute("class", "meal-price");
    mealCardPrice.textContent = `${meal.price}`;

    const mealCardButton = document.createElement("button");
    mealCardButton.setAttribute("class", "meal-order-button");
    mealCardButton.textContent = "Order Now";

    mealCard.append(
      mealCardImage,
      mealCardTitle,
      mealCardDescription,
      mealCardPrice,
      mealCardButton
    );
    return mealCard;
  });

  // Insert each meal card into a grid.
  const mealGrid = document.createElement("div");
  mealGrid.setAttribute("class", "meal-grid");
  mealGrid.append(...mealCardDom);

  sectionDom.append(mealGrid);

  return sectionDom;
}

function createDessertSection() {
  //Food data for this section
  const food = [
    {
      name: "Slice of Pie",
      description:
        "Keep it simple with a slice of pie, comes in various flavors and a soda along with it! Life is better with Pie! ",
      price: "$15.00",
      imageLink: "imgs/food/desserts/Pie.jpg",
      imageAlt: "Slice of Pie",
    },
    {
      name: "Mendoza Jello",
      description:
        "Jorge may make tacos, but he also loves him some Jello. Get a pack of his homemade Jello to enjoy after his tacos!",
      price: "$10.00",
      imageLink: "imgs/food/desserts/jello.jpg",
      imageAlt: "Cup of Jello",
    },
    {
      name: "Mexicn Cake Balls",
      description:
        "Everybody loves cake, so take some mexican cake balls with you. Delicious for the whole family!",
      price: "$15.00",
      imageLink: "imgs/food/desserts/cakeballs.jpg",
      imageAlt: "Cake Balls",
    },
  ];

  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Favorite Desserts";
  sectionDom.append(sectionTitle);

  // Food Tiles
  const mealCardDom = food.map((meal) => {
    const mealCard = document.createElement("div");
    mealCard.setAttribute("class", "meal");

    const mealCardImage = document.createElement("img");
    mealCardImage.setAttribute("src", `${meal.imageLink}`);
    mealCardImage.setAttribute("alt", `${meal.imageAlt}`);
    mealCardImage.setAttribute("class", "meal-image");

    const mealCardTitle = document.createElement("h3");
    mealCardTitle.setAttribute("class", "meal-name");
    mealCardTitle.textContent = `${meal.name}`;

    const mealCardDescription = document.createElement("p");
    mealCardDescription.setAttribute("class", "meal-desc");
    mealCardDescription.textContent = `${meal.description}`;

    const mealCardPrice = document.createElement("p");
    mealCardPrice.setAttribute("class", "meal-price");
    mealCardPrice.textContent = `${meal.price}`;

    const mealCardButton = document.createElement("button");
    mealCardButton.setAttribute("class", "meal-order-button");
    mealCardButton.textContent = "Order Now";

    mealCard.append(
      mealCardImage,
      mealCardTitle,
      mealCardDescription,
      mealCardPrice,
      mealCardButton
    );
    return mealCard;
  });

  // Insert each meal card into a grid.
  const mealGrid = document.createElement("div");
  mealGrid.setAttribute("class", "meal-grid");
  mealGrid.append(...mealCardDom);

  sectionDom.append(mealGrid);

  return sectionDom;
}

function createImageGallery() {
  const imageLinks = [
    "imgs/gallery/gallery1.jpg",
    "imgs/gallery/gallery2.jpg",
    "imgs/gallery/gallery3.jpg",
    "imgs/gallery/gallery4.jpg",
    "imgs/gallery/gallery5.jpg",
    "imgs/gallery/gallery6.jpg",
  ];

  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Gallery";
  sectionDom.append(sectionTitle);

  // Gallery Dom
  const imageGallery = document.createElement("div");
  imageGallery.setAttribute("class", "image-grid");

  // Create each image dom, insert into array.
  const imageDoms = imageLinks.map((link) => {
    const image = document.createElement("img");
    image.setAttribute("class", "rest-image");
    image.setAttribute("src", `${link}`);

    return image;
  });

  // Inject Images into grid, then Section dom and return.
  imageGallery.append(...imageDoms);
  sectionDom.append(imageGallery);
  return sectionDom;
}

function socialMediaSection() {
  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container social-media");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Follow us on Social Media";
  sectionDom.append(sectionTitle);

  // Insert Social Media Links
  const socialMedia = document.createElement("div");
  socialMedia.setAttribute("class", "social-icons");

  // Create and insert icons
  const twitterIcon = document.createElement("i");
  const instagramIcon = document.createElement("i");
  const youtubeIcon = document.createElement("i");

  twitterIcon.setAttribute("class", "fab fa-twitter");
  instagramIcon.setAttribute("class", "fab fa-instagram");
  youtubeIcon.setAttribute("class", "fab fa-youtube");

  socialMedia.append(twitterIcon, instagramIcon, youtubeIcon);

  // Inject and return section DOM.
  sectionDom.append(socialMedia);
  return sectionDom;
}

function insertHomepage() {
  return [
    createHeader(),
    createTypes(),
    createFamilySection(),
    createDessertSection(),
    createImageGallery(),
    socialMediaSection(),
  ];
}

export default insertHomepage;

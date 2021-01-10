function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("class", "menu-header");

  // Header Title
  const headerTitle = document.createElement("p");
  headerTitle.setAttribute("class", "header-title");
  headerTitle.textContent = "Menu";
  header.appendChild(headerTitle);

  //Header Subtitle
  const headerSubtitle = document.createElement("p");
  headerSubtitle.setAttribute("class", "header-subtitle");
  headerSubtitle.textContent = "Tacos, Burritos, Quesadillas, Oh My!";
  header.append(headerSubtitle);

  return header;
}

function createTacoSection() {
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
      name: "The Personal Taco",
      description:
        "Sharing is caring, but for this meal! 4 Tacos with your choice of meat, sauces, and drink.",
      price: "$20.00",
      imageLink: "imgs/food/tacos/taco.jpg",
      imageAlt: "Personal Taco Meal",
    },
  ];
  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Tacos";
  sectionDom.append(sectionTitle);

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

  //   Insert each card into the grid.
  const mealGrid = document.createElement("div");
  mealGrid.setAttribute("class", "meal-grid");
  mealGrid.append(...mealCardDom);

  sectionDom.append(mealGrid);

  return sectionDom;
}

function createBurritoSection() {
  const food = [
    {
      name: "The Jorge Burrito Special",
      description:
        "Got a family? These Burritos got one too. A 6 pack of medium-size burritos with your choice of meat and sauces.  ",
      price: "$30.00",
      imageLink: "imgs/food/burritos/burritos.jpg",
      imageAlt: "Family Burrito Speical",
    },
    {
      name: "The Giant",
      description:
        "You may not be able to handle this one, 1 large burrito with you choice of meat, sacues, veggies, and drinks.",
      price: "$20.00",
      imageLink: "imgs/food/burritos/specialBurrito.jpg",
      imageAlt: "Special Burrito Meal",
    },
    {
      name: "The Vegan Burrito",
      description:
        "We love our vegans too! Cooked on a seperate grill, 1 medium sized burrito with your choice of veggies, sauce, and drink.",
      price: "$20.00",
      imageLink: "imgs/food/burritos/veganBurrito.jpg",
      imageAlt: "Vegan Burrito Meal",
    },
  ];
  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Burritos";
  sectionDom.append(sectionTitle);

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

  //   Insert each card into the grid.
  const mealGrid = document.createElement("div");
  mealGrid.setAttribute("class", "meal-grid");
  mealGrid.append(...mealCardDom);

  sectionDom.append(mealGrid);

  return sectionDom;
}

function createQuesedilliaSection() {
  const food = [
    {
      name: "The Personal Platter",
      description:
        "1 large Quessadillia that comes with our specialty sauce, sides, and drink.  ",
      price: "$20.00",
      imageLink: "imgs/food/quesadillia/queso.jpg",
      imageAlt: "Quesdillia Personal Meal",
    },
    {
      name: "The Family Platter",
      description:
        "Food for the whole family! 8 medium sized quessadilias with your choice of meat, sacues, and veggies. ",
      price: "$300.00",
      imageLink: "imgs/food/quesadillia/singleQueso.jpg",
      imageAlt: "Quessadillia Family Special",
    },

    {
      name: "The Family Platter",
      description:
        "Food for the whole family! 8 medium sized quessadilias with your choice of meat, sacues, and veggies. ",
      price: "$300.00",
      imageLink: "imgs/food/quesadillia/singleQueso.jpg",
      imageAlt: "Quessadillia Family Special",
    },
  ];
  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Quessadillias";
  sectionDom.append(sectionTitle);

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

  //   Insert each card into the grid.
  const mealGrid = document.createElement("div");
  mealGrid.setAttribute("class", "meal-grid");
  mealGrid.append(...mealCardDom);

  sectionDom.append(mealGrid);

  return sectionDom;
}

export default function insertMenu() {
  return [
    createHeader(),
    createTacoSection(),
    createBurritoSection(),
    createQuesedilliaSection(),
  ];
}

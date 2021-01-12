function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("class", "about-header");

  // Header Title
  const headerTitle = document.createElement("p");
  headerTitle.setAttribute("class", "header-title");
  headerTitle.textContent = "About Us";
  header.appendChild(headerTitle);

  //Header Subtitle
  const headerSubtitle = document.createElement("p");
  headerSubtitle.setAttribute("class", "header-subtitle");
  headerSubtitle.textContent = "Learn More About Us and Plan your next party!";
  header.append(headerSubtitle);

  return header;
}

function createAboutSection() {
  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container about");

  // Section Image
  const sectionImage = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", "imgs/gallery/gallery3.jpg");
  image.setAttribute("alt", "Man Cooking Meat");
  sectionImage.setAttribute("class", "about-image");
  sectionImage.append(image);

  //   Section Text
  const sectionText = document.createElement("div");
  const text = document.createElement("p");
  text.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam delectus corporis rem sequi ratione possimus totam illum placeat voluptates assumenda maiores, sapiente optio quis minus tenetur quibusdam numquam cupiditate deleniti modi quisquam at quasi impedit aspernatur! Iusto natus culpa corporis nihil quo ex ut, sed, porro facere alias obcaecati omnis";
  sectionText.setAttribute("class", "about-text");
  sectionText.append(text);

  //Push into section DOM
  sectionDom.append(sectionImage, sectionText);

  return sectionDom;
}

function createContactInfo() {
  const sectionDom = document.createElement("section");
  sectionDom.setAttribute("class", "container contact");

  //Section Title
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.textContent = "Contact Us";
  sectionDom.append(sectionTitle);

  //Section Info
  const sectionInfo = document.createElement("div");
  sectionInfo.setAttribute("class", "info");

  //   Section Form
  const sectionForm = document.createElement("form");

  //   Name Form Group
  const nameFormGroup = document.createElement("div");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  nameFormGroup.setAttribute("class", "form-group");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("class", "input-box");

  //Push into group
  nameFormGroup.append(nameLabel, nameInput);

  //   Email Form Group
  const emailFormGroup = document.createElement("div");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  emailFormGroup.setAttribute("class", "form-group");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("class", "input-box");

  //Push into group
  emailFormGroup.append(emailLabel, emailInput);

  // Text Box form group;
  const messageFormGroup = document.createElement("div");
  const messageLabel = document.createElement("label");
  const messageInput = document.createElement("textarea");
  messageFormGroup.setAttribute("class", "form-group");
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Message";
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("id", "message");
  messageInput.setAttribute("cols", "30");
  messageInput.setAttribute("rows", "10");

  //   Push into group;
  messageFormGroup.append(messageLabel, messageInput);

  //Form Button
  const formButton = document.createElement("button");
  formButton.textContent = "Submit";

  //   Push All form groups into form.
  sectionForm.append(
    nameFormGroup,
    emailFormGroup,
    messageFormGroup,
    formButton
  );

  //   Contact Info
  const contactInfo = document.createElement("div");
  contactInfo.setAttribute("class", "icon-info");
  //   sectionInfo.append(sectionForm);

  //   //   Push all into section dom
  //   sectionDom.append(sectionInfo);

  //   return sectionDom;
}

export default function () {
  return [createHeader(), createAboutSection(), createContactInfo()];
}

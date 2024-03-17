export const registrTemplate = ({title, header, button: {href, text}}) => {
    const template = `
    <div class="registration__left">
          <p class="right__cta">${title}</p>
          <h3 class="registration__left__content">${header}</h3>
    </div>
    <div class="registration__right">
          <a href="${href}"><button class="registration_buttons__start btn">${text}</button></a>
    </div>
`;
  return template;
};
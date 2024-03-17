export const exceedTemplate = ({title, img: {src, alt}, header, content, link: {href, text}}) => {
    const template = `
    <div class="exceeding_all_expectations__left">
        <img src="${src}" alt="${alt}">
    </div>
    <div class="exceeding_all_expectations__right">
        <p class="right__cta">${title}</p>
        <h2 class="left__header">${header}</h2>
        <p class="container__content">${content}</p>
          <a href="${href}" class="left__cta">${text}</a>
        </div>
`;
  return template;
};


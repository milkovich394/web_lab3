export const createHeaderFooterTemplate = ({header, button:{href,text}}) => {
    const template = ` 
    <div class="footer_header">
    <h1 class="footer_header__top">${header}</h1>
    </div>
    <div class="footer_middle">
      <button class="req_access" href="${href}">${text}</button>
    </div> `;
    return template
};

export const createTheEnd = ({text}) => {
    return `<p>${text}</p>`;
};

export const createInfo = ({img:{src, alt}, text}) => {
    const template = ` 
    <div class="logo">
    <img class="GPT-3_logo" src="${src}" alt="${alt}">
    <p class="address">${text}</p>
    </div>`;
    return template
};

export const linksFooter = ({ href, text }) => {
    return ` <a class="footer__link" href="${href}">${text}</a>`;
  };
  
export const createLinks = ({title, items}) => {
    const links = items.map((item) => linksFooter(item)).join(" ");
    const template =  `
    <div class="footer_links">
        <p class="bottom_links">${title}</p>
        <div class="footer_info__links">
           ${links}
        </div>
    </div>`;
    return template
};

export const createCompany = ({title, items}) => {
    const company = items.map((item) => linksFooter(item)).join(" ");
    const template =  ` 
    <div class="footer__company_info">
        <p class="bottom_links"> ${title} </p>
        <div class="footer_company__links">
            ${company}
        </div>
    </div>`;
    return template
};

export const createContact = ({title, items}) => {
    const contact = items.map((item) => linksFooter(item)).join(" ");
    const template =  ` 
    <div class="footer__contact_info">
        <p class="bottom_links"> ${title} </p>
        <div class="footer__contact_content">
            ${contact}
        </div>
    </div>`;
    return template
};

export const createfooterTemplate = ({ headerOfFooter,
    infoGpt3,
    footerLinks,
    companyLinks,
    contactLinks}) => {
    const headerTemplate = createHeaderFooterTemplate(headerOfFooter);
    const info = createInfo(infoGpt3);
    const linksTemplate = createLinks(footerLinks);
    const companyTemplate = createCompany(companyLinks);
    const contactTemplate = createContact(contactLinks);

    const resultTemplate = `
        ${headerTemplate}
        <div class="footer_btm">
            ${info}
            <div class="footer_btm__right">
                ${linksTemplate}
                ${companyTemplate}
                ${contactTemplate}
            </div>
        </div>
    `;

    return resultTemplate;
};
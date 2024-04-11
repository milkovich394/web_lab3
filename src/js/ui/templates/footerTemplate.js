export const createHeaderFooterTemplate = ({ header, button: { href, text } }) => {
    const template = `
    <div class="footer_header">
        <h1 class="footer_header__top">${header}</h1>
    </div>
    <div class="footer_middle">
        <button class="req_access" href="${href}">${text}</button>
    </div>`;
    return template;
};

export const createTheEnd = ({ text }) => {
    return `<p>${text}</p>`;
};

export const createInfo = ({ img: { src, alt }, text }) => {
    const template = `
    <div class="logo">
        <img class="GPT-3_logo" src="${src}" alt="${alt}">
        <p class="address">${text}</p>
    </div>`;
    return template;
};

export const linksFooter = ({ href, title }) => {
    return `<a class="footer__link" href="${href}">${title}</a>`;
};

export const createLinks = ({ header, linkElements }) => {
    const linksHTML = linkElements.map((item) => `<div class="footer_link">${linksFooter(item)}</div>`).join(""); 
    const template = `
    <div class="footer_column">
        <p class="bottom_links">${header}</p>
        <div class="footer_info__links">
            ${linksHTML}
        </div>
    </div>`;
    return template;
};


export const createCompany = ({ header, linkElements }) => {
    const companyHTML = linkElements.map((item) => `<div class="footer_link">${linksFooter(item)}</div>`).join(""); 
    const template = `
    <div class="footer_column">
        <p class="bottom_links">${header}</p>
        <div class="footer_company__links">
            ${companyHTML}
        </div>
    </div>`;
    return template;
};


export const createContact = ({ header, adress, phoneNumber, email }) => {
    const contactHTML = `
        <p class="bottom_links">${header}</p>
        <div class="footer_info__links">
            <p class="footer__link">${adress}</p>
            <p class="footer__link">${phoneNumber}</p>
            <p class="footer__link">${email}</p>
        </div>
    `;
    const template = `
    <div class="footer_column">
        ${contactHTML}
    </div>`;
    return template;
};


export const createfooterTemplate = ({ headerOfFooter, infoGpt3, ...columns }) => {
    const headerTemplate = createHeaderFooterTemplate(headerOfFooter);
    const info = createInfo(infoGpt3);

    const columnsHTML = Object.values(columns).map(column => {
        if (column.linkElements) {
            return createLinks(column);
        } else if (column.adress && column.phoneNumber && column.email) {
            return createContact(column);
        }
    }).join("");

    const resultTemplate = `
        ${headerTemplate}
        <div class="footer_btm">
            ${info}
            <div class="footer_btm__right">
                ${columnsHTML}
            </div>
        </div>
    `;

    return resultTemplate;
};

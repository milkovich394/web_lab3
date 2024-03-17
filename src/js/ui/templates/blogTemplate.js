
export const createHeaderBlogTemplate = ({header}) => {
    const template = ` <h1 class="blog_header">${header}</h1> `;
    return template
};

export const createBlogLeftArtTemplate = ({isMain, img: {src, alt}, post:{date, header, link: {href, label}}}) => {
    
    return ` ${isMain ? `
    <img src="${src}" alt="${alt}">
        <div class="first_news__content news">
            <p class="data">${date}</p>
            <h3 class="blog__title">${header}</h3>
            <a class="${href}" href="">${label}</a>
        </div>` : ""}
    `;
};

export const createBlogRightArtTemplate = ({isMain, img: {src, alt}, post:{date, header, link: {href, label}}}) => {
    return ` ${!isMain ? `
    <div class="other_news">
    <img class="news_img" src="${src}" alt="${alt}">
    <div class="other_news__content news">
        <p class="data">${date}</p>
        <h3 class="blog__title">${header}</h3>
        <a href="${href}" class="read_more">${label}</a>
    </div>
    </div>` : ""}

    `;
};

export const createMainBlogTemplate = (blogPostData) => {
    const template = blogPostData.map((item) => createBlogLeftArtTemplate(item)).join("");
    return template;
};

export const createOtherBlogTemplate = (blogPostData) => {
    const template = blogPostData.map((item) => createBlogRightArtTemplate(item)).join("");
    return template;
};


export const blogTemplate = ({blogHeaderData, blogPostData}) => {
    const headerBlogTemplate = createHeaderBlogTemplate(blogHeaderData);
    const mainBlogTemplate = createMainBlogTemplate(blogPostData);
    const otherBlogTemplate = createOtherBlogTemplate(blogPostData);


    const resultTemplate = `
        ${headerBlogTemplate}
        <div class="all_news">
            <div class="first_news">
                ${mainBlogTemplate}
            </div>
            <div class="all_other_news">
                ${otherBlogTemplate}
            </div>
        </div>
    `;

    return resultTemplate;
};
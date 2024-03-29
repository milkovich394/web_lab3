export const blogHeaderData = {
    header: "Многое Происходит, <br> Мы Ведем об Этом Блог."
};

export const blogPostData = [
    //Главная
    {
        isMain: true,
        img: {
            src: "./assets/img/blog/blog.png",
            alt: "not-found"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },
       
    {
        isMain: false,
        img: {
            src: "./assets/img/blog/blog1.png",
            alt: "not-found"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

    {
        isMain: false,
        img: {
            src: "./assets/img/blog/blog2.png",
            alt: "not-found"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

    {
        isMain: false,
        img: {
            src: "./assets/img/blog/blog3.png",
            alt: "not-found"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

    {
        isMain: false,
        img: {
            src: "../assets/img/blog/blog4.png",
            alt: "not-found"
        },
        
        post: {
            date: "Сент 26, 2021",
            header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
            link:{
                href: "#",
                label: "Читать полную статью"
            }
        }
    },

];

const blogData = {
    blogHeaderData,
    blogPostData,
};

export default blogData;
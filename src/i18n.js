import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
        language: "Arabic"
      },
      name: "Noor Jaber",
      title: "Full stack web developer and Computer Science Student at Palestine technical university.",
      aboutMeTitle: "About me",
      aboutMeText: "Enthusiastic MERN stack developer and hardworking second-year college student, committed to continuous learning in the ever-evolving field of technology and eager to apply my skills in real-world projects.",
      skills: "Skills:",
      categories: {
        languages: "Languages",
        tools: "Frameworks & Tools",
        dev: "Productivity & Developer Tools",
        spec: "Specialization"
      },
      projects: {
      ecommerce: {
        title: "E-Commerce Web Application (MERN Stack):",
        desc: "Built a full-featured e-commerce platform with user authentication, product browsing, shopping cart, and order management functionalities. Implemented a responsive frontend using React and Bootstrap, connected to a RESTful backend API built with Node.js and Express, with MongoDB used for data storage. Integrated admin dashboard for managing products, orders, and users, with role-based access control."},
      social: {
        title: "Social Media App",
        desc: "Developed a dynamic social media interface using pure JavaScript and HTML, consuming external APIs to enable user login/logout, post creation, editing, deletion, and infinite scrolling. Ensured seamless navigation and profile management across multiple pages.",
      },
      movie: {
        title: "Movie App",
        desc: "Built a movie web app using HTML, CSS, and JavaScript. Integrated TMDB API to display a list of movies with infinite scroll. Added a details page that shows movie info like title, poster, description, release date, and rating. Used Axios for API calls and handled data dynamically based on URL parameters."
      },
      weather: {
        title: "Weather App",
        desc: "Developed a weather application using React, featuring real-time weather updates, responsive design, and multilingual support (English/Arabic) via i18next. Integrated external weather APIs to fetch and display data using reusable components. Employed clean component structure."
      },
      notes: {
        title: "Notes and To-Dos Management Application",
        desc: "A full-stack notes management web application that allows users to create, edit, delete notes and todos. The system features responsive design and real-time data updates. Developed with a focus on simplicity, performance, and scalability to deliver an intuitive user experience."
      },
      buttons: {
        github: "View on GitHub",
        website: "Visit Website"
      }
    },
      contactTitle: "Get in Touch",
      contactDescription: "I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out through any of the following channels:",
      contact: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: "من أنا",
        projects: "المشاريع",
        contact: "تواصل",
        language: "الإنجليزية"
      },

      name: "نور جابر",
      title: "مطور ويب متكامل وطالبة علوم حاسوب في جامعة فلسطين التقنية.",
      aboutMeTitle: "من أنا",
      aboutMeText: "مطور MERN شغوف وطالبة مجتهدة في السنة الثانية، أطمح للتعلم المستمر في عالم التقنية المتسارع، وأسعى لتطبيق مهاراتي في مشاريع واقعية.",
      skills: "المهارات:",
      
      categories: {
        languages: "اللغات",
        tools: "الأطر والأدوات",
        dev: "أدوات الإنتاجية والتطوير",
        spec: "مجالات التخصص"
      },

      projects: {
        ecommerce: {
          title: "تطبيق تجارة إلكترونية (MERN Stack):",
          desc: "بناء منصة تجارة إلكترونية متكاملة تتضمن تسجيل دخول المستخدم، تصفح المنتجات، سلة التسوق، وإدارة الطلبات. تم استخدام React وBootstrap للواجهة، وNode.js وExpress للباك إند، مع MongoDB لحفظ البيانات. كما تم دمج لوحة تحكم للمشرفين لإدارة المنتجات والطلبات والمستخدمين بصلاحيات مختلفة."
        },
        social: {
          title: "تطبيق تواصل اجتماعي",
          desc: "تطوير واجهة تواصل اجتماعي ديناميكية باستخدام JavaScript وHTML، وربطها بواجهات خارجية لدعم تسجيل الدخول، إنشاء وتعديل المنشورات، الحذف، وتمرير لا نهائي. يشمل تنقل بين الصفحات وإدارة الحساب الشخصي."
        },
        movie: {
          title: "تطبيق أفلام",
          desc: "بناء تطبيق ويب لعرض الأفلام باستخدام HTML وCSS وJavaScript. تم دمج TMDB API لعرض قائمة الأفلام مع تمرير لا نهائي، وصفحة تفاصيل تعرض معلومات الفيلم مثل العنوان، الصورة، الوصف، تاريخ الإصدار، والتقييم."
        },
        weather: {
          title: "تطبيق الطقس",
          desc: "تطوير تطبيق طقس باستخدام React يدعم تحديثات الطقس في الوقت الفعلي، تصميم متجاوب، ودعم متعدد اللغات (الإنجليزية/العربية) باستخدام i18next. تم استخدام مكونات قابلة لإعادة الاستخدام وربط بواجهات API خارجية."
        },
        notes: {
          title: "تطبيق إدارة الملاحظات والمهام",
          desc: "تطبيق ويب متكامل يسمح بإنشاء، تعديل، حذف الملاحظات والمهام. يتميز بتصميم متجاوب وتحديثات بيانات فورية. تم تطويره للتركيز على البساطة، الأداء، وقابلية التوسعة لتقديم تجربة استخدام سلسة."
        },
        buttons: {
          github: "عرض على GitHub",
          website: "زيارة الموقع"
        }
      },

      contactTitle: "تواصل معي",
      contactDescription: "دائمًا أرحب بالفرص الجديدة والتعاونات. لا تتردد في التواصل معي عبر أي من الوسائل التالية:",
      contact: {
        email: "البريد الإلكتروني",
        linkedin: "لينكدإن",
        github: "جيت هب"
      },

    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;

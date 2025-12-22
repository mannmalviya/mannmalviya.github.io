// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "A growing collection of my academic notes and study materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Notes/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
          },
        },{id: "nav-aboutme",
          title: "AboutMe",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-books",
              title: "Books",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-quotes",
              title: "Quotes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/Quotes/";
              },
            },{id: "dropdown-old-announcements",
              title: "Old Announcements",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/announcements/";
              },
            },{id: "books-hackers-amp-painters",
          title: 'Hackers &amp;amp; Painters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Hackers_and_Painters/";
            },},{id: "books-zero-to-one-notes-on-startups-or-how-to-build-the-future",
          title: 'Zero to One: Notes on Startups, or How to Build the Future',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Zero_To_One/";
            },},{id: "projects-rag-chat-bot",
          title: 'RAG Chat Bot',
          description: "Coming Soon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-gmail',
        title: 'Gmail',
        section: 'Socials',
        handler: () => {
          window.open("mailto:mmalviya@ucsc.edu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'Linkedin',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mann-malviya-610765274/", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://www.instagram.com/mann_malviya_/", "_blank");
        },
      },{
        id: 'social-Medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@mmalviya_82017", "_blank");
        },
      },{
        id: 'social-Github',
        title: 'Github',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mannmalviya", "_blank");
        },
      },{
        id: 'social-LeetCode',
        title: 'Leetcode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/lvl12-Tensor-Boi/", "_blank");
        },
      },{
        id: 'social-CodeForces',
        title: 'Codeforces',
        section: 'Socials',
        handler: () => {
          window.open("https://codeforces.com/profile/lvl12_Tensor_boi", "_blank");
        },
      },{
        id: 'social-Hevy',
        title: 'Hevy',
        section: 'Socials',
        handler: () => {
          window.open("https://hevy.com/user/zyzz7", "_blank");
        },
      },{
        id: 'social-strava',
        title: 'Strava',
        section: 'Socials',
        handler: () => {
          window.open("https://www.strava.com/athletes/177548756", "_blank");
        },
      },{
        id: 'social-chess',
        title: 'Chess',
        section: 'Socials',
        handler: () => {
          window.open("https://www.chess.com/member/lvl12tensorboi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },];

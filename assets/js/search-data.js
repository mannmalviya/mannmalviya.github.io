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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
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
            },{id: "nav-aboutme",
          title: "AboutMe",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-why-i-quit-jiu-jitsu-and-chess",
        
          title: "Why I quit Jiu-Jitsu and Chess",
        
        description: "Quitting Jiu-Jitsu &amp; Chess",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/quitting_bjj/";
          
        },
      },{id: "post-hello-world",
        
          title: "Hello World",
        
        description: "What is this blog?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/HelloWorld/";
          
        },
      },{id: "post-the-champion-has-a-name",
        
          title: "The champion has a name",
        
        description: "on Charles Oliveira",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/DoBronx/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "notes-cse-100",
          title: 'CSE-100',
          description: "Logic Design",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-100_notes/";
            },},{id: "notes-cse-101",
          title: 'CSE-101',
          description: "Introduction to Data Structures and Algorithms",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-101_notes/";
            },},{id: "notes-cse-102",
          title: 'CSE-102',
          description: "Introduction to Analysis of Algorithms",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-102_notes/";
            },},{id: "notes-cse-103",
          title: 'CSE-103',
          description: "Computational Models",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-103_notes/";
            },},{id: "notes-cse-120",
          title: 'CSE-120',
          description: "Computer Architecture",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-120_notes/";
            },},{id: "notes-computer-systems-and-assembly-language",
          title: 'Computer Systems and Assembly Language',
          description: "Computer Systems and Assembly Language and Lab",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-12_notes/";
            },},{id: "notes-cse-130",
          title: 'CSE-130',
          description: "Principles of Computer Systems Design",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-130_notes/";
            },},{id: "notes-cse-13s",
          title: 'CSE-13S',
          description: "Computer Systems and C Programming",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-13S_notes/";
            },},{id: "notes-cse-140",
          title: 'CSE-140',
          description: "Artificial Intelligence",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-140_notes/";
            },},{id: "notes-cse-16",
          title: 'CSE-16',
          description: "Applied Discrete Mathematics",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-16_notes/";
            },},{id: "notes-math-100",
          title: 'Math-100',
          description: "Introduction to Proof and Problem Solving",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Math100_notes/";
            },},{id: "notes-math-105a",
          title: 'Math-105a',
          description: "Real Analysis",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Math105a_notes/";
            },},{id: "notes-quantum-mechanics",
          title: 'Quantum Mechanics',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/QM_notes/";
            },},{id: "notes-stat-131",
          title: 'Stat-131',
          description: "Introduction to Probability Theory",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Stat-131_notes/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
        id: 'social-Github',
        title: 'Github',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mannmalviya", "_blank");
        },
      },{
        id: 'social-Hevy',
        title: 'Hevy',
        section: 'Socials',
        handler: () => {
          window.open("https://hevy.com/user/zyzz7", "_blank");
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
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

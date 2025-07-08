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
          section: "News",},{id: "notes-parallel-computing",
          title: 'Parallel Computing',
          description: "Based on Stanford&#39;s CS149",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CS-149_notes/";
            },},{id: "notes-logic-design",
          title: 'Logic Design',
          description: "Based on UCSC&#39;s CSE-100",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-100_notes/";
            },},{id: "notes-introduction-to-data-structures-and-algorithms",
          title: 'Introduction to Data Structures and Algorithms',
          description: "Based on UCSC&#39;s CSE-101",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-101_notes/";
            },},{id: "notes-introduction-to-analysis-of-algorithms",
          title: 'Introduction to Analysis of Algorithms',
          description: "Based on UCSC&#39;s CSE-102",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-102_notes/";
            },},{id: "notes-computational-models",
          title: 'Computational Models',
          description: "Based on UCSC&#39;s CSE-103 &amp; MIT&#39;s 18.404J",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-103_notes/";
            },},{id: "notes-computer-architecture",
          title: 'Computer Architecture',
          description: "Based on UCSC&#39;s CSE-120",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-120_notes/";
            },},{id: "notes-computer-systems-and-assembly-language",
          title: 'Computer Systems and Assembly Language',
          description: "Based on UCSC&#39;s CSE-12",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-12_notes/";
            },},{id: "notes-principles-of-computer-systems-design",
          title: 'Principles of Computer Systems Design',
          description: "Based on UCSC&#39;s CSE-130",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-130_notes/";
            },},{id: "notes-operating-systems",
          title: 'Operating Systems',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-134_notes/";
            },},{id: "notes-computer-systems-and-c-programming",
          title: 'Computer Systems and C Programming',
          description: "Based on UCSC&#39;s CSE-13S",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-13S_notes/";
            },},{id: "notes-artificial-intelligence",
          title: 'Artificial Intelligence',
          description: "Based on UCSC&#39;s CSE-140",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-140_notes/";
            },},{id: "notes-applied-discrete-mathematics",
          title: 'Applied Discrete Mathematics',
          description: "Based on UCSC&#39;s CSE-16",
          section: "Notes",handler: () => {
              window.location.href = "/notes/CSE-16_notes/";
            },},{id: "notes-introduction-to-proof-and-problem-solving",
          title: 'Introduction to Proof and Problem Solving',
          description: "Based on UCSC&#39;s Math-100",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Math100_notes/";
            },},{id: "notes-real-analysis",
          title: 'Real Analysis',
          description: "Based on UCSC&#39;s Math-105a &amp; MIT&#39;s 18.100A",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Math105a_notes/";
            },},{id: "notes-quantum-mechanics",
          title: 'Quantum Mechanics',
          description: "",
          section: "Notes",handler: () => {
              window.location.href = "/notes/QM_notes/";
            },},{id: "notes-introduction-to-probability-theory",
          title: 'Introduction to Probability Theory',
          description: "Based on UCSC&#39;s Stat-131 &amp; Stanford&#39;s CS109",
          section: "Notes",handler: () => {
              window.location.href = "/notes/Stat-131_notes/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
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
    },];

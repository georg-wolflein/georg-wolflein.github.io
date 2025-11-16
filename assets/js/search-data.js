// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-chess-recognition",
        
          title: "chess recognition",
        
        description: "parsing chess game state from a picture of the board",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/chesscog/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-m-honoured-to-receive-the-adobe-prize",
          title: 'I’m honoured to receive the Adobe Prize.',
          description: "",
          section: "News",},{id: "news-my-first-paper-determining-chess-game-state-from-an-image-was-accepted-at-the-journal-of-imaging",
          title: 'My first paper, Determining Chess Game State from an Image, was accepted at...',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-at-wacv-2023",
          title: 'One paper was accepted at WACV 2023.',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-warwick-tissue-image-analytics-tia-centre-about-self-supervised-feature-extractors-for-pathology-slide-classification",
          title: 'I gave a talk at the Warwick Tissue Image Analytics (TIA) Centre about...',
          description: "",
          section: "News",},{id: "news-i-will-be-doing-a-research-internship-at-google-in-london-this-summer",
          title: 'I will be doing a research internship at Google in London this summer....',
          description: "",
          section: "News",},{id: "news-i-will-be-giving-a-talk-at-scads-ai-on-llm-agents-for-autonomous-tool-creation",
          title: 'I will be giving a talk at SCADS.AI on LLM agents for autonomous...',
          description: "",
          section: "News",},{id: "news-cobra-has-been-accepted-at-cvpr-2025",
          title: 'COBRA has been accepted at CVPR 2025!',
          description: "",
          section: "News",},{id: "news-toolmaker-has-been-accepted-at-acl-2025",
          title: 'ToolMaker has been accepted at ACL 2025!',
          description: "",
          section: "News",},{id: "projects-a-good-feature-extractor-is-all-you-need-for-weakly-supervised-pathology-slide-classification",
          title: 'A Good Feature Extractor Is All You Need for Weakly Supervised Pathology Slide...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/good-features/";
            },},{id: "projects-hoechstgan",
          title: 'HoechstGAN',
          description: "Virtual Lymphocyte Staining Using Generative Adversarial Networks",
          section: "Projects",handler: () => {
              window.location.href = "/hoechstgan/";
            },},{id: "projects-toolmaker",
          title: 'ToolMaker',
          description: "LLM Agents Making Agent Tools",
          section: "Projects",handler: () => {
              window.location.href = "/toolmaker/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%65%6F%72%67@%77%6F%65%6C%66%6C%65%69%6E.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/georg-wolflein", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/georg-wolflein", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XTpEX9oAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/gwoelflein", "_blank");
        },
      },];

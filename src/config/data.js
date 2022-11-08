import Content_1 from "../content/guide_github/content";
import Content_2 from "../content/working_with_gitub/content";

export const blogList = [
    {
        id: 1,
        title: 'A Guide to Git and Github',
        heading: 'A Guide to Git and Github.',
        category: 'development',
        subCategory: ['learn', 'github', 'git'],
        description:
            "Learning what git is and how github helps us enhance the capabilities of git!",
        createdAt: 'November 05, 2022',
        cover: '/assets/images/github.webp',
        content: <Content_1/>
    },
    {
        id: 2,
        title: 'Advanced Github workflow',
        heading: 'Advanced Github workflow.',
        category: 'development',
        subCategory: ['git', 'github', 'programming'],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        createdAt: 'November 05, 2022',
        cover: '/assets/images/git.webp',
        content: <Content_2/>
    },
    {
        id: 3,
        title: 'What is Tea',
        heading: 'What is Tea?',
        category: 'learning',
        subCategory: ['package-manager', 'tea'],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        createdAt: 'November 05, 2022',
        cover: '/assets/gifs/tea.gif',
    },
    {
        id: 4,
        title: 'Working with Tea',
        heading: 'Working with Tea',
        category: 'development',
        subCategory: ['package-manager', 'tea', 'programming'],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        createdAt: 'November 05, 2022',
        cover: '/assets/gifs/tea_working.gif',
    },

];
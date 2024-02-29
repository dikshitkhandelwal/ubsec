const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
        namesub: [
            {
                id: 1,
                sub: 'Home 01',
                links: '/'
            },
            {
                id: 2,
                sub: 'Home 02',
                links: '/home-v2'
            },
            {
                id: 3,
                sub: 'Home 03',
                links: '/home-v3'
            },
            {
                id: 4,
                sub: 'Home 04',
                links: '/home-v4'
            },
            {
                id: 5,
                sub: 'Home 05',
                links: '/home-v5'
            },
            {
                id: 6,
                sub: 'Home 06',
                links: '/home-v6'
            },
        ]
    },
    {
        id: 2,
        name: 'Events',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Spring 2024',
                links: '/events/spring-2024'
            }
        ]
    },

    {
        id: 5,
        name: 'Discord',
        links: 'https://discord.gg/THcrbZBPAJ',
        external: true

    },

    {
        id: 5,
        name: 'UBLinked',
        links: 'https://buffalo.campuslabs.com/engage/organization/ubsec',
        external: true
    },

    {
        id: 5,
        name: 'Eboard',
        links: '/eboard',
    },

    {
        id: 7,
        name: 'About Us',
        links: '/about-us',
    },
]

export default menus;
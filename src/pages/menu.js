const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 4,
        name: 'Pages',
        links: '#',
        namesub: [
            {
                id: 3,
                sub: 'Help Center',
                links: '/help-center'
            },
            {
                id: 4,
                sub: 'FAQ',
                links: '/faqs'
            },
            {
                id: 5,
                sub: 'Connect Wallet',
                links: '/wallet'
            },
            {
                id: 6,
                sub: 'Login',
                links: '/login'
            },
            {
                id: 7,
                sub: 'Sign Up',
                links: '/signup'
            },
        ],
    },
    {
        id: 5,
        name: 'Create',
        links: '/create',
    },
    {
        id: 7,
        name: 'Contact',
        links: '/contact',
    },
    
]

export default menus;
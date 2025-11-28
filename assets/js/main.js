// FUNCTION RETURN AFFIXES..
function AZCore(value) {
        // DIRECTLY RETURN...
        return {
                STAY: ['[azcore]'],
                META: AZElement('head', {}, '', [
                        AZElement('title', {}, 'AZCore')
                ]),
                VIEW: AZElement('div', { id: 'app' }, '', [
                        AZElement('main', {}, '', [
                                AZElement('div', { className: 'container' }, '', [
                                        AZElement('img', { src: './assets/img/AZCore.png' }),
                                        AZElement('h1', {}, 'AZCore'),
                                        AZElement('P', {}, 'SIMPLIFY DEVELOPMENT'),
                                        AZElement('button', {}, 'BE READY TO EXPLORE')
                                ])
                        ]),
                        AZElement('ul', { className: 'circles' }, '', [
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                                AZElement('li'),
                        ])
                ])
        }
}

// Initialize router
new AZRouter(
        [
        {
                // AFFIXES...
                on: '/index.html',
                onREDIRECT:{
                        ON:'/',
                        REDIRECT:'ON'
                }
        },
        {
                // AFFIXES...
                on: '/',
                onVIEW: AZCore
        }
        ],
        {
                // /404 to /
                on404: '/',
        }
);

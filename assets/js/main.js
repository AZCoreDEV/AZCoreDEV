const CIRCLEEFFECT = AZElement('ul', { className: 'circles' }, '', [
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
document.body.appendChild(CIRCLEEFFECT);
const codeSPA$ = `<!DOCTYPE html>
<html>

<head>
        <meta charset="UTF-8">
        <title>AZCore SPA</title>
        <meta azcore="stay" name="viewport" content="width=device-width, initial-scale=1">
        <link azcore="stay" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/azcore@0.0.0/SRC/AZCore.min.css">
</head>

<body>
        <div id="app"></div>
        <script src="https://cdn.jsdelivr.net/npm/azcore@0.0.0/SRC/AZCore.min.js"></script>
        <script>
                function HOME() {
                        const META = AZElement('head', {}, '', [
                                AZElement('title', {}, 'HOME')
                        ])
                        const VIEW = AZElement('div', { id: 'app' }, '', [
                                AZElement('h1', {}, 'HOME'),
                                AZElement('ul', {}, '', [
                                        AZElement('li', {}, '', [
                                                AZElement('a', { href: '/' }, 'HOME')
                                        ]),
                                        AZElement('li', {}, '', [
                                                AZElement('a', { href: '/about' }, 'ABOUT')
                                        ])
                                ])
                                
                        ])
                        return {
                                META,
                                VIEW
                        }
                }
                
                function ABOUT() {
                        const META = AZElement('head', {}, '', [
                                AZElement('title', {}, 'ABOUT')
                        ])
                        const VIEW = AZElement('div', { id: 'app' }, '', [
                                AZElement('h1', {}, 'ABOUT'),
                                AZElement('ul', {}, '', [
                                        AZElement('li', {}, '', [
                                                AZElement('a', { href: '/' }, 'HOME')
                                        ]),
                                        AZElement('li', {}, '', [
                                                AZElement('a', { href: '/about' }, 'ABOUT')
                                        ])
                                ])
                                
                        ])
                        return {
                                META,
                                VIEW
                        }
                }
                
                new AZRouter([
                        {
                                on: '/index.html',
                                onVIEW: HOME,
                                onREDIRECT: {
                                        ON: '/',
                                        REDIRECT: 'ON'
                                }
                        },
                        {
                                on: '/',
                                onVIEW: HOME
                        },
                        {
                                on: '/about',
                                onVIEW: ABOUT
                        }
                ])
        </script>
</body>

</html>`;
const $AI30000000 = AZElement('div', { className: 'AI30000000' }, '', [
	AZElement('div', { className: 'AI31000000' }, '', [
		AZElement('div', { className: 'AI31100000' }, '', [
			AZElement('svg', { viewBox: '0 0 24 24' }, '', [
				AZElement('path', { fill: 'currentColor', d: 'M12 18.1778L16.6192 16.9222L17.2434 10.1444H9.02648L8.82219 7.88889H17.4477L17.6747 5.67778H6.32535L6.96091 12.3556H14.7806L14.5195 15.2222L12 15.8889L9.48045 15.2222L9.32156 13.3778H7.0517L7.38083 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2Z' }, '', [], true)
			], true),
			AZElement('span', {}, 'index.html')
		]),
		AZElement('div', { className: 'AI31200000', onClick: 'copyCode(this, codeSPA$)' }, '', [
			AZElement('svg', { viewBox: '0 0 24 24' }, '', [
				AZElement('path', { fill: 'currentColor', d: 'M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z' }, '', [], true)
			], true)
		])
	]),
	AZElement('div', { className: 'AI32000000' }, '', [
		AZElement('pre', {}, '', [
			AZElement('code', { className: 'language-html' }, codeSPA$)
		])
	])
])

function copyCode(button, code) {
	navigator.clipboard.writeText(code).then(() => {
		button.innerHTML = '';
		button.appendChild(
			AZElement('svg', { viewBox: '0 0 24 24' }, '', [
				AZElement('path', { fill: 'currentColor', d: 'M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z' }, '', [], true)
			], true)
		);
		setTimeout(() => previous(), 1500);
		
		function previous() {
			button.innerHTML = '';
			button.appendChild(AZElement('svg', { viewBox: '0 0 24 24' }, '', [
				AZElement('path', { fill: 'currentColor', d: 'M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z' }, '', [], true)
			], true))
		}
	});
}

function INDEX(PARAM) {
	const META = AZElement('head', {}, '', [])
	const VIEW = AZElement('div', { id: 'app' }, '', [
		AZElement('main', {}, '', [
			AZElement('div', { className: 'AM10000000 IS-NOW' }, '', [
				AZElement('section', {}, '', [
					AZElement('div', { className: 'AI10000000' }, '', [
						AZElement('div', { className: 'AI11000000' }, '', [
							AZElement('svg', { viewBox: '-303.5,-89,1000,1000' }, '', [
								AZElement('path', { fill: 'currentColor', d: 'M596.5,411c0,220.9139 -179.0861,400 -400,400c-220.9139,0 -400,-179.0861 -400,-400c0,-220.9139 179.0861,-400 400,-400c220.9139,0 400,179.0861 400,400zM296.5,611c110.45695,0 200,-89.54305 200,-200c0,-110.45695 -89.54305,-200 -200,-200c-17.26498,0 -34.019,2.18765 -50,6.30087c86.26136,22.20214 150,100.50716 150,193.69913c0,93.19198 -63.73864,171.49699 -150,193.69913c15.981,4.11322 32.73502,6.30087 50,6.30087zM196.5,111c-165.68542,0 -300,134.31458 -300,300c0,165.68542 134.31458,300 300,300c17.03561,0 33.73958,-1.41994 50,-4.14792c-141.88567,-23.80391 -250,-147.20227 -250,-295.85208c0,-148.64981 108.11434,-272.04817 250,-295.85208c-16.26042,-2.72798 -32.96439,-4.14792 -50,-4.14792zM196.5,511c55.22847,0 100,-44.77153 100,-100c0,-55.22847 -44.77153,-100 -100,-100c-55.22847,0 -100,44.77153 -100,100c0,55.22847 44.77153,100 100,100z' }, '', [], true)
							], true),
							AZElement('h1', {}, 'AZCore'),
							AZElement('P', {}, 'SIMPLIFY DEVELOPMENT'),
							AZElement('div', { className: 'AI11100000' }, '', [
								AZElement('a', { className: 'AI11110000', href: 'https://github.com/AZCoreDEV/AZCore.js' }, '', [
									AZElement('svg', { viewBox: '0 0 24 24' }, '', [
										AZElement('path', { fill: 'currentColor', d: 'M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z' }, '', [], true)
									], true)
								]),
								AZElement('a', { className: 'AI11110000', href: 'https://npmjs.com/package/azcore' }, '', [
									AZElement('svg', { viewBox: '0 0 24 24' }, '', [
										AZElement('path', { fill: 'currentColor', d: 'M20.001 3C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3H20.001ZM17.001 7H7.00098V17H12.001V9.5H14.501V17H17.001V7Z' }, '', [], true)
									], true)
								]),
								AZElement('a', { className: 'AI11110000', href: 'https://youtube.com/@AZCoreDEV' }, '', [
									AZElement('svg', { viewBox: '0 0 24 24' }, '', [
										AZElement('path', { fill: 'currentColor', d: 'M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z' }, '', [], true)
									], true)
								]),
								AZElement('a', { className: 'AI11110000', href: 'https://www.jsdelivr.com/package/npm/azcore' }, '', [
									AZElement('svg', { viewBox: '0 0 24 24' }, '', [
										AZElement('path', { fill: 'currentColor', d: 'M11.851 0 0.811 4.02l1.56 14.7L11.85 24l9.6 -5.28 1.74 -14.76zm0.062 4.622a6.668 6.75 0 0 1 2.666 0.572 12.507 12.507 0 0 0 -2.59 1.95c-0.045 -0.02 -0.092 -0.031 -0.138 -0.045a1.181 1.181 0 0 0 -0.346 -0.056c-0.071 0 -0.141 0.01 -0.21 0.021a8.91 8.91 0 0 1 -0.615 -2.318 6.668 6.75 0 0 1 1.171 -0.122 6.668 6.75 0 0 1 0.062 -0.002zm-1.99 0.312a9.763 9.763 0 0 0 0.69 2.504 1.213 1.213 0 0 0 -0.328 0.825 1.202 1.202 0 0 0 0.18 0.63c-0.937 1.294 -1.656 2.803 -1.905 4.31 -0.01 0.056 -0.013 0.11 -0.02 0.166 -0.282 0.09 -0.515 0.284 -0.656 0.54 -0.987 -0.333 -1.885 -0.968 -2.615 -2.022a6.668 6.75 0 0 1 -0.026 -0.515 6.668 6.75 0 0 1 4.68 -6.438zm5.507 0.709a6.668 6.75 0 0 1 2.53 2.9c-0.377 0.953 -1.049 1.892 -1.893 2.727a1.242 1.242 0 0 0 -0.644 -0.184 1.243 1.243 0 0 0 -0.768 0.27c-0.462 -0.354 -0.91 -0.737 -1.318 -1.168 -0.333 -0.35 -0.637 -0.73 -0.921 -1.123 0.19 -0.215 0.31 -0.494 0.31 -0.802 0 -0.212 -0.061 -0.41 -0.159 -0.586 1.058 -1.008 2.112 -1.67 2.863 -2.034zm-3.925 1.982a0.624 0.624 0 0 1 0.346 0.114 0.624 0.624 0 0 1 0.292 0.524 0.624 0.624 0 0 1 -0.292 0.524 0.626 0.626 0 0 1 -0.346 0.113 0.634 0.634 0 0 1 -0.638 -0.637c0 -0.355 0.283 -0.638 0.638 -0.638zm-0.441 1.771a1.205 1.205 0 0 0 0.675 0.062c0.036 0.05 0.075 0.097 0.112 0.148a11.438 11.438 0 0 0 0.921 1.119 12.103 12.103 0 0 0 1.446 1.277c-0.032 0.11 -0.054 0.224 -0.054 0.342a1.236 1.236 0 0 0 0.066 0.38 9.91 9.91 0 0 1 -2.118 1.042c-0.087 0.029 -0.173 0.052 -0.261 0.078a7.735 7.735 0 0 1 -1.87 0.332 1.15 1.15 0 0 0 -0.66 -0.773c0.004 -0.024 0.005 -0.049 0.01 -0.073 0.219 -1.333 0.873 -2.73 1.733 -3.934zm7.272 0.19a6.668 6.75 0 0 1 0.245 1.786 6.668 6.75 0 0 1 -0.259 1.856 9.993 9.993 0 0 1 -1.666 -0.63 1.243 1.243 0 0 0 -0.065 -0.713 9.434 9.434 0 0 0 1.745 -2.3zm-2.913 2.101c0.367 0 0.657 0.291 0.657 0.658s-0.291 0.657 -0.657 0.657c-0.367 0 -0.658 -0.29 -0.658 -0.657s0.29 -0.658 0.658 -0.658zm0.837 1.59a10.79 10.79 0 0 0 1.802 0.688 6.668 6.75 0 0 1 -6.149 4.157 6.668 6.75 0 0 1 -0.062 -0.004 6.668 6.75 0 0 1 -0.042 0c-0.087 -0.042 -0.168 -0.08 -0.266 -0.129 -0.312 -0.154 -0.667 -0.352 -0.846 -0.5a3.796 3.796 0 0 1 -1.294 -2.03c0.21 -0.111 0.38 -0.284 0.487 -0.495a8.428 8.428 0 0 0 1.96 -0.306 9.11 9.11 0 0 0 0.513 -0.154 11.083 11.083 0 0 0 2.341 -1.13c0.205 0.143 0.452 0.23 0.719 0.23a1.248 1.248 0 0 0 0.837 -0.328zm-10.707 0.116a5.761 5.761 0 0 0 2.212 1.298 1.146 1.146 0 0 0 0.857 0.87 4.602 4.602 0 0 0 1.24 2.222 6.668 6.75 0 0 1 -4.31 -4.39zm3.327 0.464c0.331 0 0.595 0.263 0.595 0.596s-0.264 0.595 -0.595 0.595a0.59 0.59 0 0 1 -0.596 -0.595 0.591 0.591 0 0 1 0.596 -0.596z' }, '', [], true)
									], true)
								]),
							]),
							AZElement('a', { className: 'AI11200000', href: '/overview' }, 'OVERVIEW'),
						])
					])
				]),
				AZElement('section', {}, '', [
                    AZElement('div', { className: 'AI20000000' }, '', [
                        AZElement('h1', {}, 'Build SPAs with plain JavaScript.'),
	                    AZElement('p', {}, 'A zero-dependency, build-less SPA core with routing, DOM rendering, transitions, and loading built in.')
                    ])
                ]),
				AZElement('section', {}, '', [$AI30000000])
			])
		]),
	])
	return {
		META,
		VIEW
	}
}



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
		onVIEW: INDEX,
                onREDIRECT:{
                        ON:'/',
                        REDIRECT:'ON'
                }
        },
        {
                // AFFIXES...
                on: '/',
                onVIEW: INDEX
        }
        ],
        {
                // /404 to /
                on404: '/',
        }
);
const observer = new MutationObserver(() => {
	document.querySelectorAll('pre code:not(.hljs)').forEach(el => {
		hljs.highlightElement(el);
	});
});

observer.observe(document.body, {
	childList: true,
	subtree: true
});

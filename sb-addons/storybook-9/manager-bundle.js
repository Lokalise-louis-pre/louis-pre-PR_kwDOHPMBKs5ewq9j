try{
var g=__STORYBOOKADDONS__,{addons:i,types:b,mockChannel:y}=__STORYBOOKADDONS__;var x=__STORYBOOKTHEMING__,{CacheProvider:j,ClassNames:_,Global:O,ThemeProvider:w,background:S,color:D,convert:T,create:o,createCache:E,createGlobal:C,createReset:N,css:z,darken:L,ensure:A,ignoreSsrWarning:P,isPropValid:B,jsx:I,keyframes:R,lighten:Y,styled:G,themes:H,typography:K,useTheme:M,withTheme:W}=__STORYBOOKTHEMING__;var l={name:"@lokalise/louis",version:"21.4.0",engines:{npm:">=8",node:">=16"},type:"module",scripts:{"ts-compile":"tsc -p tsconfig.app.json --noEmit false --emitDeclarationOnly",build:"rimraf dist && vite build","bundle:composition":"ANALYZE_BUNDLE_COMPOSITION=1 npm run build","bundle:size":"bundlesize","storybook:dev":"storybook dev -p 6006","storybook:build":"storybook build","test:ts":"tsc -p tsconfig.test.json",test:"npm run test:ts && vitest --run --coverage","test:visual:install":"playwright install","test:visual:ci":"vitest --run --config ./vitest.config.visual.ts","test:visual":"docker run -it --rm --ipc=host -v $PWD:/opt -w /opt -e HEADLESS='true' mcr.microsoft.com/playwright:v1.39.0 sh -c 'npm i && npm run test:visual:ci'","test:visual:update":"docker run -it --rm --ipc=host -v $PWD:/opt -w /opt -e HEADLESS='true' mcr.microsoft.com/playwright:v1.39.0 sh -c 'npm i && npm run test:visual:ci -- --update'","test:localpackage":'nodemon --exec "npm run build && yalc publish --push --no-scripts" --watch src --ext tsx,ts',"lint:css":"stylelint **/*.module.css","lint:ts":"tsc -p tsconfig.app.json && tsc -p tsconfig.test.json","lint:prettier":"npm run lint-file:prettier -- **/*.md src package.json .eslintrc.json","lint:eslint":"npm run lint-file:eslint -- ./src",lint:"npm run lint:ts && npm run lint:prettier && npm run lint:eslint && npm run lint:css","lint-file:prettier":"prettier --check","lint-file:eslint":"eslint --report-unused-disable-directives --max-warnings 0","format:prettier":"npm run lint:prettier -- --write","format:eslint":"npm run lint:eslint -- --fix",format:"npm run format:prettier && npm run format:eslint",prepare:"husky install && npm run test:visual:install"},main:"dist/index.cjs",module:"dist/index.js",types:"dist/index.d.ts",exports:{".":{import:"./dist/index.js",require:"./dist/index.cjs"},"./assets/*":"./dist/assets/*"},sideEffects:["*.css"],files:["dist/**"],repository:{type:"git",url:"git+https://github.com/lokalise/louis.git"},author:"Lokalise",bugs:{url:"https://github.com/lokalise/louis/issues"},homepage:"https://lokalise.github.io/louis",publishConfig:{access:"public"},devDependencies:{"@alex-e-leon/stylelint-value-no-unknown-custom-properties":"^4.0.2","@babel/core":"^7.23.3","@babel/preset-env":"^7.23.3","@babel/preset-react":"^7.23.3","@babel/preset-typescript":"^7.23.3","@commitlint/cli":"^18.4.1","@commitlint/config-conventional":"^18.4.0","@floating-ui/react":"^0.26.0","@lokalise/eslint-plugin":"^1.5.0","@lokalise/styled":"^v3.0.0","@semantic-release/changelog":"^6.0.3","@semantic-release/commit-analyzer":"^11.1.0","@semantic-release/git":"^10.0.1","@semantic-release/github":"^9.2.2","@semantic-release/npm":"^11.0.1","@semantic-release/release-notes-generator":"^12.1.0","@storybook/addon-actions":"^7.5.1","@storybook/addon-docs":"^7.5.1","@storybook/addon-essentials":"^7.5.1","@storybook/addon-links":"^7.5.1","@storybook/addon-styling":"^1.3.7","@storybook/addons":"^7.5.1","@storybook/blocks":"^7.5.3","@storybook/client-api":"^7.5.1","@storybook/core-events":"^7.5.1","@storybook/react":"^7.5.1","@storybook/react-webpack5":"^7.5.1","@storybook/testing-library":"^0.2.2","@storybook/theming":"^7.5.1","@testing-library/jest-dom":"^6.1.4","@testing-library/react":"^14.1.0","@testing-library/user-event":"^14.5.1","@types/css-modules":"^1.0.5","@types/debounce":"^1.2.4","@types/jest-image-snapshot":"^6.2.3","@types/md5":"^2.3.5","@typescript-eslint/eslint-plugin":"^6.8.0","@typescript-eslint/parser":"^6.8.0","@vitejs/plugin-react":"^4.1.1","@vitest/coverage-istanbul":"^0.34.6","@vitest/coverage-v8":"^0.34.6","babel-plugin-module-resolver":"^5.0.0","babel-plugin-styled-components":"^2.1.4",bundlesize:"^0.18.1","date-fns":"^2.30.0",debounce:"^1.2.1","dialog-polyfill":"^0.5.6",dotenv:"^16.3.1",envalid:"^8.0.0",eslint:"^8.52.0","eslint-config-airbnb":"^19.0.4","eslint-config-prettier":"^9.0.0","eslint-import-resolver-typescript":"^3.6.1","eslint-module-utils":"^2.8.0","eslint-plugin-boundaries":"^3.4.0","eslint-plugin-import":"^2.28.1","eslint-plugin-jest":"^27.6.0","eslint-plugin-jest-formatting":"^3.1.0","eslint-plugin-jsx-a11y":"^6.7.1","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-sonarjs":"^0.21.0","eslint-plugin-storybook":"^0.6.15","eslint-plugin-testing-library":"^6.1.2","expect-type":"^0.17.3","gh-pages":"^6.0.0",husky:"^8.0.3","jest-fail-on-console":"^3.1.1","jest-image-snapshot":"^6.2.0",md5:"^2.3.0",nodemon:"^3.0.1",playwright:"^1.39.0",prettier:"^3.0.3",react:"^18.2.0","react-day-picker":"^8.9.1","react-dom":"^18.2.0","react-focus-lock":"^2.9.6","react-remove-scroll":"^2.5.7","react-select":"^5.7.7","react-select-event":"^5.5.1","react-toastify":"^9.1.3","react-uid":"^2.3.3","remark-gfm":"^3.0.1","resize-observer-polyfill":"^1.5.1",rimraf:"^5.0.5","rollup-plugin-visualizer":"^5.9.2","semantic-release":"^22.0.7","semantic-release-slack-bot":"^4.0.2",storybook:"^7.5.1",stylelint:"^15.11.0","stylelint-config-standard":"^34.0.0","ts-toolbelt":"^9.6.0",typescript:"5.2.2","typescript-plugin-css-modules":"^5.0.2","use-local-slice":"^1.2.1",vite:"^4.5.0","vite-plugin-dts":"^3.6.3",vitest:"^0.34.6"},peerDependencies:{"@floating-ui/react":"^0.26.0","@lokalise/styled":"^v3.0.0","@lokalise/token-dictionary":"^2.17.0","date-fns":"^2.30.0",debounce:"^1.2.1","dialog-polyfill":"^0.5.6",md5:"^2.3.0",react:"17.x.x || 18.x.x","react-day-picker":"^8.9.1","react-dom":"17.x.x || 18.x.x","react-dropzone":"^14.2.3","react-focus-lock":"^2.9.6","react-remove-scroll":"^2.5.7","react-select":"^5.7.7","react-toastify":"^9.1.3","react-uid":"^2.3.3","use-local-slice":"^1.2.1"},overrides:{"@mdx-js/react":{react:"^18.2.0","react-dom":"^18.2.0"}}};var n=o({base:"light",barTextColor:"black",barSelectedColor:"black",brandTitle:`Louis v${l.version}`,brandImage:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Lokalise_logo_2021.svg"});i.setConfig({theme:n});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }

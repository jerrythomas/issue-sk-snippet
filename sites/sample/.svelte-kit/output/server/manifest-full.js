export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DCYVupkY.js",app:"_app/immutable/entry/app.B8Sa_K7a.js",imports:["_app/immutable/entry/start.DCYVupkY.js","_app/immutable/chunks/DgQ3ncoF.js","_app/immutable/chunks/C4ATMaiA.js","_app/immutable/chunks/TPnriN94.js","_app/immutable/entry/app.B8Sa_K7a.js","_app/immutable/chunks/C4ATMaiA.js","_app/immutable/chunks/BRL6Es58.js","_app/immutable/chunks/dapRPkLV.js","_app/immutable/chunks/DEF3os_W.js","_app/immutable/chunks/TPnriN94.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

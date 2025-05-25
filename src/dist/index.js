"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 3000;
// Function to get all registered routes
const getRoutes = (app) => {
    const routes = [];
    const processStack = (stack, prefix = '') => {
        stack.forEach((layer) => {
            if (layer.route) {
                // This is a route
                const methods = Object.keys(layer.route.methods)
                    .filter(method => layer.route.methods[method])
                    .map(method => method.toUpperCase())
                    .join(', ');
                routes.push(`${methods} ${prefix}${layer.route.path}`);
            }
            else if (layer.name === 'router') {
                // This is a router
                const newPrefix = prefix + (layer.regexp.source
                    .replace('^\\/', '/')
                    .replace('\\/?(?=\\/|$)', '')
                    .replace(/\\\//g, '/')
                    .replace(/\\\?/g, '?')
                    .replace(/\\\*/g, '*')
                    .replace(/\\\+/g, '+')
                    .replace(/\\\(/g, '(')
                    .replace(/\\\)/g, ')')
                    .replace(/\\\[/g, '[')
                    .replace(/\\\]/g, ']')
                    .replace(/\\\^/g, '^')
                    .replace(/\\\$/g, '$')
                    .replace(/\\\./g, '.')
                    .replace(/\\\|/g, '|')
                    .replace(/\\/g, ''));
                processStack(layer.handle.stack, newPrefix);
            }
        });
    };
    processStack(app._router.stack);
    return routes;
};
app_1.default.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('\nRegistered Routes:');
    console.log('------------------');
    getRoutes(app_1.default).forEach(route => console.log(route));
    console.log('------------------\n');
});

import app from './app';

const port = process.env.PORT || 3000;

// Function to get all registered routes
const getRoutes = (app: any) => {
  const routes: string[] = [];
  
  const processStack = (stack: any[], prefix: string = '') => {
    stack.forEach((layer) => {
      if (layer.route) {
        // This is a route
        const methods = Object.keys(layer.route.methods)
          .filter(method => layer.route.methods[method])
          .map(method => method.toUpperCase())
          .join(', ');
        routes.push(`${methods} ${prefix}${layer.route.path}`);
      } else if (layer.name === 'router') {
        // This is a router
        const newPrefix = prefix + (layer.regexp.source
          .replace('^\\/','/')
          .replace('\\/?(?=\\/|$)','')
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('\nRegistered Routes:');
  console.log('------------------');
  getRoutes(app).forEach(route => console.log(route));
  console.log('------------------\n');
}); 
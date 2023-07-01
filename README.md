# AppProducts


This project is about an ecommerce app for selling technical products. The API used is a fake one provided by https://dummyjson.com/docs/products.

The project includes smart and dumb components, routing, lazy loading, services, custom global state, and guards for registration and authentication.

The app uses Tailwind CSS and regular SCSS for responsive design. Global state is used for search categories, filtering data, and managing the cart (adding and removing items).

The dump components are located in the components folder, and each one starts with "main". The smart components are located in the components/products-page folder, and each one has its own routing module.

The layout folder includes footer, error, and header components that can be used throughout the app.

The products interface is located in the models folder.

The services folder includes an auth service for login and registration, as well as a products service for managing the product state and product list. The products state service works with the global state, and the products list service connects to the API and updates the state.

The shared folder includes interceptors and global state components.

The App-routing module is used for routing
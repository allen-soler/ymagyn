# React Application: Single-Page Application (SPA) for a Restaurant Menu

### Website:

[View the website here](https://ymagyn-allen-jorge-6450131ffc16.herokuapp.com/)

### GitHub Repository and Commits:

- [GitHub Repository](https://github.com/allen-soler/ymagyn)
- [Commits History](https://github.com/allen-soler/ymagyn/commits/main?after=a72b4f343d6d94f8df205bd4d0660f2a56d339c0+34&branch=main&qualified_name=refs%2Fheads%2Fmain)

This project is a simulation of a burger restaurant's menu, deployed on Heroku.

The website is built using React and Redux for state management, with Redux Thunk as middleware for actions like data fetching. React Router is used for seamless navigation. The database is hosted on MediaFire, and the UI is built with [React Bootstrap](https://react-bootstrap.github.io/).

The state management is handled by three reducers: `cart-slice`, `product-slice`, and `user-slice`.

## Cart Slice Reducer
The `cart-slice` reducer manages the shopping cart state. The initial state includes `userId`, an array of `items`, `totalQuantity`, and a `changed` boolean to track if the cart has been modified. This reducer handles adding/removing products. Each add/remove action triggers a middleware function that sends the data to the server if the user is logged in, or stores the items in local storage otherwise. The reducer also automatically updates the total items and quantities.

### Cart Slice Object
```json
{
  "initialState": {
    "userId": null,
    "items": [
      {
        "id": null,
        "img": null,
        "name": null,
        "price": 0.0,
        "quantity": 0,
        "totalPrice": 0
      }
    ],
    "totalQuantity": 0,
    "changed": false
  }
}
```

## Product Slice
The product-slice maintains the state of the product objects.

### Product Slice Object
```json
{
  "initialState": {
    "items": [
      {
        "category": null,
        "description": null,
        "id": null,
        "img": null,
        "price": 0.0,
        "rating": 0.0,
        "title": null,
        "toppings": []
      }
    ]
  }
}
```

## User Slice
The user reducer manages the user login data fetched from the Firebase API. The user's ID is stored for cart management in the database.

### User Slice Object
```json
{
  "initialState": {
    "id": null,
    "email": null,
    "isAuth": false
  }
}
```

## Running the App Locally
To run the app locally, first clone the repository:
```bash
git clone https://github.com/allen-soler/ymagyn.git <directory-name>
cd <directory-name>
npm start
```
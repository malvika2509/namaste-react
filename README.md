# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- caches things for you , faster builds
- Image Optimization
- Minification of File - bundling
- Compression - remove white spaces.....
- Consistent Hashing
- Code Splitting
- Differential Bundling - app can be used on any browser
- Diagnostic
- Good Error Suggestions
- host app on https://
- Tree Shaking - remove unused code
- Different dev and prod bundles

---

/\*

- Header
- -Logo
- -Nav items
- Body
- - Search
- - RestaurantContainer
-       -Restaurant cards
-          -Image,Name,Star,Cuisine,Delivery Time
- \*Footer
- -Copyright
- -Links
- -address
- -contact
  \*/

---

// conditional rendering
// if (listOfRes.length === 0) {
// return (
// <h1>
// <Shimmer />
// </h1>
// );
// }

---

// ternary operators

    return listOfRes.length === 0 ? (
    <Shimmer />
    ) : (

    <div class="cont">
    </div>
    )

---

//super powerful variable-State variable(to change in the ui as soon as the data is changed)
//local state variable
// const [listOfRes, setListOfRes] = useState(restaurantList);

---

if no dependancy array in useEffect() then the callback function ill be called everytime the particular component renders

---

{/_ not a good practice to use anchor tags because whole page gets replaced _/}
{/\_ <a href="/">

<li>Home</li>
</a> _/}

---

Context

- to keep a variable global so that anyone can access it
- solves the problem of props drilling -

<!-- redux toolkit -->

- install @reduxjs/toolkit and react-redux
- Build our store
- connect our store to our app
- slice (Cart Slice)
- dispatch(action)
- selector

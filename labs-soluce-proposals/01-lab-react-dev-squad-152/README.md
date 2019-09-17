## Screenshot

## Goal

To goal of this exercise is to create a React website (with [`create-react-app`](https://reactjs-hooks.netlify.com/docs/create-a-new-react-app.html#create-react-app)) similar to this:
![image](https://user-images.githubusercontent.com/5306791/61233286-23a42080-a728-11e9-8570-afcd7facac8d.png)

## List of components

For this exercise, we will create 6 components:
- `App`
- `Navbar`
- `SectionStudents`
- `Flag` with a props `country`
- `SectionTopicsToRecap`
- `PostIt` with a props `color` and a props `children`
![](https://i.imgur.com/a9L0wvu.png)


## Tips

### Generate a React application

To generate a React application, you need to type:
```
npx create-react-app the-name-of-my-application
```

### Display a flag

To get the picture of a flag, you can rely on these links:
- France: https://www.countryflags.io/fr/flat/64.png
- Germany: https://www.countryflags.io/de/flat/64.png
- Etc.

### Loop in JSX

One way to loop through an array in JavaScript is to do:
```js
<ul>
  {myArray.map((element,i) => <li key={i}>
    My element {i} is: {JSON.stringify(element)}
  </li>)}
</ul>
```

### Inline styling

To do inline styling, you have to give an attribute `style` where the value is an object.

Example:
```js
<span style={{color: gender === "male" ? "blue" : "red"}}>...</span>
```

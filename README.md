#  React Theme Switcher (Context API)

This is a simple **React Theme Switcher** project built using **Context API** and **Tailwind CSS**.  
The main goal of this project is to understand how **global state management** works in React and how we can control the **entire app theme (Light / Dark)** from a single place.  
Theme switching is a very common feature used in modern applications like dashboards, e-commerce sites, and SaaS products.  
This project is beginner-friendly and focuses on **clean structure, reusable components, and clear data flow**.

---

##  Features

- Light & Dark mode toggle
- Global theme management using Context API
- Tailwind CSS dark mode support
- Reusable and clean component structure
- Easy to extend for larger applications

---

##  Components Used

- **App.jsx**  
  Manages the theme state (`light` / `dark`) and applies the theme to the HTML root.

- **ThemeBtn.jsx**  
  A toggle button that allows the user to switch between light and dark themes using context.

- **Card.jsx**  
  A UI card component that visually reflects theme changes using Tailwind `dark:` classes.

- **Context (Theme Context)**  
  Stores theme data and functions so that any component can access or update the theme without prop drilling.

---

##  Why Theme Switcher is Important

Theme switchers are widely used in real-world applications to:
- Improve user experience
- Reduce eye strain (dark mode)
- Allow user personalization
- Maintain consistent UI across the app

Learning this helps understand **global state**, which is essential for building scalable React applications.

---

##  How It Works (Simple Flow)
1. The theme state is stored in `App.jsx`
2. Theme functions are provided using `ThemeProvider`
3. `ThemeBtn` consumes the context and toggles the theme
4. The selected theme is applied to the `<html>` element
5. Tailwind CSS automatically updates the UI using `dark:` classes

---

##  Tech Stack

- React.js
- Context API
- Tailwind CSS
- JavaScript (ES6+)

---

##  Larning Outcome
This project helped me understand:
- How Context API works internally
- How to avoid prop drilling
- How global state flows in React
- How Tailwind dark mode integrates with React
- How to structure a real-world React project

---

##  Future Improvements
- Save theme preference in localStorage
- Add icons for light/dark mode
- Smooth theme transition animations
- Use dynamic card data with props

---

###  Built for learning and practice

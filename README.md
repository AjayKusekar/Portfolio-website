# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Creating a personal portfolio using React.js, Framer Motion, Email.js, Sass, Netlify, and Git is a great way to showcase your skills and projects. Below is a step-by-step guide on how you can go about building and deploying your portfolio.

### Step 1: Set Up Your Development Environment

Make sure you have Node.js and npm installed on your machine.

```bash
# Install create-react-app globally (if not already installed)
npm install -g create-react-app

# Create a new React app
npx create-react-app my-portfolio
cd my-portfolio
```

### Step 2: Install Dependencies

Install the necessary packages for Framer Motion, Sass, and Email.js.

```bash
# Install Framer Motion
npm install framer-motion

# Install Sass
npm install node-sass

# Install Email.js
npm install emailjs-com
```

### Step 3: Create Components

Organize your project by creating components for different sections of your portfolio (e.g., Header, About, Projects, Contact).

### Step 4: Styling with Sass

Utilize Sass for styling to keep your code modular and maintainable. Create separate Sass files for each component and import them into your React components.

```scss
// Example Sass file (e.g., Header.scss)
.header {
  background-color: #333;
  color: #fff;
  padding: 1rem;

  // Additional styling...
}
```

### Step 5: Add Animation with Framer Motion

Enhance your portfolio by adding animations using Framer Motion. Wrap your components with motion components and define animations.

```jsx
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header content */}
    </motion.header>
  );
};
```

### Step 6: Implement Email.js for Contact Form

Use Email.js to handle the contact form submissions. Set up an account on the Email.js website and obtain your User ID and Service ID.

```jsx
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      {/* Contact form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};
```

### Step 7: Version Control with Git

Initialize a Git repository and make regular commits to track changes.

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 8: Deploy on Netlify

Create an account on Netlify and link your Git repository. Netlify will automatically build and deploy your portfolio whenever you push changes to your repository.

### Step 9: Customize and Expand

Add your content, update styles, and expand your portfolio by creating more components for projects, skills, etc.

### Step 10: Test and Launch

Test your portfolio thoroughly on different devices and browsers. Once satisfied, deploy your portfolio on Netlify and share the link with the world.

Congratulations! You now have a personalized portfolio using React.js, Framer Motion, Email.js, Sass, hosted on Netlify, and version-controlled with Git.

# Team 2984 Website
This site is built with [Gatsby](https://www.gatsbyjs.org/), a static site generator for [React](https://reactjs.org/).

# Contributing
First, you'll need to install:
- [Git](https://git-scm.com/) for revision control;
- [Node.js](https://nodejs.org/en/) for language support;
- [VS Code](https://code.visualstudio.com/) or another text editor with syntax highlighting

Then:
1. Use the terminal to clone this repository
  This command will typically look like this:
```bash
git clone git@github.com:{username}/roboticsWebsite.git
```
2. Change into the project directory:

```bash
cd roboticsWebsite
```
3. Install dependencies: 
```bash
npm install
```
4. Open VSCode and begin editing:
```bash
code .
```

5. When fully deployed, the site is hosted on Github pages. However, when developing the site, the local development server is used. Run this command to see your changes to the website in real time (Note: this does not edit the site for other pople to see, just the user of the local machine):
```
npm run develop
```
The site will be hosted at `localhost:8000/`.

6. When done with making changes, commit them:
```bash
git add .
git commit -m {message}
```


7. Then, push to your own GitHub repository:

```bash
git push origin master
```
8. Finally, create a pull request by clicking the "New pull request" button on the [team's GitHub repo](https://github.com/FRCTeam2984/website).
  
After awhile, the team repo and your own will diverge. Update your local repository as follows.

First, add the team's repo as a remote:

```bash
# be sure you're in the website working directory!
git remote add team https://github.com/FRCTeam2984/website.git
```

Next, merge changes onto a newly-created branch.

```bash
# create a branch and check it out
git checkout -b upstream

# pull changes
git pull team master

# You may need to handle merge conflicts

# checkout master
git checkout master

# merge changes
git merge upstream

# delete branch
git branch -d upstream
```
The website will be automatically deployed after a change to the repository. Click on the `Actions` tab to see the status of the deployment.

## Creating a New Blog Post
1. Create a file called `src/markdown-pages/blog/{post}.md`.
2. Front matter goes at the top of the file. Minimally, it should include: `title`, `date`, `path`, and `author` fields. The post will be available at whatever path is set in the frontmatter. For example, if you set `path` to:
```markdown
path: /blog/post
```
the post will be available at the path `/blog/post`.  
3. (Optional) Add images to `src/markdown-pages/blog/images/{date}/{image-name}`. Then, reference them in your markdown file using a relative reference. For example:
```markdown
[Image name](./images/{date}/{image-name})
```

[Here's](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) a nice markdown reference sheet.

Here's an example post:
```markdown
---
title: Hello, World!
date: 2018-01-06 08:00:00
author: John Smith
path: /blog/hello-world
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Here is a robot image:

![2016 Robot](./images/20180106/2016Robot.jpg)

Here is a bulleted list:

- one
- two
- buckle my shoe
- *italic*
- **bold**
- [a link](https://www.firstinspires.org/robotics/frc)
- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...

# This is an H1 Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## This in an H2 Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

## Create a New Markdown Page (non-blog)
1. Create a markdown file in the `src/markdown-pages/` directory.
2. Front matter goes at the top of the file. It should only include: `title` and `path` fields. The post will be available at whatever path is set in the frontmatter. 
3. (Optional) Add images to `src/images}`. Then, reference them in your markdown file using a relative reference (it might get ugly if you are in a nested directory). 

For example, if you want to create a new page at the `/resources/new-page`, then create a markdown file called `src/markdown-pages/resources/new-page.md`.  
Then, in the frontmatter, add:
```markdown
---
title: New Page
path: /resources/new-page
---
```
If you add an image, let's say it's called `sample-image.png`, put it at `src/images/sample-image.png`. Then, reference it using: 
```markdown
[Sample Image](../../images/resources/sample-image.png)
```

## 🧐 What's inside?

A quick look at the important files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src
      ├── components
      ├── images
      ├── markdown-pages
      ├── pages
      ├── styles
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/src/components`**: Contains all of the react components (eg. navbar, footer, layouts). Also contains the base layouts for all of the pages.

4.  **`/src/markdown-pages`**: Contains all of the markdown pages.

5.  **`/src/pages`**: Contains all of the gatsby pages. *Note: These will override markdown pages if they both are at the same path.*

6.  **`/src/styles`**: Contains the global css for the site. *Note: Any css file here will have its styles applied to all pages.*

7.  **`/static`**: Contains all static files that do not need preprocessing (eg. pdfs). These files will automatically be copied to the `/public` directory during build. *Note: Do not put images here, they will **not** be automatically compressed and efficiently served by Gatsby.* 

8.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

9.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

10. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

11. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail). 

12. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. This file is used for converting markdown files into pages.

13. **`LICENSE`**: Gatsby is licensed under the MIT license.

14. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

15. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

16. **`README.md`**: This file.

# How to add new animations

1. Use [bodymovin](https://github.com/airbnb/lottie-web) to export your after effects animation. (You should have an `your-animation-name.json` file and a folder called `images`)
2. Move the images inside the `images` folder into the `static/images/animations/your-animation-name` folder (create the folder)
3. Move the `your-animation-name.json` to the `assets` folder
4. Inside `your-animation-name.json` each time there is a `"u":` change it to `"u": "/images/animations/your-animation-name/"`  
   (eg. `"u": "images/"` -> `"u": "/images/animations/first/"`)

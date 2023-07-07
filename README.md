# GHIBLI Archive

My phase-2-project

## Description

A website to go through the archives of Ghibli Studio which further contains information related to every movie released by the studio. Built in form for submitting new movies to update the database in future whenever the studio releases another movie.

## Location/Installation

This project has been deployed. You can find the front-end and back-end on below following links:<br> <br>
**Front-end**: <br>
**Back-end**: <br><br>
In case, you want to install it locally: <br><br>
**Github Front-end**: https://github.com/hurpreetca/flatiron-phase-2-project <br>
**Github Back-end**: https://github.com/hurpreetca/json-server-template/tree/main <br><br>
After forking, and cloning the SSH, navigate to the folder you wish to clone inyo and run: <br>

```bash
git clone SSH_File
```

Replace the SSH_File with the copied URL.<br>
If cloning both front-end and back-end, both files can be within the same parent folder, but donot clone one into the other.
<br>

## Usage

After cloning the front-end repo,navigate into the folder and run:

```bash
npm install
```

to install the necessary dependencies and, then run:

```bash
npm start
```

to launch the project on your localhost.
<br>
Also, have to install semantic UI to run components imported from Semantic UI:

```bash
npm install semantic-ui-react semantic-ui-css
```

and install react-icons library for the logo icon:

```bash
npm install react-icons
```

### Information

I am currently using the free version of the render.com backend services, so the initial fetches may take between 30-90 secs while the back-end registers a request and loads up. <br>
I've also experienced issues preventing the proper loading of images. Ideally, in a real world scenario, this would be avoided by having all the images being at my end, thus the image URLs would not be needed at all.

### Roadmap

- I would want to add a feature displaying the favourite movies on top of each cards displaying movies in the Movies tab.
- Add a login form with verification so that onlu admins can update the movie list and information related to it.
- Add a component to display movies in watchlist with the list constantly updated whenever required.

### Special thanks to:

- https://semantic-ui.com: for the custom elements/ components used.
- https://react-icons.github.io/react-icons/: for the icon used with the logo.
- https://ghibliapi.vercel.app: for the api from where the displayed data is collected.
- https://www.ghibli.jp: for the images used.
- Thanks to all the teachers for their continous support and guidance. This would have never been possible without you all.

[![Contributors][contributors-shield]][https://github.com/DomKal11/project1-game/graphs/contributors]
[![Forks][forks-shield]][https://github.com/DomKal11/project1-game/network/members]
[![Issues][issues-shield]][https://github.com/DomKal11/project1-game/issues]
[![LinkedIn][linkedin-shield]][https://www.linkedin.com/in/dominik-kalo%C4%8D-561519120/]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DomKal11/project1-game">
    <img src="img/cartoon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Project 1 - Game: Gold Standard</h3>

  <p align="center">
    This is my first project - creating a simple game in Javascript. The game is rendered on canvas, the animation of most objects is solved using .requestAnimationFrame () and the sub-objects also use .setInterval (). Visual changes to the canvas are handled using the DOM. Your task is to guard 4 chests of gold, not to touch the enemy, not to let the enemies pass (otherwise you will be deducted from the score) and do it all within the time limit of 240s.
    <br />
    <a href="https://github.com/DomKal11/project1-game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://domkal11.github.io/project1-game/">View Demo</a>
    ·
    <a href="https://github.com/DomKal11/project1-game/issues">Report Bug</a>
    ·
    <a href="https://github.com/DomKal11/project1-game/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#controls">Controls</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://domkal11.github.io/project1-game/)

This is a simple game created primarily using Javascript, which is rendered on canvas. The game starts by pressing the "start game" button, which displays the canvas and starts drawing the individual elements on it.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* Javascript
* HTML
* CSS

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTROLS -->
## Controls

As a player, you are a cowboy who defend chests of gold and tries to get the highest scores.

* <b>ARROWS</b> - use the arrows to control the cowboy's movement on the map
* <b>SPACE - use space to shoot the enemies. You can only fire once, once the bullet disappears from the map, you can do it again.

<b>WIN scenario</b>:
* You win if you have at least one chest of gold, you don't have a negative score and you lasted until the end of the countdown. Congratulations!

<b>GAME OVER reasons</b>:
* when you touch the enemy
* when you have not a single chest of gold left
* when time runs out
* when your score is negative. This happens when you let the enemies pass - each one will deduct -50 scores

Enemies are generated randomly, at a random rate. Their speed increases during the game.


<!-- ROADMAP -->
## Roadmap

- [] Moving of the cowboy - this is handled by onKeyDown and onKeyUp comparing (to make the move smooth). On specific key number (arrows), specific parameter is changed.
- [] Shooting - shoot is fired when spce is pressed (same functionality - onKeyDown/onKeyUp comparing). Function .shoot() of player object Player is called then. Function .shoot() passing the for cycle counter value to the .delayBullet() function which is taking care of the time delay when bullet is moving from right to left.
- [] Enemies moving - same principle as I used for drawing of the bullet. Enemies getting 0.3 deducted from actual speed when they pass (so they are faster and faster). 
    - [] Enemy touch player - there is afunction checking if the player didn't touch the enemy. If yes - the game is over.
    - [] Enemy hit by bullet - another function is checking if the bullet didn't meet the enemy actual position. If yes, enemy is killed, score increased by 50.
    - [] Enemy steal gold chest - if enemy is not killed and reached right end of the canvas, gold chest will be stealed if it's still there.
    - [] Enemy has passed, but the chest is not there - in this case, if you still have some gold left, only score is deducted by -50. 
- [] Game Over - please check the GAME OVER reasons above. If you lose, the reason of your lost will always be displayed!

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dominik Kaloc - dominikkaloc[@]gmail.com

Project Link: [https://github.com/DomKal11/project1-game](https://github.com/DomKal11/project1-game)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

# Timeline Display Project

# source code
https://github.com/pleabargain/timeline

# live
https://pleabargain.github.io/timeline/

## story
I thought about this idea in the shower. I wrote the JSON first (API first) then asked GPT4 to build the HTML, JS and CSS and the readme.md

Start 'coding' to deploying working web app: 30 minutes

## updates
I built a GPT4 bot that will generate more stories for me. I need to automate that so I can pass a block of JSON to the API and have it generate more stories. That being said, I have noticed that not all tense output is accurate! :(

## Overview
The Timeline Display Project is a web-based application designed to visually present a series of events in a chronological timeline format. This project is particularly useful for representing historical events, project milestones, personal achievements, or any sequence of events over time.

## Features
- **Multiple Timelines:** Supports displaying multiple timelines, each with its own set of events.
- **Interactive Timeline Selection:** Users can select different timelines from a dropdown menu to view various sequences of events.
- **Dynamic Event Rendering:** Each event in a timeline is dynamically rendered on the webpage, including details such as time, event description, context, and actors involved.
- **Stylish Presentation:** Events are presented in a visually appealing manner, with a clear line connecting each event and bold labels for each event attribute.

## Technologies Used
- **HTML:** Structures the web page and the timeline components.
- **CSS:** Styles the timeline, including the layout, colors, and fonts.
- **JavaScript:** Powers the dynamic loading of timeline data and the interactive elements of the webpage.

## How to Use
1. **Viewing a Timeline:** Simply open the `index.html` file in a web browser to view the default timeline.
2. **Selecting a Timeline:** Use the dropdown menu at the top of the page to choose and view different timelines.
3. **Adding More Timelines:** Timelines can be added or modified in the `script.js` file under the `data` object.

## Project Structure
- `index.html`: The main HTML file that structures the web page.
- `style.css`: Contains all the styling for the timeline and the webpage.
- `script.js`: Includes the JavaScript code for loading and displaying the timeline data.

## Future Enhancements
- **Responsive Design:** Improve the design to be responsive for different device sizes.
- **Interactive Timeline Elements:** Add functionality to allow users to click on events for more detailed information.
- **Data Source Integration:** Enable the loading of timeline data from external sources like databases or APIs.

---

This project is open for contributions and enhancements. Feel free to fork, modify, and use it in your personal or professional projects.

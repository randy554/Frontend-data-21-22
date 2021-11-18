# Frontend Data
This is a repo for the course [Frontend data:](https://github.com/cmda-tt/course-21-22) `@CMD Hogeschool van Amsterdam`.
During this course topics such as **functional programming**, **cleaning data** and creating **data visualisations** will be be addressed. Through the [Wiki](https://github.com/randy554/Frontend-data-21-22/wiki) I will share my progress and findings.

 ## Assignment
 
 Create a data visualisation (using the d3 library) based on given data where data can be explored through interaction using enter(), update(), and exit().
 
 <details>
       
<table>
  <thead>
    <tr>
      <th></th>
      <th><strong>1-2</strong></th>
      <th><strong>3-4</strong></th>
      <th><strong>5-6</strong></th>
      <th><strong>7-8</strong></th>
      <th><strong>9-10</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th align="center" scope="row"><strong>Application</strong> of subject matter</th>
      <td align="center">Git <strong>and d3 are used</strong>; the project runs without errors; <strong>data is loaded with d3</strong>; there is a representation of data</td>
      <td align="center"><strong>Data is rendered with d3</strong>; interpreting the representation is easier that interpreting the data itself</td>
      <td align="center">Data is transformed; the data in the visualization is changed using the d3 update pattern to make an <strong>interactive representation.</strong></td>
      <td align="center">Representation and <strong>use of d3</strong> go beyond an example: there are demonstrable additions like well-chosen interaction methods, animation, multiple chart types, or user input</td>
      <td align="center">😱<br>The way the student applies subject matter  is more advanced than what they were taught in class; let’s switch places</td>
    </tr>
    <tr>
      <th align="center" scope="row">Understanding</th>
      <td align="center">There is substantial own code; the student can explain the code that exists</td>
      <td align="center">The student can explain some parts of their code, how some parts works together, and some technical choices</td>
      <td align="center">The student can explain every part of their code, how everything works together, and why software is used instead of alternatives; the project is structured logically</td>
      <td align="center">The project is complex but can easily be understood; alternatives to software covered in class was used that were great choices</td>
      <td align="center">🤓<br>The student deeply understands JavaScript and a geeky / nerdy conversation can be held about this</td>
    </tr>
    <tr>
      <th align="center" scope="row">Quality</th>
      <td align="center">The project is handed in on time, working, documented, and on GitHub</td>
      <td align="center">Code style is consistent; code and project  are partially documented</td>
      <td align="center">Code adheres to standards; docs cover what the project is and does</td>
      <td align="center">Code quality is good and enforced; docs are useful and professional</td>
      <td align="center">📚<br>Code and docs both read like great books</td>
    </tr>
    <tr>
      <th align="center" scope="row">Process</th>
      <td align="center">Process is partially documented</td>
      <td align="center">Process is properly documented</td>
      <td align="center">Choices are evaluated and documented; progress is demonstrated; Work tells a tory</td>
      <td align="center">Significant progress or iterations are demonstrated; Storytelling principles are applied</td>
      <td align="center">💪<br>What you did this course is amazing; Teachers are in awe of your progress</td>
    </tr>
  </tbody>
</table>

> **Note**: each of this rubric’s rows is cumulative: for example, to get a 5-6
> on application, you also need to have a 1-2 and 3-4. In addition, each row has to be awarded with a >=5.5 in order to receive a passing grade for this course.
> Bonus points can be rewarded when you've helped fellow students progress. But only if you already have a passing grade.
<summary>Rubric</summary>
</details>
 

 ## Concept
 
 
 #### [Live demo](https://randy554.github.io/Frontend-data-21-22/)
 
This website allows u to see the number of corona-related articles that have been published by media outlets in recent times. The data is shown through a proportional area chart. Some features:

* Hover over the circles to see the number of published articles
* Filter on local/foreign publishers

 
 
 [![concept-with-hover-cut.gif](https://i.postimg.cc/rmLYxdnW/concept-with-hover-cut.gif)](https://postimg.cc/JyPqWhW4)
 
 [![concept-with-filter.gif](https://i.postimg.cc/vTQdS37z/concept-with-filter.gif)](https://postimg.cc/G8SN4P58)
 
 ## Table of Contents
 
  * [Frontend Data](#frontend-data)
  * [Assignment](#assignment)
  * [Concept](#concept)
  * [Live demo](#-live-demo--https---randy554githubio-frontend-data-21-22--)
  * [Table of Contents](#table-of-contents)
  * [API](#api)
  * [Install](#install)
  * [Credits](#credits)
  * [Sources](#sources)
  * [License](#license)
 
 
 ## API
 
 In order to get news data I made use of the [NewsAPI](https://newsapi.org/). After creating a free account, u will receive a KEY to get started. The NewsAPI provides several endpoints for different purposes. For this project I'm making use of the [Everything endpoint](https://newsapi.org/docs/endpoints/everything). This endpoint returns a extensive list of articles from more than 80.000 large and small news sources and blogs. 
 
 ### Everything endpoint:
 
 ```Javascript
 `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
 ```


| **API paramater** | **Description** | 
|:---------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------| 
| api_key | The api_key you received when you created your developer account. | 
| InqTitle | The prhase you want to search for in the article title. | 
| language | The language u want to get headlines for. | 
| pagesize | The number of articles to return per page. | 
| page | Page number to use for pagination. | 


### Example response data:

[![carbon.png](https://i.postimg.cc/50bp5Jty/carbon.png)](https://postimg.cc/rdZScvx2)

 
  ## Install
  
  
### 1. Clone this repo

    git clone https://github.com/randy554/Frontend-data-21-22.git
    
### 2. Navigate to the root of the app

    cd Frontend-data-21-22

### 3. Open index.html & view site

    http://localhost:3001/
    
## Credits

#### Lecturers/coaches
- [Vincent Vijn](https://github.com/vijnv)
- [Robert Spier](https://github.com/roberrrt-s)
- [Suwigya Rathore](https://github.com/suwigyarathore)

#### Team 3
 - All official and non-official 😉 members of **Team 3**

 
## Sources
 - [D3](https://d3js.org/)
 - [D3 in Depth](https://www.d3indepth.com/)
 - [D3 Tutorial from Samuel Gratzl](https://github.com/sgratzl/d3tutorial)
 - [Carbon source code images](https://carbon.now.sh/) 
 - [Postimage](https://postimages.org/)
 - [News API](https://newsapi.org/docs/endpoints/everything#sources)
 - [SVG Tutorial from Curran Kelleher](https://www.youtube.com/watch?v=ysG9j4_Uw_g)

 
## License

Creative Commons Attribution-ShareAlike 4.0 International Link 

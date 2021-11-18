# Frontend Data
This is a repo for the course **Functional Programming:** `@CMD Hogeschool van Amsterdam`.
During this course topics such as **functional programming**, **cleaning data** and creating **data visualisations** will be be addressed. Through the [Wiki](https://github.com/randy554/Frontend-data-21-22/wiki) I will share my progress and findings.

 ## Concept
 
 ### [Live demo](https://randy554.github.io/Frontend-data-21-22/)
 
 [![concept-with-hover.gif](https://i.postimg.cc/ZR6TQWGT/concept-with-hover.gif)](https://postimg.cc/vgHFgZ8j)
 
 [![concept-with-filter.gif](https://i.postimg.cc/vTQdS37z/concept-with-filter.gif)](https://postimg.cc/G8SN4P58)
 
 See the number of corona articles that recently has been published by media outlets.
 
 ## API
 
 In order to get news data I made use of the [NewsAPI](https://newsapi.org/). After creating a free account, u will receive a KEY to get started. The NewsAPI provides several endpoints for different purposes. For this project I'm making use of the [Everything endpoint](https://newsapi.org/docs/endpoints/everything). This endpoint returns a extensive list of articles from more than 80.000 large and small news sources and blogs. 
 
 ```Javascript
 `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
 ```
 * api_key

The api_key you received when you created your developer account.

* InqTitle

The prhase you want to search for in the article title.

* language

The language u want to get headlines for.

* pagesize

The number of articles to return per page

* page

Page number to use for pagination

### An example of the response data for this endpoint:

[![carbon.png](https://i.postimg.cc/50bp5Jty/carbon.png)](https://postimg.cc/rdZScvx2)

 
  ## Install
  
  
### 1. Clone this repo

    git clone https://github.com/randy554/Frontend-data-21-22.git
    
### 2. Navigate to the root of the app

    cd Frontend-data-21-22

### 3. Open index.html & view site

    http://localhost:3001/
 
  ## Sources
 - [Carbon source code images](https://carbon.now.sh/) 
 - [Postimage](https://postimages.org/)

 
## License

Creative Commons Attribution-ShareAlike 4.0 International Link 

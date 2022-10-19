
# WeatherApp

This a minimalistic weather app made with React , vite(build tool) , weatherstack api and care .
Search for the city name to get it's weather !

## Features 

> Animated Title

> Minimalistic Container with all the relevant weather details

## Challenges faced 

> tried to get an autocomplete search bar for cities ,but the free version of weatherstack api (https://weatherstack.com/) doesnot support city queries . 
    Keeping that in mind thought of getting another api like
    geodb cities (https://rapidapi.com/wirefreethought/api/geodb-cities) and have an npm package like 
    react-select-async-paginate (https://www.npmjs.com/package/react-select-async-paginate) which comes with built in debounce and would populate the
    drop down with cities from the geodb cities api response.
    faced a few issues with react-select-async-paginate , as i could not configure it properly given the time frame .
    
## What i learned 

>   implementing own autocomplete search bar with debounce timeout is essential .

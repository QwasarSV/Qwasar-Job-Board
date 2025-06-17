# The Job Searcher

Welcome to the The Job Searcher!
-This is a Job Search Platform that acts to aggregate job listings from numerous companies and government organizations using scraping and API calls. It is being built with Python, Flask, Kafka, MySQL, Selenium, Docker and other technologies.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this website locally, follow these steps:

- Clone the repository:

    using sh:
    ```sh
    git clone git@github.com:QwasarSV/Qwasar-Job-Board.git
    ```

    using https:
    ```sh
    git clone https://github.com/QwasarSV/Qwasar-Job-Board.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Qwasar-Job-Board/backend
    ```

3. Build and start services:

    ```bash
    $ docker-compose up --build
    ```

4. Open `localhost:6300` in your preferred web browser

5. Enjoy!

## Usage

This webpage is designed to help assist job seekers find positions that better suite their skills and interests.

## Features

# Microservices Architecture
![alt text for screen readers](/Job_Board_Architecture.jpg "The Job Searcher Architecture")

## Technologies Used
- **Python** 
- **Flask**  
- **Selenium**
- **Beautifulsoup** 
- **Kafka** 
- **MySQL** 

- **Caddy** 
- **Hashicorp Vault** 
- **Hashicorp Consul** 

Access the frontend:

Navigate to http://localhost:6300 to view the scraped information.

## Future Improvements
- Build out Model Context Protocol Server, Prompting, Tools and Resources
- Refine the job search functionality using prompting and MCP
- Create an automated resume editor using MCP 


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---






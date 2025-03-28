# My Site

This repository contains the code for my personal website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

The following applications need to be installed on the local computer in order to run the project locally:

| Application | Minimum Version |                                       Link |
| ----------- | :-------------: | -----------------------------------------: |
| Node.js     |    21.7.1 +     |     [Link](https://nodejs.org/en/download) |
| Docker      |    18.09.2 +    | [Link](https://www.docker.com/get-started) |

### Environment Variables

The following environment variables needs to be set to use this application:

| Name                   | Description                                                         | Example                                               |
| ---------------------- | :------------------------------------------------------------------ | :---------------------------------------------------- |
| GMAIL_SMTP_SERVER      | Gmail SMTP server URL                                               | smtp.gmail.com                                        |
| GMAIL_SMTP_SERVER_PORT | Gmail SMTP server port                                              | 587                                                   |
| GMAIL_EMAIL            | Destination email address                                           | test@gmail.com                                        |
| GMAIL_APP_PASSWORD     | Gmail App password that can be generated from the Gmail web console | abcd abcd abcd abcd                                   |
| DATABASE_URL           | The database URL to use to connect to the backend database service  | postgresql://sqluser:Password!@localhost:5432/my_site |

### Development

Once you installed all the required prerequisites, you can now proceed with the deployment of the development
environment by completing the following steps:

1. Execute the below command to download the repository to the local machine:

   `git clone git@github.com:jfmainville/my-site.git`

2. Navigate to the directory:

   `cd my-site`

3. You can now run the following command to start the development environment:

   `docker-compose up --build`

4. When the development environment is no longer required, you can execute the below command to shutdown the
   environment:

   `docker-compose down`

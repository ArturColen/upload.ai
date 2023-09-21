# upload.ai
Project developed during NLW AI, an event held by [Rocketseat](https://www.rocketseat.com.br/) with the aim of deepening knowledge of JavaScript, TypeScript and especially how to consume OpenAI's Artificial Intelligence to create video titles and descriptions.

![Image of the upload.ai project](https://github.com/ArturColen/upload.ai/assets/96635074/5700c645-f8ae-4697-8c72-728e9d74d852)

## 🔨 Project functionality
The program aims to generate titles and descriptions for videos that will be published on YouTube using AI. To accomplish this, the website has been developed so that users can upload a video to the platform, input relevant keywords for the video, and, based on this data, the video is converted into audio. Subsequently, the audio is transcribed into text. With the generated text, users can choose the type of content they desire. Using the OpenAI API, three examples of the requested content will be generated.

## 💻 Technologies used 
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): base programming language of the project
* [TypeScript](https://www.typescriptlang.org/pt/docs/): programming language developed to add advanced features to JavaScript, such as static typing and interfaces
* [Node.js](https://nodejs.org/pt-br/docs): allows the execution of JavaScript code outside the browser
* [React](https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev): create user interfaces on web pages
* [Tailwind CSS](https://v2.tailwindcss.com/docs): CSS framework used to style pages in a faster and more practical way
* [Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction): library of highly customizable and accessible user interface (UI) components for building modern web interfaces
* [Shadcn/ui](https://ui.shadcn.com/docs): collection of reusable components that can be used in applications
* [Fastify](https://fastify.dev/docs/latest/): framework used to build high-performance web APIs
* [Zod](https://zod.dev/): library used for data validation in APIs
* [SQLite](https://www.sqlite.org/docs.html): C language library that implements an embedded SQL database
* [Prisma](https://www.prisma.io/docs): ORM for SQL databases used to simplify data access and manipulation in web applications
* [FFmpeg](https://ffmpeg.org/ffmpeg.html): tool used for audio and video manipulation
* [OpenAI API](https://platform.openai.com/docs/introduction): integrate the artificial intelligence developed by OpenAI into the project

## 📁 Access and execute project
Before testing the project, you need to configure and run the server locally. To do this, follow the steps below:
### 1. Install [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com/downloads) on your machine

### 2. Clone [this repository](https://github.com/ArturColen/upload.ai) on your machine
* Create a folder on your computer for this program
* Open the `terminal` inside this folder
* Copy the [URL](https://github.com/ArturColen/upload.ai.git) from the repository
* Type `git clone <URL copied>` and press `enter`

### 3. Still in the terminal, enter the cloned project folder using the command `cd upload.ai` and install the pnpm package manager: `npm install -g pnpm`

### 4. Install the node_modules folder in the project
* With the project open in the IDE, open the server folder using the command `cd server`
* Now run `pnpm install` to install the folder

### 5. Use the OpenAI API key in the project
* Change the name of the `.env` file, removing the .example at the end of it
* Log in to [OpenAI](https://openai.com/), generate a new API key and paste it between the brackets of the `OPENAI_KEY` field in the .env file (if you have any doubts about this process, watch [this](https://youtu.be/Zu2WGmfM0Gk?si=EaMB_wUl0_F--yuo) tutorial)

### 6. Inside the server folder, create a folder called `tmp` (and leave it empty), it will be responsible for saving the audios generated from the inserted videos

### 7. Create the database and run the application
* Run the command `pnpm prisma migrate dev` to create the database configured in the file schema.prisma
* Finally, run the `pnpm run dev` command to start the API

If you've followed all these steps and see the message `Server is running on port 3333` in the terminal, the API is already working correctly, just open the site hosted via [this link](https://upload-ai-arturbomtempo.vercel.app/) and test the program.
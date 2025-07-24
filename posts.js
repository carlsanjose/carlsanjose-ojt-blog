// posts.js
const posts = [
  // DAY 1
  {
    title: "OJT Day 1",
    date: "2025-06-13",
    summary: "Fresh start.",
    content: "Today was officially the start of our OJT at the BU ICTO. We were introduced to the programming team and we were assigned tasks to work on based on our skills. I was assigned with the backend development of the new BU Faculty Portal. Our first task was to make a Figma wireframe of it before we could proceed to code anything. It was an eventful day, and I'm excited to go through this new experience."
    ,
    images: [
      "images/june13.png",
      "images/june13-2.jpg",
      "images/june13-3.jpg"
    ]
  },
  
  // DAY 2
  {
    title: "OJT Day 2",
    date: "2025-06-16",
    summary: "",
    content: "Today was the second day of OJT. Our initial design of the new BU Faculty Center was turned down since it was not on-theme with the other sites made by the ICTO for use by Bicol University. My initial task remains the same - backend - but I am continually helping with the UI/UX design for mobile and tablet size.",
    images: [
      "images/june16.png",
      "images/june16.jpg",
      "images/june16-2.jpg"
    ]
  },

  // DAY 3
  {
    title:"OJT Day 3",
    date:"2025-06-17",
    summary:"",
    content:"Today I was tasked with co-designing the mobile and tablet sized views of the new Faculty Center. I started with the relevant features, then the little details. This task not only improved my technical skills in Figma but also helped me better appreciate the importance of designing with the end-user in mind.",
    images:[
      "images/june17.png"
    ]
  },

  // DAY 4
  {
    title:"OJT Day 4",
    date:"2025-06-18",
    summary:"Code time.",
    content:"Following the completion of the mobile-view design for the BU Faculty Center, my next task was to prepare for its development phase. We were given the initial codebase to work on, followed by setting up the development environment on my local machine. Laravel was relatively new to me, but I already started learning it weeks prior to deployment. This preparation stage was crucial in laying a strong foundation for a smooth and efficient coding process.",
    images:[
      "images/june18.png"
    ]
  },

  // DAY 5
  {
    title:"OJT Day 5",
    date:"2025-06-19",
    summary:"",
    content:"Started with helping out with an initial layout of our new UI/UX design to integrate into the faculty portal's code. We focused on ensuring that it was intuitive and visually appealing, while also optimizing the user experience to make the center's digital platforms easy to navigate and highly functional for all faculty members.",
    images:[
      "images/june19.png"
    ]
  },

  // DAY 6
  {
    title:"OJT Day 6",
    date:"2025-06-20",
    summary:"Progressing.",
    content:"Today was a productive day. I'm making great progress on the UI/UX development for the new BU Faculty Center. I'm actively refining the user interface and enhancing the overall user experience, ensuring the platform will be intuitive, efficient, and visually appealing.",
  },

  // DAY 7
  {
    title:"OJT Day 7",
    date:"2025-06-23",
    summary:"Starting with Livewire",
    content:"Today I focused on developing Livewire components for the new BU Faculty Center. This involved crafting interactive elements and dynamic functionalities, ensuring a seamless and responsive user experience for the faculty members. My work today brought me closer to understanding modern web development practices and their application in real-world projects.",
    images:[
      "images/june23.png",
      "images/june23-2.png"
    ]
  },

  // DAY 8
  {
    title:"OJT Day 8",
    date:"2025-06-24",
    summary:"Continuation of making the livewire components for the new BU Faculty Center.",
    content:"Working with Laravel has been a rewarding experience. I am constantly learning new things that I haven’t yet explored, and am using a lot of new development tools for the first time. I also learned about using Filaments to seamlessly create backend code and frontend UI elements at the same time, in just one livewire component file.",
    images:[
      "images/june24.png"
    ]
  },

  // DAY 14
  {
    title:"OJT Day 14",
    date:"2025-07-02",
    summary:"Had some free time.",
    content:"Today I had some spare time on my hands, so I tried learning the React framework. It was thrilling leaning about new things after discovering how much Laravel could do. I got inspired to learn more.",
    images:[
      "images/july2.jpg",
      "images/july2-2.jpg"
    ]
  },

  // DAY 17
  {
    title:"OJT Day 17",
    date:"2025-07-07",
    summary:"Meeting day.",
    content:"Today was another productive day. I made a lot of progress with the functionalities of the faculty center, and I got more used to the structure of the database being used by the ICTO for the students' information, how the grades are stored, and how they are accessed through Laravel and Livewire. All staff of the office were also called for a meeting in the afternoon to discuss some internal matters.",
    images:[
      "images/july7.jpg"
    ]
  },

  // DAY 18 
  {
    title:"OJT Day 18",
    date:"2025-07-08",
    summary:"Database troubles.",
    content:"Today I faced a setback. I had problems accessing the contents of the database. It wasn't much an issue with the database itself, but more of me having to find a way to access it through the code. I had to try different things to bypass the errors that were popping up on Livewire. I used a method called 'dd()', introduced to me by Sir Jeff, our direct supervisor, to dump the contents of the database that I needed, to make sure I was properly accessing them before they reach the frontend.",
  },

  // DAY 19
  {
    title:"OJT Day 19",
    date:"2025-07-09",
    summary:"Continued database troubles, but more hopeful this time.",
    content:"I continued to work solutions to the problem I'd been facing the day before. The error about 'AWS Buckets' (I still don't know what that is honestly) persisted. After 2 days of failed attempts I decided to go for a new approach. I deleted the function that I made and thought of another way to do what I wanted the Livewire component to do and display to the UI.",
  },

  // DAY 20
  {
    title:"OJT Day 20",
    date:"2025-07-10",
    summary:"Progressing well today.",
    content:"Continuing the struggle I'd been having for the past couple of days, that new approach that I thought of was exactly what I needed to do. I learned something new from it: if there exists a simpler way to do something, always go for that. Coincidentally, I also watched a YouTube video that said almost the same thing. So, starting today, I'll only be focusing on making my code simple, and easy to explain to other devs.",
    images:[
      "images/july10.jpg"
    ]
  },

  // DAY 21
  {
    title:"OJT Day 21",
    date:"2025-07-11",
    summary:"FINALLY DID IT!!",
    content:"Finally, the 3 day struggle came to an end. I made the code work. What was I trying to do anyway, you ask? Well, one of the site's features was having the user encode grades in a CSV file then upload it to the site, and then the grades would be displayed from that file. I initially thought it should be done through Livewire, then when I started rethinking my approach, I decided to let AlpinJS handle taking the data from the file, pass it Livewire, then display it to the UI. AND IT WAS A SUCESS!",
    images:[
      "images/july11.jpg",
      "images/july11-2.jpg"
    ]
  },

  // DAY 22
  {
    title:"OJT Day 22",
    date:"2025-07-14",
    summary:"Helped out, and got helped out.",
    content:"Today was another day of debugging and fixing features in the Faculty Portal. I felt stressed out again because of all the bugs I was encourtering and the slow load times of the site. The worst part is because we were also fixing some UI interactions, we had to refresh the site everytime a change took place. So, I took a break and helped out wash the dishes at the office, along with 2 others.",
    images:[
      "images/july14.jpg",
      "images/july14-2.jpg"
    ]
  },

  // DAY 25
  {
    title:"OJT Day 25",
    date:"2025-07-17",
    summary:"Hardwork and hard work.",
    content:"The past couple of days were spent making a few mistakes here and there, but in the end, the site was almost fully functional. About 95% of all the features that we were tasked -  Omar on the frontend and me on the Backend - were nearly done. Error checks were in place, confirmation buttons, modals, and data displays were all working well. I really felt good about my newfound skills. Though I wouldn't say I'm that proficient yet, it's another step towards understanding the full tech stack being used at the ICTO.",
    images:[
      "images/july17.jpg"
    ]
  },

  // DAY 26
  {
    title:"OJT Day 26",
    date:"2025-07-18",
    summary:"Nagpa-check na and mga ferson",
    content:"Today was another productive day. I made some tweaks to the Livewire component, then I separated the modals code to another folder, then called the respective Blade components in the main UI for the grade encoding page. This'll make the codebase more manageable and easier for new devs/OJT to start working on, by reducing the number of lines of code for each file. After all the tweaks and finalizations were made, we had our work checked and validated with our OJT adviser, Sir Davie. I can say it was a success, with some final reworks to be made next week.",
    images:[
      "images/july18.jpg",
      "images/july18-2.jpg",
      "images/july18-3.jpg"
    ]
  },

  // DAY 27
  {
    title:"OJT Day 27",
    date:"2025-07-21",
    summary:"Made some new features and polished existing ones.",
    content:"This week was the week for finalizations of our assigned tasks. Today we worked on a new feature for downloading the list of posted grades for a block into PDF format. I also had some spare time and decided on learning about Data Compression Algorithms.",
    images:[
      
    ]
  },

  // DAY 28
  {
    title:"OJT Day 28",
    date:"2025-07-22",
    summary:"Continued working.",
    content:"Today I continued working on the feature we started on yesterday. While also polishing some tiny bugs in the Dashboard.",
    images:[
      
    ]
  },
];

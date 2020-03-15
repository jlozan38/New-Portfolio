import basictodo from "../assets/projects/01.png"
import todob from "../assets/projects/05.png"
import todot from "../assets/projects/04.png"
import inventory from "../assets/projects/03.png"
import vuetodo from "../assets/projects/02.png"
import mynotes from "../assets/projects/06.png"
import login from "../assets/projects/07.png"
import superheros from "../assets/projects/08.png"
import movies from "../assets/projects/09.png"

const projects = [
    {
        name: "Basic Todo App",
        description: "A Vanilla HTML, JS and CSS Todo Application",
        image: basictodo,
        hashtags: ["todo", "html5", "css", "javascript"],
        url: "https://basictodo.jlozan38.xyz/"
    },
    {
        name: "Todo App with Bootstrap",
        description: "A Todo Application in Vanilla Javascript and Bootstrap",
        image: todob,
        hashtags: ["todo", "html5", "javascript", "bootstrap"],
        url: "https://todob.jlozan38.xyz/"
    },
    {
        name: "Todo App with Tailwind",
        description: "A Todo Application in Vanilla Javascript and Bootstrap",
        image: todot,
        hashtags: ["todo", "html5", "javascript", "Tailwind"],
        url: "https://todot.jlozan38.xyz/"
    },
    {
        name: "Basic Inventory App",
        description: "A Basic Inventory App  in Vue.js",
        image: inventory,
        hashtags: ["inventory", "vuejs", "tailwind", "javascript"],
        url: "https://inventory.jlozan38.xyz/"
    },
    {
        name: "Basic Todo App with Tailwind and Vue.js",
        description: "A Todo Application in Vue.js and TailwindCSS",
        image: vuetodo,
        hashtags: ["todo", "vuejs", "javascript", "javascript"],
        url: "https://vuetodo.jlozan38.xyz/"
    },
    {
        name: "Look at my Notes",
        description: "A Vue.js application with Vuex, implementing a CRUD Notes app",
        image: mynotes,
        hashtags: ["crud", "vuejs", "javascript", "tailwind", "vuex", "vue-router"],
        url: "https://mynotes.jlozan38.xyz/"
    },
    {
        name: 'The Login',
        description:'A Vue.js Application with Vuex, implementing a Login with Firebase in Email/Password and Google.',
        image: login,
        hashtags: ['firebase','auth','vuejs','javascript','tailwind','vuex','vue-router'
        ],
        url: 'https://thelogin.jlozan38.xyz/'
    },
    {
        name: 'Superheros',
        description: 'A Vue.js Application with Vuex, implementing a superhero API',
        image: superheros,
        hashtags: ['firebase', 'auth', 'vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'
        ],
        url: 'https://superheros.jlozan38.xyz/'  
    },
    {
        name: 'Movies Database',
        description: 'A vuetify application, implementing a superhero API',
        image: movies,
        hashtags: ['firebase', 'auth', 'vuetify', 'javascript', 'tailwind', 'vuex', 'vue-router'
        ],
        url: 'https://moviesdb.jlozan38.xyz/'
    }
]

export default projects
class Front{
    constructor(topic, one, two, third, four, five)
    {
        this.topic = topic,
        this.one = one,
        this.two = two,
        this.third = third,
        this.four = four,
        this.five = five
    }
}

const myLang = new Front(
    "Front End Tools",
    "Vanilla JS",
    "Vue.JS",
    "React.JS",
    "Angular",
    "Typescript"
)

// Template Literals
const content =  `
    <main>
    <h1>${myLang.topic}</h1>
    <ul>
      <h2>
        <li>First: ${myLang.one}</li>
        <li>Second:</li>
        <li>Third:</li>
        <li>Fourth:</li>
        <li>Fifth:</li>
      </h2>
    </ul>
    </main>
`;

document.body.innerHTML = content;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require('cheerio')

const start = async function(cadena) {
    let url = new URL("http://localhost:8081/departamento.php")
    url.searchParams.append("departamento", "4 " + cadena)

    const res = await fetch(url)
    const data = await res.text()

    const $ = cheerio.load(data)
    const select = $('select[name=asignaturas] option').get()

    select.forEach(e => {
        console.log($(e).text());
    });
}

start(process.argv.slice(2).join(" "))
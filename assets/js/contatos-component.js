const data3 = [{
    name: 'Github',
    id: 'https://github.com/SDuboc/Site_Queimadas.git',
    class: 'icon fa-github'
}]

const listComponent3 = (data3) => {
    return data3.map((item) => {
        return (
            `
<li><a target="_blank" href="${ item.id }"><i class="${ item.class }">&nbsp;</i>${ item.name }</a></li>
`
        )
    }).join('')
}

const el3 = document.querySelector('[contatos-component]')

el3.innerHTML = listComponent3(data3)
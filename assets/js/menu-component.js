const data = [{
        name: 'Home',
        id: 'index.html'
    },
    {
        name: 'Áreas Protegidas',
        id: 'areas-protegidas.html'
    },
    {
        name: 'Faça sua contribuição',
        id: 'doacao.html'
    },
    {
        name: 'Áreas queimadas',
        id: 'areas-queimadas.html'
    },
    {
        name: 'Biomas brasileiros',
        id: 'biomas.html'
    }, 
    {
        name: 'Orientações',
        id: 'orientacoes.html'
    }
]

const listComponent = (data) => {
    return data.map((item) => {
        return (
            `
<li><a target="_parent" href=${ item.id }>${ item.name } </a></li>
`
        )
    }).join('')
}

const el = document.querySelector('[menu-component]')

el.innerHTML = listComponent(data)
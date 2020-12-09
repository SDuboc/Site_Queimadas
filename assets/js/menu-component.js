const data = [{
        name: 'Home',
        id: 'index.html'
    },
    {
        name: 'Áreas Protegidas',
        id: 'areas-protegidas.html'
    },
    {
        name: 'Áreas queimadas',
        id: 'areas-queimadas.html'
    },
    {
        name: 'Biomas afetados',
        id: 'biomas.html'
    },
    {
        name: 'Orientações',
        id: 'orientacoes.html'
    },
    {
        name: 'Faça sua contribuição',
        id: 'doacao.html'
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
const data2 = [{
        name: 'TO - (63) 3218-2600'
    },
    {
        name: 'MT - (65) 3613-7200'
    },
    {
        name: 'MS - (67) 3318-4100'
    },
    {
        name: 'RJ - (21) 2334-5906'
    }
]

const listComponent2 = (data2) => {
    return data2.map((item) => {
        return (

            `
<li class="no-link">${ item.name }</li>
`
        )
    }).join('')
}

const el2 = document.querySelector('[links-uteis-component]')

el2.innerHTML = listComponent2(data2)
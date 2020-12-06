$('input[type=radio][name=radio]').change(function() {
    console.log($('iframe[id=filtro-regiao]').attr('src'))
    $('iframe[id=filtro-regiao]').attr('src', this.value)
    console.log($('iframe[id=filtro-regiao]').attr('src'))
});
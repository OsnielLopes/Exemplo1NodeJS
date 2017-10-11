
function createEvent(knex) {
    return knex('events').insert([
        {
            title: 'Criando Aplicativos de Eventos',
            description: 'Lorem ipsum ;)',
            location: 'predio 33 sala 405',
            datetime: '27/10/2017 às 20h'
        },
        {
            title: 'A Arte da Gastronomia',
            description: 'Another Lorem ipsum ;)',
            location: 'predio 33 sala 405',
            datetime: '28/10/2017 às 21h'
        }]).returning('*');
}

exports.seed = function (knex, Promise) {
    return knex('events')
            .del()
            .then(function () {
                return createEvent(knex)
                    .then(function () {
                        console.log('Events created');
                    });
            });
};

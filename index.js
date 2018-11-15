const nem = require('nem-sdk').default;

const endpoint = nem.model.objects.create('endpoint')(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

const common = nem.model.objects.create('common')('ubpcadet', 'ff813be86bc41e3fdd11170cb09203a87c96bdf4f9ee49dae45e096717a65014');

const transferTransaction = nem.model.objects.create('transferTransaction')("TCOYLUNKNVIFR44W5APX5MOI5TL4ANHWIDNF7EQN", 100, "Nahiya na ko kay Jefferwin");

const preparedTransaction = nem.model.transactions.prepare('transferTransaction')(common, transferTransaction, nem.model.network.data.testnet.id);

nem.model.transactions.send(common, preparedTransaction, endpoint).then(
    function(res) {
        console.log(res);
    },
    function(err) {
        console.log(err);
    }
);
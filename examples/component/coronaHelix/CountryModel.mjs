import Model  from '../../../src/data/Model.mjs';

/**
 * @class Neo.examples.component.coronaHelix.CountryModel
 * @extends Neo.data.Model
 */
class CountryModel extends Model {
    static getConfig() {return {
        className: 'Neo.examples.component.coronaHelix.CountryModel',

        fields: [{
            name: 'cases',
            type: 'int'
        }, {
            name: 'country',
            type: 'string'
        }, {
            name: 'critical',
            type: 'int'
        }, {
            name: 'deaths',
            type: 'int'
        }, {
            name: 'recovered',
            type: 'int'
        }, {
            name: 'todayCases',
            type: 'int'
        }, {
            name: 'todayDeaths',
            type: 'int'
        }]
    }}
}

Neo.applyClassConfig(CountryModel);

export default CountryModel;

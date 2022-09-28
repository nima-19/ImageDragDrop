import Model  from '../../../../src/data/Model.mjs';

/**
 * @class Neo.examples.form.field.color.MainModel
 * @extends Neo.data.Model
 */
class MainModel extends Model {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.examples.form.field.color.MainModel'
         * @protected
         */
        className: 'Neo.examples.form.field.color.MainModel',
        /**
         * @member {Object[]} fields
         * @protected
         */
        fields: [{
            name: 'id',
            type: 'Integer'
        }, {
            name: 'name',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(MainModel);

export default MainModel;

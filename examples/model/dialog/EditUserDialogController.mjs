import Component from '../../../src/controller/Component.mjs';

/**
 * @class Neo.examples.model.dialog.EditUserDialogController
 * @extends Neo.controller.Component
 */
class EditUserDialogController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.examples.model.dialog.EditUserDialogController'
         * @protected
         */
        className: 'Neo.examples.model.dialog.EditUserDialogController'
    }}

    /**
     * @param {Object} data
     */
    onFirstnameTextFieldChange(data) {
        this.getModel().setData({
            'user.firstname': data.value || ''
        });
    }

    /**
     * @param {Object} data
     */
    onLastnameTextFieldChange(data) {
        this.getModel().setData({
            'user.lastname': data.value || ''
        });
    }
}

Neo.applyClassConfig(EditUserDialogController);

export default EditUserDialogController;

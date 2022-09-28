import Container              from '../../../../src/tab/Container.mjs';
import DeveloperIntroComponent from './DeveloperIntroComponent.mjs';
import ExecutiveIntroComponent from './ExecutiveIntroComponent.mjs';

/**
 * @class Website.view.home.TabContainer
 * @extends Neo.container.Base
 */
class TabContainer extends Container {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.home.TabContainer'
         * @protected
         */
        className: 'Website.view.home.TabContainer',
        /**
         * @member {Number} activeIndex=1
         */
        activeIndex: 1,
        /**
         * @member {String[]} cls=['website-home-tab-container', 'neo-tab-container'],
         * @protected
         */
        cls: ['website-home-tab-container', 'neo-tab-container'],
        /**
         * @member {Array} items
         */
        items: [{
            module         : DeveloperIntroComponent,
            tabButtonConfig: {
                iconCls: 'fa fa-chess-pawn',
                route  : 'childview=developers',
                text   : 'For Developers'
            }
        }, {
            module         : ExecutiveIntroComponent,
            tabButtonConfig: {
                iconCls: 'fa fa-chess-king',
                route  : 'childview=executives',
                text   : 'For Executives'
            }
        }],
        /**
         * @member {Boolean} sortable=true
         */
        sortable: true,
        /**
         * @member {String} tabBarPosition='left'
         */
        tabBarPosition: 'left'
    }}
}

Neo.applyClassConfig(TabContainer);

export default TabContainer;

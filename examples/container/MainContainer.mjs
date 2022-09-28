import Button    from '../../src/button/Base.mjs';
import Container from '../../src/container/Base.mjs';

/**
 * @class Neo.examples.container.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends Container {
    static getConfig() {return {
        className: 'Neo.examples.container.MainContainer',
        autoMount: true,
        layout   : 'vbox',

        items: [
            {
                ntype  : 'button',
                iconCls: 'fa fa-home',
                text   : 'Hello',
                width  : 200
            },
            {
                ntype  : 'button',
                iconCls: 'fa fa-user',
                text   : 'World'
            },
            {
                ntype : 'container',
                layout: {
                    ntype: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        ntype  : 'button',
                        iconCls: 'fa fa-home',
                        text   : 'Hello2',
                        width  : 200,

                        style: {
                            color: 'red'
                        }
                    },
                    {
                        ntype    : 'button',
                        flex     : 1,
                        iconCls  : 'fa fa-user',
                        iconColor: 'red',
                        text     : 'World2'
                    },
                ]
            },
            {
                ntype : 'container',

                layout: {
                    ntype: 'vbox',
                    align: 'start'
                },

                style: {
                    marginTop: '30px'
                },

                items: [
                    {
                        ntype       : 'button',
                        iconCls     : 'fa fa-home',
                        iconPosition: 'right',
                        text        : 'Right'
                    },
                    {
                        ntype       : 'button',
                        flex        : 1,
                        iconCls     : 'fa fa-user',
                        iconPosition: 'top',
                        text        : 'Top'
                    },
                    {
                        ntype       : 'button',
                        flex        : 1,
                        iconCls     : 'fa fa-play-circle',
                        iconPosition: 'bottom',
                        text        : 'Bottom'
                    }
                ]
            }
        ]
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;

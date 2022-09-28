import BaseList  from '../../../../src/list/Base.mjs';
import BlogPosts from '../../store/BlogPosts.mjs';
import VDomUtil  from '../../../../src/util/VDom.mjs';

/**
 * @class Website.view.blog.List
 * @extends Neo.list.Base
 */
class List extends BaseList {
    static getStaticConfig() {return {
        /**
         * A regex to enforce a maxLength (word break)
         * @member {RegExp} nameRegEx
         * @protected
         * @static
         */
        nameRegEx: /^(.{65}[^\s]*).*/
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Website.view.blog.List'
         * @protected
         */
        className: 'Website.view.blog.List',
        /**
         * @member {String[]} cls=['website-blog-list','neo-list-container','neo-list']
         */
        cls: ['website-blog-list', 'neo-list-container', 'neo-list'],
        /**
         * @member {Neo.data.Store} store=BlogPosts
         */
        store: BlogPosts
    }}

    /**
     * @param {Object} record
     */
    createItemContent(record) {
        let basePath;

        if (Neo.config.isGitHubPages) {
            basePath = '../../../../resources/website';

            if (Neo.config.environment !== 'development') {
                basePath = '../../' + basePath;
            }
        } else {
            basePath = 'https://raw.githubusercontent.com/neomjs/pages/master/resources/website';
        }

        const vdomCn = [
            {cls: ['content'], cn: [
                {cls: ['neo-full-size', 'preview-image'], style: {
                    backgroundImage: `url('${basePath}/blog/${record.image}'), linear-gradient(#777, #333)`}
                },
                {cls: ['neo-relative'], cn: [
                    {cls: ['neo-absolute', 'neo-item-bottom-position'], cn: [
                        {tag: 'a', cls: ['neo-title'], href: record.url, target: '_blank', cn: [
                            {flag: 'name', html: record.name.replace(List.nameRegEx, "$1")}
                        ]},
                        {cls: ['neo-top-20'], cn: [
                            {tag: 'img', cls: ['neo-user-image'], src: `${basePath}/blogAuthor/${record.authorImage}`},
                            {cls: ['neo-inner-content'], cn: [
                                {cls: ['neo-inner-details'], flag: 'author', cn: [
                                    {tag: 'span', cls: ['neo-bold'], html: record.author}
                                ]},
                                {cls: ['neo-inner-details'], html: record.date}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ];

        if (record.publisher.length > 0) {
            VDomUtil.getByFlag(vdomCn[0], 'author').cn.push(
                {vtype: 'text', html : ' in '},
                {tag: 'span', cls: ['neo-bold'], html: record.publisher}
            );
        }

        if (record.selectedInto.length > 0) {
            vdomCn[0].cn[1].cn.unshift(
                {cls: ['neo-absolute', 'neo-item-top-position'], cn: [
                    {html: `Officially selected by ${record.provider} into`},
                    {cls: ['neo-bold'], html: record.selectedInto.join('</br>')}
                ]}
            );
        }

        return vdomCn;
    }

    /**
     * Custom filtering logic
     * @param {Object} data
     */
    filterItems(data) {
        let me         = this,
            emptyValue = !data.value || data.value === '',
            store      = me.store,
            valueRegEx = new RegExp(data.value, 'gi'),
            vdom       = me.vdom,
            hasMatch, itemName, name, record;

        vdom.cn.forEach((item, index) => {
            hasMatch = false;
            itemName = VDomUtil.getByFlag(item, 'name');
            record   = store.getAt(index);
            name     = record.name.replace(List.nameRegEx, "$1");

            item.style = item.style || {};

            if (emptyValue) {
                itemName.html = name;
                delete item.style.display;
            } else {
                itemName.html = name.replace(valueRegEx, match => {
                    hasMatch = true;
                    return `<span class="neo-highlight-search">${match}</span>`;
                });

                if (hasMatch) {
                    delete item.style.display;
                } else {
                    item.style.display = 'none';
                }
            }
        });

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(List);

export default List;

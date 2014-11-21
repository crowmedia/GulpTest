/*
 * File: app/view/MyViewport.js
 *
 *
 */

Ext.define('GulpTest.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'GulpTest.view.MyViewportViewModel'
    ],

    viewModel: {
        type: 'myviewport'
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [

    ]

});
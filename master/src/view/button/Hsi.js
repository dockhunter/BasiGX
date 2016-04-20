/* Copyright (c) 2015 terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * HSI Button
 *
 * Button used to query for information.
 *
 * @class BasiGX.view.button.Hsi
 */
Ext.define("BasiGX.view.button.Hsi", {
    extend: "Ext.Button",
    xtype: 'basigx-button-hsi',
    requires: [
        'Ext.app.ViewModel'
    ],

    /**
     *
     */
    viewModel: {
        data: {
            tooltip: 'Informationsabfrage',
            text: null
        }
    },

    /**
     *
     */
    bind: {
        tooltip: '{tooltip}',
        text: '{text}'
    },

    /**
     * The icons the button should use.
     * Classic Toolkit uses glyphs, modern toolkit uses html
     */
    glyph: 'xf05a@FontAwesome',
    html: '<i class="fa fa-info-circle fa-2x"></i>',

    /**
     *
     */
    enableToggle: true,

    /**
     *
     */
    buttonPressed: true,

    /**
     *
     */
    config: {
        handler: function() {
            this.buttonPressed = !this.buttonPressed;
            this.toggleButton();
        }
    },

    /**
     *
     */
    constructor: function(config) {
        this.callParent([config]);
        this.toggleButton();
    },

    /**
     *
     */
    toggleButton: function() {
        if (this.setPressed) {
            this.setPressed(this.buttonPressed);
        } else {
            this.setCls(this.buttonPressed ? this.getPressedCls() :
                "basigx-map-tool-button");
        }
        this.setControlStatus(this.buttonPressed);
    },

    /**
     *
     */
    setControlStatus: function(status){
        var mapComponent = Ext.ComponentQuery.query('basigx-component-map')[0];
        mapComponent.setPointerRest(status);
    }
});
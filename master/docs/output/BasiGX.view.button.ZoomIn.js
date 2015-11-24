Ext.data.JsonP.BasiGX_view_button_ZoomIn({"tagname":"class","name":"BasiGX.view.button.ZoomIn","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ZoomIn.js","href":"ZoomIn.html#BasiGX-view-button-ZoomIn"}],"aliases":{"widget":["basigx-button-zoomin"]},"alternateClassNames":[],"extends":"Ext.Button","mixins":[],"requires":[],"uses":[],"members":[{"name":"handler","tagname":"cfg","owner":"BasiGX.view.button.ZoomIn","id":"cfg-handler","meta":{"private":true}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.ZoomIn","id":"property-bind","meta":{"private":true}},{"name":"config","tagname":"property","owner":"BasiGX.view.button.ZoomIn","id":"property-config","meta":{}},{"name":"glyph","tagname":"property","owner":"BasiGX.view.button.ZoomIn","id":"property-glyph","meta":{}},{"name":"html","tagname":"property","owner":"BasiGX.view.button.ZoomIn","id":"property-html","meta":{"private":true}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.ZoomIn","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.ZoomIn","id":"method-constructor","meta":{}},{"name":"getHandler","tagname":"method","owner":"BasiGX.view.button.ZoomIn","id":"method-getHandler","meta":{}},{"name":"setHandler","tagname":"method","owner":"BasiGX.view.button.ZoomIn","id":"method-setHandler","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.ZoomIn","component":false,"superclasses":["Ext.Button"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><strong>BasiGX.view.button.ZoomIn</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn' target='_blank'>ZoomIn.js</a></div></pre><div class='doc-contents'><p>ZoomIn Button</p>\n\n<p>Button used to zoom in</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-cfg-handler' class='name expandable'>handler</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: '{text}'}</code></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-glyph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-property-glyph' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-property-glyph' class='name expandable'>glyph</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The icons the button should use. ...</div><div class='long'><p>The icons the button should use.\nClassic Toolkit uses glyphs, modern toolkit uses html</p>\n<p>Defaults to: <code>'xf00e@FontAwesome'</code></p></div></div></div><div id='property-html' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-property-html' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-property-html' class='name expandable'>html</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'&lt;i class=&quot;fa fa-search-plus fa-2x&quot;&gt;&lt;/i&gt;'</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: 'Hineinzoomen', text: null}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.ZoomIn-method-constructor' class='name expandable'>BasiGX.view.button.ZoomIn</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/BasiGX.view.button.ZoomIn\" rel=\"BasiGX.view.button.ZoomIn\" class=\"docClass\">BasiGX.view.button.ZoomIn</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.ZoomIn\" rel=\"BasiGX.view.button.ZoomIn\" class=\"docClass\">BasiGX.view.button.ZoomIn</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-method-getHandler' class='name expandable'>getHandler</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of handler. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.ZoomIn-cfg-handler\" rel=\"BasiGX.view.button.ZoomIn-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ZoomIn'>BasiGX.view.button.ZoomIn</span><br/><a href='source/ZoomIn.html#BasiGX-view-button-ZoomIn-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ZoomIn-method-setHandler' class='name expandable'>setHandler</a>( <span class='pre'>handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of handler. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.ZoomIn-cfg-handler\" rel=\"BasiGX.view.button.ZoomIn-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});
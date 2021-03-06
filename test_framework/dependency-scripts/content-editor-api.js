
// removed content-editor implementation from API method.

window.org.ekstep.contenteditor.api = {
	/**
     * Handle for JQuery. All plugins should use this instead of using '$' directly
     *
     * @member {Object} jQuery
     * @memberof org.ekstep.contenteditor.api
     */
	jQuery: org.ekstep.contenteditor.jQuery,

	/**
     * Handle for Lodash Library. All plugins should use this instead of using '_' directly
     *
     * @member {Object} _
     * @memberof org.ekstep.contenteditor.api
     */
	_: org.ekstep.contenteditor._,

	/**
     * Add an object to the context
     *
     * @param {String} key   Key
     * @param {Object} value Value
     * @memberof org.ekstep.contenteditor.api
     */
	setContext: function (key, value) {
		org.ekstep.contenteditor.globalContext[key] = value
	},

	/**
     * Get the context variable
     *
     * @param  {String} key Key
     * @return {object}     Value
     * @memberof org.ekstep.contenteditor.api
     */
	getContext: function (key) {
		return org.ekstep.contenteditor.globalContext[key]
	},

	/**
     * Get all context attributes
     * @return {map} Map of key values
     */
	getAllContext: function () {
		return org.ekstep.contenteditor.globalContext
	},

	/**
     * Add or update a configuration property
     *
     * @param {String} key   Key
     * @param {Object} value Value
     * @memberof org.ekstep.contenteditor.api
     */
	setConfig: function (key, value) {
		org.ekstep.contenteditor.config[key] = value
	},

	/**
     * Get the config variable
     *
     * @param  {String} key Key
     * @return {object}     Value
     * @memberof org.ekstep.contenteditor.api
     */
	getConfig: function (key) {
		return org.ekstep.contenteditor.config[key]
	},

	/**
     * Get all config attributes
     * @return {map} Map of key values
     */
	getAllConfig: function () {
		return org.ekstep.contenteditor.config
	},

	/**
     * Register an event listener callback function for the events raised by the framework.
     * @param type {string} name of the event (e.g. org.ekstep.quickstart:configure)
     * @param callback {function} callback function
     * @param scope {object} the scope of the callback (use this)
     * @memberof org.ekstep.contenteditor.api
     */
	addEventListener: function (type, callback, scope) {
		org.ekstep.pluginframework.eventManager.addEventListener(type, callback, scope)
	},

	/**
     * Fires an event to the framework, allowing other plugins who may have registered to receive the callback notification. All
     * communication between the framework and other plugins is via the events.
     * @param type {string} name of the event to fire (e.g. org.ekstep.quickstart:configure)
     * @param data {object} event data to carry along with the notification
     * @param target {object} the scope of the event (use this)
     * @memberof org.ekstep.contenteditor.api
     */
	dispatchEvent: function (type, data, target) {
		org.ekstep.pluginframework.eventManager.dispatchEvent(type, data, target)
	},

	/**
     * Remove an event listener to an event. Plugins should cleanup when they are removed.
     * @param type {string} name of the event registered with (e.g. org.ekstep.quickstart:configure)
     * @param callback {function} remove the callback function
     * @param scope {object} the scope of the event (use this)
     * @memberof org.ekstep.contenteditor.api
     */
	removeEventListener: function (type, callback, scope) {
		org.ekstep.pluginframework.eventManager.removeEventListener(type, callback, scope)
	},

	/**
     * Framework support to load plugin resources. When the resources are loaded, the callback is fired.
     * @param pluginId {string} id of the plugin requesting resource to be loaded
     * @param pluginVer {string} version of the plugin that is requesting the resource to be loaded
     * @param src {string} URL of the resource to be loaded
     * @param dataType {object} dataType of the resource (image, or audio)
     * @param callback {function} callback function whent he resource is available
     * @memberof org.ekstep.contenteditor.api
     */
	loadPluginResource: function (pluginId, pluginVer, src, dataType, callback) {
		org.ekstep.pluginframework.pluginManager.loadPluginResource(pluginId, pluginVer, src, dataType, callback)
	},

	/**
     * Returns the handle to the Angular services. The services can be used by plugisn to achieve
     * the functional calls or render custom views. Valid services are:
     *     popup - UI service to render popup
     *     content - Provides access to the content API (for loading templates and assets)
     *     assessment - Provides access to the assessment API (for loading questions)
     *     language - Provides access to the wordnet API (for loading words and aksharas)
     *     search - Provides access to search API (for search activities, question, domains)
     *     meta - Provides access to metadata API (for resource bundles, ordinals, definitions)
     *     asset - Provides access to the content API (for save assets)
     *     telemetry - Service to genarate and log telemetry events
     * @param serviceId {string} id of the service to return. Returns undefined if the id is invalid
     * @memberof org.ekstep.contenteditor.api
     */
	getService: function (serviceId) {
		var service = ''
		switch (serviceId) {
		case ServiceConstants.POPUP_SERVICE:
			service = org.ekstep.services.popupService
			break
		case ServiceConstants.CONTENT_SERVICE:
			service = org.ekstep.services.contentService
			break
		case ServiceConstants.ASSESSMENT_SERVICE:
			service = org.ekstep.services.assessmentService
			break
		case ServiceConstants.LANGUAGE_SERVICE:
			service = org.ekstep.services.languageService
			break
		case ServiceConstants.SEARCH_SERVICE:
			service = org.ekstep.services.searchService
			break
		case ServiceConstants.META_SERVICE:
			service = org.ekstep.services.metaService
			break
		case ServiceConstants.ASSET_SERVICE:
			service = org.ekstep.services.assetService
			break
		case ServiceConstants.TELEMETRY_SERVICE:
			service = org.ekstep.services.telemetryService
               break
          }
		return service
	},

	/**
     * Returns the angular scope object for the plugins that need angular framework to render. The editor
     * uses Angular 2 and plugins must use this to access the scope instead of instantiating Angular by
     * themselves.
     * @memberof org.ekstep.contenteditor.api
     */
	getAngularScope: function () {
		return org.ekstep.contenteditor.toolbarManager.scope
	},

	/**
     * Returns the HTML5 canvas for rendering on the editor. By default, the editor uses Fabric.js and recommends
     * the plugins to also use Fabric.js for rendering the WYSIWYG components on the editor canvas. However,
     * this method provides access to the underlying native HTML5 canvas if needed. For example, if your plugin
     * uses some other third-party graphics library for rendering.
     * @memberof org.ekstep.contenteditor.api
     */
	getCanvas: function () {
		return org.ekstep.contenteditor.stageManager.canvas
	},

	/**
     * Retrns the current stage object to the plugin. Plugins might use this to query other objects on the
     * canvas or access other stage context.
     * @memberof org.ekstep.contenteditor.api
     */
	getCurrentStage: function () {
		return org.ekstep.contenteditor.stageManager.currentStage
	},

	/**
     * Retrns the specified stage to the plugin. This can be used to build scenarios where a plugin might be
     * linking multiple stages together (e.g. when building navigation plugins).
     * @memberof org.ekstep.contenteditor.api
     */
	getStage: function (stageId) {
		return org.ekstep.contenteditor.stageManager.getStage(stageId)
	},

	/**
     * Refreshes the rendering of stages - plugins can request the stages to be refreshed if any change
     * has been made.
     * @memberof org.ekstep.contenteditor.api
     */
	refreshStages: function () {
		/* istanbul ignore next */
		// org.ekstep.contenteditor.api.ngSafeApply(org.ekstep.contenteditor.api.getAngularScope(), function() { org.ekstep.contenteditor.toolbarManager.scope.stages = org.ekstep.contenteditor.stageManager.stages; });
	},

	/**
     * Returns the currently selected active object on the canvas. This can be used by plugins to provide
     * contextual support - e.g. show words for a given text object when the text is selected.
     * @memberof org.ekstep.contenteditor.api
     */
	getCurrentObject: function () {
		/* var activeObj = org.ekstep.contenteditor.stageManager.canvas.getActiveObject();
        if (!activeObj) return false;
        var pluginId = activeObj.id;
        return org.ekstep.contenteditor.api.getPluginInstance(pluginId); */
	},

	/**
     * Returns the current group of selected objects. This is possible when a user does multi-select by
     * clicking on multiple objects or by panning on the canvas.
     * @memberof org.ekstep.contenteditor.api
     */
	getCurrentGroup: function () {
		/* if(org.ekstep.contenteditor.stageManager.canvas.getActiveGroup()){
        var plugins = org.ekstep.contenteditor.stageManager.canvas.getActiveGroup()._objects;
        var group = [];
        _.forEach(plugins, function(plugins, index) {
            var obj = org.ekstep.contenteditor.api.getPluginInstance(plugins.id);
            group.push(obj);
        });
        return group;
        } */
	},

	/**
     * Retrns the current group on the fabric canvas. This provides access to the fabric object. If you
     * want to access the plugin instance that is currently selected, use getCurrentGroup() instead.
     * @memberof org.ekstep.contenteditor.api
     */
	getEditorGroup: function () {
		/* var group = org.ekstep.contenteditor.stageManager.canvas.getActiveGroup();
        return group; */
	},

	/**
     * Retrns the current object on the fabric canvas. This provides access to the fabric object. If you
     * want to access the plugin instance that is currently selected, use getCurrentObject() instead.
     * @memberof org.ekstep.contenteditor.api
     */
	getEditorObject: function () {
		//    return org.ekstep.contenteditor.stageManager.canvas.getActiveObject();
	},

	/**
     * Notifies the framework to render the canvas once again. This can be done by the plugin when
     * its config or state is modified via the config views.
     * @memberof org.ekstep.contenteditor.api
     */
	render: function () {
		// org.ekstep.contenteditor.stageManager.canvas.renderAll();
	},

	/**
     * Returns a plugin instance for the given plugin ID. Plugins can use this work with dependencies
     * or build plugins that enhance the behavior of other plugins.
     * @memberof org.ekstep.contenteditor.api
     */
	getPluginInstance: function (pluginId) {
		return org.ekstep.pluginframework.pluginManager.getPluginInstance(pluginId)
	},

	/**
     * Allows the plugins to request an update to the context menu when one or more objects are selected.
     * This can be used by a plugin to add more actions to the context menu - e.g. when a text is selected,
     * a word parser plugin can add context menu for spell check, or for adding word definition popups.
     * @param menu {object} Menu item to add - see the manifest for the structre of the menu item
     * @memberof org.ekstep.contenteditor.api
     */
	updateContextMenu: function (menu) {
		// org.ekstep.contenteditor.toolbarManager.updateContextMenu([menu]);
	},

	/**
     * Allows the plugins to request an update to the context menu by supplying multiple menu items.
     * This can be used by a plugin to add more actions to the context menu - e.g. when a text is selected,
     * a word parser plugin can add context menu for spell check, or for adding word definition popups.
     * @param menu {array} Array of menu items to add - see the manifest for the structre of the menu item
     * @memberof org.ekstep.contenteditor.api
     */
	updateContextMenus: function (menus) {
		// org.ekstep.contenteditor.toolbarManager.updateContextMenu(menus);
	},
	updateSidebarMenu: function (menu) {
		// org.ekstep.contenteditor.sidebarManager.updateSidebarMenu(menu);
	},
	/**
     * Allows the plugins to request loading and instantiating another plugin. This is useful when
     * a plugin depends upon other plugins - e.g. a wordpicker might dependend upon an asset picker.
     * @param id {string} Fully qualified plugin id to load and instantiate
     * @param data {object} Data to be passed during instantiation (initial state)
     * @param parent {object} Parent scope - use this
     * @param override {object} Any function overrides - e.g. you can override the handlers of the plugin
     * @see org.ekstep.composite-text-image-shape plugin for a sample of leveraging this.
     * @memberof org.ekstep.contenteditor.api
     */
	instantiatePlugin: function (id, data, parent, override) {
		return org.ekstep.pluginframework.pluginManager.invoke(id, data, parent, override)
	},

	/**
     * Plugins can instantiate a stage and add it to the content. This can be done by special plugins that
     * work at a stage level or cause multiple stages to be added based on the configuration.
     * @param stage {object} Stage to add to the content
     * @memberof org.ekstep.contenteditor.api
     */
	addStage: function (stage) {
		// org.ekstep.contenteditor.stageManager.addStage(stage);
	},

	/**
     * Lookup for another plugin in the current plugin manager scope.
     * @param id {string} Plugin id to return. Undefined if the plugin has not been loaded.
     * @memberof org.ekstep.contenteditor.api
     */
	getPlugin: function (id) {
		return org.ekstep.pluginframework.pluginManager.plugins[id]
	},

	/**
     * Adds a plugin instance to the manager. This may be used when a plugin instantiates other plugins. The
     * newly instantiated plugins are added to the framework's registry, making them discoverable by others.
     * Useful for scenarios where plugins depend on others, or composite plugins.
     * @param pluginInstance {object} Plugin object instantiated by this plugin.
     * @memberof org.ekstep.contenteditor.api
     */
	addPluginInstance: function (pluginInstance) {
		org.ekstep.pluginframework.pluginManager.addPluginInstance(pluginInstance)
	},

	/**
     * Removes a plugin instance from the manager. Do this only if you instantiated the plugin using addPluginInstance()
     * @param pluginInstance {object} Plugin object instantiated by this plugin.
     * @memberof org.ekstep.contenteditor.api
     */
	removePluginInstance: function (pluginInstance) {
		org.ekstep.pluginframework.pluginManager.removePluginInstance(pluginInstance)
	},

	/**
     * Creates a deep copy of the given plugin object with an offset x and y position. This is useful when
     * you are building plugins that enable copy paste type functionality for example.
     * @param pluginInstance {object} Plugin object instantiated by this plugin.
     * @memberof org.ekstep.contenteditor.api
     */
	cloneInstance: function (plugin) {
		/* var data = plugin.getCopy();
        data = _.omit(data, ["id", "event"]);
        if (plugin.parent.id == org.ekstep.contenteditor.api.getCurrentStage().id) {
            data.x = data.x + 2;
            data.y = data.y + 2;
        }
        org.ekstep.contenteditor.api.instantiatePlugin(plugin.manifest.id, data, org.ekstep.contenteditor.api.getCurrentStage());
        */
	},

	/**
     * Returns all stages in the current document. This could be useful when plugins work across stages
     * such as timers that work across stages or page number plugins. Using this, a plugin can get access to all
     * stages, and instantiate plugins on each stage.
     * @memberof org.ekstep.contenteditor.api
     */
	getAllStages: function () {
		// return org.ekstep.contenteditor.stageManager.stages;
	},

	/**
     * Selector for plugins of a given type in the document. This can be used by plugins to discover other
     * instances of the same plugin, or other plugins that are compatible with this plugin. E.g. a wordnet
     * plugin might use this to discover all other text plugins in the content.
     *
     * @param  {String} stage        Stage ID
     * @param  {Array} includeTypes Include plugins
     * @param  {Array} excludeTypes Exclude plugins
     * @param  {Array} excludeIds   Exclude specific plugin instances
     * @return {Array}              Array of plugin instances matching the given criteria
     * @memberof org.ekstep.contenteditor.api
     */
	getStagePluginInstances: function (stage, includeTypes, excludeTypes, excludeIds) {
		/* var instances = _.clone(org.ekstep.contenteditor.api.getStage(stage).children);
        if (includeTypes) {
            instances = _.filter(instances, function(obj) {
                return includeTypes.indexOf(obj.manifest.id) != -1;
            });
        }
        if (excludeTypes) {
            instances = _.filter(instances, function(obj) {
                return excludeTypes.indexOf(obj.manifest.id) == -1;
            });
        }
        if (excludeIds) {
            instances = _.filter(instances, function(obj) {
                return excludeIds.indexOf(obj.id) == -1;
            });
        }
        return instances; */
	},

	/**
     * Get matching plugin instances. This function returns instances across all stages matching the given criteria
     *
     * @param  {Array} includeTypes Include plugins
     * @param  {Array} excludeTypes Exclude plugins
     * @param  {Array} excludeIds   Exclude specific plugin instances
     * @return {Array}              Array of plugin instances matching the given criteria
     * @memberof org.ekstep.contenteditor.api
     */
	getPluginInstances: function (includeTypes, excludeTypes, excludeIds) {
		var instances = _.clone(org.ekstep.pluginframework.pluginManager.pluginInstances)
		if (includeTypes) {
			instances = _.filter(instances, function (obj) {
				return includeTypes.indexOf(obj.manifest.id) !== -1
			})
		}
		if (excludeTypes) {
			instances = _.filter(instances, function (obj) {
				return excludeTypes.indexOf(obj.manifest.id) === -1
			})
		}
		if (excludeIds) {
			instances = _.filter(instances, function (obj) {
				return excludeIds.indexOf(obj.id) === -1
			})
		}
		return instances
	},

	/**
     * Allows plugins to load a media object that they may depend upon.
     * @param assetId {string} ID of the media asset to load
     * @memberof org.ekstep.contenteditor.api
     */
	getMedia: function (assetId) {
		// return org.ekstep.contenteditor.mediaManager.getMedia(assetId);
	},

	/**
     * Get the media asset's reverse proxy URL
     * @param  {String} url Fully qualified URL
     * @return {String}     Reverse proxied URL
     * @memberof org.ekstep.contenteditor.api
     */
	getMediaReverseProxyURL: function (url) {
		// return org.ekstep.contenteditor.mediaManager.getMediaOriginURL(url);
	},

	/**
     * API to load a plugin dynamically. Any plugin to be loaded should be ideally declared as dependency in the manifest.
     *
     * @param  {String} pluginId      Plugin ID
     * @param  {String} pluginVersion Plugin Version
     * @memberof org.ekstep.contenteditor.api
     */
	loadPlugin: function (pluginId, pluginVersion, callback) {
		org.ekstep.pluginframework.pluginManager.loadPluginWithDependencies(pluginId, pluginVersion, 'plugin', undefined, [], callback)
	},

	/**
     * Utility API to update the plugin dimenstions once any action like - move, resize etc are performed
     *
     * @param  {Object} inst Plugin Instance
     * @memberof org.ekstep.contenteditor.api
     */
	updatePluginDimensions: function (inst) {
		inst.attributes.x = inst.editorObj.getLeft()
		inst.attributes.y = inst.editorObj.getTop()
		inst.attributes.w = inst.editorObj.getWidth() - inst.editorObj.getStrokeWidth()
		inst.attributes.h = inst.editorObj.getHeight() - inst.editorObj.getStrokeWidth()
		inst.attributes.rotate = inst.editorObj.getAngle()
		if (_.isFunction(inst.editorObj.getRx)) { inst.attributes.r = inst.editorObj.getRx() }
	},
	ngSafeApply: function (scope, fn) {
		// if (scope) scope.$safeApply(fn);
	},
	/**
     * API to load and initialize a plugin to the current stage
     *
     * @param  {String} pluginId      Plugin ID
     * @param  {String} pluginVersion Plugin Version
     * @param  {Long} publishedTime   Plugin published timestamp (for cache busting)
     * @param {Class} parent          Parent for the plugin
     * @memberof org.ekstep.contenteditor.api
     */
	loadAndInitPlugin: function (pluginId, pluginVersion, publishedTime, parent) {
		parent = parent || this.getCurrentStage()
		org.ekstep.pluginframework.pluginManager.loadAndInitPlugin(pluginId, pluginVersion, publishedTime, parent)
	},

	/**
     * API to Resolve plugin resource URL. This API would resolve to the repo the plugin is loaded from.
     *
     * @param  {String} pluginId      Plugin ID
     * @param  {String} pluginVersion Plugin Version
     * @param  {String} resource resource relative URL
     * @return {String}          Resolved URL
     * @memberof org.ekstep.contenteditor.api
     */
	resolvePluginResource: function (id, ver, resource) {
		return org.ekstep.pluginframework.pluginManager.resolvePluginResource(id, ver, resource)
	},

	/**
     * API to register for a keyboard command
     *
     * @param  {String}   command  Key combination. For ex: ctrl+s, ctrl+c etc
     * @param  {Function} callback Callback to invoke when the key is pressed
     * @memberof org.ekstep.contenteditor.api
     */
	registerKeyboardCommand: function (command, callback) {
		org.ekstep.pluginframework.keyboardManager.registerKeyCombination(command, callback)
	},
	addResourceRepository: function (repo, position) {
		if (repo) org.ekstep.pluginframework.resourceManager.addRepo(repo, position)
	}
}

window.ecEditor = window.org.ekstep.contenteditor.api

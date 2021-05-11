org.ekstep.contenteditor.config = {
	baseURL: 'https://sunbird.stackroutelabs.com/',
	apislug: '/action',
	build_number: 'BUILDNUMBER',
	pluginRepo: '/plugins',
	aws_s3_urls: ['https://s3.ap-south-1.amazonaws.com/ekstep-public-dev/', 'https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/'],
	plugins: [
	{ 'id': 'org.ekstep.developer', 'ver': '1.0', 'type': 'plugin' },
	{ 'id': 'org.ekstep.sunbirdcommonheader', 'ver': '1.9', 'type': 'plugin' },
	{ 'id': 'org.ekstep.todo', 'ver': '1.1', 'type': 'plugin' },
	{ 'id': 'org.ekstep.review', 'ver': '1.0', 'type': 'plugin' },
	{ 'id': 'org.ekstep.preview', 'ver': '1.2', 'type': 'plugin' },
	{ 'id': 'org.ekstep.navigation', 'ver': '1.0', 'type': 'plugin' },
	{ 'id': 'org.ekstep.questionset', 'ver': '1.0', 'type': 'plugin' },
	{
	'id':
	'org.ekstep.video', 'ver': '1.0', 'type': 'plugin'
	},
	// { 'id': 'org.ekstep.questionunit.zoom', 'ver': '1.0', 'type': 'plugin' },
	{ 'id': 'org.ekstep.zoom.video', 'ver': '1.0', 'type': 'plugin' }
	],
	corePluginsPackaged: true,
	dispatcher: 'local',
	localDispatcherEndpoint: '/app/telemetry',
	previewURL: '/app/preview/preview.html'
	}
	org.ekstep.contenteditor.extendedConfig = {
	corePlugins: ['text', 'audio', 'div', 'hotspot', 'image', 'shape', 'scribble', 'htext'],
	corePluginMapping: {
	'text': 'org.ekstep.text',
	'image': 'org.ekstep.image',
	'shape': 'org.ekstep.shape',
	'stage': 'org.ekstep.stage',
	'hotspot': 'org.ekstep.hotspot',
	'scribble': 'org.ekstep.scribblepad',
	'htext': 'org.ekstep.text',
	'audio': 'org.ekstep.audio'
	},
	useProxyForURL: false
	}
	
	org.ekstep.contenteditor.baseConfigManifest = [{
	'propertyName': 'autoplay',
	'title': 'Auto play',
	'description': "Set the element's playability",
	'dataType': 'boolean',
	'required': true,
	'defaultValue': false
	}, {
	'propertyName': 'visible',
	'title': 'Visible',
	'description': "Set the element's Visibility",
	'dataType': 'boolean',
	'required': true,
	'defaultValue': true
	}, {
	'propertyName': 'stroke',
	'title': 'Border Color',
	'description': 'Set the border color for element',
	'dataType': 'colorpicker',
	'required': true,
	'defaultValue': 'rgba(255, 255, 255, 0)'
	}]
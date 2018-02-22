// IE8 does not support array.indexOf
if (!Array.prototype.indexOf)
{
	/** @ignore */
	Array.prototype.indexOf = function(item, i) {
		i || (i = 0);
		var length = this.length;
		if (i < 0) i = length + i;
		for (; i < length; i++)
			if (this[i] === item) return i;
		return -1;
	};
}

var kekuleFiles = {
	'lan': {
		'files': [
			'lan/classes.js',
			'lan/xmlJsons.js',
			'lan/serializations.js'
		],
		'category': 'lan',
		'minFile': 'root.min.js'
	},
	'root': {
		'files': [
			'core/kekule.root.js'
		],
		'category': 'root',
		'minFile': 'root.min.js'
	},

	'localization': {
		'requires': ['lan', 'root'],
		'files': [
			'localization/kekule.localizations.js'
		],
		'category': 'localization',
		'minFile': 'localization.min.js'
	},
	'localizationData': {
		'requires': ['localization'],
		'files': [
			'localization/en/kekule.localize.general.en.js',
			'localization/en/kekule.localize.widget.en.js',
			'localization/en/kekule.localize.objDefines.en.js'
		],
		'category': 'localization',
		'minFile': 'localization.min.js'
	},

	'common': {
		'requires': ['lan', 'root', 'localization'],
		'files': [
			'core/kekule.common.js',
			'core/kekule.exceptions.js',
			'utils/kekule.utils.js'
		],
		'category': 'common',
		'minFile': 'common.min.js'
	},

	'core': {
		'requires': ['lan', 'root', 'common', 'data'],
		'files': [
			'core/kekule.configs.js',
			'core/kekule.elements.js',
			'core/kekule.electrons.js',
			'core/kekule.valences.js',
			'core/kekule.structures.js',
			'core/kekule.structureBuilder.js',
			'core/kekule.reactions.js',
			'core/kekule.chemUtils.js',

			'chemdoc/kekule.glyph.base.js',
			'chemdoc/kekule.glyph.pathGlyphs.js',
			'chemdoc/kekule.glyph.lines.js',
			'chemdoc/kekule.glyph.chemGlyphs.js',
			'chemdoc/kekule.contentBlocks.js',
			'chemdoc/kekule.attachedMarkers.js',
			'chemdoc/kekule.commonChemMarkers.js'
		],
		'category': 'core'
	},

	'html': {
		'requires': ['lan', 'root', 'common'],
		'files': [
			'xbrowsers/kekule.x.js',
			'html/kekule.nativeServices.js',
			'html/kekule.predefinedResLoaders.js',
			'utils/kekule.domUtils.js',
			'utils/kekule.domHelper.js'
		],
		'category': 'core'
	},

	'io': {
		'requires': ['lan', 'root', 'common', 'core'],
		'files': [
			'utils/kekule.textHelper.js',
			'io/kekule.io.js',
			'io/cml/kekule.io.cml.js',
			'io/mdl/kekule.io.mdlBase.js',
			'io/mdl/kekule.io.mdl2000.js',
			'io/mdl/kekule.io.mdl3000.js',
			'io/mdl/kekule.io.mdlIO.js',
			'io/smiles/kekule.io.smiles.js',
			'io/native/kekule.io.native.js'
		],
		'category': 'io'
	},

	'render': {
		'requires': ['lan', 'root', 'common', 'core', 'html'],
		'files': [
			'render/kekule.render.extensions.js',
			'render/kekule.render.base.js',
			'render/kekule.render.renderColorData.js',
			'render/kekule.render.utils.js',
			'render/kekule.render.configs.js',
			'render/kekule.render.baseTextRender.js',
			'render/kekule.render.boundInfoRecorder.js',
			'render/2d/kekule.render.renderer2D.js',
			'render/2d/kekule.render.glyphRender2D.js',
			'render/2d/kekule.render.canvasRenderer.js',
			'render/2d/kekule.render.raphaelRenderer.js',
			'render/3d/kekule.render.renderer3D.js',
			'render/3d/kekule.render.threeRenderer.js',
			'render/kekule.render.painter.js'
		],
		'category': 'render'
	},

	'widget': {
		'requires': ['lan', 'root', 'common', 'html'],
		'files': [
			'widgets/operation/kekule.operations.js',
			'widgets/operation/kekule.actions.js',

			'widgets/kekule.widget.bindings.js',
			'widgets/kekule.widget.base.js',
			'widgets/kekule.widget.sys.js',
			'widgets/kekule.widget.clipboards.js',
			'widgets/kekule.widget.helpers.js',
			'widgets/kekule.widget.styleResources.js',
			'widgets/kekule.widget.autoLaunchers.js',
			'widgets/transitions/kekule.widget.transitions.js',
			'widgets/transitions/kekule.widget.transMgr.js',
			'widgets/commonCtrls/kekule.widget.resizers.js',
			'widgets/commonCtrls/kekule.widget.movers.js',
			'widgets/commonCtrls/kekule.widget.images.js',
			'widgets/commonCtrls/kekule.widget.containers.js',
			'widgets/commonCtrls/kekule.widget.menus.js',
			'widgets/commonCtrls/kekule.widget.buttons.js',
			'widgets/commonCtrls/kekule.widget.formControls.js',
			'widgets/commonCtrls/kekule.widget.nestedContainers.js',
			'widgets/commonCtrls/kekule.widget.treeViews.js',
			'widgets/commonCtrls/kekule.widget.dialogs.js',
			'widgets/commonCtrls/kekule.widget.msgPanels.js',
			'widgets/commonCtrls/kekule.widget.tabViews.js',
			'widgets/advCtrls/kekule.widget.valueListEditors.js',
			'widgets/advCtrls/kekule.widget.colorPickers.js',
			'widgets/advCtrls/kekule.widget.textEditors.js',
			'widgets/advCtrls/kekule.widget.widgetGrids.js',
			'widgets/advCtrls/objInspector/kekule.widget.objInspectors.js',
			'widgets/advCtrls/objInspector/kekule.widget.objInspector.propEditors.js',
			'widgets/advCtrls/objInspector/kekule.widget.objInspector.operations.js',
			'widgets/advCtrls/kekule.widget.configurators.js',
			'widgets/advCtrls/grids/kekule.widget.dataSets.js',
			'widgets/advCtrls/grids/kekule.widget.dataGrids.js',
			'widgets/sys/kekule.widget.sysMsgs.js',

			'widgets/operation/kekule.operHistoryTreeViews.js'  // debug
		],
		'category': 'widget'
	},

	'chemWidget': {
		'requires': ['lan', 'root', 'common', 'core', 'html', 'io', 'render', 'algorithm', 'widget'],
		'files': [
			'widgets/chem/kekule.chemWidget.base.js',
			'widgets/chem/kekule.chemWidget.dialogs.js',
			'widgets/chem/periodicTable/kekule.chemWidget.periodicTables.js',
			'widgets/chem/kekule.chemWidget.chemObjDisplayers.js',
			'widgets/chem/structureTreeView/kekule.chemWidget.structureTreeViews.js',
			'widgets/chem/uiMarker/kekule.chemWidget.uiMarkers.js',
			'widgets/chem/viewer/kekule.chemWidget.viewers.js',
			'widgets/chem/viewer/kekule.chemWidget.viewerGrids.js',
			'widgets/chem/viewer/kekule.chemWidget.chemObjInserters.js',

			'widgets/chem/editor/kekule.chemEditor.extensions.js',
			'widgets/chem/editor/kekule.chemEditor.baseEditors.js',
			'widgets/chem/editor/kekule.chemEditor.operations.js',
			'widgets/chem/editor/kekule.chemEditor.editorUtils.js',
			'widgets/chem/editor/kekule.chemEditor.configs.js',
			'widgets/chem/editor/kekule.chemEditor.repositoryData.js',
			'widgets/chem/editor/kekule.chemEditor.repositories.js',
			'widgets/chem/editor/kekule.chemEditor.chemSpaceEditors.js',
			'widgets/chem/editor/kekule.chemEditor.nexus.js',
			'widgets/chem/editor/kekule.chemEditor.composers.js',
			'widgets/chem/editor/kekule.chemEditor.actions.js',

			'widgets/advCtrls/objInspector/kekule.widget.objInspector.chemPropEditors.js'
		],
		'category': 'chemWidget'
	},

	'algorithm': {
		'requires': ['lan', 'root', 'common', 'core'],
		'files': [
			'algorithm/kekule.graph.js',
			'algorithm/kekule.structures.helpers.js',
			//'algorithm/kekule.structures.comparers.js',
			'algorithm/kekule.structures.canonicalizers.js',
			'algorithm/kekule.structures.ringSearches.js',
			'algorithm/kekule.structures.aromatics.js',
			'algorithm/kekule.structures.standardizers.js',
			'algorithm/kekule.structures.searches.js',
			'algorithm/kekule.structures.stereos.js'
		],
		'category': 'algorithm'
	},

	'calculation': {
		'requires': ['lan', 'root', 'common', 'core', 'algorithm'],
		'files': [
			'calculation/kekule.calc.base.js'
		]
	},

	'data': {
		'requires': ['root'],
		'files': [
			'data/kekule.chemicalElementsData.js',
			'data/kekule.isotopesData.organSet.js',
			'data/kekule.structGenAtomTypesData.js',
			'data/kekule.dataUtils.js'
		]
	},

	'emscripten': {
		'requires': ['root', 'common'],
		'files': [
			'_extras/kekule.emscriptenUtils.js'
		],
		'category': 'extra'
	},

	'openbabel': {
		'requires': ['lan', 'root', 'core', 'emscripten', 'io'],
		'files': [
			'localization/en/kekule.localize.extras.openbabel.en.js',
			'_extras/OpenBabel/kekule.openbabel.base.js',
			'_extras/OpenBabel/kekule.openbabel.io.js',
			'_extras/OpenBabel/kekule.openbabel.structures.js'
		],
		'category': 'extra'
	},
	'indigo': {
		'requires': ['lan', 'root', 'core', 'emscripten', 'io'],
		'files': [
			'_extras/Indigo/kekule.indigo.base.js',
			'_extras/Indigo/kekule.indigo.io.js'
		],
		'category': 'extra'
	},
	'inchi': {
		'requires': ['lan', 'root', 'core', 'emscripten', 'io'],
		'files': [
			'_extras/InChI/kekule.inchi.js'
		],
		'category': 'extra'
	},

	// Localization resources
	'localizationData.zh': {
		'requires': ['localization'],
		'files': [
			'localization/zh/kekule.localize.general.zh.js',
			'localization/zh/kekule.localize.widget.zh.js'
			//'localization/zh/kekule.localize.objDefines.zh.js'
		],
		'category': 'localizationData.zh',
		'autoCompress': false  // do not compress js automatically
	}
};

var prequestModules = ['lan', 'root', 'localization', 'localizationData', 'common'];
// var nodeModules = prequestModules.concat(['core', 'io', 'algorithm', 'calculation', 'data']);
var usualModules = prequestModules.concat(['core', 'html', 'io', 'render', 'widget', 'chemWidget', 'algorithm', 'calculation', 'data']);
var allModules = usualModules.concat(['emscripten', 'inchi', 'openbabel', 'indigo']);

function getEssentialModules(modules)
{
	var ms = modules || usualModules;
	ms = prequestModules.concat(ms);
	var result = [];

	var pushModule = function(modules, moduleName)
	{
		if (modules.indexOf(moduleName) < 0)
		{
			var module = kekuleFiles[moduleName];
			if (module && module.requires)
			{
				for (var j = 0, k = module.requires.length; j < k; ++j)
				{
					var rm = module.requires[j];
					pushModule(modules, rm);
				}
			}
			modules.push(moduleName);
		}
	};
	for (var i = 0, l = ms.length; i < l; ++i)
	{
		var module = ms[i];
		pushModule(result, module);
	}
	return result;
}

function getEssentialFiles(modules)
{
	var ms = getEssentialModules(modules);
	var result = [];
	for (var i = 0, l = ms.length; i < l; ++i) {
		var moduleName = ms[i];
		var m = kekuleFiles[moduleName];
		if (m && m.files) {
			result = result.concat(m.files);
		}
	}
	return result;
}

var scriptInfo = {
	'src': this.__filename || '',
	'modules': allModules
}
var files = getEssentialFiles(scriptInfo.modules)

var Kekule = {}
files.forEach(filename => {
	var module = require('./' + filename)
	if	(typeof module === 'function') {
		Kekule = module(Kekule)
	}
})
Kekule._loaded()

var Class = require('./lan/classes').Class
var ClassEx = require('./lan/classes').ClassEx
var ObjectEx = require('./lan/classes').ObjectEx
var DataType = require('./lan/classes').DataType

exports.Kekule = Kekule
exports.Class = Class
exports.ClassEx = ClassEx
exports.ObjectEx = ObjectEx
exports.DataType = DataType
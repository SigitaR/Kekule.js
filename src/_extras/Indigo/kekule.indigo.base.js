/**
 * Created by ginger on 2017/5/9.
 */

/*
 * requires /utils/kekule.utils.js
 * requires /core/kekule.common.js
 * requires /core/kekule.structures.js
 * requires /_extras/kekule.emscriptenUtils.js
 * requires /localization/
 */

module.exports = function(Kekule){

/** @ignore */
var EU = Kekule.EmscriptenUtils;

/**
 * Initialization options of OpenBabel js module.
 * @private
 * @ignore
 */
var indigoInitOptions = {
	usingModulaize: true,  // whether using modularize option to build OpenBabel.js
	moduleName: 'IndigoModule', // the name of OpenBabl module
	indigoAdaptFuncName: 'CreateIndigo'
};

/**
 * Namespace of Indigo related objects.
 * @namespace
 */
Kekule.Indigo = {
	/**
	 * A flag, whether auto enable InChI function when find InChI lib is already loaded.
	 */
	_autoEnabled: true,
	/** @private */
	_module: null, // a variable to store created OpenBabel module object
	/** @private */
	_indigo: null,
	/** @private */
	SCRIPT_FILE: 'indigo.js',
	/** @private */
	HELPER_SCRIPT_FILE: 'indigoAdapter.js',
	/** @private */
	_enableFuncs: [],
	isScriptLoaded: function()
	{
		return EU.isSupported(indigoInitOptions.moduleName)
				&& (typeof(Kekule.$jsRoot[indigoInitOptions.indigoAdaptFuncName]) !== 'undefined');
	},
	getModule: function()
	{
		if (!KI._module)
		{
			KI._module = EU.getRootModule(indigoInitOptions.moduleName);
		}
		return KI._module;
	},
	/**
	 * Returns Indigo adapter instance.
	 */
	getIndigo: function()
	{
		if (!KI._indigo)
		{
			var module = KI.getModule();
			if (module)
				KI._indigo = (Kekule.$jsRoot[indigoInitOptions.indigoAdaptFuncName])(module);
		}
		return KI._indigo;
	},
	getClassCtor: function(className)
	{
		return EU.getClassCtor(className, KI.getModule());
	},
	/**
	 * Check if OpenBabel js file is successful loaded and available.
	 * @returns {Bool}
	 */
	isAvailable: function()
	{
		return KI.getModule() && KI.getIndigo();
	},

	/**
	 * Load Indigo.js lib and enable all related functions
	 */
	enable: function(callback)
	{
		if (!KI.isScriptLoaded())  // Indigo not loaded?
		{
			KI.loadIndigoScript(document, function(){
				//Kekule.IO.registerAllInChIFormats();
				KI._enableAllFunctions();
				if (callback)
					callback();
			});
		}
		else
		{
			KI._enableAllFunctions();
			if (callback)
				callback();
		}
	},
	_enableAllFunctions: function()
	{
		if (KI.isScriptLoaded())
		{
			var funcs = KI._enableFuncs;
			for (var i = 0, l = funcs.length; i < l; ++i)
			{
				var func = funcs[i];
				if (func)
					func();
			}
		}
	}
};
/** @ignore */
Kekule.Indigo.loadIndigoScript = function(doc, callback)
{
	if (!KI._scriptLoadedBySelf && !KI.isScriptLoaded()) {
		const IndigoModule = require('../../../lib/indigo')
		const indigoAdapter = require('./indigoAdapter')(IndigoModule)
		Kekule.Indigo.getIndigo();
		if (callback)
			callback();
		KI._scriptLoadedBySelf = true;
	} else {
		KI._scriptLoadedBySelf = true;
		if (callback)
			callback();
	}

};

var KI = Kekule.Indigo;

/**
 * Util class to convert object between Indigo and Kekule.
 * Unfinished
 * @class
 * @ignore
 */
Kekule.Indigo.AdaptUtils = {
};

Kekule._registerAfterLoadProc(function() {if (KI._autoEnabled) KI._enableAllFunctions()} );
	return Kekule
}
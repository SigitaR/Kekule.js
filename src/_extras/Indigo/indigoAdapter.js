module.exports = function CreateIndigo(IndigoModule)  // create Indigo adapter object
{
	var result = {
		INDIGO_RC_NOT_CENTER: -1,
		INDIGO_RC_UNMARKED: 0,
		INDIGO_RC_CENTER: 1,
		INDIGO_RC_UNCHANGED: 2,
		INDIGO_RC_MADE_OR_BROKEN: 4,
		INDIGO_RC_ORDER_CHANGED: 8,
		INDIGO_ABS: 1,
		INDIGO_OR: 2,
		INDIGO_AND: 3,
		INDIGO_EITHER: 4,
		INDIGO_UP: 5,
		INDIGO_DOWN: 6,
		INDIGO_CIS: 7,
		INDIGO_TRANS: 8,
		INDIGO_CHAIN: 9,
		INDIGO_RING: 10,
		INDIGO_ALLENE: 11,
		INDIGO_SINGLET: 101,
		INDIGO_DOUBLET: 102,
		INDIGO_TRIPLET: 103,
		free: IndigoModule.cwrap('indigoFree', 'number', ['number']),
		setOption: IndigoModule.cwrap('indigoSetOption', 'number', ['string', 'string']),
		loadMoleculeFromString: IndigoModule.cwrap('indigoLoadMoleculeFromString', 'number', ['string']),
		molfile: IndigoModule.cwrap('indigoMolfile', 'string', ['number']),
		layout: IndigoModule.cwrap('indigoLayout', 'number', ['number'])
	};
	result._module = IndigoModule;  // save module object
	return result;
}
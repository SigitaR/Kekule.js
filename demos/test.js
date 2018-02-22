const { Kekule } = require("kekule")
const CORRECT_MOL = `{"id":"m1","renderOptions":{"expanded":true,"__type__":"object"},"charge":0,"parity":null,"ctab":{"nodes":[{"__type__":"Kekule.Atom","id":"a1","coord2D":{"x":9.299583333333334,"y":37.51833333333333,"__type__":"object"},"charge":0,"parity":null,"isotopeId":"C"},{"__type__":"Kekule.Atom","id":"a4","coord2D":{"x":9.299583333333334,"y":36.718333333333334,"__type__":"object"},"charge":0,"parity":null,"isotopeId":"C"},{"__type__":"Kekule.Atom","id":"a3","coord2D":{"x":8.606763010305784,"y":37.91833333333333,"__type__":"object"},"charge":0,"parity":null,"isotopeId":"C"},{"__type__":"Kekule.Atom","id":"a2","coord2D":{"x":9.992403656360885,"y":37.91833333333333,"__type__":"object"},"charge":0,"parity":null,"isotopeId":"C"}],"anchorNodes":[],"connectors":[{"__type__":"Kekule.Bond","id":"b3","parity":null,"bondType":"covalent","bondOrder":1,"electronCount":2,"isInAromaticRing":false,"connectedObjs":[0,1]},{"__type__":"Kekule.Bond","id":"b2","parity":null,"bondType":"covalent","bondOrder":1,"electronCount":2,"isInAromaticRing":false,"connectedObjs":[0,2]},{"__type__":"Kekule.Bond","id":"b1","parity":null,"bondType":"covalent","bondOrder":1,"electronCount":2,"isInAromaticRing":false,"connectedObjs":[0,3]}],"__type__":"Kekule.StructureConnectionTable"},"__type__":"Kekule.Molecule"}`;
const INCORRECT_MOL = `{"id":"m1","renderOptions":{"expanded":true,"__type__":"object"},"charge":0,"parity":null,"ctab":{"nodes":[{"__type__":"Kekule.Atom","id":"a2","coord2D":{"x":10.499070323027551,"y":37.998333333333335,"__type__":"object"},"charge":0,"parity":null,"isotopeId":"C"},{"__type__":"Kekule.Atom","id":"a1","coord2D":{"x":9.80625,"y":37.598333333333336,"__type__":"object"},"charge":0,"parity":null,"isotopeId":"C"}],"anchorNodes":[],"connectors":[{"__type__":"Kekule.Bond","id":"b1","parity":null,"bondType":"covalent","bondOrder":1,"electronCount":2,"isInAromaticRing":false,"connectedObjs":[0,1]}],"__type__":"Kekule.StructureConnectionTable"},"__type__":"Kekule.Molecule"}`;

function validateKekule (kekuleJSON) {
    let validKekule = false;
    try {
        validKekule = Kekule.IO.loadFormatData(kekuleJSON, 'Kekule-JSON');
    } catch (err) {
        // validKekule is still false
        console.log(err)
    }
    return validKekule;
}

const validCriteria = validateKekule(CORRECT_MOL);
const validStudentResponse = validateKekule(CORRECT_MOL);
let isTheSame
if (validCriteria && validStudentResponse) {
    console.log('valid stuff');
    isTheSame = validCriteria.isSameStructureWith(validStudentResponse, {lonePair: true});
} else {
    console.log('invalid stuff');
}

console.log('isthesame', isTheSame);

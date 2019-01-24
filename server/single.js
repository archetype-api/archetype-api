const db = require('../db/db');
module.exports = {
	allTypes: (req, res) => {
		res.status(200).send({
			success: 'true',
			message: 'types retrieved',
			types: db.types
		});
	},
	byName: (req, res) => {
		const name = req.params.name.toLowerCase();
		const nameQuery = db.types.filter((e, i) => {
			return e.name == name;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${name} retrieved`,
			types: nameQuery
		});
	},
	byAlias: (req, res) => {
		const alias = req.params.alias.toLowerCase();
		const aliasQuery = db.types.filter((e, i) => {
			return e.alias == alias;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${alias} retrieved`,
			types: aliasQuery
		});
	},
	byRole: (req, res) => {
		const role = req.params.role.toLowerCase();
		const roleQuery = db.types.filter((e, i) => {
			return e.role == role;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${role} retrieved`,
			types: roleQuery
		});
	},
	byAspect: (req, res) => {
		const aspect = req.params.aspect.toLowerCase();
		const aspectQuery = db.types.filter((e, i) => {
			return e.aspect == aspect;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${aspect} retrieved`,
			types: aspectQuery
		});
	},
	byDrive: (req, res) => {
		const drive = req.params.drive.toLowerCase();
		const driveQuery = db.types.filter((e, i) => {
			return e.drive == drive;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${drive} retrieved`,
			types: driveQuery
		});
	},
	byMethod: (req, res) => {
		const method = req.params.method.toLowerCase();
		const methodQuery = db.types.filter((e, i) => {
			return e.method == method;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${method} retrieved`,
			types: methodQuery
		});
	},
	byShadow: (req, res) => {
		const shadow = req.params.shadow.toLowerCase();
		const shadowQuery = db.types.filter((e, i) => {
			return e.shadow == shadow;
		});
		res.status(200).send({
			success: 'true',
			message: `archetype of ${shadow} retrieved`,
			types: shadowQuery
		});
	}
};

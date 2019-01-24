const test = [{ id: 1, test: 'test', description: 'description' }];

const types = [
	{
		archetype_id: 1,
		drive: 'leave a mark',
		aspect: 'ego',
		method: 'mastery',
		shadow: 'end justify the means',
		name: 'warrior',
		alias: 'hero',
		role: 'student',
		color: 'red'
	},
	{
		archetype_id: 2,
		drive: 'spiritual journey',
		aspect: 'soul',
		method: 'freedom',
		shadow: 'getting lost',
		name: 'explorer',
		alias: 'wanderer',
		role: 'outlier',
		color: 'orangered'
	},
	{
		archetype_id: 3,
		drive: 'order',
		aspect: 'soul',
		method: 'innovation',
		shadow: 'critic (nothing ever good enough)',
		name: 'creator',
		alias: 'artist',
		role: 'outlier',
		color: 'orange'
	},
	{
		archetype_id: 4,
		drive: 'connect with others',
		aspect: 'soul',
		method: 'intimacy',
		shadow: 'selfishness',
		name: 'lover',
		alias: 'none',
		role: 'outlier',
		color: 'gold'
	},
	{
		archetype_id: 5,
		drive: 'leave a mark',
		aspect: 'soul',
		method: 'liberation',
		shadow: 'indiffernce/cruelty',
		name: 'rebel',
		alias: 'outlaw',
		role: 'outlier',
		color: 'yellow'
	},
	{
		archetype_id: 6,
		drive: 'spiritual journey',
		aspect: 'self',
		method: 'hiding truth',
		shadow: 'believing/becoming the lie',
		name: 'trickster',
		alias: 'jester',
		role: 'student',
		color: 'yellowgreen'
	},
	{
		archetype_id: 7,
		drive: 'spiritual journey',
		aspect: 'self',
		method: 'knowledge',
		shadow: 'arrogance',
		name: 'mentor',
		alias: 'sage',
		role: 'master',
		color: 'green'
	},
	{
		archetype_id: 8,
		drive: 'order',
		aspect: 'self',
		method: 'power',
		shadow: 'abuse of power',
		name: 'magician',
		alias: 'wizard',
		role: 'master',
		color: 'cadetblue'
	},
	{
		archetype_id: 9,
		drive: 'leave a mark',
		aspect: 'self',
		method: 'control',
		shadow: 'tyrant',
		name: 'ruler',
		alias: 'king/father',
		role: 'master',
		color: 'blue'
	},
	{
		archetype_id: 10,
		drive: 'connect with others',
		aspect: 'ego',
		method: 'service',
		shadow: 'martyr',
		name: 'caregiver',
		alias: 'queen/mother',
		role: 'master',
		color: 'blueviolet'
	},
	{
		archetype_id: 11,
		drive: 'order',
		aspect: 'ego',
		method: 'safety',
		shadow: 'refusal of responsibility',
		name: 'innocent',
		alias: 'none',
		role: 'student',
		color: 'indigo'
	},
	{
		archetype_id: 12,
		drive: 'connect with others',
		aspect: 'ego',
		method: 'fitting in',
		shadow: 'mediocrity',
		name: 'orphan',
		alias: 'everyman',
		role: 'student',
		color: 'purple'
	}
];

const wheel = {
	1: { 3: 2, 5: 3, 7: 4, 9: 11, 11: 12 },
	2: { 4: 3, 6: 5, 8: 5, 10: 12, 12: 1 },
	3: { 5: 4, 7: 5, 9: 6, 11: 1, 1: 2 },
	4: { 6: 5, 8: 6, 10: 7, 12: 2, 2: 3 },
	5: { 7: 6, 9: 7, 11: 8, 1: 3, 3: 4 },
	6: { 8: 7, 10: 8, 12: 9, 2: 4, 4: 5 },
	7: { 9: 8, 11: 9, 1: 10, 3: 5, 6: 5 },
	8: { 10: 9, 12: 10, 2: 11, 4: 6, 6: 7 },
	9: { 11: 10, 1: 11, 3: 12, 5: 7, 7: 8 },
	10: { 12: 11, 2: 12, 4: 1, 6: 8, 8: 9 },
	11: { 1: 12, 3: 1, 5: 2, 7: 9, 9: 10 },
	12: { 2: 1, 4: 2, 6: 3, 8: 10, 10: 11 }
};

module.exports = { test, types, wheel };

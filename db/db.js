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

const drama = [
	{
		drama_id: 1,
		name: 'supplication',
		alias: null,
		description: 'asking or begging for something earnestly or humbly',
		scenario: {
			1: 'fugitive asks for help',
			2: 'exile begs for re-entry',
			3: 'restore the family name',
			4: 'mercy for breaking the code',
			5: 'adulterer begs forgiveness'
		},
		common: null
	},
	{
		drama_id: 2,
		name: 'deliverance',
		alias: 'rescue - redemption - salvation - acquittal',
		description:
			'being rescued, saved, or set free from something dangerous or unpleasant',
		scenario: {
			1: 'the unexpected arrival of a protector to rescue the distressed'
		},
		common: 44
	},
	{
		drama_id: 3,
		name: 'revenge following a crime',
		alias: null,
		description: 'the desire or act of repaying a wrong',
		scenario: {
			1: 'revenge for murder of loved one',
			2: 'revenge for dishonour or deflowering of loved one',
			3: 'revenge for destruction of reputation',
			4: 'revenge on gender for crime of the individual',
			5: 'revenge on race for crime of the individual',
			6: 'revenge via karma'
		},
		common: 48
	},
	{
		drama_id: 4,
		name: 'revenge contained within a family',
		alias: null,
		description:
			'the culmination of the negative emotions that run hot within familial structures',
		scenario: {
			1: 'struggle for familial power',
			2: 'revenge for missing approval',
			3: 'revenge for absence',
			4: 'the black sheep',
			5: 'infidelity',
			6: 'in-laws'
		},
		common: null
	},
	{
		drama_id: 5,
		name: 'the pursued',
		alias: 'the fugative - the outsider',
		description: 'to be on one side of the chase or hunt',
		scenario: {
			1: 'fugative from justice',
			2: 'fugative of love',
			3: 'hero in exile',
			4: 'the alienated hero'
		},
		common: 43
	},
	{
		drama_id: 6,
		name: 'disaster',
		alias: null,
		description:
			'sudden event or fact that causes catastrohpic fallout of psychologic or physical nature',
		scenario: {
			1: 'reversal of fortune',
			2: 'overthrown leader or system',
			3: 'loss of a loved one',
			4: 'natural disaster',
			5: 'disasters of love'
		},
		common: null
	},
	{
		drama_id: 7,
		name: 'cruelty and misfortune',
		alias: null,
		description: 'desire or act of causing others to suffer',
		scenario: {
			1: 'the sacrificed pawn',
			2: 'cruelty of own protectors',
			3: 'deliberate heartbreak',
			4: 'destroying the last hope of the desperate',
			5: 'losing the affection of the group',
			6: 'losing the affection of a loved one',
			7: 'deprived of love as punishment for betrayal',
			8: 'unjust punishment',
			9: 'unnoticed, unappreciated sacrifice'
		},
		common: 40
	},
	{
		drama_id: 8,
		name: 'revolt',
		alias: null,
		description: 'action against or refusal to acknowledge an authority',
		scenario: {
			1: 'oppressor and oppressed',
			2: 'tryant and victim',
			3: 'powerful and weak',
			4: 'whistleblower',
			5: 'stand against corruption',
			6: 'leaders unite against a common enemy'
		},
		common: null
	},
	{
		drama_id: 9,
		name: 'daring enterprise',
		alias: 'brave adventure',
		description: 'facing the impossible problem against all odds',
		scenario: {
			1: 'tactical problem',
			2: 'heist',
			3: 'ticking clock',
			4: 'small group of extraordinary',
			5: 'unselfish risk',
			6: 'united by loyalty'
		},
		common: 48
	},
	{
		drama_id: 10,
		name: 'abduction',
		alias: null,
		description: 'taking someone against their will',
		scenario: {
			1: 'abduction of the unwilling',
			2: 'abduction of the willing',
			3: 'rescue of the abducted'
		},
		common: null
	},
	{
		drama_id: 11,
		name: 'the enigma',
		alias: null,
		description:
			'person, thing, or situation that is mysterious or difficult to understand',
		scenario: { 1: '' },
		common: 38
	},
	{
		drama_id: 12,
		name: 'obtaining',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: 56
	},
	{
		drama_id: 13,
		name: 'enmity of kinsmen',
		alias: 'family at war',
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 14,
		name: 'rivalry of kinsmen',
		alias: 'family rivalry',
		description: '',
		scenario: { 1: '' },
		common: 9
	},
	{
		drama_id: 15,
		name: 'murderous adultery',
		alias: 'crimes of passion',
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 16,
		name: 'altered states',
		alias: 'madness',
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 17,
		name: 'fatal imprudence',
		alias: 'the gambler',
		description: '',
		scenario: { 1: '' },
		common: 50
	},
	{
		drama_id: 19,
		name: 'coincidence',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 19,
		name: 'dream state',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: 10
	},
	{
		drama_id: 20,
		name: 'self-sacrifice for idealism',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 21,
		name: 'self-sacrifice for family',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: 10
	},
	{
		drama_id: 22,
		name: 'everything sacrificed for passion',
		alias: 'desire - obsession - sex',
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 23,
		name: 'necessity of sacrificing loved ones',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 24,
		name: 'rivalry between superior and inferior',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 25,
		name: 'adultery',
		alias: 'betrayal of love',
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 26,
		name: 'incest',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: 4
	},
	{
		drama_id: 27,
		name: 'discovery of the dishonour of a loved one',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 28,
		name: 'obstacles to love',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: 46
	},
	{
		drama_id: 29,
		name: 'an enemy loved',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 30,
		name: 'ambition',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 31,
		name: 'conflicts with power',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: 52
	},
	{
		drama_id: 32,
		name: 'mistaken jealousy',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: 5
	},
	{
		drama_id: 33,
		name: 'erroneous judgement',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 34,
		name: 'remorse',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 35,
		name: 'recovery of a lost one',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	},
	{
		drama_id: 36,
		name: 'loss of a loved one',
		alias: null,
		description: '',
		scenario: { 1: '' },
		common: null
	}
];

module.exports = { test, types, wheel, drama };

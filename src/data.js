import uniqid from 'uniqid'
import Enumify from './enumify';

// --------------- Base --------------- //
const baseTypes = {
	STANDART: 'STANDART',
	EXOTIC: 'EXOTIC'
}

const ingredientsTypes = {
	CHEESE: 'CHEESE',
	VEGETABLE: 'VEGETABLE',
	NUT: 'NUT',
	HERB_OR_SPICEST: 'HERB_OR_SPICEST',
	SEA_FOOD: 'SEA_FOOD',
	MEAT: 'MEAT',
	EXOTIC: 'EXOTIC'
}

export class Bases extends Enumify {
	static standart = new Bases([
		{
			id: uniqid('base-standart-'),
			name: { en: 'Standart' },
			weight: 100,
			price: 200,
			type: baseTypes.STANDART
		}
	])

	static exotic = new Bases([
		{
			id: uniqid('base-exotic-'),
			name: { en: 'Butternut squash' },
			weight: 100,
			price: 400,
			type: baseTypes.EXOTIC
		},
		{
			id: uniqid('base-exotic-'),
			name: { en: 'Naan bread' },
			weight: 100,
			price: 500,
			type: baseTypes.EXOTIC
		},
		{
			id: uniqid('base-exotic-'),
			name: { en: 'Quinoa' },
			weight: 120,
			price: 600,
			type: baseTypes.EXOTIC
		},
		{
			id: uniqid('base-exotic-'),
			name: { en: 'Tortilla wrap' },
			weight: 80,
			price: 700,
			type: baseTypes.EXOTIC
		},
		{
			id: uniqid('base-exotic-'),
			name: { en: 'Cookie dough' },
			weight: 150,
			price: 800,
			type: baseTypes.EXOTIC
		}
	])

	static _ = this.closeEnum()

	constructor(values) {
		super()
		this.values = values
	}
}

// --------------- Ingredients --------------- //

export class Ingredients extends Enumify {
	static cheese = new Ingredients([
		{
			id: uniqid('ing-cheese-'),
			name: { en: 'mozzarella' },
			weight: 40,
			price: 300,
			type: ingredientsTypes.CHEESE
		},
		{
			id: uniqid('ing-cheese-'),
			name: { en: 'provolone' },
			weight: 50,
			price: 300,
			type: ingredientsTypes.CHEESE
		},
		{
			id: uniqid('ing-cheese-'),
			name: { en: 'cheddar' },
			weight: 50,
			price: 300,
			type: ingredientsTypes.CHEESE
		},
		{
			id: uniqid('ing-cheese-'),
			name: { en: 'parmesan' },
			weight: 50,
			price: 300,
			type: ingredientsTypes.CHEESE
		},
		{
			id: uniqid('ing-cheese-'),
			name: { en: 'gouda' },
			weight: 50,
			price: 500,
			type: ingredientsTypes.CHEESE
		},
		{
			id: uniqid('ing-cheese-'),
			name: { en: 'gruyere' },
			weight: 50,
			price: 500,
			type: ingredientsTypes.CHEESE
		},
		{
			id: uniqid('ing-cheese-'),
			name: { en: 'ricotta' },
			weight: 50,
			price: 500,
			type: ingredientsTypes.CHEESE
		}
	])

	static vegetables = new Ingredients([
		{
			id: uniqid('ing-veg-'),
			name: { en: 'carrot' },
			weight: 20,
			price: 40,
			type: ingredientsTypes.VEGETABLE
		},
		{
			id: uniqid('ing-veg-'),
			name: { en: 'tomato' },
			weight: 30,
			price: 80,
			type: ingredientsTypes.VEGETABLE
		},
		{
			id: uniqid('ing-veg-'),
			name: { en: 'mushroom' },
			weight: 20,
			price: 150,
			type: ingredientsTypes.VEGETABLE
		},
		{
			id: uniqid('ing-veg-'),
			name: { en: 'onion' },
			weight: '5',
			price: 20,
			type: ingredientsTypes.VEGETABLE
		},
		{
			id: uniqid('ing-veg-'),
			name: { en: 'olive' },
			weight: 10,
			price: 20,
			type: ingredientsTypes.VEGETABLE
		},
		{
			id: uniqid('ing-veg-'),
			name: { en: 'bean' },
			weight: 10,
			price: 20,
			type: ingredientsTypes.VEGETABLE
		},
		{
			id: uniqid('ing-veg-'),
			name: { en: 'pepper' },
			weight: 20,
			price: 20,
			type: ingredientsTypes.VEGETABLE
		},
		{
			id: uniqid('ing-veg-'),
			name: { en: 'spinach' },
			weight: 20,
			price: 20,
			type: ingredientsTypes.VEGETABLE
		}
	])

	static nuts = new Ingredients([
		{
			id: uniqid('ing-nut-'),
			name: { en: 'almond' },
			weight: 20,
			price: 200,
			type: ingredientsTypes.NUT
		},
		{
			id: uniqid('ing-nut-'),
			name: { en: 'peanut' },
			weight: 20,
			price: 200,
			type: ingredientsTypes.NUT
		},
		{
			id: uniqid('ing-nut-'),
			name: { en: 'pistachio' },
			weight: 20,
			price: 200,
			type: ingredientsTypes.NUT
		},
		{
			id: uniqid('ing-nut-'),
			name: { en: 'pine nut' },
			weight: 20,
			price: 200,
			type: ingredientsTypes.NUT
		},
		{
			id: uniqid('ing-nut-'),
			name: { en: 'walnuts' },
			weight: 20,
			price: 200,
			type: ingredientsTypes.NUT
		}
	])

	static herbs_and_spicests = new Ingredients([
		{
			id: uniqid('ing-h-or-sp-'),
			name: { en: 'basil' },
			weight: 2,
			price: 0,
			type: ingredientsTypes.HERB_OR_SPICEST
		},
		{
			id: uniqid('ing-h-or-sp-'),
			name: { en: 'coriander' },
			weight: 2,
			price: 0,
			type: ingredientsTypes.HERB_OR_SPICEST
		},
		{
			id: uniqid('ing-h-or-sp-'),
			name: { en: 'garlic' },
			weight: 2,
			price: 0,
			type: ingredientsTypes.HERB_OR_SPICEST
		},
		{
			id: uniqid('ing-h-or-sp-'),
			name: { en: 'oregano' },
			weight: 2,
			price: 0,
			type: ingredientsTypes.HERB_OR_SPICEST
		},
		{
			id: uniqid('ing-h-or-sp-'),
			name: { en: 'pepper' },
			weight: 2,
			price: 0,
			type: ingredientsTypes.HERB_OR_SPICEST
		},
		{
			id: uniqid('ing-h-or-sp-'),
			name: { en: 'rosemary' },
			weight: 2,
			price: 0,
			type: ingredientsTypes.HERB_OR_SPICEST
		}
	])

	static sea_food = new Ingredients([
		{
			id: uniqid('ing-sea-food-'),
			name: { en: 'anchovie' },
			weight: 100,
			price: 500,
			type: ingredientsTypes.SEA_FOOD
		},
		{
			id: uniqid('ing-sea-food-'),
			name: { en: 'lobster' },
			weight: 100,
			price: 500,
			type: ingredientsTypes.SEA_FOOD
		},
		{
			id: uniqid('ing-sea-food-'),
			name: { en: 'shrimp' },
			weight: 100,
			price: 500,
			type: ingredientsTypes.SEA_FOOD
		},
		{
			id: uniqid('ing-sea-food-'),
			name: { en: 'salmon' },
			weight: 100,
			price: 500,
			type: ingredientsTypes.SEA_FOOD
		},
		{
			id: uniqid('ing-sea-food-'),
			name: { en: 'squid' },
			weight: 100,
			price: 500,
			type: ingredientsTypes.SEA_FOOD
		},
		{
			id: uniqid('ing-sea-food-'),
			name: { en: 'tuna' },
			weight: 100,
			price: 500,
			type: ingredientsTypes.SEA_FOOD
		},
		{
			id: uniqid('ing-sea-food-'),
			name: { en: 'oyster' },
			weight: 100,
			price: 500,
			type: ingredientsTypes.SEA_FOOD
		}
	])

	static meats = new Ingredients([
		{
			id: uniqid('ing-meats-'),
			name: { en: 'bacon' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.MEAT
		},
		{
			id: uniqid('ing-meats-'),
			name: { en: 'ham' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.MEAT
		},
		{
			id: uniqid('ing-meats-'),
			name: { en: 'salami' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.MEAT
		},
		{
			id: uniqid('ing-meats-'),
			name: { en: 'meatball' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.MEAT
		},
		{
			id: uniqid('ing-meats-'),
			name: { en: 'duck' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.MEAT
		},
		{
			id: uniqid('ing-meats-'),
			name: { en: 'chicken' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.MEAT
		},
		{
			id: uniqid('ing-meats-'),
			name: { en: 'barbequed meat' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.MEAT
		}
	])

	static exotics = new Ingredients([
		{
			id: uniqid('ing-exotic-'),
			name: { en: 'chocolate' },
			weight: 80,
			price: 500,
			type: ingredientsTypes.EXOTIC
		},
		{
			id: uniqid('ing-exotic-'),
			name: { en: 'marshmallow' },
			weight: 30,
			price: 200,
			type: ingredientsTypes.EXOTIC
		},
		{
			id: uniqid('ing-exotic-'),
			name: { en: 'cookie' },
			weight: 100,
			price: 400,
			type: ingredientsTypes.EXOTIC
		},
		{
			id: uniqid('ing-exotic-'),
			name: { en: 'edible gold' },
			weight: 100,
			price: 700,
			type: ingredientsTypes.EXOTIC
		},
		{
			id: uniqid('ing-exotic-'),
			name: { en: 'banana' },
			weight: 100,
			price: 700,
			type: ingredientsTypes.EXOTIC
		}
	])

	static _ = this.closeEnum()

	constructor(values) {
		super()
		this.values = values
	}
}

export default [Bases, Ingredients]

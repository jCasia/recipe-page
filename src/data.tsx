import { Preptime, Instruction, Nutrition } from './interfaces/interfaces';

const preptime: Preptime = {
  total: 'Approximately 10 minutes',
  preparation: 5,
  cooking: 5,
};

const ingredient: Array<string> = [
  '2-3 large eggs',
  'Salt , to taste',
  'Pepper to taste',
  '1 tablespoon of butter or oil',
  'Optional fillings: cheese, dived, vegetables, cooked meats, herbs',
];

const instruction: Array<Instruction> = [
  {
    step: 'beat the eggs',
    text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture',
  },
  {
    step: 'Heat the pan',
    text: 'Place a non-stick frying pan over medium heat and butter or oil',
  },
  {
    step: 'Cook the omelette',
    text: 'Once the butter is melted and bubbling, pour in the eggs, Tilt the pan to ensure the eggs evenly coat the surface',
  },
  {
    step: 'Add fillings (optional)',
    text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
  },
  {
    step: 'Fold and serve',
    text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate',
  },
  {
    step: 'Enjoy',
    text: 'Serve hot, with additional salt and pepper if needed',
  },
];

const nutrition: Nutrition = {
  calories: 277,
  carbs: 0,
  protein: 20,
  fat: 22,
};

export { preptime, ingredient, instruction, nutrition };

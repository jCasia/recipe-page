interface Preptime {
  total: string;
  preparation: number;
  cooking: number;
}

interface Instruction {
  step: string;
  text: string;
}

interface Nutrition {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}

interface MoreInfoProps {
  ingredient: Array<string>;
  instruction: Array<Instruction>;
  nutrition: Nutrition;
}

export type { Preptime, Instruction, Nutrition, MoreInfoProps };

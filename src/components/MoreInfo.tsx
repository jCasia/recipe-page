import { FC } from 'react';
import { MoreInfoProps } from '../interfaces/interfaces';

const MoreInfo: FC<MoreInfoProps> = ({
  nutrition,
  instruction,
  ingredient,
}) => {
  console.log(ingredient);
  console.log(instruction);
  console.log(nutrition);

  return (
    <div className='divide-solid border-b-2'>
      <div className='flex flex-col '>
        <h2 className='font-fontYoungSerif text-2xl text-colorNutmeg'>
          Ingredients
        </h2>
        <ul className='list-disc flex flex-col gap-1 p-5'>
          {ingredient.map((indivual, i) => {
            return (
              <li key={i} className='pl-3 text-sm'>
                <p>{indivual}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MoreInfo;

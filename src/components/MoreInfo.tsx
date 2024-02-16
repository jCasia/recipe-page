import { FC } from 'react';
import { MoreInfoProps } from '../interfaces/interfaces';
import { nutrition } from '../data';

const MoreInfo: FC<MoreInfoProps> = ({
  nutrition: { calories, carbs, protein, fat },
  instruction,
  ingredient,
}) => {
  console.log(nutrition);
  return (
    <div className='flex flex-col '>
      <div className='flex flex-col divide-solid border-b-2'>
        <h2 className='heading'>Ingredients</h2>
        <ul className='list-disc flex flex-col gap-2 p-6 '>
          {ingredient.map((indivual, i) => {
            return (
              <li key={i} className='pl-3 text-sm lgtablet:text-base'>
                {indivual}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex flex-col divide-solid border-b-2 pt-6'>
        <h2 className='heading'>Instructions</h2>
        <ol className='flex flex-col gap-2 list-decimal  marker:font-bold marker:text-colorNutmeg p-6 '>
          {instruction.map((indivual, i) => {
            const { step, text } = indivual;
            return (
              <li key={i} className='text-sm lgtablet:text-base font-med pl-3'>
                <span className='font-bold text-colorWengeBrown'>{step}: </span>
                {text}
              </li>
            );
          })}
        </ol>
      </div>
      <div className=' flex flex-col gap-4 py-6 lgtablet:pb-0'>
        <h2 className='heading'>Nutrition</h2>
        <p className='text-sm lgtablet:text-base'>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table>
          <tbody className='text-sm lgtablet:text-base'>
            <tr className='border-b-2  '>
              <th scope='row' className='font-normal py-3 pl-8 text-left '>
                Calories
              </th>
              <td className='text-colorNutmeg font-bold'>{calories}kcal</td>
            </tr>
            <tr className=' border-b-2'>
              <th scope='row' className='font-normal py-3 pl-8 text-left'>
                Carbs
              </th>
              <td className='text-colorNutmeg font-bold'>{carbs}g</td>
            </tr>
            <tr className=' border-b-2'>
              <th scope='row' className='font-normal py-3 pl-8 text-left'>
                Protein
              </th>
              <td className='text-colorNutmeg font-bold'>{protein}g</td>
            </tr>
            <tr>
              <th scope='row' className='font-normal py-3 pl-8 text-left'>
                Fat
              </th>
              <td className='text-colorNutmeg font-bold'>{fat}g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoreInfo;

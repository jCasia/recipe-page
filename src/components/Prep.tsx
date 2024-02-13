import { FC } from 'react';
import { Preptime } from '../interfaces/interfaces';

const Prep: FC<Preptime> = ({ total, preparation, cooking }) => {
  return (
    <div className='bg-colorRoseWhite py-4 px-5 rounded-md flex flex-col gap-2'>
      <h3 className='font-bold text-colorRaspberry text-lg '>
        Preparation time
      </h3>
      <ul className='list-disc flex flex-col gap-2 px-6 text-sm'>
        <li className='pl-3'>
          <span className='emphasis   '>Total:</span> {total}
        </li>
        <li className='pl-3'>
          <span className='emphasis '>Preparation:</span> {preparation} minutes
        </li>
        <li className='pl-3'>
          <span className='emphasis '>Cooking:</span> {cooking} minutes
        </li>
      </ul>
    </div>
  );
};

export default Prep;

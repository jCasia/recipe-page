import { FC } from 'react';
import { Preptime } from '../interfaces/interfaces';

const Prep: FC<Preptime> = ({ total, preparation, cooking }) => {
  return (
    <div className='bg-colorRoseWhite py-4 px-5 rounded-xl flex flex-col gap-2'>
      <h3 className='font-bold text-colorRaspberry text-lg lgtablet:text-xl'>
        Preparation time
      </h3>
      <ul className='list-disc flex flex-col gap-2 px-6 text-sm lgtablet:text-base'>
        <li className='pl-3'>
          <span className='emphasis text-colorWengeBrown  '>Total:</span>{' '}
          {total}
        </li>
        <li className='pl-3'>
          <span className='emphasis text-colorWengeBrown'>Preparation:</span>{' '}
          {preparation} minutes
        </li>
        <li className='pl-3'>
          <span className='emphasis text-colorWengeBrown'>Cooking:</span>{' '}
          {cooking} minutes
        </li>
      </ul>
    </div>
  );
};

export default Prep;

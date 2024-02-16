import { FC } from 'react';
import { preptime, ingredient, instruction, nutrition } from './data';
import Prep from './components/Prep';
import MoreInfo from './components/MoreInfo';
import imageEgg from './images/image-omelette.jpeg';

// console.log(ingredient);
const App: FC = () => {
  return (
    <main className='bg-colorEggshell w-full lgtablet:flex lgtablet:justify-center lgtablet:items-center '>
      <div className='bg-colorWhite text-colorWengeBrown lgtablet:flex lgtablet:flex-col lgtablet:max-w-[750px] lgtablet:my-20 lgtablet:rounded-3xl'>
        <div className='lgtablet:px-10 lgtablet:pt-10 '>
          <img
            src={imageEgg}
            alt='image of recipe'
            role='presentation'
            className='max-w-full object-cover rounded-xl'
          />
        </div>
        <div className='p-8 flex flex-col gap-6 justify-center lgtablet:p-10 '>
          <h1 className='font-fontYoungSerif text-3xl text-colorDarkChar lgtablet:text-[2.5rem]'>
            Simple Omelette Recipe
          </h1>
          <p className='text-sm font-medium lgtablet:text-base'>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <Prep {...preptime} />
          <MoreInfo
            ingredient={ingredient}
            instruction={instruction}
            nutrition={nutrition}
          />
        </div>
      </div>
    </main>
  );
};

export default App;

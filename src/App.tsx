import { FC } from 'react';
import { preptime, ingredient, instruction, nutrition } from './data';
import Prep from './components/Prep';
import MoreInfo from './components/MoreInfo';
import imageEgg from './images/image-omelette.jpeg';

// console.log(ingredient);
const App: FC = () => {
  return (
    <main className='bg-colorEggshell w-full h-screen'>
      <div className='bg-colorWhite text-colorWengeBrown'>
        <img src={imageEgg} alt='image of recipe' role='presentation' />
        <div className='p-8 flex flex-col gap-6 justify-center'>
          <h1 className='font-fontYoungSerif text-3xl text-colorDarkChar'>
            Simple Omelette Recipe
          </h1>
          <p className='text-sm font-medium'>
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

import Boards from './components/Boards';

function App() {
  return (
    <div className='bg-[#0F172A] w-[100vw] h-[100vh] flex flex-col gap-20'>
      
      <div className='text-white text-center text-4xl font-semibold  py-10'>
        TIC TAC TOE
      </div>

      <div className=' flex justify-center items-center' >
        <Boards />
      </div>

    </div>
  );
}

export default App;

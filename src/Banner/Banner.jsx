import heroImage from '../assets/home.png';

export default function Banner() {
 
  return (
    <div className='flex justify-center items-center'>
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
      className="bg-cover bg-center h-[600px] mt-8 w-11/12 rounded-2xl"
    >
      <div className='flex justify-center items-center pt-32 pb-5'>
      <p className='text-white text-4xl font-bold'>Discover an exceptional cooking class tailored for you!</p>
      </div>
      <div className='flex justify-center items-center'>
      <p className='text-white text-4xl font-bold'>class tailored for you!</p>
      </div>
      <div className='flex justify-center items-center p-7'>
      <p className='text-white text-xl text-center w-9/12'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      </div>
      <div className='flex justify-center items-center gap-6'>
        <button className='bg-green-400 text-black h-16 w-40 rounded-full font-bold'>Explore Now</button>
        <button className='bg-transparent border h-16 w-40 rounded-full text-white font-bold'>Our Feedback</button>
      </div>
    </div>
    </div>
  );
}

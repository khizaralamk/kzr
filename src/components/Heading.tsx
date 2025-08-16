
import nameSVG from '../assets/name.svg';

interface HeadingProps {
  name: string;
  tags: string;
}

export default function Heading({ name, tags }: HeadingProps) {
  return (
    <div className="flex flex-col items-center w-full ">
      <img src={nameSVG} alt={name} className=" px-4 w-[300px] md:w-[400px] lg:w-[535px] h-auto mx-auto" />
      <p className="mt-2 text-xl md:text-3xl text-gray-700 text-center  px-4 py-2">{tags}</p>
      {/* Under Development Tag */}
      <div className="mt-4 px-3 py-1 bg-yellow-100 border border-yellow-300 rounded-full">
        <span className="text-xs sm:text-sm text-yellow-800 font-medium">🚧 Under Development - Stay Tuned!</span>
      </div>
    </div>
  );
} 
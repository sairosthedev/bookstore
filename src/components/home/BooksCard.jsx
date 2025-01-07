import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
        {books.map((item) => (
          <BookSingleCard key={item._id} book={item} />
        ))}
      </div>
    </div>
  );
};

export default BooksCard;
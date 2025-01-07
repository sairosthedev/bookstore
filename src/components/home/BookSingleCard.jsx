import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col'>
      <div className='h-48 bg-gray-200 flex items-center justify-center'>
        <PiBookOpenTextLight className='text-6xl text-gray-400' />
      </div>
      <div className='p-4 flex flex-col flex-grow'>
        <h2 className='text-xl font-semibold mb-2 text-gray-800'>{book.title}</h2>
        <p className='text-gray-600 mb-2'>By {book.author}</p>
        <p className='text-sm text-gray-500 mb-2'>Published: {book.publishYear}</p>
        <div className='mt-auto flex justify-between items-center pt-4 border-t'>
          <button 
            onClick={() => setShowModal(true)}
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'
          >
            Quick View
          </button>
          <div className='flex gap-2'>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className='text-xl text-gray-600 hover:text-blue-600' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className='text-xl text-gray-600 hover:text-red-600' />
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
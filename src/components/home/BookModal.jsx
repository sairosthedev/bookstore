import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative'
      >
        <AiOutlineClose
          className='absolute right-4 top-4 text-2xl text-gray-600 cursor-pointer hover:text-gray-800'
          onClick={onClose}
        />
        <div className='flex gap-8'>
          <div className='w-1/3'>
            <div className='bg-gray-200 rounded-lg h-48 flex items-center justify-center'>
              <PiBookOpenTextLight className='text-6xl text-gray-400' />
            </div>
          </div>
          <div className='w-2/3'>
            <h2 className='text-3xl font-bold mb-4'>{book.title}</h2>
            <p className='text-xl text-gray-600 mb-2'>By {book.author}</p>
            <p className='text-gray-500 mb-4'>Published in {book.publishYear}</p>
            <div className='border-t pt-4 mt-4'>
              <h3 className='text-lg font-semibold mb-2'>Book Details</h3>
              <p className='text-gray-600'>ID: {book._id}</p>
              <button className='mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
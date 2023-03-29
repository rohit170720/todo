import { Fragment } from 'react';
import { TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/outline';

function ListItem({ title, description, date, onDelete, onEdit, onCheck, complete }) {
  return (
    <div className={`w-11/12 shadow-2xl flex items-center justify-between p-4 border-b rounded-xl my-4 ${complete? 'blur-sm' : 'blur-0'}`}>
      <div className="flex-grow">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onCheck}>
          <CheckIcon className="w-5 h-5 text-green-500" />
        </button>
        <button onClick={onEdit}>
          <PencilIcon className="w-5 h-5 text-gray-500" />
        </button>
        <button onClick={onDelete}>
          <TrashIcon className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
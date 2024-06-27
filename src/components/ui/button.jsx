import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Button(props) {
  return (
    
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-[#c19434] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.children}
        <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
      </button>
      )
      }
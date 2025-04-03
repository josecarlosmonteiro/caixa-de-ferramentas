'use client'

type Props<T> = {
  title?: string;
  labelsList: string[];
  onClick?: VoidFunction;
}

export function SideList<T>({ title, labelsList = [], onClick }: Props<T>) {
  return (
    <div className="pt-4 h-full min-w-52 overflow-auto bg-gray-100">
      <div className="w-full text-center text-lg text-primary">
        {title}
      </div>

      <br />

      {
        labelsList.map((label, index) => (
          <div
            key={`${label}_${index}`}
            className="p-3 px-4 text-primary-light cursor-pointer duration-300 hover:py-4 hover:bg-primary-light hover:text-white truncate"
            onClick={onClick}
          >
            {label}
          </div>
        ))
      }
    </div>
  )
}
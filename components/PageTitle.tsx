import React from 'react'

const PageTitle = ({title, description}:{title: string, description?: string}) => {
  return (
        <div className="flex w-full  flex-col items-center justify-center py-4 text-center   md:mt-6 ">
          <h2 className="text-center section-title">
            {title}
          </h2>
          {description && (
            <p className="text-neutral-300 text-lg md:text-xl lg:text-2xl pretty pt-4">
              {description}
            </p>
          )}
        </div>  )
}

export default PageTitle
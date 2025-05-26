import React from 'react'

const PageTitle = ({title}:{title: string}) => {
  return (
        <div className="mx-8 flex w-full  flex-col items-center justify-center py-4 text-center   md:mt-6 lg:mx-20 ">
          <h3 className="text-center section-title">
            {title}
          </h3>
        </div>  )
}

export default PageTitle
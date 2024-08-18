'use client'

const Category = () => {
const categorylist = [
    {
        id: 1,
        name: 'Elektronik',
       
      },
    {
        id: 1,
        name: 'Ev,Yaşam',
       
      },
    {
        id: 1,
        name: 'Oto,Yapı',
       
      },
    {
        id: 1,
        name: 'Anne,Bebek',
       
      },
    {
        id: 1,
        name: 'Spor,Outdoor',
       
      },
    {
        id: 1,
        name: 'Kozmetik',
       
      },
    
]

  return (
    <div className="flex items-center justify-center  px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
    {
        categorylist.map((category, index) => (
          <div className='flex justify-center items-center cursor-pointer bg-red border text-slate-500 rounded-full min-w-[120px] px-4 py-2 text-center ' key={index}>{category.name}</div>
        ))
    }
    </div>
  )
}

export default Category

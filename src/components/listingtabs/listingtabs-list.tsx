import cn from 'classnames'

interface Props {
  className?: string
  categories: any
  onNavClick: any
  activeTab: string
}
const ListingTabsList: React.FC<Props> = ({
  className = 'mb-12 pb-0.5',
  categories,
  onNavClick,
  activeTab,
}) => {
  return (
    <div className={cn('block-title mb-1.5 items-center gap-2 sm:flex', className)}>
      <h3 className="text-skin-base hover:text-skin-primary border-0 text-[16px] text-base font-bold uppercase lg:basis-[30%]">
        Electronic & Digital
      </h3>

      <div className="ltabs-tabs-wrap flex flex-wrap justify-end lg:basis-[70%]">
        <ul key="content" className="flex text-[14px] leading-7">
          {categories?.slice(0, 4)?.map((category: any, idx: number) => {
            return (
              <li
                className={`hover:text-skin-primary ps-2 ${
                  activeTab === category.slug ? 'text-skin-primary' : 'text-fill-base'
                }`}
                key={`${idx}`}
              >
                <button
                  key={idx}
                  onClick={() => onNavClick(category.slug)}
                  className={`rounded px-4 py-1 ${
                    activeTab === category.slug
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default ListingTabsList

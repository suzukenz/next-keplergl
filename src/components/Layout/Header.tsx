const githubUrl = 'https://github.com/suzukenz/next-keplergl'

const Header: React.FC = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 border-b-2 border-gray-100">
        <div className="flex justify-between items-center py-3 md:space-x-10">
          <div className="flex justify-start">
            <p className="m-0 font-bold tracking-tight text-gray-900 sm:text-2xl">
              My kepler.gl
            </p>
          </div>
          <div className="items-center justify-end">
            <a
              href={githubUrl}
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

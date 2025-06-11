
interface CommonHeaderProps {
  title: string;
  subtitle: string;
}

const CommonHeader = ({ title, subtitle }: CommonHeaderProps) => {
  return (<>
   <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-1">{subtitle}</p>
      </div>
    </header>
  </>
  )
}

export default CommonHeader
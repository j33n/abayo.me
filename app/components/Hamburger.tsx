const Hamburger = ({setIsOpen, open}) => {
  return (
    <div className="space-y-2 cursor-pointer" onClick={() => setIsOpen(!open)}>
      <span className="block w-8 h-0.5 bg-gray-900 dark:bg-white"></span>
      <span className="block w-8 h-0.5 bg-gray-900 dark:bg-white"></span>
      <span className="block w-8 h-0.5 bg-gray-900 dark:bg-white"></span>
    </div>
  );
}

export default Hamburger

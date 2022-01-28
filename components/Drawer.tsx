import cx from 'classnames'

const Drawer = ({children, isOpen = true, setIsOpen}) => {
  return (
    <main
      className={cx(
        'fixed overflow-hidden hidden z-10 bg-opacity-25 inset-0 transform ease-in-out',
        {'bg-gray-800': isOpen},
      )}
      style={{top: '60px'}}
    >
      <section
        className={
          ' w-1/3 max-w-lg right-0 absolute bg-white h-auto shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative flex flex-col w-full h-full max-w-lg overflow-y-scroll">
          {children}
        </article>
      </section>
      {isOpen && (
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => {
            setIsOpen(false)
          }}
        ></section>
      )}
    </main>
  )
}
export default Drawer

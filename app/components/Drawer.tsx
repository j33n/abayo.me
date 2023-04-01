import clsx from "clsx";

const Drawer = ({ children, isOpen = true, setIsOpen }) => {
  return (
    <main
      className={clsx(
        "fixed overflow-hidden z-10 bg-blackA7 inset-0 transform ease-in-out",
        { " block h-auto": isOpen, "h-0": !isOpen }
      )}
      style={{ top: "60px" }}
    >
      <section
        className={
          "bg-beige-100 dark:bg-gray-900 w-full sm:w-1/2 md:w-1/3 max-w-lg right-0 absolute h-auto p-2 delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative flex flex-col w-full h-full max-w-lg overflow-y-scroll justify">
          {children}
        </article>
      </section>
      {/* {isOpen && (
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      )} */}
    </main>
  );
};
export default Drawer;

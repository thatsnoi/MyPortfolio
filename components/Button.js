const Button = ({ children }) => {
  return (
    <button className="border border-black dark:border-white dark:border-opacity-80 standard-text-light-hover px-4 py-2 rounded-xl text-xl italic cursor-pointer ">
      {children}
    </button>
  )
}

export default Button

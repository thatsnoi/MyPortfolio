export default function Container({ children, className }) {
  return (
    <div
      className={`px-5 md:px-10 lg:px-20 xl:px-24 py-4 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

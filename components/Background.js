import Bubble from './Bubble'

export default function Background() {
  return (
    <>
      <div
        className="top-0 left-0 right-0 bottom-0 absolute backdrop-blur-3xl"
        style={{
          zIndex: -1,
          backdropBlur: 'blur(90px)',
        }}
      ></div>
      <div
        className="absolute left-0 top-0 bottom-0 right-0 bg-white dark:bg-black opacity-10 dark:opacity-50 z-0"
        style={{ zIndex: -2 }}
      ></div>
      <div
        className="hidden dark:block absolute left-0 top-0 bottom-0 right-0 bg-black opacity-80"
        style={{ zIndex: -20 }}
      ></div>
      <Bubble
        width="100em"
        height="40em"
        left="-15em"
        top="-17em"
        color="#FF367E"
      />
      <Bubble
        width="80em"
        height="50em"
        right="-154px"
        top="150px"
        color="#4A5CFF"
      />
      <Bubble
        width="80em"
        height="50em"
        left="-50px"
        top="70vh"
        color="#FF367E"
      />
    </>
  )
}

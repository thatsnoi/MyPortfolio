import Bubble from './Bubble'

export default function Background() {
  return (
    <>
      <div
        className="top-0 left-0 right-0 bottom-0 absolute backdrop-blur-3xl"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="absolute left-0 top-0 bottom-0 right-0 bg-white dark:bg-black opacity-10 dark:opacity-70 z-0"
        style={{ zIndex: -2 }}
      ></div>
      <Bubble
        width="1114px"
        height="711px"
        left="-154px"
        top="-167px"
        color="#FF367E"
      />
      <Bubble
        width="800px"
        height="600px"
        right="-154px"
        top="150px"
        color="#4A5CFF"
      />
      <Bubble
        width="900px"
        height="500px"
        left="-50px"
        top="70vh"
        color="#FF367E"
      />
    </>
  )
}

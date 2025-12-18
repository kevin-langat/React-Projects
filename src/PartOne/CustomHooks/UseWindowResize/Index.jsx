import useWindowResize from './useWindowResize';

function UseWindowResize() {
  const windowSize = useWindowResize();

  return (
    <div>
      <h2 className=' underline'>Use Window Resize</h2>
      <h2>Window width: {windowSize.width}</h2>
      <h2>Window height: {windowSize.height}</h2>
    </div>
  );
}

export default UseWindowResize;

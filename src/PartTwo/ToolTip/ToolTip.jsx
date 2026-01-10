import ToolTipChild from './ToolTipChild';

function ToolTip() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h2>Tool Tip Component</h2>
      <ToolTipChild
        delay={1000}
        children={'This is the content of the tooltip'}
        header={'Hover Me'}
      />
    </div>
  );
}
export default ToolTip;

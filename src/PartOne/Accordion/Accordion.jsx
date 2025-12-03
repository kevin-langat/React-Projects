import { ArrowDown, ChevronDown } from 'lucide-react';
import { accordionData } from '../../Config/data';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';

function Accordion() {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const [multiSelectStatus, setMultiSelectStatus] = useState(false);
  const [multiSelectItems, setMultiSelectItems] = useState([]);

  useEffect(() => {
    if (multiSelectStatus === false) {
      setMultiSelectItems([]);
    }
  }, [multiSelectStatus]);

  function handleMultiSlect(id) {
    const findIfIdAlreadyExist = multiSelectItems.indexOf(id);
    if (findIfIdAlreadyExist === -1) {
      const newArray = [...multiSelectItems, id];
      setMultiSelectItems(newArray);
    } else {
      const multiSelectFilter = multiSelectItems.filter((item) => item !== id);
      setMultiSelectItems(multiSelectFilter);
    }
  }
  function handleContentDisplay(info) {
    if (multiSelectStatus) {
      const findItem = multiSelectItems.indexOf(info.id);
      if (findItem === -1) {
        return null;
      } else {
        return (
          <h2 className=' text-vsm delay-150 transform text-gray-300 duration-300'>
            {info.content}
          </h2>
        );
      }
    } else {
      if (selectedAccordion === info.id) {
        return (
          <h2
            className={`${
              selectedAccordion === info.id ? 'flex' : 'hidden'
            } text-vsm delay-150 transform text-gray-300 duration-300`}
          >
            {info.content}
          </h2>
        );
      } else {
        return null;
      }
    }
  }

  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <h2 className='underline'>Accordion Component</h2>
      <div className='bg-gray-800 w-[40%] p-2 rounded-[0.3em] outline-1 outline-gray-600 items-center justify-center duration-300 ease-in-out delay-100'>
        {accordionData.map((info) => (
          <div
            key={info.id}
            className=' duration-300 ease-in-out delay-100 w-full justify-between rounded-[0.3em] flex flex-col items-center'
          >
            <div className='w-full'>
              <div
                onClick={() => {
                  if (multiSelectStatus) {
                    handleMultiSlect(info.id);
                  } else {
                    setSelectedAccordion(
                      selectedAccordion === info.id ? null : info.id
                    );
                  }
                }}
                className=' bg-gray-700 rounded-[0.3em]  w-full flex items-center duration-500 transform ease-in-out delay-100  justify-between flex-row'
              >
                <h2 className='pointer-events-none  duration-500 transform ease-in-out delay-100  text-sky-500 text-nsm'>
                  {info.title}
                </h2>
                <ChevronDown
                  className={`${
                    selectedAccordion === info.id ? 'rotate-180' : 'rotate-0'
                  }  w-7 h-6 pointer-events-none stroke-white  transform text-gray-300 duration-500`}
                />
              </div>

              {handleContentDisplay(info)}
              <hr className='w-full text-gray-500/60' />
            </div>
          </div>
        ))}
      </div>

      <div className='flex items-center space-x-2'>
        <label htmlFor='airplane-mode'>Enable Multi Open</label>
        <Switch
          checked={multiSelectStatus}
          onCheckedChange={() => setMultiSelectStatus(!multiSelectStatus)}
          id='airplane-mode'
          className='bg-gray-400'
        />
      </div>
    </div>
  );
}

export default Accordion;

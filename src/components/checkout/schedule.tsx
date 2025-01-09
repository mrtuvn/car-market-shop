import { useState } from 'react';
import { Description, Label, Radio, RadioGroup } from '@headlessui/react';
import cn from 'classnames';

const deliveryDateSchedule = [
  'Sat, Jul 03, 2021',
  'Sun, Jul 04, 2021',
  'Mon, Jul 05, 2021',
  'Tus, Jul 06, 2021',
  'Wed, Jul 07 ,2021 ',
];
const deliveryTimeSchedule = ['9am to 10am', '3pm to 5pm', '6pm to 8pm'];

export const DeliverySchedule: React.FC = () => {
 
  const [dateSchedule, setDateSchedule] = useState(deliveryDateSchedule[0]);
  const [timeSchedule, setTimeSchedule] = useState(deliveryTimeSchedule[0]);
  function getDay(date: string) {
    const day = date.split(',');
    return day[0];
  }
  function getMonth(date: string) {
    const month = date.split(',');
    return month[1];
  }

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <RadioGroup value={dateSchedule} onChange={setDateSchedule}>
          <Label className="sr-only">Delivery Schedule</Label>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {deliveryDateSchedule.map((date) => (
              <Radio
                key={date}
                value={date}
                className={({ checked }) =>
                  cn(
                    'relative rounded-lg px-5 py-3 cursor-pointer focus:outline-none',
                    checked ? 'bg-blue-500 text-white' : 'bg-gray-100',
                  )
                }
              >
                {({ checked }) => (
                  <div className="text-center">
                    <Label
                      as="p"
                      className={`text-base font-semibold  ${
                        checked ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {getDay(date)}
                    </Label>
                    <Description
                      as="span"
                      className={`text-15px ${
                        checked ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {getMonth(date)}
                    </Description>
                  </div>
                )}
              </Radio>
            ))}
          </div>
        </RadioGroup>
        {/* End of date schedule */}

        <RadioGroup
          className="mt-10"
          value={timeSchedule}
          onChange={setTimeSchedule}
        >
          <Label className="sr-only">Delivery Schedule</Label>
          <div className="flex flex-wrap justify-between grid-cols-2 gap-4 lg:grid sm:grid-cols-3 lg:grid-cols-5">
            {deliveryTimeSchedule.map((time) => (
              <Radio
                key={time}
                value={time}
                className="cursor-pointer focus:outline-none"
              >
                {({ checked }) => (
                  <div className="flex items-center">
                    <span
                      className={cn(
                        'flex w-5 h-5 rounded-full',
                        checked
                          ? 'border-[4px] border-blue-500'
                          : 'border-2 border-gray-400',
                      )}
                    />
                    <Label
                      as="p"
                      className="text-sm text-black ml-2"
                    >
                      {time}
                    </Label>
                  </div>
                )}
              </Radio>
            ))}
          </div>
        </RadioGroup>
        {/* End of time schedule */}
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';

import {
  Button,
  Input,
  HStack,
  RadioGroup,
  Field,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import TransactionChart from './TransactionChart';

function ExpenseTracker() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    amount: 0,
    description: '',
    type: 'income',
    date: new Date(),
  });
  const [value, setValue] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  // const dt = new Date();
  // console.log(dt.toLocaleTimeString());
  // const userTimeZone = Intl.DateTimeFormat().resolvedOptions();
  // console.log(userTimeZone);
  // const userl = navigator.language;
  // console.log(userTimeZone);
  // const formattedTimeAMPM = dt.toLocaleTimeString('en-US', {
  //   hour: 'numeric',
  //   minute: '2-digit',
  //   second: '2-digit',
  //   timeZone: 'Africa/Nairobi',
  // });
  // console.log(formattedTimeAMPM);
  useEffect(() => {
    let income = 0;
    let expense = 0;
    allTransactions.forEach((transaction) => {
      if (transaction.type === 'income') {
        income = income + parseInt(transaction.amount);
      } else {
        expense = expense + parseInt(transaction.amount);
      }
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAllTransactions([...allTransactions, formData]);
  }
  return (
    <div className='w-full flex gap-10 flex-col items-center'>
      <div className=' relative w-11/12 px-10 flex flex-row items-center justify-between'>
        <h2 className='text-2xl text-blue-600'>Expense Tracker</h2>
        <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <PopoverTrigger asChild>
            <Button
              backgroundColor={'blue'}
              color={'white'}
              variant='outline'
              size='sm'
            >
              Add New Transaction
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyItems={'center'}
            >
              <form onSubmit={handleSubmit}>
                <Stack gap='4'>
                  <Field.Root>
                    <Field.Label>Add a new transaction</Field.Label>
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Write Descrption</Field.Label>
                    <Input
                      name='description'
                      onChange={handleOnChange}
                      value={formData.description}
                      placeholder='Enter transaction description'
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Enter Amount</Field.Label>
                    <Input
                      type='number'
                      name='amount'
                      onChange={handleOnChange}
                      value={formData.amount}
                      placeholder='Enter transaction amount'
                    />
                  </Field.Root>
                </Stack>
                <RadioGroup.Root
                  defaultValue='income'
                  onChange={handleOnChange}
                  marginTop={'20px'}
                  name='type'
                >
                  <HStack gap='6'>
                    <RadioGroup.Item value='income'>
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>Income</RadioGroup.ItemText>
                    </RadioGroup.Item>
                    <RadioGroup.Item value='expense'>
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  </HStack>
                </RadioGroup.Root>
                <Stack
                  display={'flex'}
                  flexDirection={'row'}
                  marginTop={'20px'}
                  gap={'20px'}
                  alignItems={'center'}
                  justifyItems={'center'}
                >
                  <Field.Root width={'70px'}>
                    <Button onClick={() => setOpen(false)} height={'30px'}>
                      Cancel
                    </Button>
                  </Field.Root>
                  <Field.Root width={'70px'}>
                    <Button
                      onClick={() => setOpen(false)}
                      type='submit'
                      height={'30px'}
                    >
                      Add
                    </Button>
                  </Field.Root>
                </Stack>
              </form>
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>
      </div>
      <div className='  w-full px-4 flex flex-row items-center justify-between'>
        <div className='w-3/5 py-1 flex flex-col items-center justify-around'>
          <h2 className='text-[1.4em]'>
            {' '}
            Balance: $ {totalIncome - totalExpense}
          </h2>
          <div className='w-full py-2 h-40 flex items-center justify-center flex-col gap-4 bg-gray-100'>
            <div className='w-3/4 rounded-[0.3em] outline-1 outline-gray-300  py-1 h-18 flex items-center justify-center flex-col gap-4 bg-sky-500/10'>
              <h2 className='text-nlsm'>Total Income: ${totalIncome}</h2>
            </div>
            <div className='w-3/4 text-orange-500 833 rounded-[0.3em] outline-1 outline-gray-300 py-1 h-18 flex items-center justify-center flex-col gap-4 bg-fuchsia-400/10'>
              <h2 className='text-nlsm'>Total Expense: ${totalExpense}</h2>
            </div>
          </div>
        </div>
        <div className='w-1/3 flex flex-row items-center justify-around'>
          <div className='w-full  flex items-center justify-center flex-col gap-2 bg-gray-100'>
            <TransactionChart expense={totalExpense} income={totalIncome} />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-row items-center justify-between px-4'>
        <div className='w-full flex bg-gray-100 flex-row py-5'>
          <div className='w-full flex items-center justify-center flex-col gap-4 '>
            <h2>Income</h2>
            {allTransactions.length > 0 ? (
              allTransactions.map((transaction) =>
                transaction.type === 'income' ? (
                  <div className='w-3/4 text-green-500 rounded-[0.3em] outline-1 outline-gray-300 py-1 flex items-center justify-between px-8 flex-row gap-4 bg-sky-500/10'>
                    <h2 className='text-vsm'>{transaction.description}</h2>
                    <h2 className='text-vsm'>
                      {`${transaction.date.getDay()}/${transaction.date.getMonth()}/${transaction.date.getFullYear()}`}{' '}
                    </h2>
                    <h2 className='text-vsm'>${transaction.amount}</h2>
                  </div>
                ) : null
              )
            ) : (
              <div className='w-3/4 text-green-500 rounded-[0.3em] outline-1 outline-gray-300 py-1 flex items-center justify-center  px-8 flex-row gap-4 bg-sky-500/10'>
                <h2 className='text-vsm'>No Income Yet</h2>
              </div>
            )}
          </div>
          <div className='w-full flex items-center justify-center flex-col gap-4 '>
            <h2>Expense</h2>
            {allTransactions.length > 0 ? (
              allTransactions.map((transaction) =>
                transaction.type === 'expense' ? (
                  <div className='w-3/4 text-orange-500 rounded-[0.3em] outline-1 outline-gray-300 py-1 flex items-center justify-between px-8 flex-row gap-4 bg-fuchsia-400/10'>
                    <h2 className='text-vsm'>{transaction.description}</h2>
                    <h2 className='text-vsm'>
                      {`${transaction.date.getDay()}/${transaction.date.getMonth()}/${transaction.date.getFullYear()}`}{' '}
                    </h2>
                    <h2 className='text-vsm'>${transaction.amount}</h2>
                  </div>
                ) : null
              )
            ) : (
              <div className='w-3/4 text-orange-500 rounded-[0.3em] outline-1 outline-gray-300 py-1 flex items-center justify-center px-8 flex-row gap-4 bg-fuchsia-400/10'>
                <h2 className='text-vsm'>No Expense Yet</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseTracker;

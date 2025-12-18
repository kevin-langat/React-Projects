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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import { FilePen, FilePenLine, Trash2 } from 'lucide-react';

function BlogApp() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });
  const [disabledBtn, setDisabledBtn] = useState();
  const [blogs, setBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editBlogId, setBlogId] = useState(null);

  useEffect(() => {
    setDisabledBtn(
      formData.title === '' || formData.body === '' ? true : false
    );
  }, [formData]);

  // updated blog
  async function handleEditBlog() {
    const response = await axios.put(
      `http://localhost:7000/api/update-blog/${editBlogId}`,
      {
        title: formData.title,
        body: formData.body,
      }
    );
    const result = response.data;
    result
      ? toast.success(result.message, {
          description: `The blog was last updated on  ${new Date(
            result.blog.updatedAt
          )
            .toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })
            .toLowerCase()} at ${new Date(
            result.blog.updatedAt
          ).toLocaleTimeString('en-US')}`,
        })
      : null;
  }

  // delete a blog
  async function handleDelete(getBlogId) {
    const response = await axios.delete(
      `http://localhost:7000/api/delete-blog/${getBlogId}`
    );
    const result = response.data;
    if (result) {
      toast.success(result.message, {
        description: `Blog deleted on ${new Date().toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })} at ${new Date().toLocaleTimeString('en-US')}`,
      });
    }
  }

  async function fetchAllBlogs() {
    try {
      const response = await axios.get('http://localhost:7000/api/blogs');
      const result = await response.data;

      result && result.blogs ? setBlogs(result.blogs) : null;
    } catch (error) {
      toast.error('There was an error in adding your blog', error);
    }
  }

  useEffect(() => {
    fetchAllBlogs();
  }, [blogs]);

  async function handleSubmit() {
    fetchAllBlogs();
    try {
      const response = await axios.post('http://localhost:7000/api/add-blog', {
        title: formData.title,
        body: formData.body,
      });
      const result = await response.data;
      result
        ? toast.success(result.message, {
            description: `Created on  ${new Date(
              result.blog.createdAt
            ).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })} at ${new Date(result.blog.createdAt).toLocaleTimeString(
              'en-US'
            )}`,
          })
        : null;
      console.log();
    } catch (error) {
      toast.error('There was an error in adding your blog', error);
    }
  }

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center'>
      <Toaster className='cursor-pointer bg-gray-800 outline-1 outline-gray-400 text-gray-300 select-none' />
      <div className=' relative w-11/12 flex flex-row items-center justify-between'>
        <h2 className='text-[1.3em] font-bold text-blue-600'>Blog MERN App</h2>
        <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <PopoverTrigger asChild>
            <Button
              onClick={() => setEditMode(false)}
              backgroundColor={'blue'}
              color={'white'}
              variant='outline'
              size='sm'
            >
              Add New Blog
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  editMode ? handleEditBlog() : handleSubmit();
                }}
              >
                <Stack gap='4'>
                  <Field.Root>
                    <Field.Label>Add a new blog</Field.Label>
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Title:</Field.Label>
                    <Input
                      type='text'
                      fontStyle={'italic'}
                      fontSize={'small'}
                      name='title'
                      value={formData.title}
                      onChange={handleOnChange}
                      placeholder='Enter the title of the blog'
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Body:</Field.Label>
                    <Textarea
                      className='custom-scrollbar'
                      maxHeight={'200px'}
                      type='text'
                      name='body'
                      fontStyle={'italic'}
                      minHeight={'60px'}
                      fontSize={'small'}
                      placeholder='Describe your blog'
                      value={formData.body}
                      onChange={handleOnChange}
                    />
                  </Field.Root>
                </Stack>
                <RadioGroup.Root
                  defaultValue='income'
                  marginTop={'20px'}
                  name='type'
                ></RadioGroup.Root>
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
                      disabled={disabledBtn}
                      backgroundColor={disabledBtn === true ? 'gray' : 'black'}
                      onClick={() => setOpen(false)}
                      type='submit'
                      height={'30px'}
                    >
                      {editMode ? 'Edit' : 'Add'}
                    </Button>
                  </Field.Root>
                </Stack>
              </form>
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>
      </div>
      <div className='w-11/12 rounded-[0.3em] h-110 overflow-y-auto custom-scrollbar bg-gray-200'>
        <h2 className='fixed px-20 rounded-b-[0.5em] w-11/12 z-50 text-green-800 font-extrabold bg-green-400 rounded-t-[0.3em] '>
          Your Blogs
        </h2>
        <div className='w-3/5 pt-10 gap-2 flex flex-col items-center'>
          {blogs?.map((blog, index) => (
            <div
              key={index}
              className='w-3/4 outline-1 outline-gray-500 bg-gray-800 gap-2 flex flex-col items-center justify-around py-3
           text-gray-300 rounded-[0.3em]'
            >
              <h2 className='text-orange-500 underline '>
                Title: {blog.title}
              </h2>
              <h2 className='text-gray-300/90 w-11/12 items-center flex flex-col justify-center text-justify text-vsm'>
                {' '}
                {blog.body}
              </h2>
              <div className='w-11/12 flex flex-row justify-between px-2'>
                <FilePenLine
                  onClick={() => {
                    setOpen(true);
                    setEditMode(true);
                    setBlogId(blog._id);
                    setFormData({
                      title: blog.title,
                      body: blog.body,
                    });
                  }}
                  className='stroke-blue-500 '
                />
                <Trash2
                  onClick={() => handleDelete(blog._id)}
                  className='stroke-red-500'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BlogApp;

import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    
  }
  const handleChange = () => {

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[2rem]'>
          Create
        </h1>
        <p className='mt-2 text-[#666e75] text-[1rem]'>
          Create your new AI Image through DALL-E AI
        </p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={() => handleSubmit()}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Leo Choi"
            value={form.name}
            handleChange={(e) => handleChange(e)}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Mozart playing his violin"
            value={form.prompt}
            handleChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{10}$/;

const schema = yup.object().shape({
  emailOrPhone: yup.string().required('Email or Mobile Number is required')
    .test('emailOrPhone', 'Enter a valid email or 10 digit mobile number', value => {
      return emailPattern.test(value) || phonePattern.test(value);
    })
});

const LoginForm = () => {
  const { control, handleSubmit, formState: { errors }, reset, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const [inputError, setInputError] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const emailOrPhoneValue = watch('emailOrPhone');

  useEffect(() => {
    if (isTouched) {
      if (emailOrPhoneValue) {
        if (!emailPattern.test(emailOrPhoneValue) && !phonePattern.test(emailOrPhoneValue)) {
          setInputError('Enter a valid email or 10 digit mobile number');
        } else {
          setInputError('');
        }
      } else {
        setInputError('Email or Mobile Number is required');
      }
    }
  }, [emailOrPhoneValue, isTouched]);

  const onSubmit = data => {
    alert('All good');
    reset();
    setIsTouched(false); // Reset the touched state after form submission
  };

  const handleBlur = (value) => {
    if (!value) {
      setIsTouched(false);
      setInputError('');
    }
  };

  return (
    <div className="bg-white p-6 w-96 m-5 h-[650px]">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-bold mb-4">Login to Dashboard</h2>
      <div className="mb-4">
        <Controller
          name="emailOrPhone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="text"
              placeholder="Email or Mobile Number"
              className="border p-2 w-full"
              {...field}
              onFocus={() => setIsTouched(true)} // Set touched state on focus
              onBlur={() => handleBlur(field.value)} // Handle blur event to hide error if input is empty
            />
          )}
        />
        {inputError && <p className="text-red-600">{inputError}</p>}
      </div>
      <button
        type="submit"
        className={`bg-blue-600 text-white py-2 px-4 w-full ${inputError ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!!inputError}
      >
        Next
      </button>
      <div className="my-4 text-center">
        <span>or</span>
      </div>
      <button className="flex items-center justify-center bg-blue-600 text-white border border-gray-300 py-2 px-4 rounded w-full">
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2 bg-white size-5" />
        Sign in with Google
      </button>
      <footer className="mt-80 text-center text-xs">
        <p>Protected by reCAPTCHA and the Google</p>
        <p><span className='text-blue-400 font-bold'>Privacy Policy</span> & <span className='text-blue-400 font-bold'> Terms of Service</span> apply.</p>
      </footer>
    </form>
    </div>
  );
}

export default LoginForm;

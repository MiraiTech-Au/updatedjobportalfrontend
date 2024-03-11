import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { signupUser } from '.';
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { setFetchedData } from '../profile';


// import { registerUser } from './actions/userActions'; // Adjust the import path as needed

const SignupForm = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();

  Yup.addMethod(Yup.string, 'phone', function (errorMessage) {
    return this.test('phone', errorMessage, function (value) {
      const { path, createError } = this;
      // isValidPhoneNumber returns true only for valid phone numbers
      return isValidPhoneNumber(value || "") || createError({ path, message: errorMessage });
    });
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      primaryContact: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      primaryContact: Yup.string()
      .required("Phone Number is required")
      .phone("Mobile number is not valid"),
  }),
    onSubmit: (values) => {
      const {  ...userData } = values;
      const submissionData = {
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
        personalInfo: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          primaryContact: userData.primaryContact,
        },
      };

      // Assuming signupUser action correctly handles the signup process
      dispatch(signupUser(submissionData)).then((res) => {
          console.log(res)
          dispatch(setFetchedData(res.payload.user))
          alert("Registered Successfully")
        navigate('/');
      });
    },
  });


  return (
    <div className="h-screen flex items-center justify-center bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
      <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Signup Form</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm ">
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                    <div>
                    <label htmlFor="firstName" className="sr-only">
                        FirstName
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="First Name"
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <span className="text-xs text-red-600">{formik.errors.firstName}</span>
                    ) : null}
                    </div>
                    <div>
                    <label htmlFor="lastName" className="sr-only">
                        LastName
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Last Name"
                        {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <span className="text-xs text-red-600">{formik.errors.lastName}</span>
                    ) : null}
                    </div>
                    </div>
                    
                    <div className='mb-4'>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <span className="text-xs text-red-600">{formik.errors.email}</span>
                    ) : null}
                    </div>

                    <div className='mb-4'>
                    <label htmlFor="primaryContact" className="sr-only">
                      primaryContact
                    </label>
                    <PhoneInput
                        id="primaryContact"
                        value={formik.values.primaryContact}
                        onChange={value => formik.setFieldValue('primaryContact', value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter Phone Number"
                      />
                    {formik.touched.primaryContact && formik.errors.primaryContact ? (
            <span className="text-xs text-red-600">{formik.errors.primaryContact}</span>
          ) : null}
                    </div>

                     <div className='grid grid-cols-1 md:grid-cols-2  gap-3 mb-4'>
                       
                    {/* password */}
                    <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <span className="text-xs text-red-600">{formik.errors.password}</span>
                    ) : null}
                    </div>

                    {/* Confirm Password Input */}
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                      Confirm Password
                      </label>
                    <input 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      type="password" 
                      autoComplete="current-password" 
                      required 
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" {...formik.getFieldProps('confirmPassword')} />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? 
                    <div className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</div> : null}
                  </div>
                  </div>
            </div>
            <div className='mt-5'>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border  text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              
            >
              Signup
            </button>
          </div>
            <p className='cursor-pointer' onClick={()=>navigate('/login')}>Already registered? Sign In now</p>
          
        </form>
      </div>
      </div>
  );
};

export default SignupForm;

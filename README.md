## Run JSON Server cmd:

`npx json-server --watch db.json --port 9999`

> Change db.json to your database file name

## Config

`utils/index.js`

```
import axios from "axios"

const PORT = 9999 // Change your json server port if needed

export const instance = axios.create({
    baseURL: `http://localhost:${PORT}`,
})

```

## useQueryParams demo

url: `localhost:3000/?name=John&age=30`

```
const { name, age } = useQueryParams();
console.log(name) // John
console.log(age) // 30
```

## useParams demo

url: `localhost:3000/users/123`

```
const { id } = useParams(); // id is the name of the parameter in the URL, config in root component (index.js)
console.log(id) // 123
```

## useQuery demo

```
import React from 'react';
import useQuery from './useQuery';

const UserProfile = ({ userId }) => {
  const { data, loading, error, refetch } = useQuery(`/users/${userId}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Role: {data.role}</p>
      <button onClick={refetch}>Refresh Data</button>
    </div>
  );
};

export default UserProfile;
```

## useForm demo

```
import React from 'react';
import useForm from './useForm';

const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  const validationRules = {
    email: (value) => {
      if (!value) return 'Email is required';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
    },
    password: (value) => {
      if (!value) return 'Password is required';
      if (value.length < 6) return 'Password must be at least 6 characters';
    }
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  } = useForm(initialValues, validationRules);

  const onSubmit = (formValues) => {
    console.log('Form submitted with values:', formValues);
    // Here you would typically send the data to a server
    // After successful submission, you might want to reset the form
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default LoginForm;
```

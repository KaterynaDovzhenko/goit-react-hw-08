import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Username
          <Field type="text" name="name"></Field>
        </label>
        <label>
          <Field type="email" name="email"></Field>
        </label>
        <label>
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

import React, { memo, useCallback, useState } from "react";
import * as yup from "yup";
import update from "immutability-helper";
import "./loanSeekerForm.css";
import { Form } from './form'

export const LoanSeekerForm = memo(() => {
  const formSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    occupation: yup.string().required("Occupation is required"),
    reason: yup.string().required("reason is required"),
    phoneNumber: yup.number().typeError("Phone Number is required").required(),
  });

  const [values, setValues] = useState({
    firstName: false,
    lastName: false,
    occupation: false,
    reason: false,
    phoneNumber: false,
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    occupation: false,
    reason: false,
    phoneNumber: false,
  });

  const onFieldChange = useCallback((fieldName, value) => {
    setValues((preValues) =>
      update(preValues, {
        [fieldName]: {
          $set: value,
        },
      })
    );
  }, []);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();

    const isFormValid = await formSchema.isValid(values, {
      abortEarly: false,
    });

    if (isFormValid) {
      console.log("Form is Valid");
    } else {
      formSchema.validate(values, { abortEarly: false }).catch((err) => {
        const errors = err.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: true,
          };
        }, {});

        setErrors((prevErrors) =>
          update(prevErrors, {
            $set: errors,
          })
        );
      });
    }
  });

  return (
    <Form
      values={values}
      errors={errors}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    />
  );
});

export default LoanSeekerForm;
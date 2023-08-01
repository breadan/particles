import React, { useEffect, useRef, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Style from "./UseForm.module.css";
import * as yup from "yup";
import schema from "./Schemas.jsx"; //??????
// import {yupResolver} from "@hookform/resolvers/yup"   // error???
import { log } from "console";

// npm i -D @hookform/devtools
//useFieldArray to register Phone number

//7 Type Values Form
type FormValues = {
  username: string;
  email: string;
  pass: string[];
  rePass: string[];
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
};
//5
let renderCount = 0;

export default function FormRef() {
  //To Focus
  // const inputF = useRef();

  // // //2
  // useEffect(() => {
  //   inputF.current.focus();
  // }, []);
  // ********************************************************

  //1
  const form = useForm<FormValues>({
    // defaultValues: async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //   const data = await response.json()
    //   return {
    //     username: "alaa",
    //     email: data.email

    //   }
    // }

    defaultValues: {
      username: "",
      email: "",
      pass: [],
      rePass: [],
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
    mode: "all", //onSubmit && onChange && onBlur
  });

  //2  ** control use in DEvtool
  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: {
      errors,
      touchedFields,
      dirtyFields,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      submitCount,
    },
    watch,
    getValues,
    setValue,
    reset,
    trigger,
    setFocus,
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  //6 onSubmit
  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data); //call handelSubmit up
  
  };

  const onError = (error: FieldErrors<FormValues>) => {
    console.log("Form errors", errors);
  };
  // console.log(errors);
  console.log({ touchedFields, dirtyFields, isDirty, isValid });

  // const watchForm =  watch();

  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value);

  //   })
  //   return () => subscription.unsubscribe();
  // }, [watch])
  const handleGetValues = () => {
    console.log("Get Value", getValues(["username", "email"]));
  };

  const handleSetValue = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  //To Focus
  React.useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  //check rePassword
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isError, setIsError] = useState('');

  const checkValidation = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setConfirmPass(event.target.value)
    if(password != confirmPass){
      setIsError("Confirm Password Should be Match With Password")
    } else {
      setIsError("")

    }
  }

  renderCount++;
  return (
    <>
      <p>UseForm</p>
      <h1>submit Form ({renderCount / 2})</h1>
      {/* <h2>Watched value:{JSON.stringify(watchForm)}</h2> */}

      <div className=" w-50 d-flex flex-column ">
        <Form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control
              {...register("username", {
                required: {
                  value: true,
                  message: "User Name is Required",
                },
              })}
              type="text"
              placeholder="name@example.com"
              id="username"
              // disabled
            />
            <p className={Style.error}>{errors.username?.message}</p>
          </FloatingLabel>

          <FloatingLabel label="Email address" className="mb-3 mt-2">
            <Form.Control
              type="email"
              {...register("email", {
                required: "This is Required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid Email Format",
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue !== "admin@example.com" ||
                      "Enter a different email address"
                    );
                  },
                  notBlackListed: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("baddomain.com") ||
                      "This is not Supported"
                    );
                  },
                  emailAvailable: async (fieldValue) => {
                    const response = await fetch(
                      `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                    );
                    const data = await response.json();
                    return data.length == 0 || "Email Already Exists";
                  },
                },
              })}
              placeholder="name@example.com"
              id="email"
            />
            <p className={Style.error}>{errors.email?.message}</p>
          </FloatingLabel>

          <FloatingLabel label="Password">
            <Form.Control
              {...register("pass", {
                required: "This is required.",
                pattern: {
                  value: /^[A-Z][a-z0-9]{5,10}$/,
                  message: "Invalid Password Format",
                },
                onChange(event) {
                    setPassword(event.target.value)
                },
                
              })}
              type="password"
              placeholder="Password"
              id="pass"
              name="pass"
            />
          </FloatingLabel>
          <p className={Style.error}>{errors.pass?.message}</p>

          <FloatingLabel label="rePassword">
            <Form.Control
              {...register("rePass", {
                // required: "This is required.",
                // pattern: {
                //   value: /^[A-Z][a-z0-9]{5,10}$/,
                //   message: "Invalid Password Format",
                // },
                onChange(event) {
                  checkValidation(event)
              },
              validate: {
                notConfirm: (e) => {
                  return (
                    password == confirmPass || "Not"
                  );
                }
              }
              })}
              type="password"
              placeholder="rePassword"
              id="rePass"
              name="confirmPass"
            />
          </FloatingLabel>
          <p className={Style.error}>{errors.rePass?.message}</p>
          <p className={Style.error}>{isError}</p>

          <FloatingLabel label="Twitter" className="mb-3">
            <Form.Control
              {...register("social.twitter", {
                // disabled: watch("username")  === "",   ??
                required: "Enter Twitter",
              })}
              type="text"
              placeholder="Twitter"
              id="twitter"
            />
          </FloatingLabel>

          <FloatingLabel label="Facebook" className="mb-3">
            <Form.Control
              {...register("social.facebook")}
              type="text"
              placeholder="Facebook"
              id="twitter"
            />
          </FloatingLabel>

          <FloatingLabel label="Primary PhoneNumber" className="mb-3">
            <Form.Control
              {...register("phoneNumbers.0", {
                required: "This is required.",
                pattern: {
                  value: /^01[0125][0-9]{8}$/,
                  message: "Invalid Phone Format",
                },
              })}
              type="text"
              placeholder="Primary PhoneNumber"
              id="phoneNumbers.0"
              name="phoneNumbers.0"
            />
            <p className={Style.error}>
              {errors.phoneNumbers && errors.phoneNumbers[0]?.message}
            </p>
          </FloatingLabel>

          <FloatingLabel label="Secondary PhoneNumber" className="mb-3">
            <Form.Control
              {...register("phoneNumbers.1", {
                required: "This is required.",
                pattern:{
                  value: /^01[0125][0-9]{8}$/,
                  message: "Invalid Phone Format",
                }
              })}
              type="text"
              placeholder="Secondary PhoneNumber"
              id="phone2"
            />
            <p className={Style.error}>
              {errors.phoneNumbers && errors.phoneNumbers[1]?.message}
            </p>
          </FloatingLabel>

          <FloatingLabel label="Age" className="mb-3">
            <Form.Control
              {...register("age", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Age Is Required",
                },
              })}
              type="number"
              placeholder="age"
              id="age"
            />
          </FloatingLabel>
          <p className={Style.error}>{errors.age?.message}</p>

          <FloatingLabel label="dob" className="mb-3">
            <Form.Control
              {...register("dob", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Date of birth Is Required",
                },
              })}
              type="date"
              placeholder="dob"
              id="dob"
            />
            <p className={Style.error}>{errors.dob?.message}</p>
          </FloatingLabel>
        </Form>

        <div>
          <label>List Of Phon</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text "
                    {...register(`phNumbers.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <Button
                      onClick={() => remove(index)}
                      variant="outline-success"
                      className="m-3 w-50 "
                      type="button"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="d-flex  p-2">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="outline-success"
            className="m-3 w-50 "
            disabled={!isDirty || isSubmitting}
          >
            Submit
          </Button>
          <Button
            onClick={() => append({ number: "" })}
            variant="outline-success"
            className="m-3 w-50 p-2"
          >
            Add Phone
          </Button>
        </div>

        <div className="d-flex p-2">
          <Button
            onClick={handleGetValues}
            variant="outline-success"
            className="m-3 w-50 p-2"
          >
            Get Value
          </Button>
          <Button
            onClick={handleSetValue}
            variant="outline-success"
            className="m-3 w-50 p-2"
          >
            Set Value
          </Button>
        </div>

        <div className="d-flex p-2">
          <Button
            onClick={() => reset()}
            variant="outline-success"
            className="m-3 w-50 p-2"
          >
            Reset
          </Button>
          <Button
            onClick={() => trigger("username")}
            variant="outline-success"
            className="m-3 w-50 p-2"
          >
            Validate
          </Button>
        </div>

        {/* //4 */}
        <DevTool control={control} />
      </div>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useForm from 'react-hook-form';

export const HookRef = () => {
  //First Use: Catch Element
  // C1 Create Const Ref && Put It in The Element You Want it Like (ID)
  const lastP = useRef();
  //C2 Create Function
  const moveDown = () => {
    lastP.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  // **************************************************************
  //Second Use: Create Counter
  //1
  const count = useRef(0);
  //2
  useEffect(() => {
    count.current = count.current + 1;
    console.log(count.current);
  }, []);
  //3
  const [render, setRender] = useState(0);

  // **************************************************************
  //third Use: catch input & focus it
  //1
  const inputF = useRef(null);

  //2
  useEffect(() => {
    inputF.current.focus();
  }, []);
  //*************************************************** */
  // Fours Use: Create Timer
  //1
  const [timer, setTimer] = useState(0);
  //2
  const intervalRef = useRef(null);
  //3
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTim) => prevTim + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      {/* ****************************************************** */}

      <button
        onClick={() => {
          setRender((prev) => prev + 1);
        }}
        type="button"
        class="btn btn-outline-success m-3"
      >
        count Up
      </button>

      <button
        onClick={() => {
          setRender((prev) => prev - 1);
        }}
        type="button"
        class="btn btn-outline-success m-3"
      >
        count Down
      </button>

      <h2>{render}</h2>

      {/* <h2>{render}</h2> */}
      {/* ********************************************************************* */}

      <button
        onClick={moveDown}
        type="button"
        class="btn btn-outline-success m-3"
      >
        Down
      </button>
      <div className="row">
        <div className="col-md-3 d-flex gap-3 ">
          <section className="d-flex flex-column ">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
          <section className="mt-auto">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
          <section className="mt-auto">
            <img src="https://picsum.photos/200/300/?blur" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex gap-3 ">
          <section className="d-flex flex-column ">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
          <section className="mt-auto">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
          <section className="mt-auto">
            <img src="https://picsum.photos/200/300/?blur" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex gap-3 ">
          <section className="d-flex flex-column ">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
          <section className="mt-auto">
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
          <section className="mt-auto">
            <img src="https://picsum.photos/200/300/?blur" alt="" />
            <p ref={lastP} className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus eius accusantium voluptates consectetur quasi ab quod
            </p>
          </section>
        </div>
      </div>

      {/* ***************************************************************** */}

      <div className="m-5 w-50 d-flex flex-column  align-items-center">
        <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
          <Form.Control
            ref={inputF}
            type="text"
            placeholder="name@example.com"
            id="name"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput2"
          label="Email address"
          className="mb-3 mt-2"
        >
          <Form.Control type="email" placeholder="name@example.com" id="email"/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" id="pass"/>
        </FloatingLabel>

        <Button variant="outline-success" className="mt-3">Submit</Button>{' '}

      </div>
      {/* ***************************************************************** */}

      {/* Fours Use: Create Timer */}

      <div className="w-50 mb-5">
        <Card>
          <Card.Header className="text-center">Timer</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
              {timer}
            </Card.Text>
            <Button
              onClick={() => clearInterval(intervalRef.current)}
              variant="primary"
            >
              Set Time
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

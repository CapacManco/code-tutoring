import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

import emailjs from '@emailjs/browser';
import db from '../../utils/firebaseConfig';

// Firebase rule : if write only is not sufficient, necessity to implement another solution
// write: if request.time > resource.data.timestamp + duration.value(5, "s");

const Form = () => {
  const [formValid, setFormValid] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    tel: '',
    formula: '',
    description: '',
  });
  const [formErrors, setFormErrors] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    enableSubmitButton();
  }, [formState]);

  const handlingformData = async (e) => {
    handleValidation();
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'clients'), {
        name: formState.name,
        email: formState.email,
        phone: formState.tel,
        formula: formState.formula,
        description: formState.description,
        timestamp: serverTimestamp(),
        contacted: 'no',
      });
      setFormSubmitted(true);
      sendMail();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const enableSubmitButton = () => {
    if (
      formState.name &&
      formState.email &&
      formState.formula &&
      formState.description
    ) {
      setFormValid(true);
      return;
    }
    setFormValid(false);
  };

  const sendMail = () => {
    const values = {
      name: formState.name,
      email: formState.email,
      phone: formState.tel,
      formula: formState.formula,
      description: formState.description,
      timestamp: new Date().toLocaleString(),
    };

    emailjs.send(
      'service_lmil0ml',
      'template_dj3jnhx',
      values,
      'dsb6Smxkg3Y93h0KB'
    );
    // .then(
    //   function (response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   },
    //   function (error) {
    //     console.log('FAILED...', error);
    //   }
    // );
  };

  const handleValidation = () => {
    //Name
    if (!formState.name) {
      setFormErrors('Name cannot be empty');
    }
  };

  return (
    <form className="booking__form">
      <div className="booking__textbox">
        <p className="booking__title">BOOK A SESSION</p>
        <p className="booking__text">
          Book a lesson with one of our experienced tutors !
        </p>
      </div>
      <div className="booking__inputs">
        <label htmlFor="name">Your name*</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="booking__input"
          required
        />
        <label htmlFor="email">Your email*</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          className="booking__input"
          required
        />
        <label htmlFor="tel">Your phone</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          value={formState.tel}
          onChange={(e) => setFormState({ ...formState, tel: e.target.value })}
          className="booking__input"
        />
        <label htmlFor="formula">Formula*</label>
        <select
          name="formula"
          id="formula"
          className="booking__input"
          required
          onChange={(e) =>
            setFormState({ ...formState, formula: e.target.value })
          }
        >
          <option className="booking__option" value="">
            Select formula :
          </option>
          <option className="booking__option" value="Single session">
            Single session
          </option>
          <option className="booking__option" value="Student">
            Student
          </option>
          <option className="booking__option" value="Personalizable student">
            Personalizable student
          </option>
        </select>
        <label htmlFor="description">What do you want to learn?*</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
          className="booking__input booking__input--description"
          required
        />
      </div>
      <button
        className="booking__button"
        onClick={(e) => handlingformData(e)}
        disabled={!formValid}
      >
        Submit
      </button>
      {formSubmitted ? (
        <p className="booking__success">
          Form submitted successfully ! <br /> A coding tutor will come back to
          you in less than 24 hours.
        </p>
      ) : null}
    </form>
  );
};

export default Form;

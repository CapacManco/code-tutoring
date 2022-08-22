import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from '../../pages/utils/firebaseConfig';

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
        date: new Date().toLocaleString(),
        contacted: 'no',
      });
      setFormSubmitted(true);
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

  const handleValidation = () => {
    //HERE6
    //Name
    if (!formState.name) {
      setFormErrors('Name cannot be empty');
    }

    // if (typeof fields['name'] !== 'undefined') {
    //   if (!fields['name'].match(/^[a-zA-Z]+$/)) {
    //     formIsValid = false;
    //     errors['name'] = 'Only letters';
    //   }
    // }

    //Email
    //   if (!fields['email']) {
    //     formIsValid = false;
    //     errors['email'] = 'Cannot be empty';
    //   }

    //   if (typeof fields['email'] !== 'undefined') {
    //     let lastAtPos = fields['email'].lastIndexOf('@');
    //     let lastDotPos = fields['email'].lastIndexOf('.');

    //     if (
    //       !(
    //         lastAtPos < lastDotPos &&
    //         lastAtPos > 0 &&
    //         fields['email'].indexOf('@@') == -1 &&
    //         lastDotPos > 2 &&
    //         fields['email'].length - lastDotPos > 2
    //       )
    //     ) {
    //       formIsValid = false;
    //       errors['email'] = 'Email is not valid';
    //     }
    //   }
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

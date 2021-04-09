import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    //   checking if this works
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form action="" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        {/* Image */}
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        {/* Address */}
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        {/* Description */}
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            name=""
            id="description"
            cols="5"
            rows="5"
            required
            ref={descriptionInputRef}
          ></textarea>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

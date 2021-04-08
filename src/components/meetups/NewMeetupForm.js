import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <Card>
      <form action="" className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        {/* Image */}
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        {/* Address */}
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            name=""
            id="description"
            cols="5"
            rows="5"
            required
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

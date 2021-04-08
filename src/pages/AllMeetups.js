import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup @Berlin',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Berlin',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup @Barcelona',
    image:
      'https://tecnohotelnews.com/wp-content/uploads/2019/05/shutterstock_214016374.jpg',
    address: 'Meetupstreet 5, 12345 Barcelona',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis rem in quo repellat incidunt et pariatur laudantium, fugiat, porro veritatis maxime ipsam assumenda ab at aperiam? Laboriosam, quisquam dicta. Nostrum velit sunt sapiente quis!',
  },
];

function AllMeetupsPage() {
  return (
    <div>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}

export default AllMeetupsPage;

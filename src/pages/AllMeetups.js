import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first @Madrid',
    image:
      'https://www.tripsavvy.com/thmb/vLOWxjCoy7EO8RGxOifrMLCQrPY=/1500x1004/filters:fill(auto,1)/thingstodoinmadridskyline-d05bf06ef9144f04973d5bfc50fbcee6.jpg',
    address: 'Meetupstreet 5, 12345 Madrid',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second @Barcelona',
    image:
      'https://tecnohotelnews.com/wp-content/uploads/2019/05/shutterstock_214016374.jpg',
    address: 'Meetupstreet 5, 12345 Barcelona',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
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

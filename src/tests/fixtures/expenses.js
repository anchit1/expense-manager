import moment from 'moment';

export default [{
  id: '1',
  description: 'foo1',
  note: '',
  amount: 100,
  createdAt: 0
}, {
  id: '2',
  description: 'foo2',
  note: '',
  amount: 105,
  createdAt: moment(0).subtract(5, 'days').valueOf()
}, {
  id: '3',
  description: 'foo3',
  note: '',
  amount: 110,
  createdAt: moment(0).add(5, 'days').valueOf()
}];
'use strict'

module.exports = [{
  id: 'a0', // mine room 1
  content: 'message 1',
  user: 'a0',
  room: 'a0',
  deleted: false,
  unread: []
}, {
  id: 'a1', // mine room 1
  content: 'message 2',
  user: 'a0',
  room: 'a0',
  deleted: false,
  unread: []
}, {
  id: 'a2', // m8 room 1
  content: 'message 2.1',
  user: 'a1',
  room: 'a0',
  deleted: true,
  unread: []
}, {
  id: 'a3', // mine room 2
  content: 'message 3',
  user: 'a0',
  room: 'a1',
  deleted: false,
  unread: []
}, {
  id: 'a4', // mine room 2
  content: 'message 4',
  user: 'a0',
  room: 'a1',
  deleted: true,
  unread: []
}, {
  id: 'a5', // m8 room 3
  content: 'message 5',
  user: 'a1',
  room: 'a5',
  deleted: false,
  unread: []
}, {
  id: 'a6', // m8 room 3
  content: 'message 6',
  user: 'a1',
  room: 'a5',
  deleted: true,
  unread: []
}]

'use strict'

module.exports = [{
  id: 'a0', // Single Person + No Name + No Image
  name: null,
  image: null,
  private: true,
  users: ['a0', 'a1'],
  messages: []
}, {
  id: 'a1', // Single Person + Name + Image
  name: 'woop woop',
  image: 'backoffice.png',
  private: true,
  users: ['a0', 'a2'],
  messages: []
}, {
  id: 'a2', // Single Person + No Name + No Image
  name: null,
  image: null,
  private: false,
  users: ['a0', 'a4'],
  messages: []
}, {
  id: 'a3', // Many PPL + Name + Image
  name: 'WARP Team',
  image: 'warp.png',
  private: false,
  users: ['a0', 'a1', 'a3', 'a4'],
  messages: []
}, {
  id: 'a4', // Many PPL + No Name + No Image
  name: null,
  image: null,
  private: false,
  users: ['a0', 'a2', 'a4'],
  messages: []
}, {
  id: 'a5', // Not a member
  name: null,
  image: null,
  private: true,
  users: ['a3', 'a1'],
  messages: []
}, {
  id: 'a6', // Not a member
  name: null,
  image: null,
  private: false,
  users: ['a4', 'a2'],
  messages: []
}]

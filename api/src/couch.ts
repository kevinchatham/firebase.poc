import nano from 'nano';

const n = nano('http://admin:000000@localhost:5984');
const db = n.db.use('couch');

interface iPerson extends nano.MaybeDocument {
  name: string;
}

class Person implements iPerson {
  _id?: string;
  _rev?: string;
  name: string;

  constructor(name: string) {
    this._id = undefined;
    this._rev = undefined;
    this.name = name;
  }

  processAPIResponse(response: nano.DocumentInsertResponse) {
    if (response.ok === true) {
      this._id = response.id;
      this._rev = response.rev;
    }
  }
}

const p = new Person('Bob');

db.insert(p).then((response) => {
  p.processAPIResponse(response);
  console.log(p);
});

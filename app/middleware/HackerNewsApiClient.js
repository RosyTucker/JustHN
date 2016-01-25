/*
 * @flow
 */
import Firebase from 'firebase';

class HackerNewsApiClient {
    _storage: Firebase;

    constructor(storage : Firebase) {
        this._storage = storage;
    }

    getResults(): Promise {
        return new Promise((resolve) => {
            this._storage.child('topstories').limitToFirst(100).once('value', (snapshot) => {
                let promises = snapshot.val().map((id: Number) => this.getItem(id));
                Promise.all(promises).then((items) => {
                    resolve(items);
                });
            });

        });
    }

    getItem(id: Number): Promise {
        return new Promise((resolve) => {
            this._storage.child(`item/${id}`).once('value', (item: Object) => {
                resolve(item.val());
            });
        });
    }
}

export default HackerNewsApiClient;


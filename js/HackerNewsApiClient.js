/*
 * @flow
 */
import Firebase from 'firebase';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

class HackerNewsApiClient {

    api: Object;
    topStoriesRef: Object;

    constructor() {
        this.api = new Firebase(BASE_URL);
        this.topStoriesRef = this.api.child('topstories');
    }

    getPage(): Promise {
        return new Promise((resolve) => {
            this.topStoriesRef.limitToFirst(20).once('value', (snapshot) => {
                let promises = snapshot.val().map((id: Number) => this.getItem(id));
                Promise.all(promises).then((items) => {
                    resolve(items);
                });
            });
        });
    }

    getItem(id: Number): Promise {
        return new Promise((resolve) => {
            this.api.child(`item/${id}`).once('value', (item: Object) => {
                resolve(item.val());
            });
        });
    }
}

export default HackerNewsApiClient;

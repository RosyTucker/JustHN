import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const {expect} = chai;
chai.use(sinonChai);

import HackerNewsApiClient from '../app/middleware/HackerNewsApiClient';
import Firebase from 'firebase';

describe('HackerNewsApiClient', () => {

    let client, stubFirebase;

    beforeEach(() => {
        stubFirebase = sinon.createStubInstance(Firebase);
        client = new HackerNewsApiClient(stubFirebase);
    });

    describe('getItem', () => {
        it('should get the item from storage', () => {
            const itemId = 1234;
            client.getItem(itemId);
            expect(stubFirebase.child).to.have.been.calledWith('item/1234');
        });
    });
});

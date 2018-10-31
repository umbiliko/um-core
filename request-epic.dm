# Request Epic

All http requests to api could be handled by a sing epic mapping to actions that are accurately handled by reducers to update the store state.

## Using fetch vs ajax in redux-observable

(Note: RX.DOM.ajax is from RxJS v4, and doesn't work with redux-observable which requires RxJS v5. The equivalent in v5 is Rx.Observable.ajax or import { ajax } from 'rxjs/observable/ajax';)

It is indeed possible to use fetch() as well as any other AJAX API; though some adapt easier than others!

The fetch() API returns a Promise, which RxJS v5 has built-in support for. Most operators that expect an observable can consume Promises as-is (like mergeMap, switchMap, etc). But often you'll want to apply Rx operators to the Promise before passing it along to the rest of your Epic, so you'll often want to wrap the Promise inside an Observable.

You can wrap a Promise into an Observable with Observable.from(promise)

Here's an example where I fetch for a user, request the JSON response, then wrap the promise in an observable:

const api = {
  fetchUser: id => {
    const request = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json());
    return Observable.from(request);
  }
};
You can then consume that in your Epic and apply any operators you want:

const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      api.fetchUser(action.payload) // This returns our Observable wrapping the Promise
        .map(payload => ({ type: FETCH_USER_FULFILLED, payload }))
    );
Here's a JSBin with this working example: https://jsbin.com/fuwaguk/edit?js,output

If you have control over the API code, ideally you would use Observable.ajax (or any other Observable-based AJAX utils) because Promises cannot be cancelled.

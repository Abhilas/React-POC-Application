export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Adding an Action creator.
// It is basically a function that return an Action.

export const performIncrement = (value) => {
    return {
        type: INCREMENT,
        counterVal: value
    }
}

export const performDecrement = (value) => {
    return {
        type: DECREMENT,
        counterVal: value
    }
}

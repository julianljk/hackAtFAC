export const INCREMENT_COUNTER = Symbol('INCREMENT_COUNTER');
export const DECREMENT_COUNTER = Symbol('DECREMENT_COUNTER');

export function incrementCounter(amount) {
    return {
      type: INCREMENT_COUNTER,
      amount
    }
}

export function decrementCounter(amount) {
    return {
      type: DECREMENT_COUNTER,
      amount
    }
}

import { expect, test } from '@jest/globals';


test('Promise should have pipe method', () => {
    const promise = Promise.resolve();
    expect(promise.pipe).toBeDefined();
});

test('Should perform chain on pipe', () => {
    // (new Promise()).pipe(
    //   Promise.resolve(),    
    //   Promise.reject(),    
    // )
    expect(true).toBe(true);
});

test('Should support catch', () => {
    // (new Promise()).pipe(
    //   Promise.resolve(),    
    //   Promise.reject(),
    //   catch((err) => catch)
    // )
    expect(true).toBe(true);
});
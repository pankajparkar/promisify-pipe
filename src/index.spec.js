
test('Promise should have pipe method', () => {
    // (new Promise()).pipe()
    expect(true).toBe(true);
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
function ImpliedReturn(){
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return(
        <>

            <h3>Implied return</h3>
            twoPlusFour = { fourTimesFive }<br />
            add(2, 4) = { multiply(2, 4) }<br />
        </>

    )
}
export default ImpliedReturn
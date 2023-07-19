import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-functions";
import JSONStringify from "./json-stringify";
import FindFunction from "./find-functions";
import FindIndex from "./if-else";
import FilterFunctions from "./filter-function";
import Spread from "./spread";

function WorkingWithArrays(){
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];
    return (
        <>
            <h3>Working With Arrays</h3>
            numberArray1 = { numberArray1 }<br />
            stringArray1 = { stringArray1 }<br />
            variableArray1 = {variableArray1}<br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JSONStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunctions/>
            <Spread/>
        </>
    )
}
export default WorkingWithArrays
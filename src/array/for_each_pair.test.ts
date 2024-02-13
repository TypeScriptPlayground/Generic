import {
  assertSpyCall,
  assertSpyCalls,
  spy,
} from "https://deno.land/std@0.214.0/testing/mock.ts";
import forEachPair from "./for_each_pair.ts";

Deno.test(
  'Call function for each pair.',
  () => {
    function dummyFunction(
      previousValue : number,
      currentValue : number
    ) : void {}
    
    const dummyFunctionSpy = spy(dummyFunction);

    forEachPair(
      [0, 2, 3, 7],
      dummyFunctionSpy
    )

    assertSpyCall(dummyFunctionSpy, 0, {
      args: [
        0,
        2
      ]
    })

    assertSpyCall(dummyFunctionSpy, 1, {
      args: [
        2,
        3
      ]
    })

    assertSpyCall(dummyFunctionSpy, 2, {
      args: [
        3,
        7
      ]
    })

    assertSpyCalls(dummyFunctionSpy, 3);
  }
)

import LazyObservable from "./shared/lazy-observable";
import EagerObservable from "./shared/eager-observable";

it("pub/sub with custom lazy observable", () => {
  var observableObject = new LazyObservable("dog");
  observableObject.value = "cat";

  observableObject.subscribe((object) => {
    console.log("the animal is " + object.value);
  });

  observableObject.subscribe((object) => {
    console.log(object.value + " is the animal");
  });

  // it needs a notify
  observableObject.notify();
});

it("pub/sub with custom eager observable", () => {
  var observableObject = new EagerObservable("dog");
  observableObject.value = "cat";
  
  observableObject.subscribe((object) => {
    console.log("the animal is " + object.value);
  });
  
  observableObject.subscribe((object) => {
    console.log(object.value + " is the animal");
  });
  
  // it does not need a notify
});

const log = console.log;
const test1 = (a) =>{
    switch(a){
        case "test001":
        //00. 평가, 일급함수, 고차함수 
            log(1);
            log([1, 2]); 
            // 평가란 코드가 계산되어 만들어지는 값 
        case "test002":
        // 00-1. 일급
            const a = 10; 
            const add10 = a => a + 10;
            const r = add10(a);
            return r;
            // 값으로 다룰 수 있고, 변수에 담을 수 있으며 인자 및 결과로 사용될 수 있는것 등등 
        case "test003":
        // 00-2. 일급함수 
            const fun = () => () => 1;
            return fun();
            // log(f1); >> ouput () => 1
            // 함수가 일급이라는 것은 함수의 결과값으로 함수가 사용이 가능하다는 뜻 
        case "test004": 
        // 00-3. 고차함수
            const apply1 = f => f(1);
            const add2  = a => a + 2;
            return apply1(add2);
            // apply1은 함수를 인자로 받아서 실행하는 함수 
        case "test005" :
        // 00-4. 함수를 만들어 리턴 
            const addMaker = a => b => a + b;
            const addResult = addMaker(10);
            // return addResult; 
            // 해당 부분은 정확히 b => a + b로 아웃풋 된다. 
            return addResult(5);
        case "test006" : 
        // 00-5.  ES6+ 리스트 순회 방법 
            const list = [1,2,3,4,5];
            const beforeFor = () =>{
                for(var i=0; list.length > i; i++){
                    log(list[i]);
                }
            }
            const recentFor = () =>{
                for(let i of list){
                    log(i);
                }
            }
            return beforeFor();
            // return recentFor();
        case "test007" : 
        // 00-6. 이터러블
            // 위의 for of가 가능했던 이유 
            // list에 이터레이터를 리턴하는 [Symbol.iterator]() 메서드가 내장되어 있기 때문 
            // 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값, 즉 자료를 반복할 수 있는 객체를 말합니다.
            // 이터레이터 : {value, done} 객체를 리턴하는 next()를 가진 값, 즉 next 메서드로 순환할 수 있는 객체다. 
            const iterable = {
                [Symbol.iterator]() {
                  let i = 3;
                  return {
                    next() {
                      return i == 0 ? {done: true} : {value: i--, done: false}; // 삼항 연산자를 사용하여 해당 조건을 주고 
                    },
                    [Symbol.iterator]() {
                      return this;
                    }
                  }
                }
              };
              let iterator = iterable[Symbol.iterator]();
              log(iterator.next());
              log(iterator.next());
              log(iterator.next());
              // for (const a of iterator) log(a);
              return "Fin";


    }
}
log(test1("test007"));

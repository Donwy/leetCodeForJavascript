// functions.test.js
const stub = false;
function send() {
    if(!stub) {
      return 1+1;
    } else {
      return 2+2
    }
}



// functions.test.js

const send = require('./functions');

describe('send function', () => {
  describe('when stub is false', () => {
    beforeEach(() => {            // 在每个测试用例运行之前执行的操作
      stub = false;
    });

    it('should return 2', () => {
      const result = send();
      expect(result).toBe(2);
    });

    // 可以在此添加更多针对 stub 为 false 的测试用例
  });

  describe('when stub is true', () => {
    beforeEach(() => {               // 在每个测试用例运行之前执行的操作
      stub = true;
    });

    it('should return 4', () => {
      const result = send();
      expect(result).toBe(4);
    });

    // 可以在此添加更多针对 stub 为 true 的测试用例
  });
});

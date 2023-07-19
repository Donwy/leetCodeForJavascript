var MyCalendar = function() {
    this.arr = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
   const newEvent = [start, end];

    // If the arr is empty, just add the new event.
    if (this.arr.length === 0) {
      this.arr.push(newEvent);
      return true;
    }

    // Binary search to find the insertion position.
    let left = 0;
    let right = this.arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const [midStart, midEnd] = this.arr[mid];

      // Check if the new event overlaps with the mid event.
      if (start >= midEnd) {
        left = mid + 1;
      } else if (end <= midStart) {
        right = mid - 1;
      } else {
        // Overlapping found, return false as it leads to double booking.
        return false;
      }
    }

    // Insert the new event at the appropriate position to maintain sorted order.
    this.arr.splice(left, 0, newEvent); //为确保排序
    return true;
  
};

// Example usage:
const calendar = new MyCalendar();
console.log(calendar.book(47, 50)); // Output: true
console.log(calendar.book(33, 41)); // Output: false, as it overlaps with the previous event
console.log(calendar.book(39, 45)); // Output: true, no overlapping with previous events
console.log(calendar.book(33, 42)); 
console.log(calendar.book(25, 32)); 
console.log(calendar.book(26, 35)); 
console.log(calendar.book(19, 25)); 
console.log(calendar.book(3, 8)); 
console.log(calendar.book(8, 13)); 
console.log(calendar.book(18, 27)); 

// 思路解释：

// 1.在构造函数中，我们创建一个空数组this.schedule来存放已经添加的日程。数组中的每个元素都是形如[start, end]的数组，表示一个日程的起始时间和结束时间。

// 2.在book方法中，我们首先创建一个新的日程newEvent，然后判断schedule数组是否为空。若为空，说明还没有添加任何日程，直接将新日程添加到schedule中，并返回true。

// 3.如果schedule数组不为空，我们使用二分查找法来找到新日程应该插入的位置。在二分查找中，我们用左指针left和右指针right分别表示当前查找范围的左边界和右边界。每次计算中间位置mid，然后获取schedule数组中的midEvent = this.schedule[mid]，midEvent是一个形如[start, end]的数组。

// 4.我们需要判断新日程和midEvent之间是否有重复预订。如果新日程的结束时间小于等于midEvent的起始时间，说明两个日程没有交叉，新日程应该插入到midEvent之前。若新日程的起始时间大于等于midEvent的结束时间，说明两个日程没有交叉，新日程应该插入到midEvent之后。

// 5.若新日程与midEvent有交叉，则返回false表示无法添加新日程，会造成重复预订。

// 6.如果二分查找没有找到交叉的位置，说明新日程可以添加到schedule数组中，我们使用splice方法将新日程插入到left位置，同时保持schedule数组的有序性。

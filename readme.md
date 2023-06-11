# String Methods

1. charAt()
2. charCodeAt()
3. concat()
4. endsWith()
5. includes()
6. indexOf()
7. lastIndexOf()
8. match()
9. matchAll()
10. repeat()
11. replace()
12. replaceAll()
13. search()
14. slice()
15. split()
16. startsWith()
17. substr()
18. substring()
19. toLowerCase()
20. toUpperCase()
21. toString()

22. trim()
23. valueOf()

## String Methods Used In Js

1. charAt(index)	belgilangan indeksdagi belgini qaytaradi
2. concat()	ikki yoki undan ortiq stringlarni birlashtiradi
3. replace()	satrni boshqa satr bilan almashtiradi

4. split()	converts the string to an array of strings
5. substr(start, length)	satrning bir qismini qaytaradi
6. substring(start,end)	satrning bir qismini qaytaradi
7. slice(start, end)	satrning bir qismini qaytaradi
8. toLowerCase()	o'tkazilgan qatorni kichik harf bilan qaytaradi
9. toUpperCase()	uzatilgan satrni katta harf bilan qaytaradi
10. trim()	satrlardagi bo'shliqlarni olib tashlaydi
11. includes()	satrni qidiradi va mantiqiy qiymatni qaytaradi
12. search()	satrni qidiradi va mos keladigan joyni qaytaradi
<br><br><br>
<hr>

# Array Methods


1. [1, 2, 3].push(4); // [1, 2, 3, 4]
1. [1, 2, 3].pop(); // [1, 2]
1. [1, 2, 3].shift(); // [2, 3]
1. [1, 2, 3].unshift(0); // [0, 1, 2, 3]
1. ['a', 'b'].concat('c'); // ['a', 'b', 'c']
1. ['a', 'b', 'c'].join('-'); // a-b-c
1. ['a', 'b', 'c'].slice(1); // ['b', 'c']
1. ['a', 'b', 'c'].indexOf('b'); // 1
1. ['a', 'b', 'c'].includes('c'); // true
1. [3, 5, 6, 8].find((n) => n % 2 === 0); // 6
1. [2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
1. [3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
1. [1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
1. [2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16

1. [1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
1. [3, 5, 7, 8].at(-2); // 7
 
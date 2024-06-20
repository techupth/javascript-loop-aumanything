// Exercise #3: Find the Minimum Number
// สมมุติว่าเรามี Variable ตั้งต้น studentScores ซึ่งบรรจุคะแนนสอบของนักเรียนห้องหนึ่ง ดังนี้ [100, 20, 3, 100]
// ให้เขียนโปรแกรมในการหาคะแนนสอบที่น้อยที่สุดของนักเรียนในห้องหนึ่ง
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let i = 0; i < scores.length; i++)
    if (minScore < scores[i]){
        return minScore;
    };
console.log(minScore);

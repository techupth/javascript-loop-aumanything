// Exercise #5: Concatenate the Alphabets
// สมมุติว่าเรามี Variable ตั้งต้น companyName ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp"
// ให้เขียนโปรแกรมที่บอกลำดับตัวอักษรภาษาอังกฤษแต่ละตัว ว่าเป็นตัวอักษรตัวที่เท่าไหร่
// โดยมีรูปแบบการเขียนแบบนี้ "Number <ลำดับ> character is <ตัวอักษร>"
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

let companyName = "TechUp";
for (const index in companyName){
    console.log("Number " + index + " character is " + companyName[index]);
}
// Start coding here

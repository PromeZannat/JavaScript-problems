//এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার
 //হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

function getMinute(hour){
    minute = 60 * hour;

    return minute;
}

var givenHour = getMinute(10);
console .log('Hour to Minute: ', givenHour);
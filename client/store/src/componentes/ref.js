import React, { useRef, useState } from "react";

export default function RefComponent(props) {
    const [inputValue, setInputValue] = useState(""); //inputValue: هو النص الذي يكتبه المستخدم في حقل الإدخال.
                                                      //setInputValue: دالة لتحديث قيمة النص.
    const count = useRef(0);

    // يتم تحديث القيمة مباشرة عند تغيير الإدخال
    const handleChange = (e) => {
        const newValue = e.target.value; //القيمة الجديدة التي كتبها المستخدم
        setInputValue(newValue); //تحديث حالة النص ليتم إعادة التصيير بالمحتوى الجديد
        count.current = newValue.length; //  حساب طول النص المدخل وتخزينه في count.current.
        //count.current: هو المكان الذي نخزن فيه طول النص المدخل
    };

    return (
        <>
            {/* حقل إدخال النص */}
            <input
                type="text"
                value={inputValue} //يربط النص المدخل مع حالة inputValue
                onChange={handleChange} // استخدام الدالة المحدثة
            />
            {/* عرض طول النص */}
            <h1>Text Length: {count.current}</h1>
        </>
    );
}

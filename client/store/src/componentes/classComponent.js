// we will create simple class component for our ap
// الفرق بين class & function 
// الفنكشن البرفورمنس اعلى من كلاس كومبونينت وهاض السبب برجع ل انه مرحلة الكرييت ومرحلة الريندر في داخل الفنكشن بوخذوا براليل يعني بتكرر تنفيذهم في نفس الوقت اما بالنسبه لمرحلة الكلاس انا ببلش عندي مرحلة الكرييت بتاكد شو في اتربيوت شو في عندي ميثود تابعين لهاض الكلاس ثم رح يتجه ل الريندر

import React from 'react'; // بكج مبنيه داخل رياكت
class newComponent extends React.Component { // لازم يكون اول حرف كابيتال NewComponent غلط newComponent
    render() { // بعرض اللي داخل return
        return (
            <h1>Hello, mohammed</h1>
        );
    }
}

export default newComponent;
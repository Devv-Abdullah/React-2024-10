import React ,{createContext, useContext, useState} from 'react';

const ThemeContext = createContext(); //createContext()=> تُستخدم لإنشاء سياق يُمكن استخدامه لمشاركة البيانات بين المكونات.
                                    // يتم استخدام بروفايدر لمشاركة القيم و يوزكونتكست للوصول اليها

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('light');

    const toggleTheme=()=>{
        setTheme(theme === 'light'? 'dark' :'light');
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>{
    const context = useContext(ThemeContext);
    // if (!context) {
    //     throw new Error('useTheme must be used within a ThemeProvider');
    // }
    return context;
}
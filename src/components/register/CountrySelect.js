// import React from 'react'
import { useState, useEffect } from 'react'

import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'

// export default function CountrySelect() {
    const CountrySelect = ({ style, value, optionCode, onChange1}) => {
        useEffect(() => {
        }, [])
    return (
        <Select
                id='country'
                className='react-select'
                // style={{width: '45%'}} 
                style={style}

                classNamePrefix='select'
                isClearable={false}
                options={optionCode}
                theme={selectThemeColors}
                // value={values.country}
                value={value}
                // onChange ={onChange}
                onChange = {data => { onChange1(data) }}
                // onChange={data => {
                //                 //    setValues(
                //                 //             {
                //                 //                ...values,
                //                 //                country : data
                //                 //             } 
                //                 //     )
                //                   }
                //           }
              />
    )
}


export default CountrySelect

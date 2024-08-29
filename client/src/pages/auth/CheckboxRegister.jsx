import React from 'react'

export default function CheckboxRegister({
    onCheckboxChange,
    selectGender,
}) {
    return (
        <>
            <div className='flex'>

                <div className='form-control'>
                    <label className='label gap-2 cursor-pointer'>
                        <span className={`text-base label-text text-gray-200
                            ${selectGender === 'male' ? 'selected' : ''} 
                        `}>
                            Male
                        </span>
                        <input
                            checked={selectGender === 'male'}
                            onChange={() => onCheckboxChange('male')}

                            className='checkbox checkbox-sm border-slate-600'
                            type="checkbox"
                        />
                    </label>
                </div>

                <div className='form-control'>
                    <label className='label gap-2 cursor-pointe'>
                        <span className={`text-base label-text text-gray-200
                            ${selectGender === 'female' ? 'selected' : ''} `}>
                            Female
                        </span>
                        <input
                            checked={selectGender === 'female'}
                            onChange={() => onCheckboxChange('female')}

                            className='checkbox checkbox-sm border-slate-600'
                            type="checkbox"
                        />
                    </label>
                </div>

            </div>
        </>
    )
};
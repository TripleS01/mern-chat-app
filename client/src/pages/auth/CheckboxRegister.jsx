import React from 'react'

export default function CheckboxRegister() {
    return (
        <>
            <div className='flex'>
                <div className='form-control'>
                    <label className='label gap-2 cursor-pointer'>
                        <span className='text-base label-text text-gray-200'>
                            Male
                        </span>
                        <input
                            className='checkbox checkbox-sm border-slate-600'
                            type="checkbox"
                        />
                    </label>
                </div>
                <div className='form-control'>
                    <label className='label gap-2 cursor-pointe'>
                        <span className='text-base label-text text-gray-200'>
                            Female
                        </span>
                        <input
                            className='checkbox checkbox-sm border-slate-600'
                            type="checkbox"
                        />
                    </label>
                </div>
            </div>
        </>
    )
};
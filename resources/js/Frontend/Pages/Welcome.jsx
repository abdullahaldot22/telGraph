import { Link, Head } from '@inertiajs/react';
import './../../../css/Extra/welcome.css';

export default function Welcome() {
    return (
        <>

            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-dark dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">

                <div className='animation'>
                    <div className='container m-0 p-0 '>
                        <div className='box text-white'>
                            <div className='card' id='front'>
                                    <h2 className='sitetitle absolute bottom-16 left-6 font-oswald font-bold'>Wire Tap</h2>
                                    <h2 className='text-shadow absolute bottom-[75px] left-6 font-oswald font-bold before:absolute before:w-28 before:h-[2px] before:bottom-[-6px] before:bg-shadow'>Wire Tap</h2>
                            </div>
                            <div className='card' id='back'>
                                <h2 className='sitetitleb absolute bottom-16 left-6 font-oswald font-bold'>Wire Tap</h2>
                                <h2 className='text-shadow absolute bottom-[75px] left-6 font-oswald font-bold before:absolute before:w-28 before:h-[2px] before:bottom-[-6px] before:bg-shadow'>Wire Tap</h2>
                            </div>
                            <div className='card' id='left'></div>
                            <div className='card' id='right'></div>
                            <div className='card' id='top'></div>
                            <div className='card' id='bottom'></div>
                        </div>
                    </div>
                </div>

                <div className="mt-[280px] p-6 text-right font-oswald font-semibold text-white">

                    <>
                        <h3>Don't have an account!&nbsp;<Link href={route('register.page')} className="text-gray-600 hover:text-gray-400 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 font-">Join Us</Link> today.</h3>
                        <h4 className='mt-3'>You have an account! Great!&nbsp;<Link href={route('login.page')} className="text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log In</Link>.</h4>
                    </>

                </div>

            </div>


        </>
    );
}

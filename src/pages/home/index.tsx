import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Quiz from '@/components/Quiz'
import router from 'next/router'
import React from 'react'
import Swal from 'sweetalert2'

function index() {

    const Lottery = () => {
        Swal.fire({
            title: 'Do You Want To Take Part In Grand Lottery?',
            showCancelButton: true,
            // Configuration for the "Yes" button
            confirmButtonText: 'Yes',
            confirmButtonColor: '#7066e0',
            // Configuration for the "Maybe Later" button
            cancelButtonText: 'Maybe Later',
            cancelButtonColor: '#7066e0',
        }).then((result) => {
            if (result.isConfirmed) {
                router.push('/lottery');
            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
        });
    }

    return (
        <div>
            <Navbar /> {/* Include your navbar */}
            <div className=' flex items-center justify-center flex-col gap-8 m-10'>
                index
                <button className="btn btn-primary" onClick={() => { Lottery() }}>Connect</button>
                <Quiz />
            </div>
            <Footer /> {/* Include your footer */}

        </div>

    )
}

export default index
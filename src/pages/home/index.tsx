import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Quiz from '@/components/Quiz'
import router from 'next/router'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

function Index() {

    useEffect(() => {
        const popUpShown = localStorage.getItem('popUpShown');
        const shouldShowPopup = popUpShown === "false" ? true : false;
    
        const showPopup = () => {
          Swal.fire({
            title: 'Do You Want To Take Part In Grand Lottery?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#7066e0',
            cancelButtonText: 'Maybe Later',
            cancelButtonColor: '#7066e0',
          }).then((result) => {
            if (result.isConfirmed) {
              router.push('/lottery');
            }
          });
        };
        console.log("popUpShown", popUpShown)
        console.log("shouldShowPopup", shouldShowPopup)
        if (shouldShowPopup) {
            console.log("call")
          setTimeout(showPopup, 1000);
          localStorage.setItem('popUpShown', 'true');
        }
    
    }, []);

    return (
        <div>
            <Navbar /> {/* Include your navbar */}
            <div className=' flex items-center justify-center flex-col gap-8 m-10'>
                <Quiz />
            </div>
            <Footer /> {/* Include your footer */}

        </div>

    )
}

export default Index
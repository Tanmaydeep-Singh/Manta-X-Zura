import Link from 'next/link'
import React from 'react'

function WalletConnect() {
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Connect Your Wallet</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link href={"home"} >
                    <button className="btn btn-primary" >Connect</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WalletConnect
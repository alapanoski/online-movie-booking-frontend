import Copyright from "./Copyright";

function Footer() {
    return (
        <div className={'text-white bg-gray-900 p-10 rounded'}>
            <div className={'mb-10 h-auto md:h-72 flex flex-col gap-6 md:flex-row'}>
                <div className={'w-96 flex flex-col gap-6 items-start'}>
                    <a href={'merchstore'}>Get Merch</a>
                    <a href={'newsletter'}>Subscribe to the Newsletter</a>
                    <a href={'contests'}>Enter Contest</a>
                    <a href={'events'}>More Events</a>
                </div>
                <div className={'w-96 flex flex-col gap-6 items-start'}>
                    <a href={'customercare'}>Talk to Us</a>
                    <a href={'careers'}>Careers</a>
                    <a href={'aboutcompany'}>Company</a>
                </div>
                <div className={' w-96 flex flex-col gap-6 items-start'}>
                    <a href={'privacypolicy'}>Privacy Policy</a>
                    <a href={'termsandconditions'}>Terms and Conditions</a>
                </div>
            </div>
            <Copyright/>
        </div>
    )
}

export default Footer;
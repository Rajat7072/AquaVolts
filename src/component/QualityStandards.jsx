import React from 'react'
import quality from "../images/quality.png"
import bottle from "../images/bottle.png"
import boxalone from "../images/boxalone.png"

const processSteps = [
    { title: 'Source Water', text: 'Pre-screened & checked', icon: 'water' },
    { title: 'Multi-stage Filtration', text: 'Sediment + carbon + reverse osmosis', icon: 'filter' },
    { title: 'UV Purification', text: 'Disinfection before bottling', icon: 'uv' },
    { title: 'Bottle Fill', text: 'Precision filling in hygienic lines', icon: 'bottle' },
    { title: 'Capping & Seal', text: 'Secure closure & quality check', icon: 'seal' },
]

const ProcessIcon = ({ type }) => {
    const commonProps = {
        viewBox: '0 0 64 64',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        'aria-hidden': 'true',
    }

    switch (type) {
        case 'water':
            return (
                <svg {...commonProps}>
                    <path d="M32 9C25 19 18 25 18 35C18 45 24 53 32 53C40 53 46 45 46 35C46 25 39 19 32 9Z" fill="url(#waterGlow)" opacity="0.9"/>
                    <path d="M32 14C27 20 23 25 23 33C23 39 27 45 32 45C37 45 41 39 41 33C41 25 37 20 32 14Z" fill="white" opacity="0.8"/>
                    <path d="M18 32H46" stroke="#0F5BB5" strokeWidth="2.5" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="waterGlow" x1="18" y1="13" x2="46" y2="53" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#BAF3FF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        case 'filter':
            return (
                <svg {...commonProps}>
                    <rect x="18" y="12" width="28" height="40" rx="7" fill="#EAF7FF" stroke="#0F5BB5" strokeWidth="2.2"/>
                    <path d="M22 24H42" stroke="#39A9F5" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M22 31H42" stroke="#39A9F5" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M22 38H36" stroke="#39A9F5" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M14 20L18 20" stroke="#0F5BB5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M14 32L18 32" stroke="#0F5BB5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M46 20L50 20" stroke="#0F5BB5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M46 32L50 32" stroke="#0F5BB5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M25 10V6M39 10V6" stroke="#0F5BB5" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
            )
        case 'uv':
            return (
                <svg {...commonProps}>
                    <rect x="16" y="16" width="32" height="32" rx="8" fill="#E9F7FF" stroke="#0F5BB5" strokeWidth="2.2"/>
                    <path d="M32 18V12M32 52V46M18 32H12M52 32H46" stroke="#0F5BB5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M22 22L18 18M46 22L50 18M22 42L18 46M46 42L50 46" stroke="#0F5BB5" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="32" cy="32" r="9" fill="#BFEFFF" stroke="#39A9F5" strokeWidth="2.2"/>
                    <path d="M32 24V32L36 36" stroke="#0F5BB5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case 'bottle':
            return (
                <svg {...commonProps}>
                    <path d="M27 9H37L39 15V20H25V15L27 9Z" fill="#B9E8FF" stroke="#0F5BB5" strokeWidth="2"/>
                    <rect x="24" y="20" width="16" height="32" rx="5" fill="#F7FCFF" stroke="#0F5BB5" strokeWidth="2"/>
                    <path d="M28 27H36" stroke="#3AB6F5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M28 33H36" stroke="#3AB6F5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M28 39H34" stroke="#3AB6F5" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M22 20C22 15 18 14 18 14" stroke="#0F5BB5" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M42 20C42 15 46 14 46 14" stroke="#0F5BB5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        case 'seal':
            return (
                <svg {...commonProps}>
                    <rect x="18" y="18" width="28" height="28" rx="8" fill="#EAF7FF" stroke="#0F5BB5" strokeWidth="2.2"/>
                    <path d="M26 34L30 38L39 27" stroke="#0F5BB5" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 25H42" stroke="#39A9F5" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 31H42" stroke="#39A9F5" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M29 14V20M35 14V20" stroke="#0F5BB5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        default:
            return null
    }
}

const BottlePackGraphic = () => {
    return (
        <div className='real-bottle-pack' aria-label='AquaVolts bottle and box packaging'>
            <div className='tray-area'>
                {[1, 2, 3, 4].map((item) => (
                    <div className='pack-bottle' key={item}>
                        <img src={bottle} alt='AquaVolts bottle' />
                    </div>
                ))}
            </div>

            <div className='pack-box-real'>
                <img src={boxalone} alt='AquaVolts packed box' />
            </div>
        </div>
    )
}

const QualityStandards = () => {
    return (
        <>
            <div className='qualityStandards'>
                <h2>Quality Standards</h2>
                <h3>Every drop is carefully tested for the safety of those who matter most</h3>

                <div className='filtrationProcess'>
                    <div className='process-visual'>
                        <div className='process-line' aria-hidden='true' />
                        {processSteps.map((step) => (
                            <div className='process-step' key={step.title}>
                                <div className='step-icon'>
                                    <ProcessIcon type={step.icon} />
                                </div>
                                <div className='step-copy'>
                                    <strong>{step.title}</strong>
                                    <span>{step.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='packing-visual' aria-label='Water bottle filling and packaging process'>
                        <BottlePackGraphic />
                    </div>
                </div>

                <img src={quality} alt="quality" />
            </div>
        </>
    )
}

export default QualityStandards
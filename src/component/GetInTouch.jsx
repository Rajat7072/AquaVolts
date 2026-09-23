import React from 'react'
import { useState } from 'react'

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return value.trim() ? '' : 'Name is required.'
            case 'phone':
                return value.trim() ? '' : 'Phone number is required.'
            default:
                return ''
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        const errorMessage = validateField(name, value)
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, phone, city, state, message } = formData
        const nextErrors = {
            name: validateField('name', name),
            phone: validateField('phone', phone)
        }

        setErrors(nextErrors)

        if (nextErrors.name || nextErrors.phone) {
            return
        }

        const whatsappNumber = '919648048908'
        const text = [
            'Hi, my name is ' + (name || '...'),
            '',
            'Email: ' + (email || 'Not provided'),
            'Phone: ' + (phone || 'Not provided'),
            'City: ' + (city || 'Not provided'),
            'State: ' + (state || 'Not provided'),
            '',
            'Message: ' + (message || 'No additional details provided')
        ].join('\n')

        const encodedText = encodeURIComponent(text)
        const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)

        const whatsappUrl = isMobile
            ? `whatsapp://send?phone=${whatsappNumber}&text=${encodedText}`
            : `https://wa.me/${whatsappNumber}?text=${encodedText}`

        if (isMobile) {
            window.location.href = whatsappUrl
        } else {
            const whatsappPopup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
            if (!whatsappPopup) {
                window.location.href = whatsappUrl
            }
        }
    }

    return (
        <>
            <div className='getInTouch'>
                <h2>Get In Touch</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                minLength={2}
                                value={formData.name}
                                onChange={(e) => handleInputChange(e)}
                                className={errors.name ? 'input-error' : ''}
                            />
                            {errors.name && <span className="field-error">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                required
                                minLength={10}
                                value={formData.phone}
                                onChange={(e) => handleInputChange(e)}
                                className={errors.phone ? 'input-error' : ''}
                            />
                            {errors.phone && <span className="field-error">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Enter your city"
                                required
                                value={formData.city}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="Enter your state"
                            required
                            value={formData.state}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            required
                            value={formData.message}
                            onChange={(e) => handleInputChange(e)}
                        ></textarea>
                    </div>

                    <button type="submit" className='button'><b>Send Message On WhatsApp</b></button>
                </form>
            </div>
        </>
    )
}

export default GetInTouch
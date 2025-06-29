import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function EmailButton({ 
  variant = "primary", 
  size = "medium", 
  children, 
  subject = "Inquiry from Website",
  body = "Hello, I'm interested in your products.",
  toEmail = "sathishsundharajan0609@gmail.com",
  className = ""
}) {
  const [isSending, setIsSending] = useState(false);

  const handleEmailClick = () => {
    setIsSending(true);
    
    const templateParams = {
      to_email: toEmail,
      subject: subject,
      message: body,
      from_name: "Website Visitor"
    };

    // You'll need to replace these with your actual EmailJS credentials
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_QUICK_EMAIL_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        // You could show a success toast here
        alert('Email sent successfully!');
      }, (error) => {
        console.log('FAILED...', error.text);
        // You could show an error toast here
        alert('Failed to send email. Please try again.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 text-white';
      case 'outline':
        return 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
      case 'ghost':
        return 'bg-transparent text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-1.5 text-sm';
      case 'large':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  return (
    <button
      onClick={handleEmailClick}
      disabled={isSending}
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        rounded-lg font-medium transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95
        ${className}
      `}
    >
      {isSending ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default EmailButton; 
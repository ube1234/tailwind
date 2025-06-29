import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Newsletter({ title = "Stay Updated", subtitle = "Subscribe to our newsletter for the latest updates and offers", buttonText = "Subscribe", variant = "default" }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration for newsletter subscription
    const templateParams = {
      to_email: email,
      to_name: email.split('@')[0], // Use email prefix as name
      message: `New newsletter subscription from: ${email}`,
      subject: 'Newsletter Subscription'
    };

    // You'll need to replace these with your actual EmailJS credentials
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_NEWSLETTER_TEMPLATE_ID', // Replace with your EmailJS newsletter template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        setEmail('');
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'gradient':
        return {
          container: "bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white transform transition-all duration-300 hover:shadow-xl",
          input: "flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 hover:bg-white/20",
          button: "px-6 py-2 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        };
      case 'dark':
        return {
          container: "bg-gray-900 text-white rounded-2xl p-8",
          input: "flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
          button: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        };
      default:
        return {
          container: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg",
          input: "flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
          button: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={styles.container}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{subtitle}</p>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 text-green-700 dark:text-green-400 rounded-lg">
            Thank you for subscribing! You'll receive our updates soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 text-red-700 dark:text-red-400 rounded-lg">
            Sorry, there was an error. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.input}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.button} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter; 
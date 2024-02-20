import { useContext, useState } from 'react';
import classes from './contact-form.module.css';
import NotificationContext from '@/store/context/notification';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notificationCntx = useContext(NotificationContext);

  function sendMessageHandler(event) {
    event.preventDefault();

    notificationCntx.showNotification({
      title: 'Saving...',
      message: 'One moment, we are saving your request',
      status: 'pending',
    });

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          notificationCntx.showNotification({
            title: 'Done!',
            message: 'We saved your request',
            status: 'success',
          });
          setEmail('');
          setName('');
          setMessage('');
        } else {
          throw new Error(
            'Something went wrong. Please, try to do it later...'
          );
        }
      })
      .catch(error => {
        notificationCntx.showNotification({
          title: 'Oops!',
          message: `We have not saved your request. Error: ${error.message} `,
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={event => setMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;

import styles from './ContactStyles.module.css'
function Contact() {
  return (
    <section id='contact' classeName={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/xjvjlqzj" method="POST">
            <div ClassName="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder='Name' required />
            </div>
             <div ClassName="formGroup">
                <label htmlFor="email" hidden>
                    email
                </label>
                <input type="text" name="email" id="email" placeholder='Email' required />
            </div>
             <div ClassName="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea type="text" name="message" id="message" placeholder='Message' required />
            </div>
            <input ClassName="hover btn" type="submit" value="Submit" />

        </form>
        </section>
        
  )
}

export default Contact
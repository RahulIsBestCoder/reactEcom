import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    #outer{
      margin-top:10vh;
    }
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

//  function submit() {
//   document.getElementById("Sbt").value("Message sent")
//   setTimeout(() => {
//   document.getElementById("Sbt").value("")
    
//   },1000);
//  }



  return (
    <Wrapper>
      <div id="outer">
        
      <h2 className="common-heading">Contact page</h2>

<iframe
  title="maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14737.950336211798!2d88.34522406903493!3d22.560860128704515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277066797a521%3A0xa1427501cca8a744!2sEsplanade%2C%20Janbazar%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1676727240764!5m2!1sen!2sin"
  width="98%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>

<div className="container">
  <div className="contact-form">
    <form
      action="https://formspree.io/f/xayzongp"
      method="POST"
      className="contact-inputs">
      <input
        type="text"
        placeholder="username"
        name="username"
        required
        autoComplete="off"
      />

      <input
        type="email"
        name="Email"
        style={{textTransform:"lowercase"}}
        placeholder="Email"
        autoComplete="off"
        required
      />

      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        placeholder="Enter your messag"></textarea>

      <input 
      className="Sbt"
      // onClick={submit()}
      type="submit" 
      value="Send" 
      style={{
         background:"#3860ba",
         border: 0 
         }}/>
    </form>
  </div>
</div>

      </div>
    </Wrapper>
  );
};

export default Contact;
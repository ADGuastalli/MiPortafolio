import { Stack, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState, useRef } from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { userinfo, headings, ctaTexts } from "../Constants/userinfo";
import emailjs from "@emailjs/browser";

const Contact = ({ currentTheme }) => {
  const toast = useToast();
  const form = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: "#101010",
    boxShadow: currentTheme.boxShadow,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_xszqxlh", // Reemplazar con tu Service ID
        "template_dvwlsnk", // Reemplazar con tu Template ID
        form.current,
        "bvYj04WLCrWhp38gm" // Reemplazar con tu Public Key
      );

      toast({
        description: "Email enviado exitosamente!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast({
        description: "Error al enviar el email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error al enviar el email:", error);
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeading}>
        <h2 className={styles.contact}>{headings.contact}</h2>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={styles.form}
        style={{
          borderColor: currentTheme.text,
          backgroundColor:
            currentTheme.name === "light" ? "#fafafa" : "transparent",
        }}
      >
        <Stack spacing={4}>
          <Input
            type="text"
            name="user_name"
            value={name}
            placeholder="Your Name"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="user_email"
            value={email}
            placeholder="yourname@email.com"
            focusBorderColor={currentTheme.tertiary}
            autoComplete="off"
            isRequired
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            name="user_phone"
            value={phone}
            placeholder="Phone Number"
            focusBorderColor={currentTheme.tertiary}
            autoComplete="off"
            isRequired
            onChange={(e) => setPhone(e.target.value)}
          />
          <Textarea
            placeholder="Message for me!"
            resize="vertical"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            name="message"
            value={message}
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <div
              className={styles.submit}
              style={{ backgroundColor: currentTheme.tertiary }}
            >
              <button type="submit">{ctaTexts.submitBTN}</button>
            </div>
          </div>
        </Stack>
      </form>
      <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
        <Link
          href={`mailto:${
            userinfo.contact.email ? userinfo.contact.email : ""
          }`}
        >
          {userinfo.contact.email}
        </Link>
      </div>
      {userinfo.contact.phone ? (
        <div
          style={{
            textAlign: "center",
            paddingTop: "0.2rem",
            color: currentTheme.tertiary,
          }}
        >
          <Link
            href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`}
          >
            {`${userinfo.contact.countrycode}${userinfo.contact.phone}`}
          </Link>
        </div>
      ) : null}
      <div className={styles.socialIconDiv}>
        {userinfo.socials
          ? userinfo.socials.map((social, key) => {
              return (
                <div className={styles.socialIcon} style={iconStyles} key={key}>
                  <Link href={social.link}>
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Contact;

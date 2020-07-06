import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { id, name, phone, email } = contact;

  const onDelete = () => {
    contactContext.deleteContact(id);
  };
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.container}>
          <span onClick={onDelete}>[x]</span>
          <section>
            <p id={styles.organizationName}>{name}</p>
            <p>
              <i className="fa fa-building"></i>
              Unit 123, 1839 Some Drive, Some City, Some State, USA, 12345
            </p>
            <p>
              <i className="fa fa-phone"></i>
              {phone}
            </p>
            <hr />
          </section>
          <section>
            Location information:
            <ul>
              <li>Tailgate not required.</li>
              <li>
                Pick up hours: 8AM - 4PM <br />
                (apppointment not required.)
              </li>
              <li>
                Receiving hours: 8AM - 5PM <br />
                (delivery appointment not required.)
              </li>
            </ul>
            <section>
              Contact information:
              <ul>
                <li>
                  <p>Purchaser: Jane Doe</p>
                  <p>123-123-1234</p>
                  <p>
                    <i className="fa fa-envelope"></i>
                    {email}
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;

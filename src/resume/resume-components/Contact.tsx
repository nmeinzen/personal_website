import "./Contact.css";

export const ContactInfo = ({ name, address, phone, email }) => {
  return (
    <div className="contact-info">
      <h2>{name}</h2>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

import React from "react";

function Contact() {
  return (
    <div className="p-6 text-center space-y-4">
      <h2 className="text-3xl font-bold text-blue-900">Contact</h2>
      <p>Email: <a href="mailto:samsundarsingh@iisc.ac.in" className="text-blue-700 hover:underline">samsundarsingh@iisc.ac.in</a></p>
      <p>Alternate Email: <a href="mailto:enoch.sam444@gmail.com" className="text-blue-700 hover:underline">enoch.sam444@gmail.com</a></p>
    </div>
  );
}

export default Contact;
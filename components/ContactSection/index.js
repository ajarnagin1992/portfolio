import React from "react";
import { PhoneIcon, MailIcon, LocationIcon } from "public/icons";

function ContactTitle(props) {
  return (
    <div className=" text-5xl rounded-t-lg bg-blue-700 text-white p-8 pl-14">
      Contact Me
    </div>
  );
}

function ContactBody(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-b-lg bg-blue-900 text-white p-20">
      {props.children}
    </div>
  );
}

function InfoSection(props) {
  return (
    <div className="inline-flex flex-col py-6 px-10 space-y-3">
      <h1 className="">Contact Info:</h1>
      {props.children}
    </div>
  );
}

function InfoBox(props) {
  return (
    <div className="flex flex-row space-x-3 items-center p-2 border border-transparent hover:border-blue-200">
      <div>{props.icon}</div>
      <p className="">{props.info}</p>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      className="flex flex-col max-w-6xl bg-white text-black p-12 rounded-xl"
      action="https://formspree.io/f/xleayqwr"
      method="POST"
      encType="multipart/form-data"
    >
      <label htmlFor="_replyto">Your email:</label>
      <input
        type="email"
        name="_replyto"
        className="rounded border p-2 focus:border-transparent mb-12"
      />
      <label htmlFor="message">Your message:</label>
      <textarea
        name="message"
        className="rounded border p-2 focus:border-transparent mb-12"
      ></textarea>
      <button type="submit" className="rounded p-2 bg-blue-600 text-white">
        Send
      </button>
    </form>
  );
}

function ContactSection() {
  return (
    <div className="pt-10 md:pt-28 max-w-7xl mx-auto">
      <ContactTitle />
      <ContactBody>
        <div>
          <h1 className="font-semibold text-xl">{"Reach out, lets chat!"}</h1>
          <h2 className="font-extralight">
            {"Fill out the contact form and I'll get back to you ASAP!"}
          </h2>
          <InfoSection>
            <InfoBox icon={<PhoneIcon />} info="(478)-331-1569" />
            <InfoBox icon={<MailIcon />} info="ajarnagin1992@gmail.com" />
            <InfoBox icon={<LocationIcon />} info="Augusta, GA" />
          </InfoSection>
        </div>
        <ContactForm />
      </ContactBody>
    </div>
  );
}

export default ContactSection;

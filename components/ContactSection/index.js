import React from "react";
import { PhoneIcon, MailIcon, LocationIcon } from "public/icons";
import TextareaAutosize from "react-textarea-autosize";

function ContactSection() {
  return (
    <div className="pt-10">
      <ContactTitle />
      <ContactBody>
        <div>
          <h1 className="font-semibold text-xl">{"Reach out, lets chat!"}</h1>
          <h2 className="font-extralight">
            {"Fill out the contact form and I'll get back to you ASAP!"}
          </h2>
          <InfoSection>
            <a href="tel:478-331-1569" className="underline">
              <InfoText icon={<PhoneIcon />} info="(478)-331-1569" />
            </a>
            <a href="mailto:ajarnagin1992@gmail.com" className="underline">
              <InfoText icon={<MailIcon />} info="ajarnagin1992@gmail.com" />
            </a>
            <InfoText icon={<LocationIcon />} info="Atlanta, GA" />
          </InfoSection>
        </div>

        <ContactForm />
      </ContactBody>
    </div>
  );
}

function ContactTitle(props) {
  return (
    <div
      className="block text-5xl rounded-t-lg bg-primary text-texttertiary p-5 pl-7 
      md:p-8 md:pl-14"
    >
      Contact Me
    </div>
  );
}

function ContactBody(props) {
  return (
    <div
      className="
      grid grid-cols-1 rounded-b-lg bg-primaryaccent text-texttertiary p-10
      md:p-20 md:grid-cols-2"
    >
      {props.children}
    </div>
  );
}

function InfoSection(props) {
  return (
    <div className="inline-flex flex-col py-6 px-5 space-y-3">
      <h1 className="">Contact Info:</h1>
      {props.children}
    </div>
  );
}

function InfoText(props) {
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
      className="flex flex-col bg-secondary text-black p-12 rounded-xl"
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
      <TextareaAutosize
        name="message"
        className="rounded border p-2 focus:border-transparent mb-12"
        minRows="3"
        maxRows="9"
      ></TextareaAutosize>
      <button
        type="submit"
        className="rounded p-3 bg-tertiary-normal hover:bg-tertiary-hover text-white"
      >
        Send
      </button>
    </form>
  );
}

export default ContactSection;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "@/lib/api";

const initValues = { name: "", email: "", message: "" };
const initState = { values: initValues };

function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const { values } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    try {
      setLoading(true);
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: `Thanks, ${values.name}! Your message has been sent.`,
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Message Failed to Send.",
        status: "error",
        duration: 2000,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className={styles.contact}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className={styles.title}>CONTACT</h2>
      <p className={styles.text}>
        My contact portfolio is always open for inquiries and potential job
        opportunities. If you are interested in discussing potential
        collaborations or hiring me, please don&apos;t hesitate to reach out. I
        look forward to engaging in a fruitful conversation with you!
      </p>

      <div className={styles.form}>
        <FormControl isRequired isInvalid={touched.name && !values.name}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            required
            errorBorderColor="red.500"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            className={styles.input}
            id="name"
            borderColor="purple.500"
          />
          <FormErrorMessage>Name Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.email && !values.email}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={values.email}
            errorBorderColor="red.500"
            onChange={handleChange}
            onBlur={onBlur}
            className={styles.input}
            id="email"
            borderColor="purple.500"
          />
          <FormErrorMessage>Email Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.message && !values.message}>
          <Textarea
            rows={4}
            placeholder="Message"
            name="message"
            required
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            className={styles.textarea}
            id="message"
            borderColor="purple.500"
          ></Textarea>
          <FormErrorMessage>Message Required</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          variant="outline"
          isDisabled={!values.name || !values.email || !values.message}
          onClick={onSubmit}
          color="#fff"
          _hover={false}
          className={styles.button}
          isLoading={loading}
          borderColor="purple.500"
        >
          Submit
        </Button>
      </div>
    </motion.div>
  );
}

export default Contact;

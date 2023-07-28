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

  const { values, isLoading, error } = state;

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
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
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
          ></Textarea>
          <FormErrorMessage>Message Required</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          variant="outline"
          isLoading={isLoading}
          isDisabled={!values.name || !values.email || !values.message}
          onClick={onSubmit}
          _hover={false}
        >
          Submit
        </Button>
      </div>

      {error && (
        <Text color="red.500" className={styles.error}>
          {error}
        </Text>
      )}
    </motion.div>
  );
}

export default Contact;

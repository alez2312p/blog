import React from "react";
import Image from "next/image";
import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Acerca de Nosotros</h1>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        ullam delectus numquam! At sit fugiat eaque, alias quam quia porro
        voluptate id tempore architecto dolorum, sint natus dolor nam
        recusandae?
      </p>

      <div className={styles.section}>
        <h2>Nuestra Misión</h2>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, officia
          laudantium? Numquam, delectus magni veritatis alias eaque aliquid quae
          ducimus unde odio facilis sapiente, similique consequuntur cupiditate
          aliquam sunt optio. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Inventore porro recusandae totam dolor voluptatibus quibusdam
          quod, fuga aperiam animi assumenda quasi aliquid saepe mollitia
          laboriosam numquam incidunt. Porro, voluptate. Aut.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Nuestra Visión</h2>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ad
          dolorem dolorum architecto vel possimus sed dignissimos officiis nihil
          repellat laboriosam placeat explicabo minima hic perferendis nemo
          animi, necessitatibus dolor?
        </p>
      </div>

      <div className={styles.section}>
        <h2>Nuestros Valores</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          temporibus voluptates quis qui vitae. Minus, vitae. Itaque officiis
          dolorem reprehenderit! Necessitatibus alias ut quaerat. Qui vero
          voluptate obcaecati amet maiores?
        </p>
      </div>

      <div className={styles.section}>
        <h2>Nuestro Equipo</h2>
        <div className={styles.members}>
          <div className={styles.member}>
            <Image
              src="/p1.jpeg"
              alt="Nombre Miembro 1"
              width={80}
              height={80}
              className={styles.image}
            />
            <p>Nombre Miembro 1</p>
            <p>Posición</p>
          </div>
          <div className={styles.member}>
            <Image
              src="/p1.jpeg"
              alt="Nombre Miembro 1"
              width={80}
              height={80}
              className={styles.image}
            />
            <p>Nombre Miembro 1</p>
            <p>Posición</p>
          </div>
          <div className={styles.member}>
            <Image
              src="/p1.jpeg"
              alt="Nombre Miembro 1"
              width={80}
              height={80}
              className={styles.image}
            />
            <p>Nombre Miembro 1</p>
            <p>Posición</p>
          </div>
          <div className={styles.member}>
            <Image
              src="/p1.jpeg"
              alt="Nombre Miembro 1"
              width={80}
              height={80}
              className={styles.image}
            />
            <p>Nombre Miembro 1</p>
            <p>Posición</p>
          </div>
          <div className={styles.member}>
            <Image
              src="/p1.jpeg"
              alt="Nombre Miembro 1"
              width={80}
              height={80}
              className={styles.image}
            />
            <p>Nombre Miembro 1</p>
            <p>Posición</p>
          </div>
          <div className={styles.member}>
            <Image
              src="/p1.jpeg"
              alt="Nombre Miembro 1"
              width={80}
              height={80}
              className={styles.image}
            />
            <p>Nombre Miembro 1</p>
            <p>Posición</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Preguntas Frecuentes (FAQ)</h2>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>¿Pregunta 1?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

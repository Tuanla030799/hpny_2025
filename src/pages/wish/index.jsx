import React from 'react'
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import WishNote from '@/components/WishNote';
import Fireworks from '@/components/Fireworks';
import StoreLayout from '@/components/layout/StoreLayout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Wish = () => {
  return (
    <>
      <Head>
        <title>Happy new year 2025</title>
        <meta name="description" content="Please write your wishes here <3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/snake.png" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="Happy new year 2025"
              fill
              priority
            />
          </div>
          <header className={styles.header}>
            <h1>Happy new year 2025</h1>
            <h3>Chúc bạn năm mới vui vẻ vạn sự như ý, tỷ sự như mơ, 8386 mãi đĩnh, mãi đĩnh 🎉🎉🎉</h3>
          </header>
          <StoreLayout>
            <WishNote />
          </StoreLayout>
        </main>
      </div>
      <Fireworks />
    </>
  )
}

export default Wish
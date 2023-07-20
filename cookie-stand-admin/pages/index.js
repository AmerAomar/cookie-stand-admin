import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [cookieStands, setCookieStands] = useState([]);

  const addCookieStand = (stand) => {
    setCookieStands([...cookieStands, stand]);
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center mt-8">
        <Form addCookieStand={addCookieStand} />
        {cookieStands.length > 0 ? (
          <ReportTable cookieStands={cookieStands} />
        ) : (
          <h3 className="text-2xl font-bold mt-8">Report Table coming soon...</h3>
        )}
      </main>

      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <header className="flex items-center justify-center p-5 bg-green-500">
        <h1 className="text-white text-4xl">Cookie Stand Admin</h1>
      </header>
    </>
  );
}

function Form({ addCookieStand }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { location, minimum, maximum, average } = event.target;

    const newCookieStand = {
      location: location.value,
      minimum: parseFloat(minimum.value),
      maximum: parseFloat(maximum.value),
      average: parseFloat(average.value),
    };

    addCookieStand(newCookieStand);

    event.target.reset();
  };

  return (
    <>
      <form
        className="bg-green-300 p-6 rounded-lg shadow-md max-w-2xl w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Cookie Stand</h2>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-semibold">
            Location
          </label>
          <input
            name="location"
            id="location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mb-1">
          <div>
            <label htmlFor="min-customers" className="block text-gray-700 font-semibold">
              Minimum Customers per Hour
            </label>
            <input
              name="minimum"
              id="min-customers"
              type="number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="max-customers" className="block text-gray-700 font-semibold">
              Maximum Customers per Hour
            </label>
            <input
              name="maximum"
              id="max-customers"
              type="number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="avg-cookies" className="block text-gray-700 font-semibold">
              Average Cookies per Sale
            </label>
            <input
              name="average"
              id="avg-cookies"
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-black font-bold px-4 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            Create Cookie
          </button>
        </div>
      </form>
    </>
  );
}

function ReportTable({ cookieStands }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mt-8">Report Table</h3>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr>
            <th className="border p-2">Location</th>
            <th className="border p-2">Minimum Customers per Hour</th>
            <th className="border p-2">Maximum Customers per Hour</th>
            <th className="border p-2">Average Cookies per Sale</th>
          </tr>
        </thead>
        <tbody>
          {cookieStands.map((stand, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="border p-2">{stand.location}</td>
              <td className="border p-2">{stand.minimum}</td>
              <td className="border p-2">{stand.maximum}</td>
              <td className="border p-2">{stand.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-green-500 p-4 text-white text-center mt-8 flex">
        <p className="pr-4">&copy; 2021 Cookie Stand Inc.</p>
        <a href="https://github.com/AmerAomar" className="font-semibold">
          Amer Al-Omari
        </a>
      </footer>
    </>
  );
}

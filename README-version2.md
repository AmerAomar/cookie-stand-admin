# Lab: Cookie Stand Admin Version 2

## Author: Amer Al-Omari

[Pull Request](https://github.com/AmerAomar/cookie-stand-admin/pull/2)

Cookie Stand Admin is a React application that allows users to create and manage cookie stands. Users can enter the location, minimum customers per hour, maximum customers per hour, and average cookies per sale to add new cookie stands. The app also displays a report table that shows the cookie stands' data from 6 am to 7 pm, along with the total for each stand and the overall daily total.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Create Cookie Stands: Users can add new cookie stands by providing their location, minimum customers per hour, maximum customers per hour, and average cookies per sale through a form.
- View Report Table: The report table displays all the added cookie stands with their respective data, including hourly sales from 6 am to 7 pm and the total for each stand. It also calculates and displays the overall daily total.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/cookie-stand-admin.git
cd cookie-stand-admin
```

2. Install dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

## Usage

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

3. Create Cookie Stands: Fill in the location, minimum customers per hour, maximum customers per hour, and average cookies per sale in the provided form and click the "Create Cookie" button to add a new cookie stand.

4. View Report Table: The report table displays all the added cookie stands with their respective data, including hourly sales and total for each stand. If no stands are added, it will show a "No Cookie Stands Available" message.

5. Styling: The application is styled using Tailwind CSS utility classes to provide a clean and user-friendly interface.

Please note that this is version 2 of the Cookie Stand Admin app, and it includes additional features and improvements over the previous version.
# RemWaste Redesign

This project is a complete redesign of the RemWaste app page, focusing on clean, maintainable React code, improved UI/UX, and full responsiveness for both mobile and desktop browsers.

## Features

- **Modern, Responsive UI:** Redesigned layout for optimal experience on all devices.
- **Functional Parity:** All original features retained.
- **Dynamic Skip Options:** Skip options are fetched from  
   [`/api/skips/by-location?postcode=NR32&area=Lowestoft`](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EZZELDEEN90/REMWASTE1.git
   cd remwaste-redesign
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```

## Usage

- The app will display available skip options dynamically.
- The layout adapts to mobile and desktop screens.
- All interactions and flows remain as in the original app.

## Technologies

- React
- CSS Modules / Styled Components
- Fetch API / Axios

## API Reference

- **Endpoint:**  
   `GET https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- **Returns:**  
   List of skip options for the specified location.

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

[MIT](LICENSE)
